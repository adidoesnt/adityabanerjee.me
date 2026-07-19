# adityabanerjee.me

Personal website of Aditya Banerjee, built with [Astro](https://astro.build) and Tailwind CSS (via daisyUI). Deployed to GitHub Pages at [adityabanerjee.me](https://adityabanerjee.me).

The site is styled like an OS home screen rather than a traditional navbar site: `/` is a "desktop" of app icons and widgets, and each other route (`about`, `timeline`, `projects`, `whoami`, `playlist`) opens as an "app" inside the `WindowFrame` component. Closing/minimizing a window, or clicking outside it, navigates back to `/`; maximizing expands it to fill the main container. Astro's View Transitions (`<ClientRouter />`) animate app icons morphing into their windows and back. On mobile, the same icons/widgets lay out like a phone home screen instead of a desktop icon column.

Click-outside-to-close relies on `SiteLayout.astro`'s content wrapper carrying `data-window-backdrop` — `WindowFrame.astro` walks up to that ancestor and only closes when the click target is the backdrop itself (not a bubbled click from inside the window). If you restructure `SiteLayout.astro`'s markup, keep that attribute on the element that directly surrounds the window.

## Project Structure

```text
/
├── public/                 # Static assets, CNAME, wallpaper-mark.jpg
├── src/
│   ├── components/         # Astro components: Desktop, WindowFrame, AppIconTile,
│   │                       #   widgets (Gallery/Weather/Calendar/Spotify), icons/
│   ├── content/            # Page copy/data (home, about, projects, timeline, apps,
│   │                       #   spotify, header, footer)
│   ├── layouts/            # Shared page layout (SiteLayout — desktop wallpaper lives here)
│   ├── lib/                # Shared utilities
│   ├── pages/               # Routes: index (desktop), about, timeline, projects,
│   │                        #   whoami, playlist
│   └── styles/              # Global styles
└── astro.config.mjs
```

Each `.astro` file in `src/pages/` maps to a route based on its file name. Page content (app list, copy, etc.) lives in `src/content/` as typed TypeScript modules rather than a content collection. `src/content/apps.ts` drives the desktop icon grid; adding an entry there (plus a matching page) adds a new "app".

### Header

`Header.astro` renders on every page (sticky top bar) and, besides the site logo, has two live pieces:

- A search button that opens a modal listing every app (desktop grid apps plus `whoami`/`playlist`, which launch from widgets rather than a grid icon); typing filters the list and Enter/click navigates.
- A live date/time readout, updated client-side every 30s.

### Desktop widgets

`Desktop.astro` (rendered on `/`) also lays out a few widgets, each a standalone component:

- **GalleryWidget** — profile photo, links to the `whoami` app.
- **WeatherWidget** — current conditions via the free [Open-Meteo](https://open-meteo.com) API (no key required), using browser geolocation with a London fallback.
- **CalendarWidget** — today's date, computed client-side.
- **SpotifyWidget** — links to the `playlist` app, background art pulled from Spotify's public oEmbed endpoint at build time.

Widgets, app icons, and the header's search/clock only run their init/fetch scripts via the `astro:page-load` event, since Astro's View Transitions execute a script's top-level code once per session — see the comments in `WindowFrame.astro`, `WeatherWidget.astro`, `CalendarWidget.astro`, and `Header.astro` if adding similar client scripts.

### Desktop wallpaper

`SiteLayout.astro` paints the faint background pattern behind the desktop with a CSS `mask-image` (`mask-mode: luminance`) using `public/wallpaper-mark.jpg` — white areas of that image become the visible (painted-in-theme-color) shape, black areas disappear. Swap the image or tweak `opacity`/`mask-size` in that file's `<style>` block to adjust it; if the replacement image has real transparency (a PNG/SVG) rather than a black background, switch `mask-mode` to `alpha` instead.

## Commands

All commands are run from the root of the project:

| Command         | Action                                            |
| :-------------- | :------------------------------------------------- |
| `bun install`   | Installs dependencies                              |
| `bun dev`       | Starts local dev server at `localhost:4321`        |
| `bun build`     | Build the production site to `./dist/`             |
| `bun preview`   | Preview the build locally before deploying         |
| `bun astro ...` | Run CLI commands like `astro add`, `astro check`   |

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site with `BLOG_ENABLED=false` (the Blog app icon is hidden in production builds) and publishes it to GitHub Pages under the custom domain in `public/CNAME`.
