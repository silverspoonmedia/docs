---
title: About Suar
description: What Suar is — a catalogue of creators and sources, the monitoring that follows them, and the public pages a listed source gets.
sidebar_label: About
sidebar_position: 1
---

# About Suar

Suar is Silverspoon's creator catalogue. It keeps a record of creators, the YouTube and Twitch sources they publish on, and the content that flows through those sources.

Most of it is a back office: every screen sits behind a signed-in account with the Suar product active, and the staff screens need a role on top of that. Two things face outward — a source's public directory page, and the disclosure page a tracking link opens — and both only exist for a source that earned them.

## What it keeps

| Concept | Meaning |
|---------|---------|
| Creator | A public profile: a name, a slug, links, and the sources that belong to it. |
| Source | One YouTube or Twitch channel, unique per platform. It can exist before any creator profile owns it. |
| Content | A video or stream that arrived from a source. |
| Watcher | An account following a source, with its own filters and expiry behaviour. |
| Member | An account with a role on a creator profile: **owner**, **editor**, or **viewer**. |
| Premium | A prepaid window on a source that turns on filters and direct tracking links. |

A source carries a status. It starts **pending** while Suar resolves the platform profile, becomes **active** once that resolution succeeds, and can be **archived** and later restored. A creator absorbed by another creator is archived rather than deleted, so old links keep resolving.

## Who can do what

Your account reaches a source in one of four ways:

- **You watch it.** A watcher row gives you the feed and your own settings. Every activated account can add a source.
- **A membership row.** You hold a role on the creator that owns it — owner, editor, or viewer. Owners and editors edit the profile, its links, and its sources; viewers read it.
- **A verified claim.** You proved you run the source. That unlocks analytics and, when the directory allows it, a listing.
- **The staff permission.** Accounts with the platform-wide Suar staff permission reach every source, plus the screens ordinary users never see.

Staff are still the only accounts that can create a creator or bind a source to one. Watching a source is open; joining the catalogue is not.

## What a source gives you

- **Monitoring** — a feed per source, filters that run while premium is active, and a pause-or-continue choice for when it lapses. [Monitoring](/docs/suar/monitoring)
- **Premium** — months bought for the source itself, shared by everyone watching it. [Source premium](/docs/suar/premium)
- **Tracking links** — opaque share links with honest counters, interstitial or direct. [Tracking links](/docs/suar/tracking)
- **A directory page** — public, no account needed, only for listed sources. [Source directory](/docs/suar/directory)

## The four operator surfaces

Suar runs on top of two platform integrations, and the parts that keep them healthy are documented separately:

- [Platform credentials](/docs/suar/credentials) — the masked API keys and tokens the fetch engine uses.
- [API probe](/docs/suar/probe) — a manual dial for the same platform calls the workers make.
- [Fetch engine](/docs/suar/fetch-engine) — how content gets in and stays fresh.
- [Incident queue](/docs/suar/fetch-engine#when-something-breaks) — the triage list of broken integrations. It is the one Suar screen that does not live under Suar's own menu: you reach it from **Administration → Monitoring → Suar incidents**, beside **Activity log** and **Error log**.

:::note
These four are **staff-only** screens. They appear for the Root and Admin accounts, not for ordinary users. If you cannot see them, that is the design working.
:::

## Getting access

There is no purchase path for the product itself. Suar is activated for your account on registration, like the core platform features, and the screens appear once it is active. Staff branches additionally require a matching internal role; premium on a source is bought per source, not per account.

## Related

- [Monitoring a source](/docs/suar/monitoring)
- [Source premium](/docs/suar/premium)
- [Tracking links](/docs/suar/tracking)
- [Source directory](/docs/suar/directory)
- [Platform credentials](/docs/suar/credentials)
- [API probe](/docs/suar/probe)
- [Fetch engine](/docs/suar/fetch-engine)
