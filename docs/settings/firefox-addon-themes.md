---
sidebar_position: 5
description: Using add-on themes (extensions) in FF Ultima
---

# Firefox Add On Themes

:::note
This video is a bit outdated, but the concept remains the same.
:::

## How add-on themes look in FF Ultima

Here's a couple of add-on themes being used in the theme, to get an idea on what to expect.

<iframe width="100%" height="490" src="https://www.youtube.com/embed/N7IRp_a0lBQ?si=y16BG5vFq-wG2WzB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Add-on themes are hit-or-miss when used with FF Ultima, I've spent a long time trying to get the most consistent result but what works in one add-on theme won't be garuanteed to work in a different add-on theme. Scroll down for an extra tweak that can be done for add-on themes that miss the mark.

## How Firefox Color (extension) looks in FF Ultima

This has only been tested with the "custom colors" tab and "custom backgrounds" too, but Firefox Color seems to be implementing just fine with the theme. Results may vary.

<img width="80%" src="/img/settings/firefoxcolor.png" />

## Extra tweak to add-on themes

By restricting FF Ultima's color schemes to a non-lw-theme state, Firefox add-on themes can be used as normal. But there is 1 specific quirk. Firefox's default appearance allows color-schemes to be very dynamic but also messy in how they apply colors to the browser. The inconsistency of an add-on themes colors can become very visible in a theme that has rounded corners/padding. There is no one-size-fits-all solution to this, but there is a setting that can "attempt" to swap an add-on themes colors to correct any inconsistencies.

Use `user.theme.xtension.swap.addon.colors` to swap add-on theme colors.

Use `ultima.spacing.compact` for add-on themes that fail to keep the same background for the window and the nav bar.

<iframe width="100%" height="490" src="https://www.youtube.com/embed/jYbccJ1nXzk?si=F9jY24aOYcAKUmXy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>