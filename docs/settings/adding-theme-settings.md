---
sidebar_position: 2
description: Adding new settings between updates and manually
---

# Adding new settings

> Looking for [How to Update the theme? ->](../how-to/how-to-update)

Sometimes, new versions of the theme include new settings. And sometimes, adding settings manually is much easier than reapplying the user.js for an update. To add new settings manually:

1. Type `about:config` in your URL bar.
2. Type the new setting(s) that you want to add to your theme.
3. Then press the `+` button to enable them.
4. You can also disable the setting right away if you don't plan on using it yet.

<iframe width="100%" height="490" src="https://github.com/user-attachments/assets/2c788a6b-9e79-4a6d-a0d5-a19a350b43fc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!-- https://github.com/user-attachments/assets/2c788a6b-9e79-4a6d-a0d5-a19a350b43fc -->

#### Why update settings manually?

Reapplying the user.js between updates means you are also resetting your settings to the FF Ultima defaults. This can be inconvenient if you've already set everything up in a specific way that is much different than the defaults. So adding any new settings manually will avoid having to redo your setup everytime there is an update to the theme. The release page will always tell you what you need to know about new versions of the theme, and list the new settings included (in any):

![image](https://github.com/user-attachments/assets/1972c8ee-895e-4a35-81f2-628bd4bb86b9)

- Reading the [release page](https://github.com/soulhotel/FF-CSS-ULTIMA/releases/latest) is always recommended (maybe even mandatory).
- It's organized in a way to only tell you what you need to know.
- What's new, whats old, whats been fixed, new settings, user.js required or not.
- If you see `new • 🟢 • Settings` or `user.js recommended`, you have two options:
  - A -  apply the new user.js in your Profile Folder. (easy)
  - B - or add the settings into your about:config page manually. (easier)
- `A` will reset theme settings to their default value.
- `A` But you can always edit the settings (true/false) inside the user.js before applying it -- or keep a copy of your own with your personal configuration.