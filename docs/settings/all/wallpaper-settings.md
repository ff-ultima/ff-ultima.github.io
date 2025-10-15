---
sidebar_position: 6
description: Using custom wallpapers
---

# Wallpaper Settings

> Switching wallpapers via the new tab pages menu is still experimental

By default, Firefox's New Tab Page uses a gray (dark mode) or white (light mode) background. FF Ultima overrides this default based on the currently selected Color Scheme. Every Color Scheme has it's own dark/light mode wallpaper as well.

You can change your wallpaper just like you would in regular Firefox. But the theme also provide a way to use different Color Scheme wallpapers from within the New Tab Page menu.

<iframe width="100%" height="631" src="https://www.youtube.com/embed/ab6Q-f1hnMM?si=wPpXLllkmF43VvZH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

`Reset to Default` will restore the current Color Schemes wallpaper

---

You can also override the default with the `user.theme.wallpaper` settings.

<iframe width="100%" height="540" src="https://github.com/user-attachments/assets/f2d564fb-5382-4696-a219-660c6b96c8ae" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

You can also replace the wallpapers in the menu with your own custom options. This is all handled in:

[chrome/theme/color-schemes/apply-cs-wallpapers.css](https://github.com/soulhotel/FF-ULTIMA/blob/main/theme/color-schemes/apply-cs-wallpapers.css) -> [Line 66-96](https://github.com/soulhotel/FF-ULTIMA/blob/f1848b2f3eac48f338e885e61fe97a9f27b7e1b0/theme/color-schemes/apply-cs-wallpapers.css#L66-L96)

This is basically two list for wallpapers in the menu:
1. a list that applies the wallpaper to the page
2. a list that matches the image to the menu option

By swapping out an for your own custom image, you can gain 14 free slots to use for your own rotation of wallpapers. And swapping out is as simply as changing one of these:

```
"walls/fullmoon.jpg"
```

into this:

```
"walls/MyPicture.jpg"
```

> And also putting the image into the folder !