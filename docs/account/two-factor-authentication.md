---
title: Two-Factor Authentication
description: Add an authenticator app as a second step when signing in to Silverspoon.
sidebar_label: Two-Factor Authentication
sidebar_position: 3
---

# Two-Factor Authentication

Two-factor authentication (2FA) adds a second step to sign-in. Alongside your password, you enter a short code that only your device can produce. If someone learns your password, they still cannot get in without that code.

We use standard time-based codes (TOTP), the same kind produced by any authenticator app.

{/* TODO: screenshot static/assets/docs/account/two-factor-setup.webp */}

## Setting it up

1. Open **Two-factor authentication** from your account menu.
2. Choose **Set up two-factor authentication**.
3. Add the account to your authenticator app. You can either scan the setup code or type the manual setup key.
4. Enter the current 6-digit code from the app to confirm.
5. 2FA is now active on your account.

The setup key is the fallback for when scanning is not possible, for example if you are configuring the app on a different device. Keep it somewhere safe until the setup is confirmed.

:::warning
Keep your authenticator app's backup or recovery codes in a safe place. If you lose access to the app and have no backup, you can be locked out of your own account.
:::

## Signing in with 2FA

When 2FA is on, sign-in happens in two steps:

1. Enter your email and password as usual.
2. Enter the current 6-digit code from your authenticator app.

Codes rotate every 30 seconds. If a code is rejected, wait for the next one and try again rather than retrying the same number.

## Turning it off

Open the same page and choose **Disable two-factor authentication**. Your account then relies on your password alone. If you only need to move to a new phone, you can disable and set up again with the new device.

## Restarting setup

If you start setup but do not finish, the page offers **Restart setup**. Nothing changes on your account until you confirm a code, so an abandoned attempt leaves your account exactly as it was.

| State | What it means |
|-------|---------------|
| Not enabled | Sign-in needs only your password. |
| Enabled | Sign-in also needs a code from your authenticator app. |

## Related

- [Registration and Login](/docs/account/registration-and-login)
- [Password and Recovery](/docs/account/password-and-recovery)
