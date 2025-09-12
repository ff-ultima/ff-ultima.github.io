---
sidebar_position: 3
description: For users of Sidebery (optional)
---

# Sidebery

:::note Sidebery is optional!

Sidebery is not a dependency of FF Ultima and is completely optional, while configuration does exist (below), it is not the primary focus of the theme.

:::

Here's a preview of Vertical Tabs & Sidebery right next to it. Can you spot the difference?

<img width="49%" src="../../img/settings/sideberyonly.gif" /> <img width="49%" src="../../img/settings/verttabsonly.gif" />

Well yeah, you can spot the difference. But the point is.. Sidebery is automatically themed to be as consistent as possible to the native vertical tabs. This theming is only based on the colors of the current Color Scheme, so configuring your sidebery in other ways is still possible (since nothing else is modified).

## Sidebery Autohiding

When using sidebery.autohide, the sidebar will push the browser content to the side when hovering. This is default behavior for an element with relative positioning. If you opt-in to disabling the vertical tab bar, then you can have it overlay browser content instead.

<img width="49%" src="../../img/settings/sidebarbehavior.gif" />

## How to use Sidebery ONLY (with vertical tab bar disabled)

:::danger Note
This <ins>only works with</ins> ExpandOnHover `on` for Vertical Tabs.
:::
1. Open Sidebery
2. Enable `ultima.tabs.vertical.hide` to completely hide the Vertical tab bar.
   - `Optional` To keep the verttabbar accessible. Enable `ultima.tabs.vertical.hide.in.screenedge` to have them hide in screen edge.
   - `Optional` To keep the verttabbar accessible. Enable `ultima.tabs.vertical.hide.in.screencorner` to have them hide in bottom screen corner.
   - `Optional` Turn off `ultima.sidebar.revamped.hide.when.horizontal` if the revamped sidebar is still visible.

<iframe width="100%" height="490" src="https://github.com/user-attachments/assets/20241a30-a7c5-4430-a6b5-ad65433005f9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!-- https://github.com/user-attachments/assets/20241a30-a7c5-4430-a6b5-ad65433005f9 -->




## Sidebery Extension Settings

> This is for best compatibility with the theme, other configurations should work just fine but they are unaccounted for.

![sidebery](https://github.com/user-attachments/assets/c012bf97-e4f4-4539-96dd-b6d60d61e036)

![Screenshot_20250507_045918](https://github.com/user-attachments/assets/62ab45f8-fd58-4501-80c5-36a691986c1a)

...

## Personal Configurations

If you ever want to change Sidebery theme, either change your Color Scheme `user.theme.` or turn off `user.theme.xtension.sidebery` to use default Sidebery (unmodified). You may be able to modify FF-Ultima's configuration in Sidebery's Style Editor too (untested).

If you scroll down to `Other` in the Sidebery Style Editor. FF Ultima `uc` variables are recognized and editable. I haven't tested these much but it was surprising to see that Sidebery can detect them.

![Sidebery Style Editor](https://github.com/user-attachments/assets/7e87b15f-6fa4-4660-8262-88bab256e0e1)

# That's all

<iframe width="100%" height="490" autoplay="false" src="https://www.youtube.com/embed/xtUBmixQHvo?si=sbwFFhKCRRK4OeaR" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>