---
title: Disposable Email
description: How to use disposable email addresses and email forwarding to protect your privacy when registering.
sidebar_label: Disposable Email
sidebar_position: 1
---

# Disposable Email

As mentioned in the [Privacy Policy](/docs/legal/privacy#registering) about account registration, users are allowed to register on Silverspoon services using an email address from any disposable email service as a form of privacy protection, if needed.

## Before you start

The services described below are external, so we do not provide support related to them, such as how to do this or customize that. Paid technical support may be available from us; please send an inquiry beforehand.

This document only briefly explains how to use disposable email services. We are not affiliated with or sponsored by any of the providers written about here. Please do your own research if needed.

## Easy way

This section covers easy ways to use a disposable email service. No special skills are required and there are no costs involved, but the inbox is usually not secure because it can be accessed publicly by anyone who knows the address.

> **Technical note:** The email is stored on the server owned by the disposable email service provider.

1. Open [Inboxes](https://inboxes.com).

   ![Inboxes home](/assets/docs/guide/disposable-email/01.webp)

   By default, you get a random email address, for example `hexa@blondmail.com`.

2. We do not recommend using the default address, as it is too generic. Customize the address by clicking the **Add Inbox** button.

   ![Add Inbox button](/assets/docs/guide/disposable-email/02.webp)

   You will be given the option to determine your own email address. For example, `wakasilverman@guysmail.com`.

3. Sit tight and use this email address to register on various sites.

   ![Inbox view](/assets/docs/guide/disposable-email/03a.webp)

   Just like any other email system, press the refresh button if you want to check your inbox.

   ![Opening an email](/assets/docs/guide/disposable-email/03b.webp)

   You can also open the email to see its content.

4. When you want to add or move from one inbox to another, use the **Add Inbox** button and repeat from step two.

There are still many disposable email services besides Inboxes, but most of them do not provide features for customizing email addresses for free. That is why Inboxes is highlighted as the main choice here.

:::warning
Every disposable email service has its own rules. Read carefully about important things such as how long they keep your inbox, content, attachment limits, and so on.
:::

## Hard way

This section covers somewhat harder ways to use disposable email, as these methods require interaction with things you may rarely encounter. Usually the inbox is more secure because it can only be accessed privately. This section typically requires the purchase of a good or service.

> **Technical note:** The email is stored on the server owned by your own email service provider.

### Option 1: Email forwarder by domain registrar

If you are focused on branding or identity, there is no harm in buying a domain right now. You can use this domain as an alias for your landing page, such as when using Carrd or Wix.

Beyond being an alias for your landing page, the domain can also be used as an alias for your email address, which can then act as your personal disposable email address.

When buying a domain, some registrars provide email forwarding for free. Usually the number of aliases is limited but still sufficient for various purposes.

#### Example on Namecheap

Some of the main domains we own are registered through Namecheap. Based on experience, Namecheap provides up to **100 forwarding email addresses** for free.

> **Technical note:** The example domain used here is `naha.dev`.

1. Click the **Manage** button to configure your own domain from the Namecheap panel.

   ![Namecheap manage button](/assets/docs/guide/disposable-email/04.webp)

2. To use their email forwarding, you are required to use either BasicDNS, PremiumDNS, or their FreeDNS in the **Domain** tab section.

   ![Namecheap DNS selection](/assets/docs/guide/disposable-email/05.webp)

   In this example, BasicDNS is used.

3. In the **Advance DNS** tab, specifically in the mail setting section, choose **Email Forwarding**.

   ![Namecheap email forwarding setting](/assets/docs/guide/disposable-email/06.webp)

4. Go back to the **Domain** tab, under the **Redirect Email** section, and start adding aliases and their destinations using the **Add Forwarder** button.

   ![Namecheap add forwarder](/assets/docs/guide/disposable-email/07.webp)

   For example, with the settings above, email from `waka@naha.dev` is sent to `noob@master.com`.

5. From the same **Redirect Email** section, you can also populate random aliases and their destinations using the **Add Catch-All** button.

   ![Namecheap add catch-all](/assets/docs/guide/disposable-email/08.webp)

   For example, with the settings above, all email aliases that are not set up are sent to `dumb@master.com`. Aliases that are already set, like `waka@naha.dev`, are still sent to their configured destination `noob@master.com`.

:::tip
Before making a purchase, consult with your domain registrar regarding technical issues, such as whether they provide free email forwarding, how to perform basic DNS setup, limitations, and so on.
:::

### Option 2: Email forwarder by Cloudflare

Domain prices differ between registrars. Suppose you choose a registrar that offers cheap prices but does not provide email forwarding. Worry not, you do not need to throw that domain away. In that case, we utilize a third party service called Cloudflare.

> **Technical note:** The example domain used here is `spn.ink`.

1. Add a domain to your Cloudflare account.
2. Make sure the nameservers you are using match the ones specified.

   ![Cloudflare nameservers](/assets/docs/guide/disposable-email/09.webp)

   In the **DNS** menu, Cloudflare instructs that the nameservers to use are `elly.ns.cloudflare.com` and `fattouche.ns.cloudflare.com`.

   ![Domain nameserver settings](/assets/docs/guide/disposable-email/10.webp)

   So the nameserver settings in the domain are also `elly.ns.cloudflare.com` and `fattouche.ns.cloudflare.com`.

3. After ensuring the nameservers are correct, go to the **Email** menu.

   ![Cloudflare email menu](/assets/docs/guide/disposable-email/11.webp)

   Start the setup by pressing the **Get Started** button.

4. As usual, fill in the **Custom address** section with the alias you want and fill in the **Destination** section with its destination.

   ![Cloudflare custom address](/assets/docs/guide/disposable-email/12.webp)

   For example, with the settings above, email from `waka@spn.ink` is sent to `wakasilverman@guysmail.com`. Click **Create and Continue** to proceed.

5. Check your destination email. Usually Cloudflare will confirm whether you accept the routing or not. Click **Verify email address** to verify.

   ![Cloudflare verify email](/assets/docs/guide/disposable-email/13.webp)

   If you accept, the email is sent to the destination you specified.

6. Navigate to **Destination address**, where you can see and set the destination of incoming email addresses.

   ![Cloudflare destination addresses](/assets/docs/guide/disposable-email/14.webp)

   Cloudflare provides up to **200 routing email addresses** for free.

7. Currently you still cannot receive email, as their "email routing is currently disabled and not routing emails" notice states, because you need to configure it. Click the **Enable Email Routing** link.
8. You will then be given information about the DNS records you need to configure.

   ![Cloudflare DNS records](/assets/docs/guide/disposable-email/15.webp)

   Do not worry, just click the **Add records and enable** button so the settings are applied automatically.

9. The setup can be considered complete and ready to use once you see the result below.

   ![Cloudflare routing enabled](/assets/docs/guide/disposable-email/16.webp)

Email routing is a product owned by Cloudflare. For further settings and customization, refer to their [official documentation](https://developers.cloudflare.com/email-routing/).

## Verdict

If you are very paranoid about security, we suggest combining both disposable email and email forwarding services, so your main inbox never receives email from anywhere.

- **On the disposable email side:** create a new inbox with a very long and random string using a random string generator, such as `yhm2uxie2fifxaqkvm6qamzzbztcsu4w@guysmail.com`.
- **On the email forwarding side:** create a new static forwarder alias, such as `waka@spn.ink`, with `yhm2uxie2fifxaqkvm6qamzzbztcsu4w@guysmail.com` as the destination.
- Whenever the disposable email address is no longer available, you can just update it through your email forwarder, so you will not lose access to any services. In terms of identity, you use `waka@spn.ink` as your email address.

There are many [disposable email services](https://www.google.com/search?q=disposable+email+service) you can try. Please try and decide for yourself which service you like the most, because the options are not limited to what is written above.

:::warning
The use of disposable emails may not be permitted on services on other sites. Please do your own research and decide how you will use it.
:::
