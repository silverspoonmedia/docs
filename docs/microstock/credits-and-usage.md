---
title: Credits and Usage
description: "Understand Microstock AI billing: prepaid credit, daily free analyses, the ledger, and per-call usage."
sidebar_label: Credits and Usage
sidebar_position: 4
---

# Credits and Usage

AI analysis costs money to run, so Microstock bills it directly rather than folding it into a storage plan. You pay for what you analyze, and you can see exactly where every unit went. Even the robots keep receipts.

{/* TODO: screenshot static/img/docs/microstock/usage-page.webp */}

## Two sources of credit

| Source | How it works |
|--------|--------------|
| Daily free | A small number of analyses per day, reset automatically. Available only when the daily free allowance is enabled. |
| Prepaid credit | A balance you top up. It does not expire on a daily cycle and is used whenever the daily allowance is not. |

When you lock a collection, you choose **Free** or **Paid** for that analysis:

- **Free** spends the daily allowance first, then falls back to prepaid credit.
- **Paid** goes straight to prepaid credit and leaves the daily allowance untouched.

If the daily allowance is not enabled on your account, only the prepaid path is available.

## The estimate before you start

The Lock & Describe form shows a billing line before you commit: an estimate per file, multiplied by the number of files in the collection. If your available balance cannot cover the estimate, the submit is blocked so you are not left with a half-analyzed collection.

The estimate is a buffer, not a bill. The actual charge is calculated from the tokens the AI actually used, so a straightforward image can cost less than the estimate.

## Where the charges come from

Each analysis runs in two stages, and both are metered:

| Stage | What it does |
|-------|--------------|
| Vision | Reads the image and drafts what it sees. |
| Thinking | Turns the draft into a title, description, category, and keywords, using your collection description as context. |

A thinking stage that needs a retry is still metered, which is why the estimate includes a margin for that.

## The usage page

Open **Microstock Usage** from the Archivd Microstock menu to see your balance and history. It has two tabs for regular users.

### Ledger

Every change to your balance, newest first.

| Column | Meaning |
|--------|---------|
| Date | When the entry was recorded. |
| Description | What the entry was for. |
| Amount | The change to your balance, positive or negative. |
| Balance | Your balance after that entry. |

Top-ups and analysis charges both appear here, so the running balance always adds up.

### Usage

Per-call detail, which is the most useful view when you want to know where credit actually went.

| Column | Meaning |
|--------|---------|
| File | The image that was analyzed. |
| Stage | Vision or thinking. |
| Model | The model that handled the call. |
| Tokens | How much work the call represented. |
| Cost | What that call cost you. |
| Source | Whether it came from the daily free allowance or prepaid credit. |

Use **Load more** to page further back.

## Practical advice

- **Curate before re-analyzing.** A re-analyze is a fresh billed analysis. Fix the description in Lock & Describe first if the whole collection came out wrong.
- **Describe well the first time.** A good collection description produces better titles and keywords, which means fewer re-runs.
- **Batch sensibly.** Analyzing a collection in one pass is cheaper than analyzing files one by one, because the AI can use the collection context.
- **Watch the daily allowance.** If it is enabled, spend it on small experiments and keep prepaid credit for real batches.

:::warning
Analysis is billed as it runs. Re-analyzing the same file repeatedly costs credit each time, and charges already incurred are not refunded if you later discard the metadata.
:::
