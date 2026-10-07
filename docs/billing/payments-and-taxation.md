---
title: Payments and Taxation
description: How Silverspoon splits payment flows and tax obligations between Indonesian and international customers.
sidebar_label: Payments & Tax
sidebar_position: 4
---

# Payments and Taxation

This document explains **how the platform splits payment flows** and **who carries the tax obligation**, depending on the **location or status of the customer** relative to Indonesia.

:::info[Scope]
The flows below assume the standard split: domestic transactions run through an Indonesian payment gateway, while international transactions run through a Merchant of Record. If internal policy differs, adjust this document accordingly.
:::

## 1. Customers in Indonesia

When a transaction is made by **a customer within the Indonesian scope** (handled as a domestic transaction under product policy):

- **Payment** is processed through an **Indonesian payment gateway**, and the transaction is **made in Silverspoon's name**. From the customer's point of view, Silverspoon appears as the seller and the party collecting payment, in line with the gateway configuration and contract.
- **Taxation** on that domestic transaction is **handled by Silverspoon**, because Silverspoon is a **legal entity domiciled in Indonesia** and is responsible for the tax obligations attached to domestic sales under applicable regulations.

**Why it works this way:** a domestic gateway plus an Indonesian entity keeps **cash flow**, **invoices and receipts**, and **sales or income tax obligations** inside a single Indonesian jurisdictional chain. There is no need to move the seller role to a foreign party for a transaction that is genuinely domestic.

## 2. Customers outside Indonesia (Merchant of Record flow)

When a transaction is made by **a customer outside the Indonesian domestic scope**, such as an international customer, payment can be processed through a **MoR platform** such as **Polar** or **Lemon Squeezy**:

- **Payment and consumer tax compliance in the customer's country** (VAT, GST, sales tax, relevant withholdings, and so on) are generally **handled by the MoR entity** in each country, according to that provider's capabilities and legal model.
- **The transaction between the international customer and the MoR** is made **in the MoR entity's name**, **not** in Silverspoon's name as a direct seller to the end consumer at the MoR checkout layer.
- **Silverspoon's tax obligation** on this path **does not replace** the tax already satisfied on the MoR side. What is reported and accounted for on Silverspoon's side is **tax on the income Silverspoon receives**, such as revenue share, fees, or settlement after the MoR deducts commission, transaction tax, and other costs under the MoR contract, **once** the tax obligations on the MoR side and in the relevant country have been met.

**Why it works this way:** the MoR lends its **legal "skin"** as the seller of record to the consumer, so **invoicing and tax collection** follow the **consumer's country rules** and the **MoR's own terms**. Silverspoon is closer to a **net revenue recipient** in a B2B relationship with the MoR, and Indonesian tax on Silverspoon follows the **character of the income flowing into the Indonesian entity**, not the full gross checkout paid by an overseas customer.

## 3. Crypto payments (NOWPayments)

Crypto is a **separate checkout path** from both of the above, available on any invoice as the **Crypto** channel. It is **not** a Merchant of Record.

- **Payment** is collected through **NOWPayments**, which hosts the crypto invoice and confirms the on-chain payment. The buyer sees a **0.5% surcharge** on top of the invoice total, shown as the channel fee before they are redirected.
- **Settlement** is **H+0**: once NOWPayments reports the payment as **finished**, the funds are marked withdrawable immediately, so crypto income does not wait for a settlement tier the way card and bank channels do.
- **Taxation** is **Silverspoon's own obligation**, like the domestic path — NOWPayments does not take on the seller role or remit consumer tax. Silverspoon remains the seller of record, and the crypto receipt is treated as consideration received for the sale.

**Why it works this way:** a crypto processor moves value, it does not change who sold what. The seller of record stays Silverspoon, so the tax character of the income does not change just because the settlement rail is a blockchain rather than a bank transfer.

## Comparison summary

| Aspect | Indonesia (Silverspoon direct) | International (MoR) | Crypto (NOWPayments) |
|--------|-------------------------------|---------------------|----------------------|
| Payment route | Indonesian payment gateway | MoR platform (Polar, Lemon Squeezy, and similar) | NOWPayments hosted invoice |
| Name on the customer-facing transaction | Silverspoon | The MoR entity | Silverspoon |
| Focus of transaction tax compliance | Silverspoon (Indonesian jurisdiction) | MoR plus the customer's country rules | Silverspoon |
| Silverspoon's position | Domestic seller | Post-MoR revenue recipient, per contract | Domestic seller, crypto settlement rail |
| Settlement | Per channel (H+2 / H+4) | Per MoR contract | H+0 once finished |

---

:::warning
This document is an **operational and internal policy explanation** for product documentation. For per-country transaction classification, rates, and concrete tax reporting, the details **must** be locked together with qualified tax and legal advisors.
:::
