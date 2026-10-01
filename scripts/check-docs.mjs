// Usage: node scripts/check-docs.mjs
//
// Gate for the published documentation site. This repo's `docs/**` tree is not
// an agent brief like the sibling repos' `docs/**` — it is the customer's manual,
// served at help.silverspoon.me. The invariant this guard defends is the one no
// build step can see:
//
//   a user-facing capability that ships without a page is not shipped,
//   and a page that describes behavior that does not exist is a defect.
//
// The failure modes are silent by nature: a page whose front matter is half
// filled in (so the sidebar shows a bare title), a page nobody can navigate to
// (an orphan — real content, unreachable), a `docId`/`to:` in the site config
// that points at a page that was renamed, a coverage entry whose page was moved
// without updating the manifest, a product domain in the backend registry with no
// page here at all, a waiver that no longer waives anything, and a rule whose
// `globs:` matches nothing (so it never fires).
//
// The manifest `docs-coverage.json` is the claim; this script is the proof. A
// waiver is the last resort for a deliberately undocumented surface (admin-only
// screens), every entry carries a reason, and a waiver whose capability now has a
// page is itself a finding — the list can only shrink.
//
// The product-domain check reads the sibling `monolith` checkout. CI checks out
// this repo alone, so a missing sibling makes that claim *unverified*, never
// broken — the same contract the two sibling guards use, and the count is printed
// on the OK line so a green run cannot be read as "every claim verified".
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT = join(ROOT, 'docs')
const RULES = join(ROOT, '.cursor', 'rules')
const AGENTS = join(ROOT, 'AGENTS.md')
const MANIFEST = join(ROOT, 'docs-coverage.json')
const SIDEBARS = join(ROOT, 'sidebars.ts')
const CONFIG = join(ROOT, 'docusaurus.config.ts')
const README = join(ROOT, 'README.md')

const RULE_MAX_LINES = 60
const ALWAYS_ON_MAX_LINES = 150

// Directories the guard must never walk: vendor trees, generated output, caches.
const SKIP_DIRS = new Set(['node_modules', '.git', 'build', '.docusaurus', '.cache-loader', 'coverage'])

// Front matter every published page must carry. `title` drives the H1 and the
// browser tab; `description` the search snippet and the preview card;
// `sidebar_label` the navigation entry; `sidebar_position` the order among
// siblings. A page missing one of them still builds, which is why it is checked.
const REQUIRED_FRONT_MATTER = ['title', 'description', 'sidebar_label', 'sidebar_position']

// The sibling `monolith` checkout, one level up. Only the product-domain claim
// needs it.
const SIBLING = resolve(ROOT, '..', 'monolith')
const siblingRepoIsPresent = () => existsSync(join(SIBLING, 'app', 'Domain'))

const failures = []
const note = (message) => failures.push(message)
const toPosix = (path) => path.split(sep).join('/')
const rel = (path) => toPosix(relative(ROOT, path))
const lineCount = (path) => readFileSync(path, 'utf8').replace(/\r?\n$/, '').split(/\r?\n/).length

/** Recursive file list under `dir`, skipping generated/vendor trees. */
function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}

/** Docusaurus doc id for a page file: its path under `docs/` without `.md`. */
const docIdOf = (path) => rel(path).replace(/^docs\//, '').replace(/\.md$/, '')

/** `Microstock` -> `microstock`, `PaymentGateway` -> `payment-gateway`. */
const kebab = (name) => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

/** Front matter block of a page, or null when the file does not open with one. */
function frontMatter(contents) {
  if (!contents.startsWith('---')) return null
  const end = contents.indexOf('\n---', 3)
  return end === -1 ? null : contents.slice(contents.indexOf('\n') + 1, end)
}

/** The `globs:` list of a rule file (Cursor syntax, comma separated). */
function globsOf(contents) {
  const match = contents.match(/^globs:\s*(.+)$/m)
  if (!match) return []
  return match[1]
    .trim()
    .replace(/^["'[]|["'\]]$/g, '')
    .split(',')
    .map((glob) => glob.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean)
}

/** Cursor `globs:` syntax -> RegExp over repo-relative POSIX paths. */
function globToRegex(glob) {
  let out = '^'
  for (let i = 0; i < glob.length; i += 1) {
    const char = glob[i]
    if (char === '*') {
      if (glob[i + 1] === '*') {
        if (glob[i + 2] === '/') {
          out += '(?:.*/)?'
          i += 2
        } else {
          out += '.*'
          i += 1
        }
      } else {
        out += '[^/]*'
      }
    } else if (char === '?') {
      out += '[^/]'
    } else {
      out += char.replace(/[.+^${}()|[\]\\]/g, '\\$&')
    }
  }
  return new RegExp(`${out}$`)
}

// 1. The published tree is `docs/**` only, and no index page may live inside it.
//    A `docs/README.md` would be published as a page named "README"; repo setup
//    belongs in the root README, outside the content tree.
if (existsSync(join(CONTENT, 'README.md'))) {
  note('docs/README.md exists — it would be published as a page; repo setup belongs in the root README.md')
}

const pages = existsSync(CONTENT)
  ? walk(CONTENT).filter((path) => path.endsWith('.md') || path.endsWith('.mdx')).sort()
  : []

if (pages.length === 0) {
  note('docs/ is empty — the published surface is missing')
}

// 2. Every page carries the four front matter keys.
for (const page of pages) {
  const block = frontMatter(readFileSync(page, 'utf8'))

  if (block === null) {
    note(`${rel(page)} has no front matter — add title, description, sidebar_label, sidebar_position`)
    continue
  }

  for (const key of REQUIRED_FRONT_MATTER) {
    if (!new RegExp(`^${key}:\\s*\\S`, 'm').test(block)) {
      note(`${rel(page)} front matter is missing \`${key}\``)
    }
  }
}

// 3. Every page is reachable from the sidebar. A page Docusaurus can build but
//    nobody can navigate to is an orphan: real content, no front door.
const sidebarSources = [SIDEBARS, ...walk(CONTENT).filter((path) => path.endsWith('_category_.json'))]
  .filter((path) => existsSync(path))

if (!existsSync(SIDEBARS)) {
  note('sidebars.ts is missing — nothing is navigable')
}

const explicitDocIds = new Set()
const autogeneratedDirs = []

for (const source of sidebarSources) {
  const contents = readFileSync(source, 'utf8')

  // A literal that is an array element: preceded by `[` or `,`, followed by `,` or `]`.
  // This deliberately skips `label: 'Products'`, `type: 'category'` and friends,
  // which are object properties, not items.
  for (const match of contents.matchAll(/(?:\[|,)\s*'([^']+)'\s*(?=[,\]])/g)) {
    explicitDocIds.add(match[1])
  }

  for (const match of contents.matchAll(/docId:\s*'([^']+)'/g)) explicitDocIds.add(match[1])
  for (const match of contents.matchAll(/"id":\s*"([^"]+)"/g)) explicitDocIds.add(match[1])
  for (const match of contents.matchAll(/dirName:\s*'([^']+)'/g)) autogeneratedDirs.push(match[1])
}

const isReachable = (docId) =>
  explicitDocIds.has(docId) ||
  autogeneratedDirs.some((dir) => docId === dir || docId.startsWith(`${dir}/`))

for (const page of pages) {
  if (!isReachable(docIdOf(page))) {
    note(`${rel(page)} is not reachable from sidebars.ts — add it to a group or an autogenerated dirName`)
  }
}

// 4. Site config: every `docId` and internal `to:` must resolve to a real page.
const pageIds = new Set(pages.map(docIdOf))

/** Resolve a `/docs/<path>` route to the doc id Docusaurus would serve. */
function resolveRoute(route) {
  const path = route.replace(/^\/docs\/?/, '').replace(/\/$/, '')
  if (path === '') return 'intro'
  if (path.startsWith('category/')) return null // generated-index slug, not a doc id
  if (pageIds.has(path)) return path
  if (pageIds.has(`${path}/index`)) return `${path}/index`
  return undefined
}

if (existsSync(CONFIG)) {
  const config = readFileSync(CONFIG, 'utf8')

  for (const match of config.matchAll(/docId:\s*'([^']+)'/g)) {
    if (!pageIds.has(match[1])) {
      note(`docusaurus.config.ts references docId '${match[1]}', which is not a page`)
    }
  }

  for (const match of config.matchAll(/\bto:\s*'([^']+)'/g)) {
    const route = match[1]
    if (!route.startsWith('/')) continue
    const id = resolveRoute(route)
    if (id === null) continue
    if (id === undefined) {
      note(`docusaurus.config.ts links to '${route}', which is not a page`)
    }
  }

  for (const match of config.matchAll(/\bhref:\s*'([^']+)'/g)) {
    const href = match[1]
    if (!href.startsWith('/') || href.startsWith('//')) continue
    const id = resolveRoute(href)
    if (id === null) continue
    if (id === undefined) note(`docusaurus.config.ts links to '${href}', which is not a page`)
  }
}

// 5. The coverage manifest: the claim that every capability has a page.
let crossRepoUnverified = 0

if (!existsSync(MANIFEST)) {
  note('docs-coverage.json is missing — it is the claim this guard proves')
} else {
  let manifest = null

  try {
    manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'))
  } catch (error) {
    note(`docs-coverage.json is malformed: ${error.message}`)
  }

  if (manifest !== null) {
    const capabilities = manifest.capabilities ?? {}
    const waivers = manifest.waivers ?? {}

    if (!capabilities || typeof capabilities !== 'object') {
      note('docs-coverage.json has no `capabilities` object')
    }

    for (const [key, entry] of Object.entries(capabilities)) {
      const page = entry?.page

      if (typeof page !== 'string' || page.trim() === '') {
        note(`docs-coverage.json capability '${key}' needs a \`page\``)
        continue
      }

      if (!existsSync(join(ROOT, page))) {
        note(`docs-coverage.json capability '${key}' points at ${page}, which does not exist`)
        continue
      }

      if (!pageIds.has(docIdOf(join(ROOT, page)))) {
        note(`docs-coverage.json capability '${key}' points at ${page}, which is not a page`)
      } else if (!isReachable(docIdOf(join(ROOT, page)))) {
        note(`docs-coverage.json capability '${key}' points at ${page}, which is not reachable from the sidebar`)
      }
    }

    for (const [key, reason] of Object.entries(waivers)) {
      if (typeof reason !== 'string' || reason.trim() === '') {
        note(`docs-coverage.json waiver '${key}' needs a reason`)
      }

      if (Object.prototype.hasOwnProperty.call(capabilities, key)) {
        note(`docs-coverage.json waiver '${key}' now has a page — drop the waiver`)
      }
    }

    // A new product domain in the backend registry is a customer-facing surface
    // by definition. Cross-repo, so it is verified only when the sibling is here.
    const domainsConfig = join(SIBLING, 'config', 'domains.php')

    if (siblingRepoIsPresent() && existsSync(domainsConfig)) {
      const domains = readFileSync(domainsConfig, 'utf8')

      for (const match of domains.matchAll(/^\s*'(\w+)'\s*=>\s*\[([^\]]*)\]/gm)) {
        const [, name, body] = match
        if (!/kind'\s*=>\s*'product'/.test(body)) continue

        const key = `product.${kebab(name)}`

        if (!Object.prototype.hasOwnProperty.call(capabilities, key) && !Object.prototype.hasOwnProperty.call(waivers, key)) {
          note(`product domain ${name} has no '${key}' entry in docs-coverage.json — add its page or a waiver`)
        }
      }
    } else {
      crossRepoUnverified += 1
    }
  }
}

// 6. Rule surface: budget, glob targets, AGENTS.md coverage.
const ruleFiles = existsSync(RULES)
  ? readdirSync(RULES)
      .filter((name) => name.endsWith('.mdc'))
      .sort()
      .map((name) => join(RULES, name))
  : []

if (ruleFiles.length === 0) note('.cursor/rules/*.mdc is empty — the normative surface is missing')

const agents = existsSync(AGENTS) ? readFileSync(AGENTS, 'utf8') : null
if (agents === null) note('AGENTS.md is missing — it is the always-on rule map')

const repoFiles = walk(ROOT).map(rel)
let alwaysOnLines = 0

for (const rule of ruleFiles) {
  const name = rule.split(sep).pop()
  const contents = readFileSync(rule, 'utf8')
  const lines = lineCount(rule)
  const block = frontMatter(contents)
  const alwaysOn = /alwaysApply:\s*true/i.test(block ?? '') || block === null

  if (alwaysOn) {
    alwaysOnLines += lines
  } else if (lines > RULE_MAX_LINES) {
    note(`.cursor/rules/${name} is ${lines} lines (budget ${RULE_MAX_LINES}) — split by concern`)
  }

  for (const glob of globsOf(contents)) {
    const regex = globToRegex(glob)
    if (!repoFiles.some((path) => regex.test(path))) {
      note(`.cursor/rules/${name} globs: ${glob} matches no file — the rule never fires`)
    }
  }

  if (agents !== null && !agents.includes(name)) {
    note(`.cursor/rules/${name} is not referenced in AGENTS.md`)
  }
}

if (alwaysOnLines > ALWAYS_ON_MAX_LINES) {
  note(
    `always-on rules total ${alwaysOnLines} lines (budget ${ALWAYS_ON_MAX_LINES}) — move a rule to a glob scope or trim`
  )
}

if (agents !== null) {
  for (const mentioned of new Set(agents.match(/[a-z0-9-]+\.mdc/g) ?? [])) {
    if (!existsSync(join(RULES, mentioned))) note(`AGENTS.md references ${mentioned}, which does not exist`)
  }
}

if (!existsSync(README)) note('README.md is missing — the repo front door')

if (failures.length) {
  console.error(`docs check: ${failures.length} finding(s)`)
  for (const failure of failures) console.error(`  - ${failure}`)
  process.exitCode = 1
} else {
  console.log(
    `docs check: OK (${pages.length} page(s), ${ruleFiles.length} rule(s), ${alwaysOnLines} always-on line(s)` +
      (crossRepoUnverified > 0 ? `, ${crossRepoUnverified} cross-repo claim(s) unverified — sibling checkout absent` : '') +
      ')'
  )
}
