---
sidebar_position: 5
description: Url bar positioning, floating, background, animations, visibility, etc.
---

# URL bar Settings

> Theme settings are accessible via the `about:config` page. Type `ultima` or `user.theme` to get started.

- Looking for [color scheme settings? ->](https://github.com/soulhotel/FF-ULTIMA/wiki/Color-Schemes)
- Looking for [transparent theming? ->](https://github.com/soulhotel/FF-ULTIMA/wiki/Transparent-Theming)
- Looking for [adaptive tab color? ->](https://github.com/soulhotel/FF-ULTIMA/wiki/Adaptive-Tab-Color-Configuration)

### ultima.urlbar.centered

This centers the text within the urlbar. To center the urlbar itself, just use `spacers` on the customize toolbar page
<img width="85%" src="../../../img/settings/urlbarcentered.gif" />

### ultima.urlbar.float

The urlbar floats, by popping down and scaling up
<iframe width="80%" height="329" src="https://github.com/user-attachments/assets/f0c7744a-f527-4025-b300-191922babacb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### ultima.urlbar.hide.buttons

This hides the buttons within the urlbar, off hover

<img width="85%" src="../../../img/settings/urlbarhidebuttons.gif" />

### ultima.urlbar.hide.searchsuggestions

This hides the "This time search with" url bar suggestions, when used with the new "bonnet" switcher, it hides that.

### ultima.urlbar.transparent

This forces a transparent background on the urlbar when not in use

![prev](https://github.com/soulhotel/FF-ULTIMA/assets/155501797/6dcf6a31-c5cd-4b34-9885-9cb6022afb02)

### ultima.urlbar.animate.open

The urlbar slides out when focused.



<!--
-----------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------
-->

# Alternative Style Settings

<details>
<summary>ultima.spacing.compact</summary>

>
- Removes borders, rounding, shrinks tabs by a tiny percentage

https://github.com/user-attachments/assets/22489b0c-3b99-48ed-897b-e2926e6672bd
</details>

<details>
<summary>ultima.spacing.relaxed</summary>

>
- More "comfy" spacing between browser content, goes well with Side View extensions and Ultra-Wide displays

![Screenshot_20250520_225549](https://github.com/user-attachments/assets/dd41b966-c48e-405d-8378-30d76fc19734)
</details>

<details>
<summary>ultima.spacing.compact.contextmenu ➕ ultima.spacing.relaxed.contextmenu</summary>

>
- Spacing of context menu items
- Mac OS needs to use firefoxes gtk context menu `widget.macos.native-context-menus`
- Mac OS Users *should* use the gtk context menu, because it matches FF Ultimas theme.

![context menu spacing](https://github.com/user-attachments/assets/87528b41-76a3-45e1-b492-915662df00d1)
</details>



<details>
<summary>ultima.xstyle.newtab.rounded</summary>

>
- MAKE ELEMENTS ON THE NEW TAB PAGE MORE ROUND

![new tab rounded elements](https://github.com/user-attachments/assets/ddc4da6f-6975-4f61-a8cd-cf734b7354d0)
</details>



<details>
<summary>ultima.xstyle.private</summary>

>
- Private Window Home Page: Strong purple background removed, text removed. Less is more sometimes.

![image](https://github.com/user-attachments/assets/aca4afd4-8bdb-47b5-98e9-7bcfddd68a23)
</details>


<details>
<summary>user.theme.xtension.swap.addon.colors</summary>

>
- If an add-on theme isn't matching theme colors to well, this will swap some of the color variables of the theme around

[![Unsaved Image 22](https://github.com/user-attachments/assets/f83c03e0-fe51-4f13-a27d-ebea72ed0509)](https://youtu.be/jYbccJ1nXzk)
</details>

<details>
<summary>ultima.spacing.compact.addonmanager</summary>

>
- Makes the addon manager & themes page a compact grid layout

![compactaddon](https://github.com/user-attachments/assets/9f038884-f672-49ef-8108-db58809cdddc)

</details>


<details>
<summary>ultima.spacing.compact.menus</summary>

>
- for a more compact menu panel / extension panel

<img height="400px" alt="Image" src="https://github.com/user-attachments/assets/0a2466b9-9588-470a-8f0c-4ddb05ccbf44" />
<img height="400px" alt="Image" src="https://github.com/user-attachments/assets/6de48734-db2b-4bc6-a6af-33bd3cf1ed0e" />

</details>

<details>
<summary>ultima.disable.contextmenu.icons ➕ ultima.disable.contextmenu.icons.all</summary>

>
- to disable the icons in context menus

<img width="238" height="455" alt="image" src="https://github.com/user-attachments/assets/2d9d366d-cc7c-4609-9519-9da766be01b4" />

<img width="290" height="481" alt="Screenshot_20250824_171915" src="https://github.com/user-attachments/assets/44f52baf-ee68-4275-94b5-ac469c812401" />


</details>






<!--
-----------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------
-->

# Using Custom Wallpapers

<details>
<summary>user.theme.wallpaper</summary>

>
- USE ANY COLOR SCHEME WALLPAPER, already found in the source. Try to only have one selected.

https://github.com/user-attachments/assets/f2d564fb-5382-4696-a219-660c6b96c8ae

</details>

<!--
-----------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------
-->

# Useful Settings (You may want!)

- `browser.tabs.groups.enabled` to use the new tab grouping feature, categorize, seperate and collapse tabs in groups!
- `toolkit.tabbox.switchByScrolling` to switch between tabs via scrollwheel
- `browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled` to set more custom New Tab Page wallpapers
- `browser.tabs.hoverPreview.enabled` view an image preview of a hovered tab
- `browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar` to disable the New Tab Page search bar
