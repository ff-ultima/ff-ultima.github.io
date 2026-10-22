---
sidebar_position: 1
description: Installing the theme, with a video demo
---
 
 # How to Install

## First time?

<details>
<summary>Introduction to userChrome</summary>

FF Ultima is a userChrome Theme. And all userChrome themes work by communicating with a `chrome folder` located in your `Firefox Profile folder`. This folder typically holds `.css` files with the purpose of customizing elements of the Browser. So think of the `chrome` folder as your User Interface for managing <ins>everything userChrome</ins>. Installing FF Ultima is as simple as grabbing the theme files and placing them inside of your chrome folder.

![test](/img/installation/install.png)
</details>

<details>
 <summary>Finding your Profile Folder (where the theme files go)</summary>

1. Go to the about:support page/url.
2. <kbd>Open directory</kbd>
3. This takes you to your profile folder, typically named "default.release"

<img src="https://github.com/user-attachments/assets/e520eb35-f09c-4925-92f6-44be4ec18d51" width="850" />
</details>

<details>
<summary>Finding your Profile Folder (where the theme files go) (with about:profiles)</summary>

1. Go to the about:profiles page/url.
2. If you have multiple firefox profiles, make sure you are working with the right one.
3. <kbd>Open directory</kbd>
4. This takes you to your profile folder, typically named "default.release"
 
<img src="https://github.com/user-attachments/assets/8e58c276-1015-436d-8414-6d4db3a4be4b" width="850" />
</details>

<details>
<summary>Initial Setup Checklist</summary>
- [x] If your Profile Folder does not have a `chrome` folder, create one.
- [x] If your Profile Folder already has a `chrome` folder, empty it.
- [x] The theme will automatically enable userChrome stylesheets for you.
- [x] Please have Firefox's System-Theme enabled. You can change this later.

<img src="https://github.com/user-attachments/assets/c65972cf-88bf-41da-87d1-5d5a780230ba" width="650" />
</details>



## Installation

1. Download the Setup Wizard on the [release page](https://github.com/soulhotel/FF-ULTIMA/releases/latest).
2. Place the Setup Wizard in your `chrome` folder.
3. Run the Setup Wizard and choose Install.

<iframe width="100%" height="400" autoplay="false" src="/img/installation/installdemo.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

All Done. The Setup Wizard is a new integration into FF Ultima. If you run into any issues, please report on the Github. Issues can also be fixed right away by following the manual installation process wherever the error may have occured. Below is a **Video Demo** of the 3 Step process, below that is a manual installation guide.

<details>
<summary>Common Setup Wizard Issues</summary>

#### Mac Intel?

On the [release page](https://github.com/soulhotel/FF-ULTIMA/releases/latest), you'll find a `setup-wizard-mac-intel`, use that if you arent on Mac Arm.

---

#### Permission Denied?

For Linux/Mac, you may need to grant the setup wizard permission to run. This can be done by granting permission to run through your file manager's UI, or with the following command (for your system):
```
chmod +x setup-wizard-linux     # linux
chmod +x setup-wizard-mac       # for mac arm
chmod +x setup-wizard-mac-intel # for mac intel
```
Note: On Mac, you may also want to run the command `xattr -c setup-wizard-mac` or `xattr -c setup-wizard-mac-intel`. This avoids the "downloaded from the internet, developer can't be verified" warning.

---

#### UserChrome Companion failing to connect to userchromejs?

This is a sign of permission failure in the setup wizard. During the userchromejs setup step, the wizard will prompt you for admin rights or permission to move the files to the firefox directory. If permission is skipped, the file move will also be skipped. You can retry the install and ensure permission is granted or move the files manually by following Step 4 of "Manual Installation" below.

</details>





## Manual Installation

> Note: Video Demo for this process will be included soon, hopefully tomorrow! I promise.

1. Download the latest version on the [release page](https://github.com/soulhotel/FF-ULTIMA/releases/latest).
2. Copy everything in the ffultima.zip into your `chrome` folder.
3. Get the [userChrome Companion](https://addons.mozilla.org/en-US/firefox/addon/userchrome-companion/) extension from Firefox.
4. In your `chrome/userchromejs/firefox` folder, move everything inside - into your Firefox Installation Folder.
5. In Firefox, navigate to `about:support` and click on <kbd>Clear Startup Cache...</kbd> (This performs a clean Firefox restart)

<details>
    <summary>Need help finding your Firefox Installation Folder?</summary>

    You can find the Installation Path in the `about:support` page. It should point you to something like this:

    |         | Firefox                           | Developer Edition                                 | Nightly                                 |
    |---------|-----------------------------------|---------------------------------------------------|-----------------------------------------|
    | Windows | C:\Program Files\Mozilla Firefox\ | C:\Program Files\Firefox Developer Edition\       | C:\Program Files\Firefox Nightly\       |
    | Linux   | /usr/lib/firefox/                 | /usr/lib/firefox-developer-edition/               | /opt/firefox-nightly/                   |
    | Mac     | Firefox.app/Contents/Resources/   | Firefox Developer Edition.app/Contents/Resources/ | Firefox Nightly.app/Contents/Resources/ |
</details>

VIDEO TODO



## After Installation..

After Installation you should open `userChrome Companion` to check out your theme settings. Browse the Wiki to learn more about what can be done:

- [Frequently asked questions](/docs/getting-started#faq)
- [All theme settings](/docs/category/theme-settings) (previews & explanations)
- [How to update, uninstall, update](/docs/category/how-to)
- [Sidebery configuration](/docs/configurations/sidebery) (optional)
- Videos, documentation, and more..


## Video Demonstrations

<details>
<summary>Video installing FF Ultima 3.0+</summary>

<iframe width="100%" height="490" src="https://www.youtube.com/embed/q48sZQ3nxe8?si=E6erW9WghTXROsAv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</details>

<details>
<summary>Video installing FF Ultima 2.0+</summary>

<iframe width="100%" height="490" src="https://www.youtube.com/embed/FDYYm-Tt39I?si=-x9Qk7SpFP5L7E-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</details>

<details>
<summary>Video installing FF Ultima 2.6 (automated on windows)</summary>

<iframe width="100%" height="490" src="https://www.youtube.com/embed/yc3xRjVgR8A?si=i9f2GeJpw482P_Y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</details>

<details>
<summary>Video installing FF Ultima 2.7 (automated on linux)</summary>

<iframe width="100%" height="490" src="https://www.youtube.com/embed/Cb350ZcjUu0?si=e47U7IxmFFFokZC2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</details>

## More About the Setup Wizard

The Setup Wizard was introduced as of FF Ultima 5.0. It is the **recommended** way of installing FF Ultima and exist to make the entire setup process **EASY**. From installing, uninstalling, to updating; It downloads the theme into your chrome folder, it sets up userChrome Companion, and userChromeJS, it also handles a required Firefox restart. It does this all in 1 click with 0 dependencies.

The setup wizard is just a compiled webpage written in Go (you can skim through it on the [github](https://github.com/soulhotel/FF-ULTIMA/tree/main/setup%20wizard)). With the amount of changes in FF Ultima 5.0 (introduction of userChrome Companion & userChromeJS), Users would have to perform 4-5 additional steps of moving files around, and going here then there then... just to set the theme up. So I created the Setup Wizard not just to avoid adding additional steps, but to make the entire process of theme-setup even easier than it was before. 

It also makes updating the theme a lot easier, so Users no longer need to visit the repo, re-download files, then do the re-copy process all over again. You can simply run the Setup Wizard (already in your chrome folder), and click Update. And like mentioned above, It does this all in 1 click with 0 dependencies.