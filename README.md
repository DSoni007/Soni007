# Dhyan Soni — Engineering Portfolio

A plain static website. No frameworks, no build step, nothing to install.

## The 30-second version

**To change anything, edit `content.js`. That's the only file you need.**
Save it, refresh the page, done. (Double-click `index.html` to preview on your computer.)

| File          | What it is                                   | Edit it?                          |
| ------------- | -------------------------------------------- | --------------------------------- |
| `content.js`  | All your text, projects, jobs, skills, links | **Yes. This is the one.**         |
| `assets/`     | Photos and PDFs you want on the site         | Add files here                    |
| `styles.css`  | Colours, fonts, spacing (tokens at the top)  | Only to restyle                   |
| `app.js`      | Turns `content.js` into the page             | No                                |
| `index.html`  | Page shell, tab title, search description    | Rarely (see "If you rename")      |

## Everyday edits (all in `content.js`)

**Change a sentence or a number** — find it, change the text between the quotes, save.

**Add a new project** — copy any project block (from `{` to `},`), paste it after the last
one, change the text. There's a commented template at the bottom of the projects list.
Add `featured: true` to make it a big block instead of a card.

**Add a photo to a project**
1. Put the image in the `assets/` folder (e.g. `assets/goldeneye.jpg`; keep it under ~500 KB).
2. In the project, set `image: "assets/goldeneye.jpg"` and a short `imageAlt`.
3. Optional: change the crop with `imageRatio` (`"4 / 5"` portrait, `"16 / 10"` landscape) and
   `imagePosition` (`"50% 0%"` keeps the top of the photo in frame, `"50% 50%"` the middle).
   Photos taken on a phone often carry your GPS location, so ask Claude to resize and clean them first.

**Add a job** — copy a block inside `experience.items`. **Add a skill** — add `"Name",` to a list.

**Hide a section** — set `show: false` on it (e.g. `about: { show: false, ... }`).

**Link a PDF (design report, résumé)** — drop it in `assets/`, then add
`links: [{ label: "Design report", url: "assets/goldeneye-report.pdf" }]` to a project,
or set `contact.resume`. **Use a résumé copy without your phone number** — this site is public.

**Bump the revision** — change `site.updated` (it appears in the footer title block).

If the page shows a red "couldn't be built" box, you've missed a comma or a quote. Undo your
last edit, or look near it for a line that's missing its trailing `,`.

## If you rename yourself or change your headline

The browser tab title and the Google/LinkedIn link preview come from `index.html` (the
`<title>` and `description` lines near the top), not `content.js`. Update those two too.

## Putting it online (free, ~5 minutes)

### Option A — GitHub Pages (recommended: you can edit from any browser)
1. Create a free account at github.com, then **New repository** → name it (e.g. `portfolio`) → **Public**.
2. **Add file → Upload files**, drag in everything in this folder (including `assets/`), **Commit**.
3. **Settings → Pages → Build and deployment → Deploy from a branch → `main` / root → Save**.
4. Your site appears at `https://<your-username>.github.io/portfolio/` within about a minute.
   (Name the repo `<your-username>.github.io` to get the shorter `https://<your-username>.github.io/`.)

**Editing later:** on github.com open `content.js` → pencil icon → change text → **Commit changes**.
The live site updates about a minute later. No software needed, and it works from your phone.

### Option B — Netlify Drop (fastest first deploy)
Go to app.netlify.com/drop and drag this whole folder onto the page. You get a public URL immediately.
Create a free account when prompted, or the site is removed after about an hour. To update, drag the folder again.

### Custom domain (optional)
Buy something like `dhyansoni.ca` from any registrar and point it at GitHub Pages or Netlify
(both walk you through it under their Domain settings). Nothing in the site needs to change.
