---
title: Storage and Plans
description: How the Archivd quota works, what the free, paid, and grace states mean, and where your files are stored.
sidebar_label: Storage and Plans
sidebar_position: 5
---

# Storage and Plans

This page explains how much room you have, what happens when a plan ends, and where your files live.

{/* TODO: screenshot static/assets/docs/archivd/quota-bar.webp */}

## How your quota is calculated

Everyone gets a free allowance. Paid plans and add-ons stack on top of it rather than replacing it.

```
effective quota = free tier
                + active paid storage plan (at most one)
                + every active storage add-on
```

| Component | Notes |
|-----------|-------|
| Free tier | Included for every account, always counted. |
| Paid storage plan | One main plan at a time; replaces any previous main plan. |
| Storage add-ons | Stackable. Each unit adds its own amount. |

You can see the numbers on the quota bar in Archivd: how much is used, and how much remains.

## What counts against the quota

Every stored file counts, along with the small image derivatives that other products generate from your uploads. Files waiting in the trash still occupy space until they are removed for good, so emptying the trash is the way to reclaim room quickly.

An upload that is still in progress also reserves its space. That prevents you from starting more transfers than your remaining quota can hold.

## Plan states

| State | Upload | Link sharing | Existing files |
|-------|--------|--------------|----------------|
| Free | Within the free tier | Not available | Readable |
| Paid | Up to your effective quota | Available | Readable |
| Grace | Blocked | Not available | Readable |

**Grace** is a short window after a plan ends, giving you time to renew before anything is taken away. During grace you cannot upload and collaborative features stay blocked, but nothing is deleted.

## When a plan ends

Once the grace window closes, the account falls back to the free tier. If your stored files are larger than what the free tier allows, Archivd trims them down to fit:

- The oldest files are removed first, and the most recent ones are kept.
- Removal is permanent, both from your drive and from storage.
- If you are already within the free tier, nothing happens.

Renewing during grace avoids this entirely, because the paid allowance is restored before the trim runs.

:::warning
The trim is automatic and irreversible. If a plan is about to end and you are over the free tier, renew or remove files you no longer need.
:::

## Storage regions

Archivd stores files in one or more regions. The two available today are:

| Region key | Label |
|------------|-------|
| `ce` | Central European |
| `us` | United States |

When more than one region is configured, a region column and a detail badge appear so you can see where a file was placed, and the upload dialog lets you choose the region for new files. A region can be closed for new uploads while files already stored there remain downloadable; only new uploads are blocked.

## Next steps

Storage plans, add-ons, and the team workspace slots are all part of the platform catalog. See [Services and Subscriptions](/docs/billing/services-and-subscriptions) for how to subscribe, change a plan, or buy an add-on.
