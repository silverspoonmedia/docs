---
title: Introduction
description: A short introduction to Silverspoon Media, the name behind it, and the office platform it runs.
sidebar_label: Introduction
sidebar_position: 1
---

# Introduction

Welcome to the Silverspoon helpdesk portal—the home base for the office platform I build, document, and support. Think of it as the map, minus the dramatic compass music.

Before you dive into the details, here is a quick introduction to who I am. It should take no more than five minutes, unless you get distracted by a particularly persuasive heading.

## What Silverspoon is

Silverspoon is an internal office platform created and maintained by **Waka** (an initial, not a legal name). It is built single-handedly, which is an efficient way to keep meetings short and bug reports emotionally personal.

The platform is a general ERP base for day-to-day office work: accounts and access, menus and navigation, notifications, the audit trail, the error log, and currencies. It is not a public service and it is not sold: the people who use it are the people who work in the office it was built for.

Everything runs as one application rather than as separate sites. There is a single codebase and a single entry point, and the browser UI is one SPA that talks to one API. A capability is either part of the platform core or an added domain layered on top of it.

The codebase is mostly closed source, though several open source projects may appear in the future.

- **Short-term goal:** run the office's daily operations on one consistent platform.
- **Long-term goal:** keep adding the domains the office actually needs, and nothing it does not.

:::tip
I am always open to new possibilities and collaborations. Reasonable ideas welcome; mysterious spreadsheets may require coffee first.
:::

## Terminology

The name "Silverspoon" is not just a label; it carries meaning. As described on [Wikipedia](https://en.wikipedia.org/wiki/Silver_spoon), the term "silver spoon" describes someone born into a prosperous background, often implying that their advantages were inherited rather than earned.

That citation is abstract, so here is the actual reason I chose the name: I want everyone who has a relationship with Silverspoon, whether owner, staff, or partner, to receive goodness and prosperity. Just like the silver spoon itself, anyone can be the silver spoon.

## Team

Active and registered members currently consist of one person: **Waka**.

New members may join related projects in the future, though probably not anytime soon. The queue is currently very exclusive—mostly because it is also very short.

## Jurisdiction

Every Silverspoon project complies with the regulations of the **Republic of Indonesia**. The reason is simple: I live in Indonesia and I am Indonesian.

As a user, you are also expected to follow these regulations. I apologize in advance if that is not to your liking.

## Domains

The platform ships with six core domains. They are the whole product today; anything else is added later, one domain at a time.

| Domain | What it does |
|--------|--------------|
| Identity | Accounts, sign-in, two-factor authentication, roles, and permissions. |
| Navigation | The menu tree, its layouts, and per-role visibility. |
| Notification | The bell, the notification history, and role-targeted audiences. |
| ActivityLog | The audit trail of what changed, by whom, and when. |
| ErrorLog | Grouped application errors, kept for operators to review. |
| Currency | The currency catalog and the single settlement currency. |

## Documentation map

This documentation is organized around how the platform is built:

- **Core** covers the capabilities every account touches: your account and security, notifications, and the legal documents.
- **Project** covers who I am and the official domains Silverspoon operates.

## Closing

That is roughly the introduction to Silverspoon Media. You made it to the end, so the documentation has already achieved one small victory. Enjoy the platform.
