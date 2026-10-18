---
title: Tracking links
description: Share a source or a single video through a link that stays on your own domain, and read what the counters actually mean.
sidebar_label: Tracking links
sidebar_position: 4
---

# Tracking links

A tracking link is a short, opaque URL that points at a source or one of its content rows. It is how you share something and still learn whether anyone followed it.

Links look like `/r/{token}` — twenty-two random characters. The destination is **not** in the URL. Suar reads it from the link row, checks it against the platform's allowlist, and only then redirects. That is also why a token cannot be guessed or walked: there is nothing to increment.

## Two modes

| Mode | What a visitor sees | When it is issued |
|------|---------------------|-------------------|
| **Interstitial** | A disclosure page first, then the content | Default |
| **Direct** | A redirect straight to the platform | Source premium is active |

The mode is decided once, when the link is created. A link shared while the source was premium keeps redirecting directly even if premium lapses tomorrow — the people who already have it were promised a direct path, and changing it under them would be worse than the expired benefit.

## The interstitial

The disclosure page lives at `/s/c/{token}` and needs no account. It shows the source, the content thumbnail and title, and one clear button to the original content. It exists so a visitor knows where they are going before they go — not as an ad slot. There are no ads on it today.

## Creating a link

Links are created through the API (`POST /api/v1/suar/channels/{channel}/tracking-links`), gated like analytics: you must be a verified owner of the source or staff. Pass an optional `content_id` to point at one video instead of the channel.

There is no button for this in the app yet. The API is the current interface, and the interstitial is the shipped visitor experience.

## What the counters mean

Five numbers, all honest about what they measure:

| Counter | Counts |
|---------|--------|
| Link requests | Every hit on `/r/{token}`, including previews. |
| Estimated human clicks | Requests whose user agent is not a known crawler, deduplicated per link and visitor inside the dedupe window. |
| Interstitial views | Loads of the disclosure page. |
| Outbound clicks | Presses of **Continue to content**. |
| Directory views | Loads of the source's public directory page. |

The word *estimated* is deliberate. A crawler list catches Discord, Slack, Telegram, WhatsApp, search engines and the usual embed bots, and the dedupe window collapses a refresh storm into one click. It will never be perfect, and it is not a substitute for the platform's own analytics.

There is no watch time, no impressions, and no unique-viewer count anywhere in this list.

## Privacy

- The visitor's IP address is never stored. A keyed hash (HMAC with the application key) is written instead — stable enough to deduplicate, useless as an address.
- Only the **host** of the referer is kept, never the full URL.
- The user-agent is reduced to a class, not stored verbatim.
- Events are pruned on a retention window, along with the directory counters.

## Safety

- Every destination must match the platform host allowlist, exactly — `youtube.com.evil.example` does not ride on `youtube.com`.
- The check runs twice: when the link is created, and again when it is resolved. A tightened allowlist therefore applies to old links too.
- A link that fails the check is refused, not redirected to a fallback.

## Related

- [Source premium](/docs/suar/premium)
- [Source directory](/docs/suar/directory)
- [Monitoring a source](/docs/suar/monitoring)
