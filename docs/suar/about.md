---
title: About Suar
description: What Suar is — a catalogue of creators, their platform channels, and the content that flows through them.
sidebar_label: About
sidebar_position: 1
---

# About Suar

Suar is Silverspoon's creator catalogue. It keeps a record of creators, the YouTube and Twitch channels they publish on, and the content that flows through those channels.

Suar is an internal tool rather than a public directory. Every screen sits behind a signed-in account with the Suar product active, and most of them need a role on top of that. If you are looking for a place to browse creators, this is not it — this is the back office that keeps the records honest.

## What it keeps

| Concept | Meaning |
|---------|---------|
| Creator | A public profile: a name, a slug, links, and the channels that belong to it. |
| Channel | One YouTube or Twitch channel bound to a creator, unique per platform. |
| Content | A video or stream that arrived from a channel. |
| Member | An account with a role on a creator profile: **owner**, **editor**, or **viewer**. |

A channel carries a status. It starts **pending** while Suar resolves the platform profile, becomes **active** once that resolution succeeds, and can be **archived** and later restored. A creator absorbed by another creator is archived rather than deleted, so old links keep resolving.

## Who can do what

Your account reaches a creator profile in one of two ways:

- **A membership row.** You hold a role on that creator — owner, editor, or viewer. Owners and editors edit the profile, its links, and its channels; viewers read it. Only the owner can change who else is on the profile.
- **The staff permission.** Accounts with the platform-wide Suar staff permission reach every profile, plus the screens ordinary members never see.

Staff are also the only accounts that can create a creator or register a channel against one. There is no self-service path into the catalogue, and no way to claim a profile by proving you own the channel: an account is put on a creator by staff, as a membership row.

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

There is no purchase path. Suar is activated for your account on registration, like the core platform features, and the screens appear once it is active. Staff branches additionally require a matching internal role.

## Related

- [Platform credentials](/docs/suar/credentials)
- [API probe](/docs/suar/probe)
- [Fetch engine](/docs/suar/fetch-engine)
