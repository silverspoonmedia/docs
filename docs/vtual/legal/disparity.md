---
title: Disparity in Data
description: Why the data shown on vTual may not be real-time, and the systems behind it.
sidebar_label: Disparity in Data
sidebar_position: 8
---

# Disparity in Data

vTual is committed to providing information about the activities of content creators across various platforms.

However, we must acknowledge certain limitations to that commitment, along with the goals and mission we aim to achieve. While we strive to deliver comprehensive updates, several factors can affect our ability to fully realize that vision.

:::info[TL;DR]
The data you see is potentially not real-time.
:::

## Affected data

Some of the data affected by this disparity includes the YouTube and Twitch feeds.

### YouTube feeds

At vTual, content uploaded or created and made publicly available on YouTube is referred to as the **YouTube Feed**. There are two types of data processing within it: Initial and Checker.

#### Initial

The Initial function serves as the entry point for all content from your YouTube channel, exporting the entire collection of your channel's content into your vTual profile.

The data handled by the Initial function is raw data from YouTube, since it lacks sufficient information. By default, data from this function is not displayed on the vTual system.

The Initial function runs every **10 minutes**, which is the first reason for disparity in YouTube-related data. During that period, new data may exist, but we can only retrieve the information 10 minutes later.

#### Checker

Raw data taken directly from YouTube is then checked and processed by the Checker function, which adds additional details such as view counts, published date, or schedule dates.

The Checker function runs every **3 minutes**, which is the second reason for disparity in YouTube-related data. During that period, there may be a new value for the number of viewers, but we can only retrieve the information 3 minutes later.

### Twitch feeds

At vTual, content streamed and made publicly available on Twitch is referred to as the **Twitch Feed**. Currently there is only one type of data processing within it: Checker.

#### Checker

Raw data taken directly from Twitch is checked and processed by the Checker function, which adds additional details such as view counts, published date, or schedule dates.

The Checker function runs every **3 minutes**, which is the first reason for disparity in Twitch-related data. During that period, there may be a new value for the number of viewers, but we can only retrieve the information 3 minutes later.

## Challenges in the system

vTual handles and manages a large volume of data, which presents a unique challenge in both development and maintenance.

We employ various strategies to make this process more efficient and streamlined while keeping it cost-effective. In practice, some of these also cause disparity in data.

### Chunk

In a single data processing cycle, vTual typically needs to handle hundreds to thousands of data entries within the same period. That can put a significant load on the server.

To address this, vTual employs a method that divides the workload into smaller parts, known as chunks. Instead of processing 1,000 data entries all at once, we process 100 entries at a time over ten cycles. In theory, at least. This approach helps distribute the server load more evenly and ensures smoother operations.

It allows the server to work and process data more efficiently, reducing the overall strain. However, it may sometimes result in longer processing times before the data is fully available, which becomes another reason for disparity in data.

### Database pool

vTual handles and manages a large volume of data. The heavier the load that needs to be supported, the stronger the support must be.

In this case, vTual opts for a **horizontal scaling** approach rather than vertical scaling. In other words, vTual prefers 100 people each lifting 1 kilogram rather than a single person lifting 100 kilograms. This strategy ensures a more balanced and resilient system.

In simple terms, vTual prefers to store and manage data across several smaller servers rather than relying on a single large, centralized server. We believe this approach is safer, more efficient, and more cost-effective.

However, this approach requires a pooler to collect and synchronize data from each server involved in data processing. The pooler must ensure that all information is accurately aggregated and up-to-date across the distributed system, which becomes another reason for disparity in data.

## Verdict

Developing and maintaining a project like vTual is not as simple as it seems. The costs involved have also significantly exceeded our initial expectations. Nevertheless, we remain committed to delivering the best possible experience for all our users despite all of these challenges.
