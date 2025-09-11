---
sidebar_position: 1
---
 
 # How to Install

:::note

FF Ultima is a userChrome Theme. And all userChrome themes work by communicating with a `chrome folder` located in your `Firefox Profile folder`. This folder typically holds `.css` files with the purpose of customizing elements of the Browser. So think of the `chrome` folder as your User Interface for managing <ins>everything userChrome</ins>. Installing FF Ultima is as simple as grabbing the theme files and placing them inside of your chrome folder.

:::

![test](/img/installation/install.png)

## First time?

<details>
 <summary>Finding your Profile Folder (where the theme files go)</summary>

1. Go to the about:support page/url.
2. Open directory
3. This takes you to your profile folder, typically named "default.release"

<img src="https://github.com/user-attachments/assets/e520eb35-f09c-4925-92f6-44be4ec18d51" width="850" />
</details>


<details>
<summary>Finding your Profile Folder (where the theme files go) with about:profiles</summary>

1. Go to the about:profiles page/url.
2. If you have multiple firefox profiles, make sure you are working with the right one.
3. Open directory
4. This takes you to your profile folder, typically named "default.release"
 
<img src="https://github.com/user-attachments/assets/8e58c276-1015-436d-8414-6d4db3a4be4b" width="850" />
</details>

<details>
<summary>Initial Setup Checklist</summary>
- [x] If your Profile Folder does not have a `chrome` folder, create one.
- [x] If your Profile Folder already has a `chrome` folder, empty it.
- [x] The theme will automatically enable userChrome stylesheets via user.js.
- [x] Please have Firefox's System-Theme enabled. You can change this later.

<img src="https://github.com/user-attachments/assets/c65972cf-88bf-41da-87d1-5d5a780230ba" width="650" />
</details>

## Installation

1. Download the latest version on the [release page](https://github.com/soulhotel/FF-CSS-ULTIMA/releases/latest).
2. Copy everything in the ffultima.zip into your `chrome` folder.
3. For first time installation, you need to apply the `user.js` to firefox to access the theme settings.
4. In the chrome folder, youll see the `user.js`, move it <ins>out the chrome folder and into the Profile Folder</ins>.
5. Restart Firefox.
6. <ins>**Wait** for Firefox to open</ins>, then delete the `user.js` file.

:::warning

After installing the theme, it's important that you <ins>do **not** keep the user.js file inside of your profile folder</ins>. Keeping it saved inside of the `chrome` folder is perfectly fine though.

:::

## After Installation..

<details>
<summary>Post Installation Checklist</summary>

- Go to `about:config` and search for `ultima` to see all of your settings. You should also see:
![image](https://github.com/user-attachments/assets/7c3c1fb9-8080-4823-9994-23e6af91498e)

- Also important to know that the `user.js` file only needs to be applied in two scenarios:
    - It's your first time installing the theme.
    - Or the [release page](https://github.com/soulhotel/FF-CSS-ULTIMA/releases/latest) says "`user.js required`" for new settings/versions of the theme.

- Visit [the Wiki](https://github.com/soulhotel/FF-ULTIMA/wiki) to learn more about what is possible:
    - Frequently asked questions
    - All theme settings (previews & explanations)
    - How to install, [uninstall](https://github.com/soulhotel/FF-ULTIMA/wiki/How-to-Uninstall-the-Theme), [update](https://github.com/soulhotel/FF-ULTIMA/wiki/How-to-Update-the-Theme)
    - Sidebery configuration (optional)
    - Videos, documentation, and a whole lot more..
</details>

## Video Demonstrations

<details>
<summary>Video installing FF Ultima 2.0</summary>

<iframe width="100%" height="490" src="https://www.youtube.com/embed/FDYYm-Tt39I?si=-x9Qk7SpFP5L7E-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</details>

<details>
<summary>Video installing FF Ultima 2.6 (automated on windows)</summary>

<iframe width="100%" height="490" src="https://www.youtube.com/embed/yc3xRjVgR8A?si=i9f2GeJpw482P_Y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</details>

<details>
<summary>Video installing FF Ultima 2.7 (automated on linux)</summary>

<iframe width="100%" height="490" src="https://www.youtube.com/embed/Cb350ZcjUu0?si=e47U7IxmFFFokZC2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</details>

## Automated Installation

You can automate the full installation process in [a couple of ways](./how-to-automate-installation).
