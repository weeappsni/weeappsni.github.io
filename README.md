# Wee Apps website

The public site for **Wee Apps**, served by GitHub Pages at
**https://weeappsni.github.io/**. It hosts a small page for each app plus that
app's **privacy policy** and **support** pages (the privacy URL is what the app
stores require).

## Layout

```
/                     Wee Apps home — one card per app
/style.css            shared styles for every page (edit the design here once)
/404.html             friendly "not found" page
/bindayni/            BinDayNI
  /bindayni/privacy       -> https://weeappsni.github.io/bindayni/privacy
  /bindayni/support       -> https://weeappsni.github.io/bindayni/support
/privacy, /support    old top-level URLs — now redirect to /bindayni/... (kept so
                      any previously-shared link still works)
/_template/           copy-me starter for a new app (the leading "_" means GitHub
                      Pages does NOT publish this folder)
```

## Adding a new app (e.g. "MyApp")

1. **Copy** the `_template` folder to a new folder named after the app, e.g. `myapp`.
2. In all three files, replace the placeholders:
   - `APP_NAME` → the display name (e.g. `MyApp`)
   - `APPFOLDER` → the folder name (e.g. `myapp`)
   - `APP_TAGLINE` → a one-line description
   - `APP_EMOJI` → a logo emoji
   - the `DD Month YYYY` date on the privacy page
3. Fill in the privacy page **truthfully** — describe exactly what the app stores
   and what it sends, and to whom. The app stores must be able to verify it.
4. Add a **card** for the app on the home page (`/index.html`) — copy BinDayNI's
   card and point it at `/myapp/`.
5. Commit and push. It's live within a minute at:
   - `https://weeappsni.github.io/myapp/`
   - `https://weeappsni.github.io/myapp/privacy`  ← use this in the store listing
   - `https://weeappsni.github.io/myapp/support`

## Contact / sorting

Public contact for every app is **weeappsni@gmail.com**. In-app links use Gmail
plus-addressing per app (e.g. `weeappsni+bindayni-bug@gmail.com`) so one inbox
auto-sorts by app and message type.
