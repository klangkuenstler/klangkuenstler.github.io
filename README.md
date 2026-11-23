# Marcos Ribeiro — Portfolio & CV

A static, bilingual portfolio for **https://klangkuenstler.github.io/**.
English is the default, with European Portuguese and dark/light theme controls.
No framework, backend, or production npm dependencies are needed.

## Preview

```sh
npm start
```

Visit **http://localhost:4173**. Python 3 is required for this local server.

## Edit content

- `js/content.js`: bilingual milestones, dates, ages, skills, and UI copy.
- `js/app.js`: timeline, category filters, year navigation, gallery, preferences, and printable CV.
- `css/portfolio.css`: responsive layouts, themes, animations, reduced-motion and print styles.
- `assets/`: supplied portrait, screenshots, race poster, favicon, and English/Portuguese PDFs.

The full birth date is intentionally absent. Ages are stored per milestone (at
the start of each event); update these explicitly when adding entries. Graduation
in July 2027 is marked as expected. Update availability and course status as time passes.
GitHub language percentages are not treated as proficiency ratings.

The CarPlay project uses the supplied photograph of the finished unit.
Website screenshots and the race poster are also the supplied images.

## Check and regenerate PDFs

```sh
npm ci
# If Chromium is not available at /usr/bin/chromium:
npx playwright install chromium
npm start
# In another terminal:
npm run pdf
npm test
```

The scripts use `/usr/bin/chromium` when present, otherwise Playwright's bundled
Chromium. Override with `CHROMIUM_PATH` or `CV_BASE_URL` as needed.

Regenerate both PDFs after changing CV content. The browser's Print command also
produces the clean CV in the currently selected language, regardless of timeline
filters. The browser tests cover language/theme persistence, timeline filters,
details, gallery focus/keyboard behaviour, mobile layouts, accessibility, local
assets and PDFs.

## Publish

1. Sign in locally with `gh auth login`.
2. Review, commit and push the changes to `main`.
3. In the repository's **Settings → Pages**, select **GitHub Actions** as the source.
4. The included Pages workflow publishes the site. The public address is
   **https://klangkuenstler.github.io/**.

The previous GuiaRest coursework is preserved with its original attribution in
`archive/guiarest/`. It is excluded from the Pages deployment artifact.

## Design

Original cyan-accented styling inspired by the timeline direction selected by
Marcos. Uses DM Sans, Manrope and Space Mono from Google Fonts, with local system
fallbacks. All galleries use native modal dialogs, timeline cards use native
details/summary, and motion is reduced when requested by the operating system.
