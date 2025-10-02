---
sidebar_position: 2
description: A compilation of scripts tested and vetted in FF Ultima
---

# Scripts

:::note
Scripts not already included in the `.autoconfig` folder are not necessarily incompatible. If you run into a script that you'd like included with FF Ultima, feel free to recommend it on the Github.
:::

## CSS

For all CSS related to a specific script. I recommend isolating the code to protect css that is script related or not. This can easily be done with the themes `ultima.enable.js.config` setting. All code in the theme related to custom scripting can be accessed by having this setting `on`. And all of this code will be found in `chrome/theme/ffu-special-configs.css` for organization.

When writing your own personal css for the theme, I recommend also wrapping it inside this preference so that it doesn't conflict with a non-scripting environment.

```css
@media -moz-pref("ultima.enable.js.config") {
    "css related to your scripts"
}
```

> Note: This is only a recommendation. And applies for code that already exist in the FF Ultima source.

## Scripts

### script

description

preview

### script

description

preview

### script

description

preview