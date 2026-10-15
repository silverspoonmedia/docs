---
title: About Suar
description: What Suar is — a catalogue of creators, their platform channels, and the claims that prove ownership.
sidebar_label: About
sidebar_position: 1
---

# About Suar

Suar is Silverspoon's creator catalogue. It keeps a record of creators, the YouTube and Twitch channels they publish on, and the content that flows through those channels. When someone needs to prove a profile is theirs, Suar handles the claim.

Suar is an internal tool rather than a public directory. Every screen sits behind a signed-in account with the Suar product active, and most of them need a role on top of that. If you are looking for a place to browse creators, this is not it — this is the back office that keeps the records honest.

## What it keeps

| Concept | Meaning |
|---------|---------|
| Creator | A public profile: a name, a slug, links, and the channels that belong to it. |
| Channel | One YouTube or Twitch channel bound to a creator, unique per platform. |
| Content | A video or stream that arrived from a channel. |
| Claim | A pending or settled proof that an account owns a profile or a channel. |
| Management | A talent organization that represents creators, with its own roster and members. |

Channels carry a status — a channel starts **pending**, becomes **active** once it is verified, and can be **archived** and later restored. Creators follow the same idea, and a creator absorbed by another is archived rather than deleted, so old links keep resolving.

## Proving ownership

A creator profile can be **claimed**. The person adds a short token to the channel's About or bio, Suar checks for it, and on success they become the profile's owner. Staff can also accept a claim without proof through **Accept Anyway**, which exists precisely because platform bios are slow to update.

Claims are not silent: an owner gets a live progress update while the check runs, and the queue of pending claims is visible to staff.

## The three operator surfaces

Suar runs on top of two platform integrations, and the parts that keep them healthy are documented separately:

- [Platform credentials](/docs/suar/credentials) — the masked API keys and tokens the fetch engine uses.
- [API probe](/docs/suar/probe) — a manual dial for the same platform calls the workers make.
- [Fetch engine](/docs/suar/fetch-engine) — how content gets in and stays fresh.

:::note
These three are **staff-only** screens. They appear for the Root and Admin accounts, not for ordinary users. If you cannot see them, that is the design working.
:::

## Getting access

There is no purchase path. Suar is activated for your account on registration, like the core platform features, and the screens appear once it is active. Staff branches additionally require a matching internal role.

## Related

- [Platform credentials](/docs/suar/credentials)
- [API probe](/docs/suar/probe)
- [Fetch engine](/docs/suar/fetch-engine)
