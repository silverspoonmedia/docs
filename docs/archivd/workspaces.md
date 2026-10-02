---
title: Team Workspaces
description: Create and manage Archivd team workspaces, invite members, and understand the four roles.
sidebar_label: Team Workspaces
sidebar_position: 4
---

# Team Workspaces

A team workspace is a shared space for files more than one person needs to reach. It sits alongside your personal drive, and the workspace switcher moves you between them. Collaboration, now with fewer mystery folders named `final-final-really-final`.

Team workspaces are the paid part of Archivd. The workspace is created and owned by a paid account, and its files count against that owner's storage quota, not against each member's personal allowance.

{/* TODO: screenshot static/assets/docs/archivd/workspace-switcher.webp */}

## What free and paid accounts can do

| Action | Free | Paid |
|--------|------|------|
| Use personal storage | Yes, within the free tier | Yes |
| Join a team you were invited to | Yes, using the owner's quota | Yes |
| Create a team workspace | No | Yes, up to the owned slot limit |
| Invite members to a team you own | No | Yes |
| Join other people's teams | Unlimited | Unlimited |

Owning your own workspaces does not stop you from joining someone else's. A user can own several workspaces and be a member of others at the same time; your role is tracked per workspace.

## Creating a workspace

On a paid plan, use **Create team workspace** in the workspace switcher, give it a name, and it appears in the switcher immediately.

How many you can own depends on your plan:

- Every active paid Archivd storage plan includes **10 owned team workspaces**.
- Each **Team Workspace Slot** add-on adds one more slot.
- Archiving a workspace frees its slot. Creating always adds a new one; archived workspaces are not reused.

The switcher shows a counter such as `Owned teams: 4 / 10` so you can see how close you are to the limit.

## Inviting members

Open the workspace and use the invite form. Choose the role the new member should have and submit. Archivd returns an **invite token** for that invitation.

:::note
Invitations are token based. The current release does not send the invitation email for you, so copy the token and share it with the person yourself, over whatever channel you trust.
:::

The person you invited joins by opening the workspace switcher, choosing **I have an invite token**, pasting the token, and confirming. Joining works on both free and paid accounts.

## Roles

Each member has exactly one role in a workspace.

| Role | Can do |
|------|--------|
| Owner | Everything: create and archive the workspace, manage members, all file operations, full activity log. |
| Admin | Manage members (invite, change role, remove) and all file operations. |
| Editor | Upload, rename, move, and delete files. Cannot manage members. |
| Viewer | Browse and download only. |

Owner and Admin can change a member's role or remove them. Members who are not Owner or Admin see the roster read-only.

## Working in a workspace

File operations behave the same as in your personal drive: nested folders, upload, rename, move, multi-select, search, and trash. What changes is who can see the files and whose quota they consume.

- Files in a workspace use the **owner's** storage pool, so a member's personal free tier is untouched.
- If you are a member of someone else's workspace, the quota bar still reflects your own personal usage, because the workspace has its own pool.
- Uploading and editing do not require a paid plan on the member's side. Only creating a workspace and managing its members do.

## Activity log

Workspace activity records who added, renamed, moved, or deleted items, along with membership changes. Any active member can open it, which makes it easy to see how a shared folder reached its current state.

## Archiving a workspace

Archiving closes the workspace for everyone; members lose access and the slot is released. The workspace is not deleted outright, so this is the reversible option when you want to stop using a team without destroying it.

:::warning
Archiving removes access for all members immediately. If the team is still active, coordinate first.
:::

## During grace

If the owner's paid plan lapses into grace, uploads and collaborative features stay blocked until it is renewed. Existing files remain readable, and members keep their existing access unless the workspace owner's storage is grace-blocked. Renewing restores normal operation; nothing is lost while the plan is in grace.
