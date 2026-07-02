// SwipeFlat NZ — minimal server
// This app has no real backend logic: no database, no accounts, no API calls.
// Express is only used to serve the static files in /docs.
// (Everything — the questionnaire, sample profiles, and matching score — runs
// in the browser inside script.js.)
// Note: the folder is named "docs" (not "public") because GitHub Pages only
// lets you publish from the repo root or a folder named "docs".

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'docs')));

app.listen(PORT, () => {
  console.log(`SwipeFlat NZ running at http://localhost:${PORT}`);
});
