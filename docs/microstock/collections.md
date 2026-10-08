---
title: Collections
description: Describe, lock, analyze, and curate a Microstock collection from upload to review.
sidebar_label: Collections
sidebar_position: 2
---

# Collections

A collection is simply a folder inside a Microstock workspace. It is described once, locked, analyzed, and then curated. The folder's status tells you which step comes next, so you do not need to guess what the interface is feeling today.

{/* TODO: screenshot static/img/docs/microstock/collection-toolbar.webp */}

## Creating a collection and uploading

1. Create a folder inside the Microstock workspace. That folder is your collection.
2. Upload your images into it.

Two rules apply, and both are enforced by the service, not just the interface:

- **Images only.** A collection accepts JPEG, PNG, WebP, and GIF. Other types are refused.
- **No uploads at the workspace root.** Everything belongs to a collection. If you try to upload at the root, you are asked to create a folder first.

Uploading into a collection that is already locked is also blocked, so once a collection moves on, its inputs are frozen.

## Step 1: Lock and describe

**Lock & Describe** is where you give the AI the context it needs. A good description here pays off across every file, because the AI uses it when writing titles and keywords.

The form has a few parts:

| Field | What to put there |
|-------|-------------------|
| Primary concept | What the collection is about, in a sentence. Required. |
| Visible subjects | What actually appears in the images. |
| Buyer intent | Who would buy these images, and for what. |

Notes:

- Only the primary concept is required, and it must be substantial enough to be useful. The overall description has a character limit.
- Every section is optional except that one, so you can start small and add detail later.
- When the daily free quota is available, a **Free / Paid** choice decides how this analysis is billed: Free uses the daily allowance first, Paid goes straight to your prepaid credit.

Locking a collection means it no longer accepts new uploads. If analysis later fails, you can lock it again to retry, and the form pre-fills from what you wrote before.

## Step 2: Analyze

**Start analysis** queues every image in the collection. The AI works in two stages per image:

1. **Vision** looks at the image and drafts what it sees.
2. **Thinking** turns that into marketplace-style metadata, informed by your collection description.

Each file shows a stage-aware badge in the listing, and the collection banner shows progress: how many files are processed, how many are still running, and how many failed. A collection that takes longer than usual is marked as degraded rather than failing outright.

Updates arrive live while you watch. If live updates are not available, the page falls back to a slower refresh, so progress still moves.

If the AI returns nothing usable for a file, that file is marked failed and can be re-analyzed on its own.

## Step 3: Review and curate

When analysis finishes, the collection moves to **review**. This is where you check the AI's work.

Open **Review files** from the toolbar, or use the review control on any row, to edit one image's metadata:

- **Title** is editable.
- **Keywords** are editable as chips: add, remove, and adjust as needed.
- **Description** and **category** sit behind an **AI details** toggle.
- A preview of the image is shown alongside, so you can judge the draft against what is actually there.
- **Re-analyze** asks the AI for a fresh draft if you are not happy with the current one.

Saving stores your edits. Once a file is curated, it is included in the export.

## Handling failures

| Situation | What to do |
|-----------|------------|
| One file failed | Re-analyze that file. |
| The whole collection failed | Lock it again, then start analysis. |
| Analysis is taking unusually long | Wait, or check the status banner. Files that genuinely stall are marked failed so you are not left guessing. |
| A collection is empty | Upload images first; analysis needs at least one file. |

## Related

- [Export and Upload](/docs/microstock/export-and-upload)
- [Credits and Usage](/docs/microstock/credits-and-usage)
