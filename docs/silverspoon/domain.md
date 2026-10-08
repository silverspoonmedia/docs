---
title: Official Domains
description: The domain names owned, used, and managed by Silverspoon, plus how to spot imitations.
sidebar_label: Domains
sidebar_position: 2
---

# Official Domains

Welcome to Silverspoon. Before you use Silverspoon products, here is a reference for the official domains Silverspoon owns, uses, and manages. Think of it as your anti-phishing cheat sheet.

## Why this page exists

As a platform provider, Silverspoon owns, uses, and manages many domain names for different purposes.

To prevent fraud and misinformation, Silverspoon maintains this page as a way to validate information you find online about its domains and related products. Use it to tell authentic communication apart from potential scams.

:::tip
Refer back to this page whenever you have doubts about the legitimacy of a link or email claiming to be from Silverspoon.
:::

## How Silverspoon domains are organized

Silverspoon runs as a single platform that hosts multiple products. One canonical domain serves every product, and each product lives under its own path rather than its own separate site.

| Layer | Domain | Role |
|-------|--------|------|
| Platform | `silverspoon.me` | The canonical entry point for the whole platform and all products. |
| Content delivery | `cdn.silverspoon.me` | Serves stored files and other public content. |
| Upload gateway | `gateway.silverspoon.me` | Receives file uploads and serves downloads on behalf of the products. |
| System | `spnd.uk` | The API and infrastructure domain. Stands for "Silverspoon Daemon." |

### `*.silverspoon.me`

The canonical domain of the Silverspoon platform. Every product is served from a path underneath it.

- Every product lives under `silverspoon.me`: public pages such as shared files at `silverspoon.me/s/*`, and the authenticated app at `silverspoon.me/apps/*`.
- `gateway.silverspoon.me` and `s3.silverspoon.me` are the upload and download endpoints the products use, and `cdn.silverspoon.me` serves stored files and other public content.
- All verified email contacts are handled through this domain name manually.
- Every subdomain under `silverspoon.me`, such as `xxx.silverspoon.me`, is official.

### `*.spnd.uk`

The system domain, used for the platform's API and for infrastructure and email rather than for browsing.

- Stands for "Silverspoon Daemon."
- Serves the platform API, for example `monolith-api.spnd.uk`.
- All unverified email contacts are handled through this domain name.
- Every subdomain under `spnd.uk`, such as `xxx.spnd.uk`, is official.

## Legacy domains

Some projects previously ran on their own dedicated domains. That is no longer the case: each product now lives under `silverspoon.me`. Silverspoon still owns the legacy domains below.

### `*.vtual.net`

- Formerly the dedicated domain of the vTual project, which Silverspoon has retired. It is no longer a product surface.
- The domain itself is still owned and operated by Silverspoon, so it remains a legitimate source of Silverspoon communication, including email.
- Every subdomain under `vtual.net`, such as `xxx.vtual.net`, is official.

## Imitations

Any domain name not listed on this page should be considered an imitation, and Silverspoon strongly advises against using it. Unauthorized domains may pose risks, including fraud or misinformation.
