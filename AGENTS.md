# AI Agents — Silverspoon Docs (Docusaurus)

**Role:** the **user-facing documentation site** for the Silverspoon platform — Docusaurus 3 static site published at `https://help.silverspoon.me`. Every page here is read by a customer, not by an agent. This repo owns what the platform *promises*; the sibling repos own what it *does*.

## Workspace split

- `monolith` is the only backend; `monolith-vue-workers` is the only SPA; `gateway` is shared CF Workers infra (own `AGENTS.md`); **this repo is the only user-facing docs site**.
- All three Monolith workspaces (`Monolith-Backend`, `Monolith-SPA`, `Monolith-Fullstack`) load this repo as a peer root, so this `AGENTS.md` and its always-on rules inject on every turn. Keep the always-on surface small.
- This repo documents the other repos; it never implements product behavior. No API calls, no auth, no business logic here.

## Protocol

1. **Assess before changing** — open the owning rule for the area you touch and the page's existing content. No blind edits.
2. **Update docs and rules with every task** — a behavior change in `monolith`/`monolith-vue-workers` is not done until its page here matches. `wrap up the docs` = session-wide consolidation of code ↔ pages ↔ rules across all four repos, then run the gates.
3. **Respect scope and context** — tag the task `[content]`/`[site]`/`[cross-repo]`, and follow the context budget. Published copy is English only.

## Rule map (all `.cursor/rules/*.mdc`)

| Rule | Fires when |
|------|-----------|
| `docs-pakem.mdc` *(always-on)* | Writing or moving any page or rule file |
| `docs-sync.mdc` *(always-on)* | Shipping a user-facing capability in a sibling repo |
| `task-scope.mdc` *(always-on)* | Deciding which layers a task must touch |
| `context-budget.mdc` *(always-on)* | Choosing what to open for a task |
| `working-branch.mdc` *(always-on)* | Before the first edit — never work on a protected branch |
| `docs-content.mdc` | `docs/**`, `sidebars.ts`, `docusaurus.config.ts`, theme — page shape and navigation |
| `docs-tone.mdc` | `docs/**` — English playful voice and legal-tone boundaries |

Doc map: [README.md](README.md) (repo setup). Coverage manifest: `docs-coverage.json`. Sibling pakem: `monolith/AGENTS.md`, `monolith-vue-workers/AGENTS.md`.

## Status

Deploy target is **undecided** — CI is build-only (`npm run build`), publishing stays manual. Site locale is `['en']` by design; the product's seven locales are a different surface.
