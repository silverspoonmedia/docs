---
title: API probe
description: Run Suar's platform calls by hand against YouTube and Twitch and read the raw response.
sidebar_label: API probe
sidebar_position: 3
---

# API probe

The **API probe** lets staff run the exact platform calls the Suar workers make, one at a time, and read back what the platform returned. It is the debugging dial for the fetch engine: when content is missing or stale, the probe tells you whether the platform is answering, what it is answering with, and whether the classification Suar would apply line up.

It is a staff screen for the Root and Admin roles. Opening the address without that permission shows a **403 page** rather than the form.

## Opening it

Go to **Administration → Suar → Platform credentials** and choose **Probe** in the header, or open a platform and jump from there. The probe is one form: pick a platform, pick a method, fill the fields that method needs, and run.

## Platforms and methods

| Platform | Methods |
|----------|---------|
| YouTube | `fetch_videos`, `fetch_channels`, `resolve_channel`, and a chunked `fetch_videos` variant. |
| Twitch | `fetch_streams`, alongside the shared methods. |

The method list follows the platform you pick, so Twitch gains `fetch_streams` and drops the YouTube-only controls.

## The fields

| Field | Use it for |
|-------|------------|
| Platform | Which integration to call. |
| Method | Which call to make. |
| IDs | The platform ids to fetch. Video ids for `fetch_videos`, channel ids for `fetch_channels`. |
| Handle | A channel handle, for `resolve_channel`. |
| Parts | YouTube only — which parts of the `videos.list` response to request. |
| Chunked | YouTube only — split a long id list across requests instead of sending it whole. |

The **IDs** field is what makes this useful: paste the ids a worker would have used and you see the same answer the worker would have seen.

## Reading the result

The probe prints the raw response as JSON below the form. Nothing is persisted — this is a read-only inspection, not an import. It asks the platform, shows the payload, and forgets it.

For video methods, the response includes a preview of how Suar's classifier would categorize the result, so you can confirm the music and content detection against a real payload. That preview is for your eyes only; the probe never writes a content row.

## When to reach for it

- A channel's content stopped updating: `fetch_videos` or `fetch_channels` tells you whether the platform still answers for that id.
- A credential was just added: run a probe before you trust the workers with it.
- A classification looks wrong: fetch the video and read the classification preview.
- A handle will not resolve: `resolve_channel` shows what the platform returns for that handle.

:::note
The probe is a manual call, not a queue. It does not feed the fetch engine, trigger a resync, or repair a subscription. It answers one question and stops.
:::

## Related

- [Platform credentials](/docs/suar/credentials) — the keys the probe runs on.
- [Fetch engine](/docs/suar/fetch-engine) — the automated path the probe inspects.
