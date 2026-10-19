---
sidebar_position: 4
description: Ways to uninstall FF Ultima
---

# How to Uninstall

:::danger Hey!

You <ins>never</ins> need to reinstall Firefox or reset Firefox, just to remove FF Ultima (and most css themes). This action is excessive and waste your own time. I would also hate to make a situation where someone has to do that, so if you ever need to "reset" or remove the theme... Just delete the files in your chrome folder.

:::

### Two ways to uninstall the theme

If you disable userchrome, firefox will stop interacting with the chrome folder (theme files). Or if you delete the chrome folder (or everything inside of it), firefox will have nothing to be themed with (since the theme will no longer exist). The Setup Wizard handles this all with one click. But choose whichever method you prefer: 

#### Uninstall with Setup Wizard
   - Open the setup & click Uninstall
   - This will delete the theme files from the `chrome` folder
   - It will also completely remove `userChromeJS`

#### Or Disable FF Ultima
   - On the about:config page
   - Set `toolkit.legacyUserProfileCustomizations.stylesheets` to `false`
   - This disables the theme (by disabling userChrome css)
   - Restart Firefox

#### Or Manually Delete FF Ultima
   - Delete the `chrome` folder containing the theme files
   - Restart Firefox

VIDEO TODO

### userChrome Companion

userChrome Companion can be removed like any other extension. Although if you want it to completely remove all of the themes mozilla preferences from the about:config page. Go to `Settings` > `Data` > `Reset userChrome Companion`.
