---
sidebar_position: 1
---

# Create a Color Scheme

A Detailed Guide for creating Color Schemes in FF Ultima 3.0+


## Color Scheme Overview
Color Schemes are centralized to 3 files.
1. `ffu-internal-appearance.css •` controls the default look of FF Ultima.
    - This controls the default ff ultima look, even when not using a color scheme.
    - Colorschemes override the colors in this file to create themes.
    - You don't need to worry about this file.
2. `ffu-colorscheme.css •` controls how a color scheme will look.
    - each color scheme can be found in chrome/theme/color-schemes/example/`ffu-colorscheme.css`
    - the colorscheme file basically overwrites the color of the browser using color variables.
    - the colorscheme files can do lots more too, like using its own icons, borders, etc.
3. `apply-cs.css •` takes all the colors from the the colorscheme file and makes them available to:
    - the browser
    - extensions & all websites
    - & wallpapers
4. So `ffu-colorscheme.css` makes a color scheme & `apply-cs.css` applies it everywhere.

## Let's create a Color Scheme
The entire process for creating a theme is this:
1. Come up with a name, for this example let's do: `soho`
2. Add the theme name into `apply-cs.css`
3. <ins>**Copy**</ins> one of the existing colorschemes so that you can turn it into `soho`
4. Then edit the colors
> You can name the theme anything, even your own name

## Enabling your Color Scheme
If you haven't already, open the `chrome/theme/color-schemes` folder. And open `apply-cs.css` in any text editor.
- `apply-cs.css` has 3 list, these list make the theme available to:
    - the browser
    - extensions & websites
    - & wallpapers
    - replace "YourName" with the name of your theme. (there are 5 YourName's)
    - replace "YourWallpaper" with your a wallpaper if you want to.
    - I highly recommend using `find & replace` (ctrl+f) to replace "YourName" all at once.

<img src="https://github.com/user-attachments/assets/5d3e06e9-22aa-4179-b76e-3669289dafdd" width="48%" />
<img src="https://github.com/user-attachments/assets/dc55ab76-727a-499d-85ad-d5022f94b2ea" width="48%" />


## Editting the Color Scheme (Part 1)

In `chrome/theme/color-schemes`, <ins>**copy**</ins> one of the color schemes that you want to use as a foundation. I recommend `default` if you want more control. And `catppuccin` if you only want to setup colors. For this example, I'm going to assume you are working with `default`. All files follow the same format.

- Make a copy of the `default` folder, and name it your theme (example: `soho`).
- Inside of the `soho/` folder, you'll find `ffu-colorscheme.css`, open it in a text editor.
- These lines in the file are all you need to create a color scheme:
    - `Line 4 •` File Desc: `soho` color scheme.
    - `Line 17 to 43 •` all the colors for dark mode.
    - `Line 48 to 74 •` all the colors for light mode.
- You can honestly edit all the colors here and be finish. But it doesn't make sense to do this blind. So let me show you how to create a color scheme live in Firefox. But I recommend doing this before we continue: On Line 17, edit `--uc-browser-color` right now. Replace the color with `red`. You'll see why later.

<img src="https://github.com/user-attachments/assets/79c5383b-4f06-469c-8de0-26c0432372e4" width="32%" />
<img src="https://github.com/user-attachments/assets/bdf175d4-fb32-4963-bf29-f7fa45002132" width="32%" />
<img src="https://github.com/user-attachments/assets/918b279c-bd51-4d15-94df-2304f250206c" width="32%" />

## Editting the Color Scheme (Part 2)
All that's left is to setup the colors. The best way to do that is live, inside of Firefox. We'll be doing this with the help of Firefox's built-in Browser Toolbox. You can close the theme files. And Start (Restart) Firefox to continue.

- In Firefox, go to the about:config page and make sure your theme (example: `soho`) is turned on.
- Only your colorscheme should be on. Turn other colorschemes off.
- If you followed my recommendation in `Part 1`, your Browser should now be red.

<img src="https://github.com/user-attachments/assets/7dc5346f-7093-4433-9911-d23a33af1c26" width="48%" />
<img src="https://github.com/user-attachments/assets/51eb4629-5055-4f20-a0ea-8cfcab30c715" width="48%" />

>
- Open the browser toolbox (live debugger) with `ctrl+shift+alt+I`
- By default, you will be on the `Inspector` Tab. Go to the `Style Editor` tab.
- In `Style Editor`, Use the search bar to find your `ffu-colorscheme.css` file.
- The colorscheme files are alphabetical order. "YourName" should be at the top of your file.

<img src="https://github.com/user-attachments/assets/fefd2eda-3b28-4b0f-acc2-8fb22fbf0e53" width="48%" />
<img src="https://github.com/user-attachments/assets/0070b8d2-9b3d-4dad-bc8a-06b93fc430c2" width="48%" />

>
- Now edit the colors. You'll see the Browser Colors changing with every edit you make.

![11 fix it and ship it ](https://github.com/user-attachments/assets/f15cbb57-1505-4141-b903-e7b7002583c0)

- Like I said in `Part 1`: *"these lines are all you need to create a color scheme.."*
    - `Line 17 to 43 •` all the colors for dark mode.
    - `Line 48 to 74 •` all the colors for light mode.
- You can save your changes straight to the file. Press `ctrl+s` or click <ins>save</ins> next to the file name.
- You can also peek at the other `ffu-colorscheme` themes in the file list for inspiration.
- You can undo & redo mistakes with `ctrl+z` & `ctrl+y`.

## Fine-tuning Appearances (optional)

- Beyond line 78, of the color scheme file.. You'll see how the color scheme overrides existing firefox variables to setup all of the colors.
- You can make the browser as ugly, or as pretty, as you want it to be.
- Even further, you can control "when" and "where" the colors are applied to "what".
- Most color schemes keep the same border-radius (--uc-button-border-radius) for buttons, you don't have to.
- Most color schemes keep the same Custom Icons. You don't have to.
- You can even delete everything under line 78 & let FF Ultima handle the rest.

## Finalizing your Color Scheme

Now that you have your Shiny New Theme, you can switch between your theme & others, anytime, in about:config.

Note: If you would like your theme to be included in future updates of FF ULTIMA you can share it through the Github. You would then be considered a Contributor to 'FF ULTIMA' by providing an alternate Style to many other Users of the theme. And Your Color Scheme will be easily enabled and kept updated with future versions of FF ULTIMA.

To share your theme, you can submit a pull request (recommended) or open an issue, with the uploaded files. See also: [Color Scheme Presentation](https://github.com/soulhotel/FF-ULTIMA/tree/main/theme/color-schemes/catppuccin-mocha). Remember the folder you copied to create the color scheme folder, use that as a template to present the Color Scheme to other Users. Credit Yourself, and provide more details if you want to.

With that said, I'll take care of the rest. Best regards, *Soulhotel*.
