---
sidebar_position: 4
description: Content area spacing, compact spacing, new tab page, context menus, find bar, etc.
---

# Content Area Settings

> Theme settings are accessible via the `about:config` page. Type `ultima` or `user.theme` to get started.



## Content Spacing

### ultima.spacing.compact.addonmanager

> Submitted by [dreadbalaur](https://github.com/dreadbalaur)

Makes the addon manager & themes page a compact grid layout

![compactaddon](https://github.com/user-attachments/assets/9f038884-f672-49ef-8108-db58809cdddc)

### ultima.spacing.compact

Removes all borders and rounding for the content area, also shrinks tabs by a tiny percentage

<iframe width="85%" height="500" src="https://github.com/user-attachments/assets/22489b0c-3b99-48ed-897b-e2926e6672bd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### ultima.spacing.relaxed

Makes the browser content spacing a bit more "comfy", works well with Ultra-Wide and Side View extensions

![Screenshot_20250520_225549](https://github.com/user-attachments/assets/dd41b966-c48e-405d-8378-30d76fc19734)

### ultima.content.toolbox.ontop

Reverses the position of the content toolbox when docked bottom

<img width="85%" alt="image" src="/img/settings/contenttoolboxontop.png" />

---

# Find Bar

### ultima.findbar.position.top

> By [he23251](https://github.com/he23251), [#383](https://github.com/soulhotel/FF-ULTIMA/issues/383)

This setting moves the Find Bar - above browser content, and it makes a lot of sense being there. It also adds contrast to match results using the themes current accent color.

<img width="85%" alt="image" src="/img/settings/findbarontop.gif" />

### ultima.findbar.disable.background.image

This setting hides the background image that some add-on themes attached to the findbar, often these images don't blend with the themes rounded appearance. The disabled background also fixes add on themes that produce a different solid color than the overall browser color. Try it out if you ever use an add-on theme that has this issue.

<img width="85%" alt="image" src="/img/settings/findbarnobackground.gif" />

An alternative solution is to just use `spacing.compact` to remove the differences in border/color. 

---

## Context Menu

### hide context menu icons

Hides icons (like extension icons) from the context menu's with `ultima.contextmenu.no.icons` and `ultima.contextmenu.no.navigation.icons`

preview

### context menu spacing

`ultima.spacing.compact.contextmenu` and `ultima.spacing.relaxed.contextmenu` can make the context menu spacing bigger or smaller.

~~Mac OS needs to use firefoxes gtk context menu `widget.macos.native-context-menus`~~. Mac OS Users *should* use the gtk context menu, because it matches FF Ultimas theme.

![context menu spacing](https://github.com/user-attachments/assets/87528b41-76a3-45e1-b492-915662df00d1)

---

## Content Related

### ultima.urlbar.focus.blur

Blurs browser content when the urlbar is in focus

<img width="85%" alt="image" src="/img/settings/urlbarfocusblur.gif" />

### ultima.urlbar.focus.blur.all

> By [he23251](https://github.com/he23251), [#383](https://github.com/soulhotel/FF-ULTIMA/issues/383)

Blurs everything except for the urlbar, when the urlbar is in focus

<img width="85%" alt="image" src="/img/settings/urlbarfocusblurall.gif" />

### ultima.scrollbar.thin

> By [mrodyhin](https://github.com/mrodyhin), [#368](https://github.com/soulhotel/FF-ULTIMA/pull/368)

Forces a more *thin* scroll bar for the content area, very useful for Windows 10 Users

<img width="85%" alt="image" src="https://github.com/user-attachments/assets/08a516f8-6b92-43ae-9045-7e1e43979259" />

### ultima.navbar.bookmarks.tab.indicator

This setting highlights the currently selected browser content, if the currently selected tab is bookmarked

<img width="100%" src="/img/settings/bookmarkedtabindicator.gif" />

### ultima.xstyle.newtab.rounded

This makes the elements of the new tab page more rounded, with shortcuts becoming circular.

![new tab rounded elements](https://github.com/user-attachments/assets/ddc4da6f-6975-4f61-a8cd-cf734b7354d0)

### ultima.xstyle.private

The private-browsing Home Pages strong purple background is removed, text removed, less is more sometimes.

![image](https://github.com/user-attachments/assets/aca4afd4-8bdb-47b5-98e9-7bcfddd68a23)


