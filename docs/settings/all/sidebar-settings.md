---
sidebar_position: 2
description: Sidebar theming, spacing, behavior, etc.
---

# Sidebar Settings

> Theme settings are accessible via the `about:config` page. Type `ultima` or `user.theme` to get started.

### ultima.sidebar.autohide

Tthis setting will show/hide all sidebars (not vertical tabs) when hovered
<iframe width="75%" height="355" src="https://github.com/user-attachments/assets/bbd5cd62-b29c-41cd-b1db-ea463abcedc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### ultima.sidebery.autohide

Tthis setting will show/hide Sidebery when hovered (other sidebars will remain a static width)
<iframe width="75%" height="355" src="https://github.com/user-attachments/assets/951ce0d7-4d21-4f72-92c3-b6b6667354c4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### ultima.tabs.vertical.hide (hiding the vertical tab bar)

`ultima.tabs.vertical.hide` will hide vertical tabs completely (great for Sidebery setups)
- when combined with `ultima.tabs.vertical.hide.in.screencorner`, vertical tabs will be hidden at the bottom corner of the screen
- or combined with `ultima.tabs.vertical.hide.in.screenedge`, vertical tabs will be hidden in the screen edge

<iframe width="100%" height="490" src="https://github.com/user-attachments/assets/20241a30-a7c5-4430-a6b5-ad65433005f9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::warning important

For stability, `ultima.tabs.vertical.hide` is reliant on ExpandonHover being `ON`. This allows a consistent experience across the browser, whether in private browsing, or a different OS.
 <img src="https://github.com/user-attachments/assets/35c9c53f-2c6c-40c9-942a-cc5649473213" width="90%" />

If you're interested in a Sidebery configuration be sure to check out the documentation [here](../sidebery)
:::

### ultima.sidebar.revamped.hide.when.horizontal

When `on`, this setting will completely remove the extra sidebar when using horizontal tabs. When `off`, it keeps the revamped sidebar visible even when using Horizontal Tabs.

<img width="150" src="/img/settings/hiderevamped.png"/>

### ultima.sidebar.seperator

This setting seperates the vertical tab bar and sidebar to opposite sides of the browser
<iframe width="75%" height="355" src="https://github.com/user-attachments/assets/537f41b0-f43f-466f-b24c-dc8519c99f46" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### ultima.sidebery.expandon.inactive.windows

When using sidebery autohide, this setting will keep the sidebar expanded when the browser window is inactive (not in focus)
<iframe width="75%" height="355" src="https://github.com/user-attachments/assets/ba481ce4-957a-4c06-a198-ce239be939f9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### user.theme.xtension.sidebery

This setting allows Sidebery to automatically adapt to Color Scheme colors

Learn more about this in the Sidebery configuration docs, [here](../sidebery)

### ultima.sidebar.hide.header

This setting hides the sidebar header

### ultima.sidebar.revamped.hide.when.horizontal

Hides the new revamped sidebar when using horizontal tabs


