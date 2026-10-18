---
title: Fetch engine
description: How Suar pulls channels and content from YouTube and Twitch, and how that data stays fresh.
sidebar_label: Fetch engine
sidebar_position: 8
---

# Fetch engine

The fetch engine is what keeps Suar's catalogue current. It reads YouTube and Twitch, resolves channels, collects videos and live streams, and refreshes the rows that have gone stale. It runs on a schedule in the background; there is no button to press. Understanding the shape of it is how you tell "the platform is quiet" from "the fetch engine is stuck".

## Two lanes

Every platform read goes through one gateway, and it is used in two ways:

- **Interactive** — one item at a time, inside a request. Claiming a profile, verifying a channel, refreshing a row you are looking at.
- **Scheduled** — items are collected into a **pool** and flushed in platform-sized batches on a timer.

The split is about quota. YouTube accepts 50 ids per request and Twitch accepts 100, so fetching a thousand rows one at a time costs the same quota as fetching them in a handful of batches. Pools exist to spend the quota once, not a thousand times.

## The pools

| Pool | What it holds | When it flushes |
|------|---------------|-----------------|
| Channel snapshot | Channels due for a profile refresh. | 50 rows, or the oldest waiting 15 minutes. |
| Content hydrate | Video and stream ids waiting for full detail. | 50 rows, or the oldest waiting 15 minutes. |
| Channel registration | Sources waiting for their profile input to resolve — staff registrations and user monitoring submissions alike. | Same threshold, tracked per platform. |

Flushing is locked, so two runs cannot fetch the same ids twice. A row that fails is marked failed and the run continues rather than aborting — a single bad id does not stall the batch.

## YouTube

YouTube content arrives in two steps. First a **feed poll** reads the channel's public Atom feed, which costs no quota, and collects any new or changed video ids. Then the Data API fetches those ids and writes the actual content rows. The feed carries ids and timestamps only, so it is a discovery signal — the detail comes from the API.

Freshness is kept by **WebSub**: Suar subscribes to each channel's push feed, renews the lease before it lapses, and re-subscribes channels that were archived and later restored. When the hub pushes a notification, the engine collects the ids it names and stops there — a notification never writes a content row directly.

## Twitch

Twitch uses **EventSub**. Suar keeps one subscription per channel and event type, renews them before expiry, and handles three kinds of delivery:

- **Verification** — the initial handshake with Twitch, answered and recorded.
- **Notification** — a signed event. The signature is checked, duplicates are dropped, and the event turns into a channel refresh. Channel updates and stream online/offline events for the same channel are combined, so a burst becomes one fetch and one update.
- **Revocation** — Twitch gave up on the callback. The subscription is marked and renewal recreates it.

Live state is derived from the content rows themselves, so there is no separate flag that can drift out of sync with reality.

## Live viewer counts

A dedicated poll watches live content every couple of minutes. On YouTube it asks for each live video; on Twitch it batches the live streamers by id. If a stream that was live is missing from the response, its rows are ended — this is the backstop for a missed offline event, which is why the poll cannot simply skip ids it does not recognise.

Each poll also records a viewer-count sample for the metric timeline.

## Channel activation

Turning a pending channel into an active one is a single step that runs its follow-up work in the same place:

- YouTube — subscribe to WebSub and backfill the channel's recent videos.
- Twitch — subscribe to EventSub.

Because the hooks run inside activation, there is no path that activates a channel without also wiring up its subscriptions.

A source is global, so resolution can land on an id another row already owns — two users submitting a handle, a link, and a raw id all converge. That is not an error: the watchers and content of the speculative row move to the canonical one, and the empty row is discarded. Nobody's subscription is stranded on a row that can never activate.

## When something breaks

A platform failure does not surface as a stack trace. It is recorded as an **incident** — one row per distinct problem, with an occurrence count — and the failing pool row is marked and skipped. The incident queue is where "this integration is broken" lives, and recording can be silenced during a platform-wide outage so a single bad afternoon does not create thousands of rows.

You will find it in the sidebar under **Administration → Monitoring → Suar incidents**, next to **Activity log** and **Error log**. That is deliberate: triage is an operator task, so the queue sits with the other monitoring tools rather than with Suar's own screens.

If an integration looks quiet, the order to check is: the credential for that platform (see [Platform credentials](/docs/suar/credentials)), then a manual call (see [API probe](/docs/suar/probe)), then the incident queue.

## Related

- [Platform credentials](/docs/suar/credentials)
- [API probe](/docs/suar/probe)
