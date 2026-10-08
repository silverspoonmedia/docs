---
title: Export and Upload
description: Export a Microstock collection as CSV and optionally push the files and metadata to a marketplace.
sidebar_label: Export and Upload
sidebar_position: 3
---

# Export and Upload

Once a collection has been reviewed, you can take the metadata out. There are two routes: a CSV file you handle yourself, and an optional direct upload to a marketplace. Choose your preferred flavor of controlled automation.

The CSV is the primary path. Marketplace upload is additive: it does not replace the CSV, and it never moves or deletes anything in your workspace.

{/* TODO: screenshot static/img/docs/microstock/export-toolbar.webp */}

## Exporting the CSV

From a reviewed or exported collection, choose **Export CSV**. Archivd renders the file and stores it with the collection.

| Aspect | Detail |
|--------|--------|
| Scope | One collection at a time, from the files directly inside it |
| Included rows | Only files with finalized metadata |
| Columns | `filename`, `title`, `description`, `category`, `keywords` |
| Keyword separator | Comma |

Download the file with **Download CSV**, then import it into whatever marketplace you use. Re-exporting is safe: it renders the current state of the collection's metadata.

:::note
Because only finalized rows are exported, any file you have not reviewed yet is left out. If a file is missing from the CSV, it is usually because its metadata was never saved.
:::

## Marketplace credentials

Direct upload needs a stored credential for the marketplace. Open **Marketplace credentials** from the Archivd Microstock menu to manage them.

A credential holds the connection details for one marketplace account:

| Field | Notes |
|-------|-------|
| Marketplace | Which marketplace this credential is for. |
| Label | A name for you, so you can tell two credentials apart. |
| Host | The transfer host. |
| Username / Password | Your marketplace account details. |
| Port and remote path | Optional overrides for the connection. |

Credentials are encrypted before they are stored. The password is never kept in plain text, and it is never shown back to you after saving.

Each credential also carries a **status**, which is written by the upload process rather than by you:

| Status | Meaning |
|--------|---------|
| Not verified | Stored, but no transfer has succeeded yet. |
| Verified | A transfer was accepted by the marketplace. |
| Failed | A transfer was rejected; the reason is attached to the row. |

If a credential is marked **Failed**, hover or tap the badge to read the last error before trying again.

## Uploading to a marketplace

From a collection in **review** or **exported**, choose **Upload to marketplace**, then pick a credential. You need at least one saved credential; if you have none, the button points you to the credentials page.

What happens on Silverspoon's side:

1. The upload is queued.
2. The files and a metadata manifest are transferred over SFTP.
3. The status on the collection updates as it progresses.

| Status | Meaning |
|--------|---------|
| Queued | Waiting for a worker to pick it up. |
| Uploading | Transfer in progress. |
| Uploaded | The marketplace accepted the batch. |
| Failed | The transfer was refused; the collection shows the reason. |

A few behaviors worth knowing:

- **The remote filename is always the local filename.** Marketplaces match metadata rows to files by name, so renaming a file would detach its metadata.
- **Only finalized files are sent.** Unreviewed files are skipped, just like in the CSV.
- **Nothing local changes.** Your files stay where they are, and the metadata row survives the upload. If a marketplace rejects the batch, you can fix the metadata and try again.
- **A completed attempt is not repeated.** Once a batch is uploaded, the same attempt is not re-transferred.

The marketplace's own review queue is the system of record after the upload. Silverspoon records that the transfer happened and what the marketplace answered; what it does with the files from there is up to that platform.

## Currently supported marketplaces

Adobe Stock is the marketplace wired for direct upload today. Other marketplaces can be added as transfer profiles, so the picker may list names that are not yet enabled for upload. If a marketplace is not configured, the upload is refused rather than attempted.

For anything not yet supported, the CSV export works everywhere.
