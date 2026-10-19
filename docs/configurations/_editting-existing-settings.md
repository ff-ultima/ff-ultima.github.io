---
sidebar_position: 4
description: Tips for tweaking/modifying existing settings
---

# Editting existing settings

*This page is a list of *what can be* modifed and *how* within the source files. If you have an advanced understanding of CSS, then mostly anything can be modified when using your own judgement. And if you don't see something listed here, it just isn't documented yet*.*

#### When looking in the chrome/theme folder you'll notice a very easy to read structure:

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

Every setting/preference of the theme is organized within this structure accordingly. `ultima.navbar` settings will be found in `settings-navbar.css`. `ultima.tabs` settings will be found in settings-TABS.css. `ffu-xxx.css` files are the foundation of the theme and should rarely be messed with (unless you know what you're doing). Inside of all these files, you'll find an index (a list at the top that points you to every section of code in the file). You can use `ctrl+f` to search for a specific section and it will bring you right to the relevant code.

For example, if you <kbd>ctrl+f</kbd> "tab groups labels" in `chrome/theme/settings-tabs.css`, it'll bring you to all code related to tab group label settings.


## Color Schemes

All color-schemes follow the same structure and serve as templates that can be copy -> pasted -> rebranded. The [create a color scheme wiki](/docs/color-schemes/create-a-color-scheme) should go over everything you need to know about editting color-schemes, or creating your own


## settings-navbar.css

### nav bar autohide

#### animation speed

The first transition controls the animation for hover/reveal, the second transition controls the animation for not-hover/hide. The first number is the speed of the animation, the second number is the delay until the animation begins: `transition: top (speed) ease (delay) !important;`.

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

## settings-sidebar-sidebery.css

### autohide sidebery

#### animation speed

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

#### sidebar width when collapsed

todo

## settings-navbar-windowcontrols.css

### making custom icon sets

todo

## settings-TABS.css

## tab counter

#### editting the visual indicator

the visual indicator for horizontal tabs and vertical tabs are completely isolated, so they can be styled differently.

you can reduce the indicator to just a number by emptying all instances of the content string: `" Tabs Open"` -> `""`

```css
@media -moz-pref("ultima.tabs.tabCounter") {
    /* get count */
    ...
    /* VERTICAL tabs visual indicator */
    #tabbrowser-arrowscrollbox[orient="vertical"] {
        #tabbrowser-arrowscrollbox-periphery::after {
            content: counter(tabcount) "";
            ...
        }
    }
    /* adjustment for collapsed tabs */
    ...
    /* adjustment for tabs overflow */
    ...
    /* HORIZONTAL tabs visual indicator */
    #tabbrowser-arrowscrollbox[orient="horizontal"]::after {
        content: counter(tabcount) "";
         ...
    }
}
```


## settings-urlbar.css

### floating urlbar

#### animation speed

todo

```css
@media -moz-pref("ultima.urlbar.float") {
    #urlbar {
        /* baseline transition */
        transition: transform 0.3s ease-in-out !important;
        &[open] {
            ...
        }
        /* when extended = scale */
        &[breakout-extend] {
            transform: translateY(20vh) scale(1.1);
            ...
        }
        /*situational = scale */
        &:hover:not([open]) {
            transition: transform 0.3s ease-in-out 5s !important;
            ...
        }
    }
    /*situational = scale */
    :root:has(#urlbar-searchmode-switcher[open]) {
        & #urlbar  {
            padding-bottom:0px !important;
            transition: transform 0.3s ease-in-out 5s !important;
            ...
        }
    }
}
```

### urlbar sliding animation

#### animation speed

todo

```
@media -moz-pref("ultima.urlbar.animate.open") {
    #urlbar[breakout] {
        transition: max-height 1s ease !important;
...
```

## settings-icons.css

### making custom icon sets

todo

## Spacing

### content area spacing
### border radiuses
### sidebar autohiding width when collapsed

## Wallpapers

### ...
### ...

> Might be better to organize this by file > setting > animation, spacing, etc.