---
title: Connected Accounts
description: Link your Discord account to Silverspoon and sync the YouTube and Twitch accounts it carries.
sidebar_label: Connected Accounts
sidebar_position: 4
---

# Connected Accounts

Connected accounts let Silverspoon read one small, specific piece of information from an external service, with your permission. Today the supported provider is **Discord**—the designated keeper of this particular list.

{/* TODO: screenshot static/img/docs/account/connected-accounts.webp */}

## Why connect Discord

Your Discord profile already carries the YouTube and Twitch accounts you have linked there. Connecting Discord lets Silverspoon read that list, so the platforms you use show up in one place instead of you typing them in by hand.

## Connecting

1. Open **Connected accounts** from your account menu.
2. Choose **Connect Discord**.
3. Approve the request on Discord.
4. You return to Silverspoon with the account linked.

If you cancel the authorization on Discord, nothing changes and you can try again whenever you like.

## Linked platforms

Once Discord is connected, the page lists the YouTube and Twitch accounts found on your Discord profile, each with a status:

| Status | Meaning |
|--------|---------|
| Verified | Discord confirms you own the linked account. |
| Not verified | The account is listed, but ownership is not confirmed. |
| Revoked | The link was removed on Discord's side. |

**Sync** refreshes the list from Discord, and the page shows when it was last synced. Run a sync after you add or remove a linked account on Discord so Silverspoon sees the change.

:::note
If a platform you expect to see is missing, link it on Discord first, then sync here. Silverspoon only reads what Discord already knows about.
:::

## Disconnecting

**Disconnect Discord** removes the connection and everything Silverspoon cached from it. The linked-account list disappears with it, and you can reconnect whenever you need it again.

:::tip
Reconnecting Discord later is quick and does not affect your Silverspoon account itself. The connection is only about reading the linked-account list.
:::

## Related

- [Account & Security](/docs/account/)
