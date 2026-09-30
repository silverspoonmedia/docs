---
title: External Link
description: Add, edit, verify, and delete external links, including special links like Twitch and YouTube.
sidebar_label: External Link
sidebar_position: 7
---

# External Link

Content creators typically have external links pointing to their channels or social media accounts. To accommodate this, we provide an [External Link menu](https://www.vtual.net/apps/account-manager/link).

Links fall into two categories:

- **General links** can be added, modified, or deleted without any consequences. They are generally public and serve as additional information that is not related to data integration within the system, such as a Twitter link.
- **Special links** come with consequences tied to their integration into the system. Examples include Twitch and YouTube, which, once successfully verified, automatically monitor the activity of the associated channels. Deleting a verified Twitch or YouTube link automatically removes the entire channel and all associated content.

## All links

Every link you have added can be viewed through the External Link menu, along with relevant information and the actions available to you.

![vTual link list](/assets/docs/vtual/App_Link_List.webp)

If you have a large number of links, you can take advantage of the search feature.

## Add a link

To add a new link, click the **Add New** button. You will then be presented with several options, including **Service** and **Link**.

![vTual add link form](/assets/docs/vtual/App_Link_Add.webp)

**Service** refers to the platform of the link you want to add. For example, to add a Twitter link, select "Twitter" in the service section and fill in the link field with your Twitter URL.

Once you have confirmed the link is correct, complete the action by clicking **Add**.

## Edit a link

If there is a link you want to change, go to the External Link menu, click the **Action** button, and select **Edit**.

![vTual edit link form](/assets/docs/vtual/App_Link_Edit.webp)

After that, follow the same steps as when adding a link: choose the service, then fill in the link field.

:::warning
Some considerations apply when changing links, especially special links like Twitch or YouTube. When changing a Twitch or YouTube link, you cannot modify the **Service** section; you can only change the link itself.
:::

## Verify a link

Some links are categorized as special links because of their advanced integration into the system once added and successfully verified. Currently, these include:

- Twitch
- YouTube

If you add a special link without verifying it, the link appears only as additional information with no extra features, just like an ordinary general link.

If you choose to verify that the link belongs to your channel, the vTual system begins checking your channel's activity **every three minutes**. New content is then displayed on the vTual website.

> For more about the processing schedule and its challenges, see [Disparity in Data](/docs/vtual/legal/disparity).

A special link can be identified easily, as its status is "Initial" after it has been added. To verify a special link, go to the External Link menu, click the **Action** button, and select **Verify Link**. You will then receive the latest information regarding the guidelines and requirements for verifying special links.

![vTual verify link dialog](/assets/docs/vtual/App_Link_Verify.webp)

Each service has its own guidelines and requirements. The verification mechanism is the same, though: you add a unique detail in the description field of your channel. Refer to the official documentation for how to change your [Twitch bio](https://help.twitch.tv/s/article/twitch-account-settings?language=en_US#profile) or [YouTube description](https://support.google.com/youtube/answer/2657964).

Once you have confirmed that you have read and understood the verification process, complete the action by clicking **Submit**.

Also read the [Privacy Notice: Third-Party Platforms](/docs/vtual/legal/privacy) regarding the data vTual stores about your channel and content.

### Known limits

The link verification process has several limitations to be aware of:

- You can only add **one verified link per service**.
  - One verified link includes the channel and its content.
  - Since the available services are currently only Twitch and YouTube, this means you can only have one verified Twitch account and one verified YouTube account, and the limits cannot be exchanged between services.
- You can only click the **Submit** button **twice within a 60-minute period**, regardless of whether the process succeeds or not.
  - This limit is not reset hourly. It resets one hour (60 minutes) from the last time you clicked **Submit**. For example, if you click **Submit** at 1:23 AM, the limit resets at 2:23 AM, not at 1:00 AM, 2:00 AM, and so on.
- Similar to the [handler](/docs/vtual/app/account-manager/handler), the special links you can add only support the alphabet. Links containing other writing systems, such as Arabic, Kanji, or Hangul, are not currently supported, even though the official API probably supports them.
  - For example, Sakuna's YouTube canonical id is [UCrV1Hf5r8P148idjoSfrGEQ](https://www.youtube.com/channel/UCrV1Hf5r8P148idjoSfrGEQ), while her current handler is [@結城さくな](https://www.youtube.com/@%E7%B5%90%E5%9F%8E%E3%81%95%E3%81%8F%E3%81%AA).
  - Technically, YouTube accepts API requests for both [channel id](https://www.googleapis.com/youtube/v3/channels?id=UCrV1Hf5r8P148idjoSfrGEQ&part=snippet&key=provideYourAPIKeyHere) and [handlers](https://www.googleapis.com/youtube/v3/channels?forHandle=@%E7%B5%90%E5%9F%8E%E3%81%95%E3%81%8F%E3%81%AA&part=snippet&key=provideYourAPIKeyHere), even non-alphabetic ones.
  - However, for various reasons, our humble backend struggles to process non-alphabetic characters. While it is technically possible through the API, it tends to get stuck in our backend, because we have difficulty sending non-alphabetic `forHandle` parameters, which leads to failures caused by this false positive.
  - Therefore, if your handler uses non-alphabetic characters, please use a canonical link instead.

The limits may change at any time.

### No OAuth

The channel verification process determines whether a user can provide unique information specified by vTual related to their account. For example, can you add `vtl#secret` to your biodata?

The conclusion is simple: if the user can provide the given unique information, then the user has access rights to the channel, and channel verification is marked as successful.

This is a primitive method adopted to avoid implementing OAuth, which is a much more advanced approach for verification and validation.

Why no OAuth? Although OAuth can simplify verification, it comes with significant responsibilities. Users must first consent to the use of OAuth, which then grants a scope of permission to applications like vTual to access their account and related information. While that access can be personalized according to a set of permissions, such as "read-only access without the ability to modify the account," it can still challenge people who do not fully understand how OAuth works.

"Why is this application trying to log into my account? This must be a hacking attempt!" That is one of many responses OAuth can provoke.

> OAuth has actually been prepared by many services and is not a form of hacking attack. You can read about its definition and scope on [Wikipedia](https://en.wikipedia.org/wiki/OAuth). One easy example is logging into your Epic Games account using your Steam account.

Using OAuth also requires additional approval from the relevant services, which may unnecessarily increase the workload for a feature that is not even needed. Therefore, we decided not to implement OAuth at all, at least for the latest version 1.1.

## Delete a link

To delete a **general link**, go to the External Link menu, click the **Action** button, and select **Delete**.

To delete a **special link**, go to the External Link menu, click the **Action** button, and select **Confirm Delete**.

You will then be given confirmation about whether you truly want to delete it and the consequences, since the channel and its content will also be removed. Deleted links can be re-added to the system by anyone afterwards.

![vTual delete link confirmation](/assets/docs/vtual/Link_Delete_Confirm.webp)

To confirm the deletion of a special link, retype the identifier of the related link and click **Confirm**.

After you delete a verified special link, such as YouTube, you have the opportunity to add a new YouTube or other special link for that service.
