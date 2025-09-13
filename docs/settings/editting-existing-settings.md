---
sidebar_position: 3
description: Tips for tweaking/modifying existing settings
---

# Editting existing settings

> This page is mostly a compilation of *what can be* modifed and *how* within the source files. If you have an advanced understanding of CSS, then mostly anything can be modified when using your own judgement. And if you don't see something listed here, it just isn't documented yet.

First, Users modifying the theme should familiarize themselves with the theme's structure. When looking in the chrome/theme folder you'll notice a very easy to read structure:

<details>
<summary>theme structure tree</summary>
```
├── theme
│   ├── ffu-global-positioning.css
│   ├── ffu-internal-appearance.css
│   ├── ffu-private-browsing.css
│   ├── ffu-special-configs.css
│   ├── settings-context-menus.css
│   ├── settings-extensions-panel.css
│   ├── settings-icons.css
│   ├── settings-navbar.css
│   ├── settings-navbar-windowcontrols.css
│   ├── settings-sidebar-sidebery.css
│   ├── settings-TABS.css
│   ├── settings-urlbar.css
│   ├── website-aboutaddons.css
│   ├── website-aboutconfig.css
│   ├── website-newtab.css
│   ├── website-private.css
│   ├── website-reddit.css
│   ├── website-styles.css
│   └── website-yt.css
│   ├── color-schemes/
│   │   ├── (color scheme folders)
│   │   └── (wallpaper folder)
│   ├── icons/
│   │   ├── (icons)
├── userChrome.css
├── userContent.css
└── user.js
└── changelog.md (feel free to document/credit your change here if you want to)
```
</details>

Every setting/preference of the theme is organized within this file structure accordingly. `ultima.navbar` settings will be found in `settings-navbar.css`. `ultima.tabs` settings will be found in settings-TABS.css. `ffu.css` files are the foundation of the theme and should rarely be messed with (unless you know what you're doing). Inside of all these files, you'll find an index (a list at the top that points you to every section of code in the file). You can use `ctrl+f` to search for a specific section and it will bring you right to the relevant code. For example, if you ctrl+f "`tab groups labels`" it will bring you to all code related to all tab group label settings.

## Animations

### nav bar autohide - settings-navbar.css 

These two settings use the same structure for their animation. The first transition controls the animation for hover/reveal, the second transition controls the animation for not-hover/hide. The first number is the speed of the animation, the second number is the delay until the animation begins: `transition: top (speed) ease (delay) !important;`.

```css
@media -moz-pref("ultima.navbar.autohide") {
    #main-window:is(...)  {
        ...
        #navigator-toolbox {
            transition: top 0.2s ease 0.5ms !important;
            &:not(:hover) {
                transition: top 0.3s ease 0.5s !important;
            }
        }   
    }
}
```

### autohide sidebery - settings-sidebar-sidebery.css

Already noted in the source, but the first transition controls the animation for hover/reveal, the second transition controls the animation for not-hover/hide.

```css
@media -moz-pref("ultima.sidebery.autohide") {
@media not -moz-pref("ultima.sidebar.autohide") {
    ...
    #sidebar-box[sidebarcommand="_3c078156-979c-498b-8990-85f7987dd929_-sidebar-action"]:hover {
        /* animation when expanding (speed, delay) */
        transition: max-width 0.2s linear 0s !important;
    }
    #sidebar-box[sidebarcommand="_3c078156-979c-498b-8990-85f7987dd929_-sidebar-action"]:not(:hover) {
        /* animation when collapsing (speed, delay) */
        transition: max-width 0.2s linear 0s !important;
    }
...
```

## Color Schemes

The [create a color scheme wiki](/docs/color-schemes/create-a-color-scheme) will teach you everything you need to know about editting color-schemes, you can even make your own personal copy of an existing color scheme and use it like all of the others.

## Icons

...

## Spacing

- content area spacing
- border radiuses
- sidebar autohiding width when collapsed

## Wallpapers

...

> Might be better to organize this by file > setting > animation, spacing, etc.