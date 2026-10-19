---
sidebar_position: 7
---

# userChrome JS

When setting up FF Ultima, the Setup Wizard automatically handles userChromeJS setup as well. FF Ultima sources it's autoconfig setup from https://github.com/AlexVallat/firefox-scripts, with some modifications strictly to promote organization. The entire experience of integration was made to be very effortless for Users.

## What does userChromeJS do in FF Ultima

The main reason for userChromeJS integration is to serve as a bridge for `userChrome Companion` to function. The extension alone doesn't have the permission/ability to toggle moz-preferences, so instead we use bridge files:
- [extensionBridge.ucc.uc.js](https://github.com/soulhotel/FF-ULTIMA/blob/main/userchromejs/scripts/extensionBridge.ucc.uc.js)
- [extensionBridgeChild.ucc.uc.js](https://github.com/soulhotel/FF-ULTIMA/blob/main/userchromejs/scripts/extensionBridgeChild.ucc.uc.js)
- [extensionBridgeParent.ucc.uc.js](https://github.com/soulhotel/FF-ULTIMA/blob/main/userchromejs/scripts/extensionBridgeParent.ucc.uc.js)  

To listen to the extensions broadcasted events and perform actions within the parent/child process when given the appropriate context. When viewing the files, you can grasp the entire process in about 2 minutes, theyre very minimal and self contained.

---

There's also a [prefs.ffu.uc.js](https://github.com/soulhotel/FF-ULTIMA/blob/main/userchromejs/scripts/prefs.ffu.uc.js) that serves as a "First Time - Preference Check" when the theme is installed for the first time. 

---

Lastly, [loader.ffu.uc.js](https://github.com/soulhotel/FF-ULTIMA/blob/main/userchromejs/scripts/prefs.ffu.uc.js). This script loads custom userchromejs scripts optimized for FF Ultima. More on that below.


## Scripts

If you're already familiar with userChromeJS/autoconfig, under the hood, FF Ultima's setup is no different than the usual "config-pref and config.js in the Firefox Install Directory". The biggest difference lies in what is in the chrome folder..

ucjs/autoconfig files are organized into `chrome/userchromejs/`. As usual with ucjs files, any `*.uc.js` script can be thrown into the `chrome/userchromejs/scripts/` folder.

FF Ultima also includes custom scripts optimized just for the theme. These scripts are loaded seperately by `loader.ffu.uc.js`:
- `loader.ffu.uc.js` loads any `*.ffu.js` script found in the `chrome/userchromejs/scripts/ffu/` folder.
- And `*.ffu.js` scripts feature the ability to be activated by mozilla preferences. This is done with a simple `@pref` line in the scripts' header.
- `*.ffu.js` scripts are also optimized to create/destroy themselves based on their pref being turned on/off. Allowing for clean integration, and clean removal (on demand).
- This also means `*.ffu.js` scripts are toggleable via userChrome Companion or the about:config page.

Like mentioned above, any `uc.js` script can be thrown into the `scripts` folder. But for the best experience, turn it into a `ffu.js` script by simply:
- renaming it
- giving it a @pref header
- and putting it in the `ffu/` folder instead.

## Live Reload

One of FF Ultimas custom scripts is a "userChrome Watcher" ([ffu.chrome.watcher](https://github.com/soulhotel/FF-ULTIMA/blob/main/userchromejs/scripts/ffu/userChromeWatcher.ffu.js)). When enabled, userChrome css and js files are monitored for changes and reloaded into the Browser. Meaning, `restarting Firefox` and `clean Startup Cache restarts` are no longer necessary when making your own changes to the files.

Additionally, there is a "userChrome Restarter" ([ffu.clear.restart](https://github.com/soulhotel/FF-ULTIMA/blob/main/userchromejs/scripts/ffu/userChromeRestart.ffu.js)) that can be used to perform a `clean Startup Cache Restart`. It utilizes internal restart mechanism as if clicking the button on the about:support page.

<!-- <iframe width="100%" height="570" src="https://github.com/user-attachments/assets/8c2c5f27-e81a-4b27-b606-f80cdcb697b7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

Video by [he23251](https://github.com/he23251)-->
