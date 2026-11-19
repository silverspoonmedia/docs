---
title: Payments and Taxation
description: How Silverspoon processes a payment and who carries the tax obligation on a purchase.
sidebar_label: Payments & Tax
sidebar_position: 4
---

# Payments and Taxation

This document explains **how the platform processes a payment** and **who carries the tax obligation** on a purchase.

:::info[Scope]
Every checkout runs through the platform's own configured payment gateways, and **Silverspoon is the seller of record on every transaction**. There is no separate international route through a Merchant of Record. For per-country transaction classification, rates, and concrete tax reporting, the details **must** be locked together with qualified tax and legal advisors.
:::

## How a payment is processed

Checkout is handled by the platform's configured Indonesian payment gateways — **Midtrans**, **Xendit**, **DOKU**, and **iPaymu** — selected per channel by the platform's own routing policy. You choose a payment channel, the invoice is created in Silverspoon's name, and the gateway confirms the result back to the platform before the purchase is fulfilled.

- **Payment** is processed through one of those gateways, and the transaction is **made in Silverspoon's name**. From the customer's point of view, Silverspoon appears as the seller and the party collecting payment, in line with the gateway configuration and contract.
- **Taxation** on the transaction is **handled by Silverspoon**, because Silverspoon is a **legal entity domiciled in Indonesia** and is responsible for the tax obligations attached to its sales under applicable regulations.

**Why it works this way:** a single Indonesian entity selling through Indonesian gateways keeps **cash flow**, **invoices and receipts**, and **sales or income tax obligations** inside a single jurisdictional chain. No part of the seller role is moved to a foreign party.

## Channel fees

A payment channel can carry a channel fee, and who bears it is platform policy rather than a per-invoice choice. The checkout page shows the split before you pay: the subtotal is the price of what you bought, the channel fee is the surcharge, and the total is what the gateway charges.

## Summary

| Aspect | How it works |
|--------|--------------|
| Payment route | The platform's configured Indonesian payment gateways (Midtrans, Xendit, DOKU, iPaymu) |
| Name on the customer-facing transaction | Silverspoon |
| Focus of transaction tax compliance | Silverspoon (Indonesian jurisdiction) |
| Silverspoon's position | Seller of record |

---

:::warning
This document is an **operational and internal policy explanation** for product documentation. For per-country transaction classification, rates, and concrete tax reporting, the details **must** be locked together with qualified tax and legal advisors.
:::
