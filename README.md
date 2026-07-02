# SwipeFlat NZ

A playful swipe app for NZ uni students to find a compatible flatmate or room, based on a lifestyle questionnaire. This is a **demo MVP**: no login, no database — everything runs in the browser against a small set of built-in sample profiles.

## Run it locally

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## Deploy it

This app has no real backend (Express just serves static files), so you have two options:

**Option A — GitHub Pages (free, simplest)**
Since there's no server logic, you can deploy `public/index.html`, `public/style.css`, and `public/script.js` directly as a static site:
1. Push this project to a GitHub repo.
2. In the repo Settings → Pages, set the source to the `public` folder on your main branch.
3. Your app is live at `https://<your-username>.github.io/<repo-name>/`.

**Option B — Node hosting (Render, Railway, etc.)**
If you'd rather keep the Express server (e.g. to add a real backend later):
1. Push this project to GitHub.
2. Connect the repo on Render.com or Railway.app.
3. Set the start command to `npm start`. It'll auto-detect the `PORT` environment variable.

## What's next (not in this MVP)

Real accounts and saved profiles, a database of real users/listings, in-app messaging, and payments would all need a proper backend and are intentionally left out of this demo.
