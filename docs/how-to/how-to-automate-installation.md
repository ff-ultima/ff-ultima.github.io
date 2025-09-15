---
sidebar_position: 2
---
 
 # How to Automate Installation

Automating installation (and updates) can be easily done within a terminal or even easier with git userChrome. The manual installation instructions still apply.

1. Downloading the theme.
2. Copying the files to chrome.
3. Moving the user.js and restarting firefox.

Below you'll find the commands and tools that work with all operating systems.

## With git and a terminal

1. Open a terminal in your profiles chrome folder.
2. Or in the terminal, navigate to your profiles chrome folder.
3. In the terminal, git clone the repo to install/update to the latest version

> It is safe to copy & paste this entire block, but please observe the code and fill in your specific details

```sh title="bash (linux/mac)"
# download theme
cd ~/.mozilla/firefox/YourProfileFolder
git clone https://github.com/soulhotel/FF-ULTIMA.git chrome
cd chrome && cp "user.js" "../user.js"

# kill browser
pkill -9 -f firefox && while pgrep -f firefox >/dev/null; do sleep 0.5; done
pkill -9 -f librewolf && while pgrep -f librewolf >/dev/null; do sleep 0.5; done

# restart browser (choose one)
firefox &                    # restart firefox
firefox-developer-edition &  # restart developer edition
firefox-nightly &            # restart nightly
librewolf &                  # restart librewolf

# clean up user.js
sleep 2 && cd ../ && rm user.js # clean up user.js
```

```powershell title="powershell (windows)"
# download theme
Set-Location "$env:APPDATA\Mozilla\Firefox\Profiles\YourProfileFolder"
git clone https://github.com/soulhotel/FF-ULTIMA.git chrome
Set-Location "chrome"; Copy-Item "user.js" "..\user.js"

# kill browser
Get-Process -Name firefox, firefox-developer-edition, firefox-nightly, librewolf -ErrorAction SilentlyContinue | ForEach-Object { $_.Kill() }
while (Get-Process -Name firefox, firefox-developer-edition, firefox-nightly, librewolf -ErrorAction SilentlyContinue) { Start-Sleep -Milliseconds 500 }

# restart browser (choose one)
Start-Process "firefox.exe"                    # restart firefox
Start-Process "firefox-developer-edition.exe"  # restart developer edition
Start-Process "firefox-nightly.exe"            # restart nightly
Start-Process "librewolf.exe"                  # restart librewolf

# clean up user.js
Start-Sleep -Seconds 5; Set-Location ".."; Remove-Item "user.js" -ErrorAction SilentlyContinue
```

## With git userChrome (one line install)

This automated tool requires no download. It runs by fetching [gituserChrome](https://github.com/soulhotel/git-userChrome) and running the script globally. Be sure to look at the [code](https://github.com/soulhotel/git-userChrome/tree/main/scripts) yourself before running the command and check out the video demonstration as well (below).

> P.S. git userChrome is even more advanced when used as a GUI.

###### LINUX ([BASH SCRIPT](https://github.com/soulhotel/git-userChrome)):
```sh
bash <(curl -s https://raw.githubusercontent.com/soulhotel/git-userChrome/main/scripts/gituserChrome.sh)
```

###### WINDOWS ([POWERSHELL SCRIPT](https://github.com/soulhotel/git-userChrome)):
```powershell
powershell -NoProfile -ExecutionPolicy Bypass -Command "iex (irm 'https://raw.githubusercontent.com/soulhotel/git-userChrome/main/scripts/gituserChrome.ps1')"
```

###### MAC ([COPY LINUX](https://github.com/soulhotel/git-userChrome))
```
  ,-.       _,---._ __  / \
 /  )    .-'       `./ /   \
(  (   ,'            `/    /|         
 \  `-"             \'\   / |         whats in the box? oh..
  `.              ,  \ \ /  |         
   /`.          ,'-`----Y   |         it's linux.
  (            ;        |   '
  |  ,-.    ,-'         |  /          because Mac is basically linux..
  |  | (   |        hjw | /
  )  |  \  `.___________|/
  `--'   `--'
```

<details>
<summary>Video Demonstration, on Mac</summary>

<iframe width="100%" height="490" src="https://www.youtube.com/embed/jDK7I6Ph3gU?si=r0GY5Q2bORHXIP0l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</details>

<details>
<summary>Video Demonstration, on Windows</summary>

<iframe width="100%" height="490" src="https://www.youtube.com/embed/yc3xRjVgR8A?si=i9f2GeJpw482P_Y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</details>

<details>
<summary>Video Demonstration, on Linux</summary>

<iframe width="100%" height="490" src="https://www.youtube.com/embed/Cb350ZcjUu0?si=e47U7IxmFFFokZC2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</details>

## With git userChrome (application)

gituserChrome automates the installation & update of userChrome themes in several ways. It handles downloading Themes, saving them, and managing them between Profiles, Firefoxs (Firefox variants, Librewolf, Zen, Floorp), and Operating Systems. Installing a theme can be done in as little as 30 seconds, and even in 1 click. Learn more about gituserChrome [here](https://github.com/soulhotel/git-userChrome).

### Video Demonstration, gituserChrome GUI

<iframe width="100%" height="490" src="https://www.youtube.com/embed/DoCV8gEnL7k?si=GQDY_ThHPlwTgCqz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<img alt="b" src="https://github.com/user-attachments/assets/fb6d1828-335f-44b5-bd84-fcc374756632" />
