---
sidebar_position: 1
description: For users of Sidebery (optional)
---




# Sidebery

:::note Sidebery is optional!

Sidebery is not a dependency of FF Ultima and is completely optional, while configuration does exist (below), it is not the primary focus of the theme.

:::

Here's a preview of Vertical Tabs & Sidebery side by side. Can you spot the difference?

<img width="49%" src="../../img/settings/sideberyonly.gif" /> <img width="49%" src="../../img/settings/verttabsonly.gif" />

Well yeah, you can spot the difference. But the point is.. Sidebery is automatically themed to be as consistent as possible to the native vertical tabs. This theming is only based on the colors of the current Color Scheme, so configuring your sidebery in other ways is still possible (since nothing else is modified).




## Sidebery Autohiding

When using `sidebery.autohide`, the sidebar will push the browser content to the side when hovering. This is default behavior for an element with relative positioning. If you disable the native tab bar, then you can have it overlay browser content instead.

<img width="49%" src="../../img/settings/sideberyautohidewithdefaulttabs.gif" />
<img width="49%" src="../../img/settings/sideberyautohidewithtabsdisabled.gif" />




## Sidebery Only Setup

- `ultima.sidebery.autohide` + `ultima.tabs.tabbar.disabled` - to autohide Sidebery, with the native tabs bar disabled.
- `ultima.sidebery.autohide` + `ultima.tabs.tabbar.autohide` - to autohide Sidebery, while keeping the native tab bar  hidden within the edge of the browser screen.

The setting `ultima.tabs.tabbar.disabled` was prevously called `ultima.tabs.vertical.hide`. It previously only worked for vertical tabs but now applies to both vertical and horizontal tabs. When using the setting, <ins>make sure expandonHover is OFF</ins>, for the Vertical Tab Bar.

<img width="100%" src="../../img/settings/sideberyonlysetup.gif" />




## Sidebery Extension Settings

> This is for best compatibility with the theme, other configurations should work just fine but they are unaccounted for.

![sidebery](https://github.com/user-attachments/assets/c012bf97-e4f4-4539-96dd-b6d60d61e036)

![Screenshot_20250507_045918](https://github.com/user-attachments/assets/62ab45f8-fd58-4501-80c5-36a691986c1a)

Basically a top down format works best with FF Ultima's themed Sidebery. Pinned tabs on top, and Navigation horizontal or hidden.

If you don't want to use these extension settings, you can always disabled `user.theme.xtension.sidebery` and theme Sidebery completely to your own preference.

## Personal Configurations

If you ever want to change the Sidebery theme, either change your Color Scheme `user.theme.` or turn off `user.theme.xtension.sidebery` to use default Sidebery (unmodified). You may be able to modify FF-Ultima's configuration in Sidebery's Style Editor too (untested).

If you scroll down to `Other` in the Sidebery Style Editor. FF Ultima `uc` variables are recognized and editable. I haven't tested these much but it was surprising to see that Sidebery can detect them.

![Sidebery Style Editor](https://github.com/user-attachments/assets/7e87b15f-6fa4-4660-8262-88bab256e0e1)

# That's all

<iframe width="100%" height="490" autoplay="false" src="https://www.youtube.com/embed/xtUBmixQHvo?si=sbwFFhKCRRK4OeaR" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>