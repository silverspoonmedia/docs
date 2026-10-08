# Silverspoon Docs

The user-facing documentation site for the Silverspoon platform — the customer's manual for Archivd, Microstock, and the shared account, billing, notification, and legal surfaces. Built with [Docusaurus](https://docusaurus.io/) 3 and published at `https://help.silverspoon.me`.

Every page under `docs/` is read by a customer, not by an agent. Agent pakem for this repo lives in [`.cursor/rules/`](.cursor/rules/) with the map in [`AGENTS.md`](AGENTS.md); `docs-coverage.json` is the machine-checked claim that every shipped user-facing capability has a page.

## Local development

```sh
npm install
npm start
```

The dev server serves the site with live reload; most changes apply without a restart.

## Gates

```sh
npm run check:docs   # coverage manifest, orphan pages, config doc ids, rule budgets
npm run typecheck
npm run build        # onBrokenLinks + onBrokenAnchors both throw
```

`check:docs` reads the sibling `monolith` checkout for the product-domain claim. CI checks out this repo alone, so that one claim is reported as *unverified* there — run the guard from a machine with both checkouts when a product is added or removed.

## Deployment

The hosting target for `help.silverspoon.me` is **not decided yet**, so publishing stays manual and CI is build-only. `npm run build` produces `build/`, servable by any static host. When a target is chosen, add the deploy job to [`.github/workflows/ci.yml`](.github/workflows/ci.yml) and the environment contract to `.cursor/rules/`.

## Content rules

Read [`.cursor/rules/docs-pakem.mdc`](.cursor/rules/docs-pakem.mdc) for the page shape and [`.cursor/rules/docs-sync.mdc`](.cursor/rules/docs-sync.mdc) for when a page must change. Two that catch people out:

- **English only.** The site's locale set is `['en']` by design; the product's seven locales are a different surface.
- **Write what shipped.** A page describing behavior the platform does not have is a defect, not a placeholder.
