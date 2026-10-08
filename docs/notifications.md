---
title: Notifications
description: The Silverspoon notification bell, your notification history, and what you get told about.
sidebar_label: Notifications
sidebar_position: 2
---

# Notifications

Silverspoon tells you when something affects you: a plan entering grace, an account change, or another event worth your attention. Notifications arrive in the top-bar bell and stay in your history, because apparently memory is not a platform feature.

{/* TODO: screenshot static/img/docs/account/notifications-bell.webp */}

## The bell

The bell shows a count of what you have not read yet. Open it to see recent notifications; selecting one takes you to whatever it is about, whether that is a page in a product or a settings screen.

The count is kept up to date live while you are on the site. If your connection drops and comes back, the bell refreshes itself, so a missed moment does not leave a stale count.

## The history page

**Notifications** in the sidebar opens the full list at `/apps/notifications`. It holds everything sent to you, not just the recent handful the bell shows.

Each entry has a type, a short message, and the time it arrived. Entries you have opened are marked as read.

| Action | Effect |
|--------|--------|
| Open a notification | Marks it read and follows its link. |
| Mark all as read | Clears the whole list in one step. |

Marking things as read is reflected immediately, including in other tabs of the same browser, so the bell does not keep insisting you have unread items after you have dealt with them.

## What you get told about

Notifications cover the things worth knowing about rather than everything that happens:

- **Billing.** When a subscription enters its grace period, and when it expires. These are the ones to act on, because grace is your window to renew.
- **Your account.** When details on your account are changed.
- **Product activity.** Events raised by the products you operate, such as an AI model that is being used for inference but is not yet in the catalog, which is billed at provisional rates until someone classifies it.

Some notifications are addressed to you personally, and others go to everyone who holds a particular role. Either way, you only ever see the ones meant for you.

## Email versus in-app

Notifications here are in-app. Some events also send an email, most notably account verification and password resets, and those are separate from the bell. If you are looking for a link to reset a password and the bell is empty, check your inbox.

:::tip
If the bell stays empty when you expect something, confirm your account is verified and that you are signed in as the account you think you are. Notifications are per-account, so signing in as a different user shows a different list.
:::

## Related

- [Account & Security](/docs/account/)
- [Billing & Subscriptions](/docs/billing/)
