---
sidebar_position: 4
description: Ways to uninstall FF Ultima
---

# How to Uninstall

:::danger Hey!

You <ins>never</ins> need to reinstall Firefox or reset your browser just to remove FF Ultima (and most css themes). This action is excessive and waste your own time. I would also hate to make a situation where someone has to do that so if you ever need to "reset" or just remove the theme.. You can simply disable userchrome or delete your chrome folder.

:::

## There are two ways to uninstall the theme

If you disable userchrome, firefox will stop interacting with the chrome folder (theme files). If you delete the chrome folder (or everything inside of it), firefox will have nothing to be themed with since the theme no longer exist. Choose whichever method you prefer.

### 1. Disable FF Ultima
   - On the about:config page
   - Set `toolkit.legacyUserProfileCustomizations.stylesheets` to `false`
   - This disables the theme (by disabling userChrome)
   - Restart Firefox

### 2. Delete FF ultima
   - Delete the `chrome` folder containing the theme files
   - Restart Firefox

### Deleting FF Ultima Settings
Unfortunately, there's no way to mass-delete the about:config preferences.. but..

With the theme disabled or theme files deleted, the settings will do absolutely nothing anyway. For the sake of *cleanliness or mental clarity or just ocd*.. You can still delete about:config preferences with the <kbd>🗑</kbd> button, on the about config page.
<img src="https://github.com/user-attachments/assets/e0a56432-4e94-4741-99b1-f47d373bf09f" height="400px"/>
