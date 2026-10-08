---
title: Files and Folders
description: Browse, upload, organize, search, and delete files in your Archivd drive.
sidebar_label: Files and Folders
sidebar_position: 2
---

# Files and Folders

This page covers the everyday work in Archivd: getting files in, keeping them tidy, finding them again, and cleaning up. In other words, the glamorous life of putting things in folders.

{/* TODO: screenshot static/img/docs/archivd/files-listing.webp */}

## Browsing

Your drive opens on a listing of folders and files. You can switch between a grid and a list view, and folders open in place without a full page reload.

Nested folders work the way you expect. A breadcrumb trail across the top shows where you are and doubles as a shortcut back up the tree. At the root there is nothing above you, so no parent row appears. Inside a folder, a leading `...` entry takes you to the parent folder, and you can drop a dragged item directly onto a breadcrumb chip or that parent entry to move it there.

## Uploading

Drag files onto the page or use the upload button. Uploads are chunked and run a few parts at a time, so a large file does not depend on one long-lived connection.

| Limit | Value |
|-------|-------|
| Maximum size per file | 5 GiB |
| Maximum files per batch | 20 |
| Concurrent upload sessions | 2 |
| Accepted file types | images, documents, text, audio, video |

A few things worth knowing before you start a big upload:

- **There is no resume.** If an upload dies partway through, it restarts from the beginning. For very large files on an unstable connection, plan for that.
- **Pending uploads count against your quota.** A file that is still uploading reserves its space so you cannot overshoot the limit mid-transfer.
- **Two sessions at a time.** Starting a third file waits until one of the running sessions finishes.
- **Types outside the allowed set are rejected** before the upload starts.

## Names and collisions

Archivd keeps your chosen name wherever it can. If a name is already taken by a sibling in the same folder, you do not get an error on upload or move: the file is renamed automatically to `Name (2).ext`, `Name (3).ext`, and so on. Folders without an extension become `Name (2)`.

That automatic rename applies to uploads and moves. If you rename something by hand, the exact name you typed is respected, and a duplicate is rejected so you stay in control.

## Renaming, moving, and multi-select

You can act on a single item through its context menu or on many at once through the bulk bar that appears when you select items. Single and bulk actions stay in step, so anything you can do to one file you can do to a selection. The bulk bar covers move, share, unshare, and delete.

## Searching

A search box finds files by name across your drive, so you do not have to remember which folder something is in.

## Trash

Deleting a file or folder moves it to the trash rather than removing it immediately. Open **Trash** from the Archivd menu to see what is waiting there.

- **Restore** puts the item back where it came from.
- **Delete permanently** removes it for good and frees the space.
- Bulk actions work here too, so you can empty several items at once.

:::warning
Permanent deletion cannot be undone. If your quota is full and you want the space back, empty the trash after you are sure about what you are removing.
:::

## File details

Selecting a file opens a details view with its name, size, type, and timestamps. If sharing is available to you, the same view is where you turn a link on or off. See [Sharing](/docs/archivd/sharing) for that part.
