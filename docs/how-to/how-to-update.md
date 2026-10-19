---
sidebar_position: 3
description: How to update FF Ultima, and stay informed
---

# How to Update

<!-- import ReactPlayer from 'react-player'; -->

## How to Update

When a Theme Update is available. You can simple run the setup wizard to update:
1. Run the Setup Wizard (already in your chrome folder).
2. And click update.

VIDEO TODO

The `Setup Wizard` simply downloads the updated theme files into your chrome folder via https://github.com/soulhotel/FF-Ultima/archive/refs/heads/main.zip. `userChrome Companion` will also notify you whenever theme settings have been updated, and you can automatically sync (grab new settings) whenever that happens.

Setup Wizard also prompts you to restart Firefox after updating. This is the norm when reloading userChrome files.. But if you have `ffu.chrome.watcher` enabled, you can skip this restart. The userChrome Watcher will automatically reload files that change in the chrome folder - no restart required.

## Staying updated

FF Ultima tries to stay always-compatible with Default Release Firefox. So if you notice anything wrong after a Firefox Update, you'll probably find a theme update already released for it too (theme is developed 2 versions ahead of default Firefox).

You can be notified whenever a new release drops by checking the themes [Home Page](https://github.com/soulhotel/FF-ULTIMA), or "watching" the repository.

![image](https://github.com/user-attachments/assets/2ecdee0f-8463-440a-aef2-be9564a1d927)

And reading the [release page](https://github.com/soulhotel/FF-CSS-ULTIMA/releases/latest) for new versions is also recommended (maybe even mandatory).

![image](https://github.com/user-attachments/assets/1972c8ee-895e-4a35-81f2-628bd4bb86b9)

It's organized in a way that only tell you what you need to know:
- What's new
- Whats old
- Whats been fixed
- New settings

## Git

While the Setup Wizard is recommended. You can still update the theme with git, since updating all takes place in the chrome folder:

1. Open a terminal in your profiles chrome folder.
2. Or in the terminal, navigate to your profiles chrome folder.
3. In the terminal, git clone the repo to update to the latest version
4. Restart Firefox. If you have `ffu.chrome.watcher` enabled, you can skip this step.

Below shows the entire process:

<details>
<summary>After filling in the details for your OS's code block below, it should look something like:</summary>

```sh title="bash (linux/mac)"
cd ~/.mozilla/firefox/123.default-release
git clone https://github.com/soulhotel/FF-ULTIMA.git chrome
pkill -9 -f firefox && while pgrep -f firefox >/dev/null; do sleep 0.5; done
firefox &                    # restart firefox
```
or
```powershell title="powershell (windows)"
Set-Location "$env:APPDATA\Mozilla\Firefox\Profiles\123.default-release"
git clone https://github.com/soulhotel/FF-ULTIMA.git chrome
Get-Process -Name firefox, firefox-developer-edition, firefox-nightly, librewolf -ErrorAction SilentlyContinue | ForEach-Object { $_.Kill() }
while (Get-Process -Name firefox, firefox-developer-edition, firefox-nightly, librewolf -ErrorAction SilentlyContinue) { Start-Sleep -Milliseconds 500 }
Start-Process "firefox.exe"                    # restart firefox
```
</details>


```sh title="bash (linux/mac)"
# download theme
cd ~/.mozilla/firefox/YourProfileFolder
git clone https://github.com/soulhotel/FF-ULTIMA.git chrome

# kill browser
pkill -9 -f firefox && while pgrep -f firefox >/dev/null; do sleep 0.5; done
pkill -9 -f librewolf && while pgrep -f librewolf >/dev/null; do sleep 0.5; done

# restart browser (choose one)
firefox &                    # restart firefox
firefox-developer-edition &  # restart developer edition
firefox-nightly &            # restart nightly
librewolf &                  # restart librewolf
```

```powershell title="powershell (windows)"
# download theme
Set-Location "$env:APPDATA\Mozilla\Firefox\Profiles\YourProfileFolder"
git clone https://github.com/soulhotel/FF-ULTIMA.git chrome

# kill browser
Get-Process -Name firefox, firefox-developer-edition, firefox-nightly, librewolf -ErrorAction SilentlyContinue | ForEach-Object { $_.Kill() }
while (Get-Process -Name firefox, firefox-developer-edition, firefox-nightly, librewolf -ErrorAction SilentlyContinue) { Start-Sleep -Milliseconds 500 }

# restart browser (choose one)
Start-Process "firefox.exe"                    # restart firefox
Start-Process "firefox-developer-edition.exe"  # restart developer edition
Start-Process "firefox-nightly.exe"            # restart nightly
Start-Process "librewolf.exe"                  # restart librewolf
```

:::warning Btw

Note: Using git manually means pulling in files & folders that you don't need in your chrome folder (`.github/`, `dev/`, `setup wizard`, `LICENSE`, etc).
The Setup Wizard's update procedure is also just a simple git-direct-link download, but it excludes these from the chrome folder for you.

:::



