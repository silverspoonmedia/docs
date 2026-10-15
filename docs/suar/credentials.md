---
title: Platform credentials
description: Store and test the YouTube and Twitch API keys the Suar fetch engine runs on.
sidebar_label: Platform credentials
sidebar_position: 2
---

# Platform credentials

The Suar fetch engine reads YouTube and Twitch on your behalf, and every one of those reads needs a key. **Platform credentials** is where those keys are stored, one set per platform, and where you test them without writing a single line of code.

This is a staff screen, gated to the Root and Admin roles. If the menu entry is not there, your account does not carry the permission.

## Opening it

Go to **Suar → Platform credentials**. The list shows one row per platform — its name, its key, whether it is enabled, and how many credentials it holds in each state. Open a platform to see and manage its credentials.

## Adding a credential

From a platform's own page, choose **Add**. The form asks for:

| Field | What it is |
|-------|------------|
| Label | Your name for this key, so a list of them stays readable. |
| Type | The shape of the secret — see below. |
| Priority | Which key wins when a platform has more than one. Lower numbers are tried first. |
| Secret | The fields that match the type you picked. |

The three types and the secret fields each one needs:

| Type | Secret fields |
|------|---------------|
| `api_key` | An API key. The usual shape for a YouTube Data API key. |
| `oauth_app` | A client id and a client secret. The usual shape for a Twitch app credential. |
| `bearer` | An access token, an optional refresh token, and an optional expiry. |

Secrets are write-only. They are stored encrypted and never rendered back to the browser — the list shows a short masked hint instead. On the edit form, leaving a secret field blank keeps the current value, so you can change the label or priority without re-typing the key.

## Testing a credential

Each row has a **Test** action. It probes the live platform with the stored secret and reports what came back. This is the fastest way to answer "is this key still good?" before wondering why content stopped arriving.

A passed test moves the credential to **active** and records when it was last verified. A failed test leaves the credential in place and tells you what the platform said.

## States

| Status | Meaning |
|--------|---------|
| `pending` | Stored, not yet proven against the platform. A new credential starts here. |
| `active` | Verified and in use. |
| `revoked` | Deliberately turned off. |
| `disconnected` | The platform dropped it, for example because the app was removed. |

`revoked` and `disconnected` read as deliberate decisions, not failures.

## Failover

When a platform holds more than one credential, they are tried in priority order. On an authentication rejection (HTTP 401 or 403) the failing credential is **soft-demoted** — it is skipped for a while rather than switched off — and the call retries once with the next pick.

Two things are on purpose here:

- Only authentication failures demote a credential. A rate limit or a server error is a platform condition, not a bad key, and does not count against it.
- A `pending` credential is never promoted automatically. Something has to prove it first, and that is the **Test** button.

## Revoking and deleting

**Revoke** marks a credential as no longer in use while keeping the row and its history. **Delete** removes it entirely. Prefer revoke when you want the record that a key existed, and delete when you are scrubbing a key you never want reused.

:::warning
A revoked credential is never picked up by the fetch engine, but its row survives. If a key leaked, revoke it **and** rotate it at the platform — the credential row does not make the exposed secret safe.
:::

## Related

- [API probe](/docs/suar/probe) — run the platform calls by hand.
- [Fetch engine](/docs/suar/fetch-engine) — what uses these credentials.
