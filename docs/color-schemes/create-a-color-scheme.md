---
sidebar_position: 1
---

# Create a Color Scheme

A Detailed Guide for creating Color Schemes in FF Ultima 3.0+


## Color Scheme Overview
Color Schemes are centralized to 3 files.

<details>
<summary>1. ffu-internal-appearance.css</summary>

This file is the foundation for FF Ultima's custom appearance. All color-schemes are built on top of this custom appearance by overriding colors, borders, shadows, and more. You actually do not need to worry about this file.
</details>

<details>
<summary>2. ffu-colorscheme.css</summary>

Each color scheme has a `chrome/theme/color-schemes/folder`. Inside of this folder you will find a `ffu-colorscheme.css` file. To create your own color scheme, you will essentially need to recreate this structure, for your own theme.
</details>

<details>
<summary>3. apply-cs.css</summary>

This file connects all color-schemes to the browser, by importing them in a series of 3 list.
- the browser
- extensions & all websites
- & wallpapers
</details>


## How to Create a Color Scheme

The entire process for creating a color-scheme is simple. You come up for a name and a theme. Add the color-scheme to the list of others. Then copy an existing color-scheme to use as a foundation for your new one. Below you'll find a detailed breakdown of the full process.


## Enabling your Color Scheme

> If you haven't already, open the `chrome/theme/color-schemes` folder. And open `apply-cs.css` in any text editor.

There are three list in `apply-cs.css`. Each list makes the color scheme available to the browser, extensions, and wallpapers. You can use `find & replace` (ctrl+f) to add your theme into the lists, or do it manually:

- replace "YourName" with the name of your theme (there are 5 YourName's).
- replace "YourWallpaper" with a wallpaper if you'd like (use existing wallpapers or add your own).

<iframe width="100%" height="490" src="https://www.youtube.com/embed/k_LDUiQFHy4?si=CggHPUiLrNU6vyPW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Editting the Color Scheme (Part 1)

In `chrome/theme/color-schemes`, <ins>**copy**</ins> one of the color schemes that you want to use as a foundation. I recommend `default` if you want more control. And `catppuccin` if you only want to setup colors. For this example, I'm going to assume you chose `default`. All files follow the same format.. so you'll be able to follow along with whiever foundation you choose.

1. Make a copy of the `default/` folder, and change the copies name to the name of your theme (example: `soho/`).
2. Inside of the newly made `soho/` folder, you'll find `ffu-colorscheme.css`, open it in a text editor.
3. These lines in the file are all you need to create a color scheme:
    - `Line 4 •` File Desc: `soho` color scheme.
    - `Line 17 to 43 •` all the colors for dark mode.
    - `Line 48 to 74 •` all the colors for light mode.

Any further modification to the lines beyond that are for finer adjustments and other custom modifications. I recommend creating the color scheme inside of Firefox rather than a text editor. That way you can setup the colors and modifications live and view your changes in real-time. I'll show you how below.

I also recommend doing this before we continue: On Line 17, edit `--uc-browser-color`, change it to `red`. You'll see why later.

<iframe width="100%" height="490" src="https://www.youtube.com/embed/6dLPyCBM16E?si=jnHjDpoiHAFrfq5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Editting the Color Scheme (Part 2)

All that's left is to setup the colors. The best way to do that is live, inside of Firefox. We'll be doing this with the help of Firefox's built-in Browser Toolbox. You can close the theme files. And Start (Restart) Firefox to continue.

- In Firefox, go to the about:config page and enable your color-scheme (example: `user.theme.soho`). Turn all other color-schemes off.
- If you followed my recommendation in `Part 1`, your Browser should now be *red*.
- Open the browser toolbox (live debugger) with `ctrl+shift+alt+I`
- By default, it may be on the `Inspector` Tab. Go to the `Style Editor` tab.
- In `Style Editor`, Use the search bar to find your `ffu-colorscheme.css` file.
- The colorscheme all have the same name but "YourName" should be at the top of your file.

<iframe width="100%" height="490" src="https://www.youtube.com/embed/sDDiWfplK-Y?si=sr3fsDLJAStaOo0Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- All that's left to do is pick your colors and create your *look*.
- Save your changes to the file by pressing `ctrl+s` or clicking <ins>save</ins> next to the file name.
- You can also peek at the other `ffu-colorscheme` theme files for inspiration.
- You can undo & redo mistakes with `ctrl+z` & `ctrl+y`.

![11 fix it and ship it ](https://github.com/user-attachments/assets/f15cbb57-1505-4141-b903-e7b7002583c0)

## Fine-tuning Appearances (optional)

- Beyond line 78, of the color scheme file.. You'll see how the color scheme overrides existing firefox variables to setup all of the colors.
- You can make the browser as ugly, or as pretty, as you want it to be.
- Even further, you can control "when" and "where" the colors are applied to "what".
- Most color schemes keep the same border-radius (--uc-button-border-radius) for buttons, you don't have to.
- Most color schemes keep the same Custom Icons. You don't have to.
- You can even delete everything under line 78 & let FF Ultima handle the rest (falling back to ffu-internal-appearance.css to fill in the details)

## Finalizing your Color Scheme

Now that you have your Shiny New Theme, you can switch between your theme & others, anytime, in about:config.

Note: If you would like your theme to be included in future updates of FF ULTIMA you can share it through the Github. You would then be considered a Contributor to 'FF ULTIMA' by providing an alternate Style to many other Users of the theme. And Your Color Scheme will be easily enabled and kept updated with future versions of FF ULTIMA.

To share your theme, you can submit a pull request (recommended) or open an issue, with the uploaded files. See also: [Color Scheme Presentation](https://github.com/soulhotel/FF-ULTIMA/tree/main/theme/color-schemes/catppuccin-mocha). Remember the folder you copied to create the color scheme, use that as a template to present the Color Scheme to other Users. Credit Yourself, and provide more details if you want to.

With that said, I'll take care of the rest. Best regards, *Soulhotel*.
