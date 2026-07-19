# adityabanerjee.me

Personal website of Aditya Banerjee, built with [Astro](https://astro.build) and Tailwind CSS (via daisyUI). Deployed to GitHub Pages at [adityabanerjee.me](https://adityabanerjee.me).

## Project Structure

```text
/
├── public/                 # Static assets, CNAME
├── src/
│   ├── components/         # Astro components (incl. icons/)
│   ├── content/            # Page copy/data (home, about, projects, timeline, header, footer)
│   ├── layouts/            # Shared page layouts
│   ├── lib/                # Shared utilities
│   ├── pages/               # Routes: index, about, projects, timeline
│   └── styles/              # Global styles
└── astro.config.mjs
```

Each `.astro` file in `src/pages/` maps to a route based on its file name. Page content (nav links, copy, etc.) lives in `src/content/` as typed TypeScript modules rather than a content collection.

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

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site with `BLOG_ENABLED=false` (the Blog nav link is hidden in production builds) and publishes it to GitHub Pages under the custom domain in `public/CNAME`.
