# Dhyan Soni — Engineering Portfolio

A plain static website. No frameworks, no build step, nothing to install.

## Where the site lives

- **Address:** https://dhyans.space (the old `dsoni007.github.io/Soni007` link redirects to it).
- **Hosting:** GitHub Pages, free, publishing this repo's `main` branch. Every push goes live in about a minute.
- **Domain name:** bought at Porkbun and renews yearly (about $26 USD; it expires 2027-09-20, so keep auto-renew on
  or the address stops working). Its DNS records (four `A` records to GitHub plus a `www` CNAME) live in Porkbun's DNS editor.
- **Don't delete the `CNAME` file** in this folder. It tells GitHub which domain the site belongs to.
- **Changing domains later:** change the `CNAME` file, the two address lines at the top of `index.html`, and the DNS records.

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
It joins the *More projects* section automatically.

**The More projects section** — the big Goldeneye block (`featured: true`) always stays put in the Work section. Every other
project is a card in the *More projects* section right under it: a band of its own with a big heading, a "Projects" link in the
top menu, and a "7 more projects ↓" link beside the Work heading, so nobody scrolls past it. The cards sit in a swipeable strip,
in the order listed; the arrows, swiping, scrolling and the arrow keys all move it. Change the heading with `work.moreTitle`.
A card that has `facts`, `highlights` or `links` gets a "See more" arrow, and clicking it opens all of that in a pop-up.
A card with only a summary and tags has no arrow.

**Add a photo to a project**
1. Put the image in the `assets/` folder (e.g. `assets/goldeneye.jpg`; keep it under ~500 KB).
2. In the project, set `image: "assets/goldeneye.jpg"` and a short `imageAlt`.
3. Optional: change the crop with `imageRatio` (`"4 / 5"` portrait, `"16 / 10"` landscape) and
   `imagePosition` (`"50% 0%"` keeps the top of the photo in frame, `"50% 50%"` the middle).
   Photos taken on a phone often carry your GPS location, so ask Claude to resize and clean them first.

**The Goldeneye photo carousel and video** (in the featured project in `content.js`)
- *Add a photo:* put it in `assets/goldeneye/` (about 1400 px on the long side; iPhone HEIC files need converting
  and often need rotating, so ask Claude), then copy one `{ src: ..., caption: ..., alt: ... }` line in `gallery`.
  Photos show in the order listed. `gallery: []` hides the carousel.
- *Swap the video:* replace `assets/goldeneye/launch.mp4`, or point `video.src` at a new file. Use H.264 `.mp4`
  (plays everywhere) and keep it under ~25 MB. Set `video.ratio` to `"9 / 16"` for a phone video held upright
  or `"16 / 9"` for widescreen. `video.src: ""` hides it.
- *Update the design report:* replace `assets/goldeneye/goldeneye-final-design-report.pdf` and change the page
  count in the "Documentation" fact (its text opens the report in the on-page reader). Big PDFs are slow on
  phones, so ask Claude to shrink the pictures first (the report went from 45 MB to 7 MB with no visible difference).

**Change your headshot** — replace `assets/headshot.jpg` with a new square photo (at least ~600 px wide; it's shown large on desktop),
or point `hero.photo` at a different file. `hero.photoPosition` moves the crop inside the circle.
Set `photo: ""` to hide it.

**The extra hero button** ("Hear me speak") — `hero.extraButton` has a `label` and a `url`; it sits beside "Get in touch" and
"See the work" and opens the link in a new tab. Change either freely, or set `url: ""` to hide the button.

**The typing line** (between the top of the page and Work) — edit the `typing.lines` list to change what gets typed;
they play in order on a loop. `typing.speed` is milliseconds per letter and `typing.hold` is how long a finished
line stays up. `typing.show: false` hides the whole thing. Visitors who ask their device for reduced motion see
all the lines at once, standing still.

**The "Get in touch" pop-up** — it lists whatever is set in `contact` (email, LinkedIn, résumé).
Change its heading and note with `contact.dialogTitle` and `contact.dialogNote`.

**Add a job** — copy a block inside `experience.items` (leave `dates: ""` empty and the date line is simply hidden).
**Add a skill** — add `"Name",` to a list.

**Hide a section** — set `show: false` on it (e.g. `education: { show: false, ... }`).

**Show a PDF (design report, résumé)** — drop it in `assets/`, then either make a fact open it
(`{ label: "Documentation", value: "…", pdf: "assets/report.pdf" }`) or add a button to a project
(`links: [{ label: "Design report", pdf: "assets/report.pdf" }]`). Either one opens the PDF in a reader
window on the page (no download); use `url:` instead of `pdf:` for a normal link. For a résumé, set
`contact.resume`. **Use a résumé copy without your phone number** — this site is public.

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
