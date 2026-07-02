// SwipeFlat NZ — minimal server
// This app has no real backend logic: no database, no accounts, no API calls.
// Express is only used to serve the static files in /public.
// (Everything — the questionnaire, sample profiles, and matching score — runs
// in the browser inside script.js.)

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`SwipeFlat NZ running at http://localhost:${PORT}`);
});
