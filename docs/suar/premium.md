---
title: Source premium
description: Buy months of premium for a source, what it unlocks, and how expiry and reversals behave.
sidebar_label: Premium
sidebar_position: 3
---

# Source premium

Premium is a prepaid window attached to a **source**, not to your account. Anyone can buy months for any source, and everyone watching that source gets the benefit while the window is open.

Open it from a channel page: **Premium** (`/apps/suar/premium/{id}`), or from the monitoring list.

## What it unlocks

| Capability | Without premium | With premium |
|------------|-----------------|--------------|
| Content filters | Stored, not applied | Applied to the feed |
| Tracking links | Interstitial page first | Direct redirect |

That is the whole list. Premium does **not** grant ownership, analytics, a directory listing, or a creator profile. Those are separate: analytics follows a verified claim, and a listing is a staff decision.

## Price and duration

Premium is **Rp25.000 per month**, sold in whole months, up to twelve months in one purchase. The page multiplies months by the unit price before you continue, so the total is visible before any invoice exists.

The price is a product fact in configuration, not a per-account discount. If it changes, it changes for everyone.

## Buying

1. Open the source's premium page.
2. Choose the number of months.
3. Check the total.
4. **Continue to payment** creates a pending purchase and its invoice, then sends you to it.

Nothing is granted at checkout. Premium starts when the payment is confirmed — an abandoned invoice leaves the source exactly as it was.

Once paid, the window extends from **the later of** the current expiry and now, so buying early never burns the time you already have.

## Calendar months, not thirty-day blocks

A month is a calendar month. Thirty-first January plus one month is the last day of February, not the third of March. This matters at renewal boundaries and is why the arithmetic lives in one place.

## When premium expires

Watchers keep their subscriptions. What happens to the feed is each watcher's own setting:

- **Keep the basic feed** — filters stop being applied; content still arrives.
- **Pause monitoring** — the subscription parks with the reason *premium expired*.

A renewal resumes only the subscriptions paused by expiry. A pause someone set by hand is intentional and stays paused.

## Purchase history

The premium page lists your purchases for that source: when it was created, how many months, the amount, its status, and the window it granted. Only the payer sees their own purchases — paying for a source does not hand you anyone else's billing rows.

## Reversals

If a payment is refunded or charged back, the window shrinks by the months that purchase added. If the remaining window is still in the future, it keeps running; if the reversal would take it into the past, it ends now. A reversal never deletes content, watchers, or links already issued.

## Related

- [Monitoring a source](/docs/suar/monitoring)
- [Tracking links](/docs/suar/tracking)
