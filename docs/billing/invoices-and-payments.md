---
title: Payments and Invoices
description: Pay for a Silverspoon purchase, understand the payment fee, and know what happens after you pay.
sidebar_label: Payments and Invoices
sidebar_position: 3
---

# Payments and Invoices

Every purchase generates an invoice, and the purchase page is where you pay it. This page explains the amount breakdown, the payment methods you can choose, and what to expect after paying.

{/* TODO: screenshot static/assets/docs/billing/checkout-payment-methods.webp */}

## Reading the amount

The checkout shows three lines:

| Line | Meaning |
|------|---------|
| Service price | The list price of what you are buying. |
| Payment fee | A fee charged by the payment provider. |
| Total due | What you actually pay. |

The payment fee depends on the method you choose, so it reads as zero until you pick one. Once you select a method, the fee is filled in and the total updates. The fee is paid to the payment provider, not to us, and it is added on top of the service price rather than hidden inside it.

Because fees differ per method, the page may point out a cheaper option. Switching methods resets the selection, so pick your method before continuing.

:::note
The fee shown before you continue is an estimate. The final amount is confirmed when the payment session is created.
:::

## Choosing a payment method

Available methods depend on your region and on what the provider supports for the invoice. The usual families are:

| Method family | How you pay |
|---------------|-------------|
| QRIS | Scan a QR code with a banking or e-wallet app. |
| Virtual account | Transfer to a dedicated bank account number. |
| E-wallet | Pay from a supported wallet app. |

If a method disappears between opening the page and paying, it has been withdrawn for that invoice and you are asked to choose another. Only methods that can actually complete are offered.

## Completing the payment

After you continue, the page shows payment instructions:

- The amount and the deadline to pay by.
- A QR code, a virtual account number, or a wallet prompt, depending on the method.
- The account name, where relevant.

Copy controls are provided for numbers and codes so you do not have to retype them.

Payment status updates on its own once the provider confirms. You do not need to keep the page open, but if you come back later, the invoice reflects the current state.

If you paid outside the page, for example by cash or a manual bank transfer, use **I have paid** to re-check the invoice status.

## Outcomes

| Outcome | What it means |
|---------|---------------|
| Paid | The payment is confirmed and the entitlement activates. |
| Pending | The provider has not confirmed yet. Instructions stay valid until the deadline. |
| Cancelled | The payment was abandoned; the invoice can be paid again. |
| Expired | The payment window closed; start a new checkout. |

Once an invoice is paid, paying it again is refused, so a stale browser tab cannot double-charge you.

## Invoices and records

An invoice is attached to each purchase and carries its own number, which is what to quote if you need help with a payment. If you need a record of a specific purchase, open that purchase's page from the catalog or from your purchase history.

## Tax and cross-border payments

Whether a transaction is handled domestically or through an international merchant of record depends on where you are, and it affects who appears as the seller and how tax is handled. That is explained in [Payments and Taxation](/docs/pembayaran-dan-perpajakan).

:::warning
Do not send payment to any account that is not shown on your own invoice. If instructions look wrong, stop and contact us before paying. See [Contact](/docs/silverspoon/contact).
:::
