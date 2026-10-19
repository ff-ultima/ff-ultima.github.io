---
sidebar_position: 1
---

# Getting Started

You can find helpful documentation for almost everything related to FF Ultima here. IF you still can't find what you're looking for, [post an issue](https://github.com/soulhotel/FF-ULTIMA/issues?q=is%3Aissue) on Github. <!--Issues are addressed/answered anywhere between 1 hour to 1 day. Hopefully we can get back to this point :/-->

![gif](https://github.com/user-attachments/assets/dc1882e6-6543-41bd-aff7-ded2b96ffb97)

#### F.A.Q.

### Theme Settings?

Here's a full list of [theme settings ->](./category/theme-settings)

### Compatibility?

Every version of FF Ultima documents commits, fixes, and new features in a `change log` for that release. This dates back to Version 1.6 and can be browsed [here (github)](https://github.com/soulhotel/FF-ULTIMA/releases) or [here (compiled history)](https://ff-ultima.github.io/docs/Version%20History).

The release notes also inform you on Firefox compatibility. Every new version stays compatible with the latest (Default Release) Firefox, every old version is compatible with a prior Firefox.

### How do I switch the Dark/Light Modes?

Every color scheme has it's own dark and light version. And FF Ultima cycles between modes depending on your System's current Color Mode.
- Windows > Settings > Personalize
- Mac > System Settings > Appearance
- Linux (Gnome) > Settings > Appearance
- Linux (KDE) > System Settings > Global Theme

### What does FF Ultima have to offer?

> Well, the list is long..

- Accessibility.
  - The ability to toggle almost all of the settings and styles on or off.
  - Vertical Tabs optimization for those that like to use as much screen space as possible to as little space as possible.
  - Downsizing the clutter shown with default Firefox (extension panel, url bar, compact spacing, etc).
  - The ability to autohide/show sidebars, verttab bars, navbars, etc. More screen space, for the things you actually want to see. while still keeping everything else fully accessible.
  - The use of cursors and shadows applied to certain elements for visual clarity.
  - Multi-width adjustments within the navbar for portrait displays or small width Windows.
  - OS support for all.

- Balance.
  - Firefox is going through a stage of modernization, where from an aesthetic standpoint.. it just misses the mark.
  - FF Ultima attempts to provide a balance between what is modern and what is preferred.
  - A simple touch like rounded corners, which can be disabled.
  - Or softer color palettes, less lines, and less borders.
  - Custom made icons that enhance and blend in.
  - Being easy on the eyes is very important.
  - Being able to turn things off is too.

- Color-Schemes.
  - It's not often that a CSS Theme gives the user more than one color-scheme for the browser. Users of FF Ultima can switch between a default dark mode or light mode just by changing their Computer to dark/light.
  - If that isn't enough, Users can switch between color-schemes like Midnight, Catppuccin, Gruvbox, and more without visiting the add-on store.
  - If that isn't enough, Every color scheme has a dark & light version.
  - If that isn't enough, Users can go to the add-on store and use their favorite Themes with FF Ultima.
  - And If that isn't enough, Users can create their own color-schemes and integrate them right into the FF Ultima settings.

### Why userChrome Companion? Why userChromeJS?

> wip documentation

Freedom of choice. While many CSS themes can go far and beyond, a lot of the time they leave the user stuck with one way, one look, take it or leave it.

Previously, FF Ultima handled this through user.js. By query of preferences in the about:config page, it became a lot easier for you and any other person to quickly switch between different layouts or toggle one style on/off. While the alternative would be you having to close Firefox, edit theme files manually, maybe swap one file for another, *every time* you want to change how something looks.

User.js made the Creation & Use of different layouts much easier to manage. Where `navbar.autohide` wont interfere with `bookmark.autohide`, and `sidebar.autohide` wont interfere with `tabs.vertical.hide`. And if you just don't want to see window controls right now... Turn `ultima.disable.windowcontrols.button` `on` and keep browsing. It was modular & convenient.

---