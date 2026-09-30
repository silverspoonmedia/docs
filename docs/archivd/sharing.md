---
title: Sharing
description: Share Archivd files and folders with a link, understand who can open them, and control access.
sidebar_label: Sharing
sidebar_position: 3
---

# Sharing

Archivd sharing is link based. You mark a file or folder as shareable, and anyone holding the link can open it, without needing an account.

{/* TODO: screenshot static/assets/docs/archivd/sharing-dialog.webp */}

## Visibility

Every file and folder is in one of two states:

| State | Who can open it |
|-------|-----------------|
| Private | Only you, and anyone you have given access to through a workspace. |
| Anyone with the link | Anyone holding the link. |

The link itself uses an unguessable identifier, so a shared item is not discoverable by browsing or searching. It is "anyone with the link", not "anyone on the internet".

## Folder inheritance

Sharing a folder shares what is inside it. A guest who opens a shared folder can browse its contents and download the files within, even if an individual file inside is set to private. That is intentional: a shared folder behaves like a shared folder, not a bag of separate links.

If you want to share one file and nothing else, share the file directly.

## Sharing requires a paid storage owner

Public links are a paid feature. Enabling **Anyone with the link** requires the account that owns the storage to be on an active paid plan.

- On a free or expired account, the option cannot be turned on, and the request is refused.
- If a paid plan lapses, existing links stop working. Guests get a not-found page even if the item is still marked as shareable in your drive. Your files are untouched; the links simply go dark until you renew.

Turning sharing **off** is always allowed, on any plan.

## Revoking a link

Switch an item back to **Private** to revoke it. The old link stops working right away, and any cached download access is invalidated at the same time.

## Guest pages

Shared items open on a public page:

- A shared file: `/s/f/{id}`
- A shared folder: `/s/d/{id}`

Guest pages show only what a visitor needs: the name, type, and size for files, and the folder contents for folders. Internal details such as storage location are never exposed. These pages are also excluded from search engines.

## View and download counts

Archivd tracks how many times a shared item has been viewed and downloaded, along with the most recent activity. You can use those numbers to tell whether a link is actually being used before you revoke it.

## Blocked content

We maintain a blocklist of file fingerprints for takedown requests, such as a valid DMCA notice. If a file's contents match an entry on that list:

- Turning sharing on for that file is refused, including in bulk when any file in the selection is affected.
- A link that was already active stops resolving, and guests get a not-found page.

The blocklist is managed by our staff and applies regardless of who owns the file.

:::note
Sharing works the same way inside a team workspace. The paid requirement follows the account that owns the workspace storage, not the person who happens to be looking at the file.
:::
