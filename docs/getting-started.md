---
sidebar_position: 1
---

# Getting Started

You can find helpful documentation for almost everything related to FF Ultima here. IF you still can't find what you're looking for, [post an issue](https://github.com/soulhotel/FF-ULTIMA/issues?q=is%3Aissue) on Github. Issues are addressed/answered anywhere between 1 hour to 1 day.

![gif](https://github.com/user-attachments/assets/dc1882e6-6543-41bd-aff7-ded2b96ffb97)

## F.A.Q.

### Theme Settings?

Here's [a full list](./category/settings) of settings found in the theme.

---

### Compatibility?

Every release version of FF Ultima documents commits, fixes, new features, or qol improvements in a `change log` section for that release. This dates back to Version 1.6 and can be browsed [here](https://github.com/soulhotel/FF-ULTIMA/releases).

Every version of the theme also tries to stay compatible with Stable (Default Release) Firefox. The release notes always inform you of Firefox version compatibility. For example, FF Ultima versions 2.0 to 3.7 being compatible with Firefox 138 to 143.

FF Ultima also supports Firefox Nightly, mostly through an `ultima.enable.nightly.config` setting. The setting is basically a quick patch for upstream changes/fixes that haven't made their way to Default Firefox yet. It also allows Nightly Users (or Developer Edition Users, like me) to use the same version of the theme as everyone else.

---

### My settings keep resetting 🙃!?

After following the [installation instructions](/docs/how-to/how-to-install), you should **not** have a user.js file inside of your Profile Folder.

The user.js file is a one-time thing, you only need it when installing the theme for the first time. Or if the theme were to add new settings to the about:config page in an [updated release](/docs/how-to/how-to-update).

> ###### *The user.js file is responsible for adding user-preferences/custom-settings into your Firefox Browser, in this case, the custom settings that you can change within FF Ultima; When Firefox starts up, it reads the user.js file (inside of the Profile Folder) and takes all of the preferences inside of it. So, if you leave the user.js file in the Profile Folder, every time you restart Firefox these settings will be read over and over again, resetting the settings inside.*

---

### How do I switch the Dark/Light Modes?

Every color scheme has it's own dark and light version. And FF Ultima cycles between modes depending on your System's current Color Mode.
- Windows > Settings > Personalize
- Mac > System Settings > Appearance
- Linux (Gnome) > Settings > Appearance
- Linux (KDE) > System Settings > Global Theme

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

### Why user.js?

Freedom of choice. While many CSS themes can go far and beyond, a lot of the time they leave the user stuck with one way, one look, take it or leave it. That isn't the case for this one.

Using the user.js approach, by query of preferences in the about:config page, makes it a lot easier for you and any other person to quickly switch between different layouts or toggle one style on/off. While the alternative would be you having to close Firefox, edit theme files manually, maybe swap one file for another, *every time* you want to change how something looks.

User.js makes the Creation & Use of different layouts much easier to manage. Where `navbar.autohide` wont interfere with `bookmark.autohide`, and `sidebar.autohide` wont interfere with `tabs.vertical.hide`. And if you just don't want to see window controls right now... Turn `ultima.disable.windowcontrols.button` `on` and keep browsing. It's convenient.

And for those who want to create Firefox themes, when browsing the source you'll notice alot of the functionalities are indexed and organized by "setting". So seperating them and even copying them is a lot easier. And a lot of the themes features can definitely be copied into your own theme without the moz preference query.
