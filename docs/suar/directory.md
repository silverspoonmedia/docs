---
title: Source directory
description: The public face of a listed source, who can put one there, and how ownership claims are reviewed.
sidebar_label: Directory
sidebar_position: 5
---

# Source directory

The directory is the public side of Suar: a short page per source that anyone can open, with the channel's identity and its latest public content. No account needed.

Browse it from **Products → Suar → Directory** (`/apps/suar/directory`). Each card opens the public detail page at `/directory/{platform}:{handle}`.

## What gets listed

A source appears only when three separate facts are true:

- it is **active** — the platform profile resolved,
- its visibility is **public**,
- its directory status is **listed**.

Monitoring a channel does not list it. Submitting a source is a request to follow it, not a request to publish it, so a user-added source starts **unlisted** and stays that way until staff list it or a claim is verified.

Staff can also **hide** a source from the directory. A hide outranks an automatic listing: a later verified claim does not quietly undo a moderation decision.

## The public page

The detail page shows the avatar, display name, platform, handle, subscriber count, description, and a button to the original channel, followed by the newest public content. Each open is counted once per source per day — a counter, not a visitor identity.

Only listed sources resolve. A hidden, archived, or unlisted source answers as not found, so the page cannot be used to probe the registry.

## Ownership claims

Ownership is proven, not declared. If you run a channel, submit a claim from its monitoring page:

1. Open the channel and press **Claim ownership**.
2. Describe how staff can verify you run it — a post, a link in the channel description, a dashboard screenshot reference.
3. Submit.

Rules that matter:

- The source must be active before a claim can be filed.
- One claim per person per source. A pending claim cannot be duplicated; a rejected one can be reopened with new evidence.
- Staff review every claim. Verification is manual today: signing in with YouTube or Twitch is registered as a method but not available yet, and Suar will not pretend otherwise.
- A verified claim unlocks analytics and, when the directory is configured to auto-list, the listing itself.
- A claim never writes the source's creator field. Ownership of the numbers and membership in the creator catalogue are different things, which is what lets a claim be revoked without deleting content or watchers.

A pending claimant sees nothing extra. Analytics stays closed until the claim is verified.

## Staff triage

Two staff screens live under the same domain:

- **Claims** (`/apps/suar/claims`) — the pending queue, with the evidence, the claimant, and verify/reject actions plus an optional review note.
- **Sources without an owner** — inside the same screen. A source can exist before any creator profile owns it. **Bind** attaches it to an existing creator profile by id; contents and appearances move with it. Binding is a catalogue action, not a verification: it does not mark ownership as proven.

## Related

- [Monitoring a source](/docs/suar/monitoring)
- [Source premium](/docs/suar/premium)
- [Tracking links](/docs/suar/tracking)
