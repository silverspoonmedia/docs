---
title: Services and Subscriptions
description: Browse the service catalog, subscribe to a plan, and change plans or add-on quantities.
sidebar_label: Services and Subscriptions
sidebar_position: 2
---

# Services and Subscriptions

The **Services** catalog is where everything purchasable lives: storage plans, workspace slots, AI credit, and the add-ons that extend them. A tidy shelf for things you can buy; capitalism does love a menu.

{/* TODO: screenshot static/assets/docs/billing/services-catalog.webp */}

## What a catalog entry tells you

| Field | Meaning |
|-------|---------|
| Name and description | What the service does. |
| Billing interval | Monthly, quarterly, yearly, or one-time. |
| Plan kind | Whether it is a main plan or an add-on. |
| Price | The amount in each supported currency. |

Only active services can be purchased. If an entry is not purchasable, it is shown but the checkout is refused.

## Subscribing

1. Pick a service in the catalog and open it.
2. Choose the currency you want to be charged in.
3. Set the quantity if it is an add-on.
4. Start the checkout.

Checkout quotes the price in your chosen currency and settles the transaction in Indonesian Rupiah. When the two differ, the page shows the display amount, the settlement amount, and the exchange rate used, so there is no surprise on the statement. If exchange rates are temporarily unavailable, the checkout pauses rather than guessing.

After starting the checkout, you land on a purchase page where you complete the payment. See [Payments and Invoices](/docs/billing/invoices-and-payments).

## Quantity and stacking

Add-ons stack, so the checkout shows the arithmetic before you commit:

```
current stack + units you buy = new total
```

The preview also tells you how much the purchase adds to your allowance, for example extra storage or one more workspace slot. Quantities are estimates until you continue to payment, where the final amount is confirmed.

Main plans are always a quantity of one, because only one can be active at a time.

## Changing a plan

The purchase page labels what kind of change you are making, so you always know whether you are starting, extending, or replacing something:

| Change | Meaning |
|--------|---------|
| New plan | First purchase of this service. |
| Renew | Extending the current period. |
| Upgrade | Moving to a larger plan. |
| Downgrade | Moving to a smaller plan. |
| Add-on unit | Adding units to an existing add-on. |
| Add-on stack renewal | Settling the renewal that keeps an add-on stack alive. |

When you change a main plan mid-period, unused time on the current plan is credited toward the new one, which the page shows as unused credit and, where it applies, extra days added to the new period.

## The Microstock card

Microstock has its own card in the catalog, because its workspace slots and AI credit are separate from storage plans:

- **Activate free** enables the free Microstock workspace.
- **Buy slot** adds one more Microstock workspace slot.
- **Buy AI credits** tops up your prepaid AI analysis balance, with a per-asset estimate shown alongside.
- **Usage & balance** links to the Microstock usage page.

See [Credits and Usage](/docs/microstock/credits-and-usage) for how the AI balance is spent.

## Where a purchase shows up

Each purchase has its own page at `/apps/service-purchases/{id}`, which is also where you pay for it. The page shows the period covered, the current entitlement status, the quantity, and what the purchase will change.

## Entitlement states

| State | What it means for you |
|-------|-----------------------|
| Active | Working normally. |
| Grace period | The period ended; renew to keep paid features. |
| Expired | Back to the free tier. |
| Cancelled | Ended early by request. |
| Permanent | Does not expire. |

When an entitlement enters grace, a banner appears on the purchase page and a notification is sent. Renewing during grace restores full access and prevents any trimming of stored data.
