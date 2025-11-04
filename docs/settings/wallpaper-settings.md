---
sidebar_position: 5
description: Using custom wallpapers
---

# Wallpaper Settings

By default, Firefox's New Tab Page uses a gray (dark mode) or white (light mode) background. FF Ultima overrides this default based on the currently selected Color Scheme. Every Color Scheme has it's own dark/light mode wallpaper as well.

You can change your wallpaper just like you would in regular Firefox. But the theme also provides a way to use different Color Scheme wallpapers from within the New Tab Page menu.

<iframe width="100%" height="631" src="https://www.youtube.com/embed/ab6Q-f1hnMM?si=wPpXLllkmF43VvZH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

`Reset to Default` will restore the current Color Schemes wallpaper

---

You can also override the default with the `user.theme.wallpaper` settings.

> *this is the old approach for changing wallpapers.*

<iframe width="100%" height="540" src="https://github.com/user-attachments/assets/f2d564fb-5382-4696-a219-660c6b96c8ae" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

You can also replace the wallpapers in the menu with your own custom options. The theme provides 14 free slots for custom wallpapers. You can replace these wallpapers with your own.

This is all handled in: [chrome/theme/color-schemes/apply-cs-wallpapers.css](https://github.com/soulhotel/FF-ULTIMA/blob/main/theme/color-schemes/apply-cs-wallpapers.css) -> [Line 66-96](https://github.com/soulhotel/FF-ULTIMA/blob/f1848b2f3eac48f338e885e61fe97a9f27b7e1b0/theme/color-schemes/apply-cs-wallpapers.css#L66-L96)

There are basically two list inside of apply-cs-wallpapers.css:
1. a list that applies the wallpaper to the new tab page
2. a list that matches the wallpaper to the menu option

Swapping out a wallpaper is as simply as changing one of the wallpaper sources:
```
"walls/fullmoon.jpg"
```

into:
```
"walls/my wallpaper.jpg"
```

or even:
```
"https://i.imgur.com/picture.png"
```