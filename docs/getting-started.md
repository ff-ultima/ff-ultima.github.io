---
sidebar_position: 1
---

# Getting Started

> You can find helpful documentation for almost anything related to the theme here. IF you still can't find what you're looking for, [post an issue](https://github.com/soulhotel/FF-ULTIMA/issues?q=is%3Aissue) on Github. Issues are addressed/answered anywhere between 1 hour to 1 day.

![gif](https://github.com/user-attachments/assets/dc1882e6-6543-41bd-aff7-ded2b96ffb97)

## F.A.Q.

### My settings keep resetting 🙃!?

- After following the [installation instructions](https://github.com/soulhotel/FF-ULTIMA#installation), you should **not** have a user.js file inside of your Profile Folder.
- The user.js file is a one-time thing, you only need it when installing the theme for the first time.
- Or if the theme were to add new settings to the about:config page in an [updated release](https://github.com/soulhotel/FF-ULTIMA/wiki/How-to-Update-the-Theme).

> ###### *The user.js file is responsible for adding user-preferences/custom-settings into your Firefox Browser, in this case, the custom settings that you can change within FF Ultima; When Firefox starts up, it reads the user.js file (inside of the Profile Folder) and takes all of the preferences inside of it. So, if you leave the user.js file in the Profile Folder, every time you restart Firefox these settings will be read over and over again, resetting the settings inside.*

---

### What does FF Ultima have to offer?

> Well, the list is long..

- Accessibility.
  - The ability to toggle almost all of the settings and styles on or off, one New Tab away.
  - Vertical Tabs optimization for browsing large amounts of tabs while using little screen real estate.
  - Downsizing the clutter shown with default Firefox (extension panel, url bar, compact spacing).
  - The ability to autohide/show sidebars, verttab bars, navbars, etc. More screen space, for the things you actually want to see. while still keeping everything else fully accessible.
  - The use of cursors and shadows applied to certain elements for visual clarity.
  - Multi-width adjustments within the navbar for portrait displays or small width Windows.
  - OS support for all.

- Modernity.
  - FF Ultima's main goal is to modernize the Firefox browser. While Firefox is pretty modern already, from an aesthetic standpoint.. it just misses the mark.
  - A simple touch like rounded corners, which can be disabled.
  - Or soft color palettes, less lines, less borders.
  - Custom made icons that enhance and blend in.
  - Being easy on the eyes is important.

- Color-Schemes.
  - It's not often that a CSS Theme gives the user more than one color-scheme for the browser. Users of FF Ultima can switch between a default dark mode or light mode just by changing their Computer to dark/light.
  - If that isn't enough, Users can switch between color-schemes like Midnight, Catppuccin, Gruvbox, and more without visiting the add-on store.
  - If that isn't enough, Every color scheme has a dark & light version.
  - If that isn't enough, Users can go to the add-on store and use their favorite Themes with FF Ultima.
  - And If that isn't enough, Users can create their own color-schemes and integrate them right into the FF Ultima settings.

---

## How do I switch the Dark/Light Modes?

FF Ultima cycles between dark and light mode themes depending on your System's Current Color Mode.
- Windows > Settings > Personalize
- Mac > System Settings > Appearance
- Linux (Gnome) > Settings > Appearance
- Linux (KDE) > System Settings > Global Theme
> If you change your dark/light [color-scheme](https://github.com/soulhotel/FF-ULTIMA/wiki/Color-Schemes) in the about:config page, the automatic theming will use those preferences.

---

### Why user.js?

Freedom of choice. While many CSS themes can go far and beyond, a lot of the time they leave the user stuck with one way, one look, take it or leave it. That isn't the case for FF Ultima.

Using the user.js approach, by query of preferences in the about:config page, makes it a lot easier for you and any other person to quickly switch between different layouts or toggle one style on/off. While the alternative would be you having to close Firefox, edit theme files manually, maybe swap one file for another, *every time* you want to change how something looks.

User.js makes the Creation & Use of different layouts much easier to manage. Where `navbar.autohide` wont interfere with `bookmark.autohide`, and `sidebar.autohide` wont interfere with `tabs.vertical.hide`. And if you just don't want to see window controls right now... Turn `ultima.disable.windowcontrols.button` `on` and keep browsing.

For those who want to create Firefox themes, its helpful for organizing the functionality of certain preferences like sidebery.autohide all in one place. A lot of FF Ultima's settings can be easily copied into your own themes without the moz preference query.
