---
sidebar_position: 1
description: userChromeJS / Autoconfig Configuration
---

# Setup

FF Ultima doesn't depend on autoconfig, but it can be set up and used in the same way as default firefox with the help of the [.autoconfig/](https://github.com/soulhotel/FF-ULTIMA/tree/main/.autoconfig) folder. The `.autoconfig/` folder sources it's setup files from https://github.com/AlexVallat/firefox-scripts?tab=readme-ov-file, and these files include 1 minor adjustment that allows users to organize their custom scripts in `chrome/scripts/`. Here's how to set it up:

### Setup handled in the `.autoconfig/` folder

1. Move everything in `.autoconfig/chrome/` into the original `chrome` folder.
2. Move everything in `.autoconfig/firefox/` into your firefox installation folder.
3. In Firefox, navigate to about:support and click on <kbd>Clear Startup Cache...</kbd>

Once Firefox restarts, you'll notice some new buttons and features appear in Firefox. These are all features sourced from the `chrome/scripts` folder. And a `🧩 User Scripts` Button in the Navigation bar, you can use that button to manage scripts, turn them on/off, edit them, reload them. Even restart Firefox.

|         | Common Firefox Installation Paths                               |
|---------|----------------------------------------------------------------|
| Windows | C:\Program Files\Mozilla Firefox\                              |
| Linux   | /usr/lib/firefox/                                              |
| Mac     | Firefox.app/Contents/Resources/                                |

<br></br>

<details>
<summary>Need help finding your Firefox Installation Path?</summary>

>
Summary: You can find the Installation Path right in the `about:support` page.

<iframe width="100%" height="490" src="https://www.youtube.com/embed/_4fdUdp3G4o?si=u7H0hDi7wvouVolc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Video by [xiaoxiaoflood](https://github.com/xiaoxiaoflood/firefox-scripts)
</details>


## Video Demonstration

<iframe width="100%" height="490" src="https://www.youtube.com/embed/F1yALhlsQHI?si=EvaB6tyj0qJT0TMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="100%" height="570" src="https://github.com/user-attachments/assets/8c2c5f27-e81a-4b27-b606-f80cdcb697b7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Video by [he23251](https://github.com/he23251)

## More

Also if you are familiar with xiaoxia's [firefox-scripts](https://github.com/xiaoxiaoflood/firefox-scripts), I've adapted the userChrome Manager into a page, with potential to expand on it further.

<img width="100%" src="/img/settings/ucjsmanager.gif"/>


<!--
:::note
Scripts not already included in the `.autoconfig` folder, are most likely untested and not necessarily incompatible. If you run into a script that you'd like included with FF Ultima, feel free to recommend. ince autoconfig scripts are compiled by the community I'd prefer any issues related to autoconfig to be sorted out personally or reported as a PR with a solution.
:::
-->