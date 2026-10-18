---
title: Monitoring a source
description: Follow a YouTube or Twitch channel, filter what reaches you, and decide what happens when its premium lapses.
sidebar_label: Monitoring
sidebar_position: 2
---

# Monitoring a source

Monitoring is how you follow a channel without subscribing to it on the platform. You add a source once, Suar keeps it current in the background, and the channel page becomes your feed: newest videos, live streams and shorts, newest first.

Open it from **Products → Suar → Monitoring** (`/apps/suar/monitoring`).

## One source, many watchers

A channel is a single record inside Suar, shared by everyone who watches it. Two people who paste the same channel — one as a profile link, one as `@handle` — end up on the same source with their own settings. Nobody sees anybody else's filters, and stopping your monitoring does not remove the source for the next person.

That is also why adding a channel is not instant. Your submission is queued, resolved against the platform once, and then activated. A source that is already active skips the queue entirely.

## Add a channel

1. Pick the platform.
2. Paste a profile link, an `@handle`, or the platform's own channel id.
3. Submit.

The row appears as **pending** until Suar resolves the profile, then flips to **active**. If resolution fails, the row stays pending with the reason recorded, and the next pool run retries it — you do not have to resubmit.

The list shows the channel, its platform, your subscription status, and whether the source is premium.

## The channel page

Click a channel to open `/apps/suar/monitoring/{id}`. The top card carries the source identity — avatar, name, platform, handle, subscriber count — and a link to the original channel.

| Action | Effect |
|--------|--------|
| **Settings** | Edit your filters and your premium-expiry choice. |
| **Pause** | Keep the subscription and its settings, stop the feed. |
| **Resume** | Undo a pause you made yourself. |
| **Stop monitoring** | Remove your subscription. Your settings go with it. |
| **Premium** | Open the source's premium page. |

Pause and stop are not the same thing. A pause keeps your configuration for later; a stop forgets it. If a source is still pending, unowned, and nobody else watches it, stopping also discards the half-resolved row.

## Filters

Filters live in **Settings**. Three of them, and they combine:

- **Content type** — video, live, or short.
- **Classification** — music or non-music. Suar classifies content on ingest, so this is not a keyword guess.
- **Keywords** — comma separated; a title must contain at least one of them.

Filters are stored whether or not they run. They only run while the source is premium — see below.

## What happens when premium expires

Premium belongs to the source, not to you. When it lapses, each watcher follows their own choice, set in the same dialog:

| Choice | Result |
|--------|--------|
| **Keep the basic feed** (default) | Your filters stop being applied. The feed shows everything again. |
| **Pause monitoring** | Your subscription is paused with the reason *premium expired*. Renewing premium resumes it; a pause you made by hand stays paused. |

Renewing premium does not need a backfill: the feed is computed per request, so filters start applying again on the next load.

## Limits

Submissions are rate limited per account, and an account can watch up to 100 sources. Both are fair-use limits rather than a sales tier. If you hit the per-minute cap, wait a moment and submit again.

## Analytics

Owners of a source — a verified claim, or staff — see a **Tracking and views** panel on the channel page. It is counts only:

- link requests,
- estimated human clicks,
- interstitial views,
- outbound clicks,
- directory views.

There is no watch time, no impressions, and no unique-viewer count, because Suar does not receive that data and will not invent it. A plain watcher gets no panel; the numbers belong to whoever can act on them.

## Claiming a source

If you run the channel, you can ask for ownership from the same page. Write down how staff can verify it — a post, a link in the channel description, a dashboard screenshot reference — and submit. Every claim is reviewed by a person.

A verified claim unlocks analytics and, when the directory allows it, a public listing. It does **not** create a creator profile or attach the source to one. See [Source directory](/docs/suar/directory#ownership-claims) for the full flow.

## Related

- [Source premium](/docs/suar/premium)
- [Source directory](/docs/suar/directory)
- [Tracking links](/docs/suar/tracking)
