---
sidebar_position: 1
description: userChromeJS / Autoconfig Configuration
---

# Setup

> Note: If you're familiar with autoconfig and userchromejs, you can use whatever setup method you're familiar with and head over to the next page. Scripts.

Custom Scripting, while completely optional, can be set up and used in the same way as default firefox with the help of the [.autoconfig/](https://github.com/soulhotel/FF-ULTIMA/tree/main/.autoconfig) folder. The `.autoconfig/` folder sources it's setup files from https://github.com/AlexVallat/firefox-scripts, with some modifications strictly to promote organization.

For example, after setting up, you should have a `scripts/` folder and a `utils/` folder in your chrome folder. Where `chrome/utils/userChrome.js` has been modified to treat `chrome/scripts/` as the scriptsDir, and `chrome/utils/chrome.manifest` has been modified to point to the `chrome/scripts/` folder to store custom web pages (like the userchromejs manager). This was done to promote the seperation of script files from .css files.

And after setting up, you can pretty much drag and drop custom scripts into the `chrome/scripts/` folder to use them. You can also use the userChromejs Manager in Firefox (a rewrite of the original manager menu) to toggle scripts on/off, delete them, restart firefox, and more.

## Setup

> Note: There is a video below that shows the full process.

1. Move everything in `.autoconfig/chrome/` into the original `chrome` folder.
2. Move everything in `.autoconfig/firefox/` into your firefox installation folder.
3. In Firefox, navigate to about:support and click on <kbd>Clear Startup Cache...</kbd>

Once Firefox restarts, you'll notice some new buttons and features appear in Firefox. You can use the `⚙️ userChromejs Manager` to turn scripts on/off or delete them entirely.

<details>
<summary>Need help finding your Firefox Installation Path?</summary>

>
Summary: You can find the Installation Path right in the `about:support` page.

<iframe width="100%" height="490" src="https://www.youtube.com/embed/_4fdUdp3G4o?si=u7H0hDi7wvouVolc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Video by [xiaoxiaoflood](https://github.com/xiaoxiaoflood/firefox-scripts)
</details>


|         | Common Firefox Installation Paths                               |
|---------|----------------------------------------------------------------|
| Windows | C:\Program Files\Mozilla Firefox\                              |
| Linux   | /usr/lib/firefox/                                              |
| Mac     | Firefox.app/Contents/Resources/                                |


## Video Demo

Setup Video

<iframe width="100%" height="490" src="https://www.youtube.com/embed/F1yALhlsQHI?si=EvaB6tyj0qJT0TMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Scripts being used with FF Ultima

<iframe width="100%" height="570" src="https://github.com/user-attachments/assets/8c2c5f27-e81a-4b27-b606-f80cdcb697b7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Video by [he23251](https://github.com/he23251)

## userChromejs Manager

If you are familiar with xiaoxia's [firefox-scripts](https://github.com/xiaoxiaoflood/firefox-scripts), I've adapted the userChrome Manager into a page, with potential to expand on it further. This is how it looks right now:

This is an adaption of xiaoxia's userChromejs Manager, the original is a dropdown menu that is minimal but also limiting in my opinion (as a mouse-centered user). The adaptation was to simply turn it into a page, with buttons for every action instead of needing keyboard actions and potential to expand on what can be managed within the page. All credit goes to the original creator (most of the logic is untouched).

> ManagerPage.uc.js, userChromeManager.html

<img width="100%" src="/img/settings/ucjsmanager.gif"/>

## Scripts

Scripts not already included in the `.autoconfig` folder, are most likely just untested, and that doesn't necessarily mean they are incompatible. You can get a brief overview of scripts that have been vetted/tested on the next page ->