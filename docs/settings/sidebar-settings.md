---
sidebar_position: 2
description: Sidebar theming, spacing, behavior, etc.
---

# Sidebar Settings

> Theme settings are accessible via the `about:config` page. Type `ultima` or `user.theme` to get started.

<!--
### ultima.sidebar.autohide

Tthis setting will show/hide all sidebars (not vertical tabs) when hovered
<iframe width="75%" height="355" src="https://github.com/user-attachments/assets/bbd5cd62-b29c-41cd-b1db-ea463abcedc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
-->

### ultima.sidebery.autohide

This setting will show/hide Sidebery when hovered (other sidebars will remain a static width)

<img width="49%" src="../../img/settings/sideberyautohidewithtabsdisabled.gif" />
<img width="49%" src="../../img/settings/sideberyautohidewithdefaulttabs.gif" />

### ultima.tabs.tabbar.disabled & ultima.tabs.tabbar.autohide

> These settings can be combined with sidebery.autohide. Learn more by checking out Sidebery Configuration [here ->](../sidebery)

Both of these settings work for horizontal or vertical tabs, expandOnHover should be `OFF` when using vertical tabs

- ultima.tabs.tabbar.disabled -> will completely hide the tab bar
- ultima.tabs.tabbar.autohide -> will completely hide the tab bar <ins> within the edge of the screen </ins>

<iframe width="100%" height="540" src="/img/settings/tabbarhiding.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### user.theme.xtension.sidebery

This setting allows Sidebery to automatically adapt to Color Scheme colors

Learn more about this in the Sidebery configuration docs, [here](../sidebery)

### ultima.sidebar.seperator

This setting seperates the vertical tab bar and sidebar to opposite sides of the browser
<iframe width="75%" height="355" src="https://github.com/user-attachments/assets/537f41b0-f43f-466f-b24c-dc8519c99f46" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### ultima.sidebar.revamped.hide.when.horizontal

When `on`, this setting will completely remove the extra sidebar when using horizontal tabs. When `off`, it keeps the revamped sidebar visible even when using Horizontal Tabs.

<img width="150" src="/img/settings/hiderevamped.png"/>

### ultima.sidebar.hide.header

This setting hides the sidebar header

### ultima.sidebery.expandon.inactive.windows

When using sidebery autohide, this setting will keep the sidebar expanded when the browser window is inactive (not in focus)
<iframe width="100%" height="540" src="https://github.com/user-attachments/assets/ba481ce4-957a-4c06-a198-ce239be939f9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

