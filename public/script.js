// ============================================================================
// SwipeFlat NZ — all app logic lives here.
// No backend, no login: sample data below, matching math runs in the browser.
// ============================================================================

// ---------------------------------------------------------------------------
// SAMPLE DATA — flatmate profiles and room listings across NZ uni cities.
// Fields are shared between both so the same scoring function works on either.
// ---------------------------------------------------------------------------
const FLATMATES = [
  { name: "Maia", age: 22, city: "Auckland", major: "Marketing", budget: 260, clean: 4, sleep: "flexible", party: "sometimes", smoking: "no", pets: "okay", hobbies: ["Gym","Movies","Music"], music: ["Pop","Hip-Hop"], languages: ["English","Samoan"], past: "great", avatar: "🧑‍🎨", tagline: "Will alphabetize the spice rack, will also dance on the kitchen table." },
  { name: "Ben", age: 24, city: "Auckland", major: "Engineering", budget: 300, clean: 2, sleep: "night", party: "often", smoking: "social", pets: "have", hobbies: ["Gaming","Sports"], music: ["EDM","Rock"], languages: ["English"], past: "mixed", avatar: "🧑‍💻", tagline: "Codes till 3am, orders Uber Eats like it's a personality trait." },
  { name: "Priya", age: 21, city: "Wellington", major: "Law", budget: 280, clean: 5, sleep: "early", party: "never", smoking: "no", pets: "no", hobbies: ["Reading","Hiking"], music: ["Classical","Indie"], languages: ["English","Hindi"], past: "great", avatar: "👩‍⚖️", tagline: "Color-coded highlighters and zero tolerance for dishes in the sink." },
  { name: "Jack", age: 23, city: "Wellington", major: "Film Studies", budget: 240, clean: 3, sleep: "night", party: "sometimes", smoking: "no", pets: "okay", hobbies: ["Movies","Art","Music"], music: ["Indie","Rock"], languages: ["English"], past: "first", avatar: "🎬", tagline: "Has opinions about lighting. Will make you watch his short film." },
  { name: "Aroha", age: 20, city: "Christchurch", major: "Nursing", budget: 220, clean: 4, sleep: "early", party: "never", smoking: "no", pets: "have", hobbies: ["Cooking","Reading"], music: ["Pop","Country"], languages: ["English","Te Reo Māori"], past: "great", avatar: "👩‍⚕️", tagline: "Meal preps on Sundays and will absolutely feed you." },
  { name: "Sam", age: 25, city: "Christchurch", major: "Business", budget: 320, clean: 2, sleep: "flexible", party: "often", smoking: "yes", pets: "okay", hobbies: ["Partying","Sports","Gym"], music: ["Hip-Hop","EDM"], languages: ["English"], past: "rocky", avatar: "🕺", tagline: "The flat's unofficial DJ. Also unofficially out of milk." },
  { name: "Chen", age: 22, city: "Hamilton", major: "Agriculture", budget: 210, clean: 4, sleep: "flexible", party: "sometimes", smoking: "no", pets: "okay", hobbies: ["Hiking","Cooking","Gaming"], music: ["Indie","K-Pop"], languages: ["English","Mandarin"], past: "great", avatar: "🧑‍🌾", tagline: "Grows chili plants on the windowsill. Mild flex, honestly." },
  { name: "Ollie", age: 21, city: "Dunedin", major: "Medicine", budget: 230, clean: 5, sleep: "night", party: "never", smoking: "no", pets: "no", hobbies: ["Reading","Gym"], music: ["Classical","Rock"], languages: ["English"], past: "first", avatar: "🧑‍⚕️", tagline: "Studies at 2am, silent as a ghost, borderline monastic." },
  { name: "Isla", age: 23, city: "Tauranga", major: "Design", budget: 250, clean: 3, sleep: "flexible", party: "sometimes", smoking: "social", pets: "have", hobbies: ["Art","Music","Movies"], music: ["Pop","Indie","K-Pop"], languages: ["English","Spanish"], past: "great", avatar: "🎨", tagline: "Turns the lounge into a gallery. Cat included, no extra charge." },
  { name: "Tama", age: 24, city: "Whanganui", major: "Trades", budget: 200, clean: 3, sleep: "early", party: "sometimes", smoking: "no", pets: "okay", hobbies: ["Sports","Cooking","Gaming"], music: ["Country","Rock"], languages: ["English","Te Reo Māori"], past: "great", avatar: "🔧", tagline: "Fixes stuff around the flat before you even ask." }
];

const ROOMS = [
  { name: "Sunny Double, Mt Eden", age: 23, city: "Auckland", major: "Landlord: Dave", budget: 270, clean: 4, sleep: "flexible", party: "sometimes", smoking: "no", pets: "okay", hobbies: ["Gym","Movies","Cooking"], music: ["Pop","Indie"], languages: ["English"], past: "great", avatar: "🏡", tagline: "Landlord Dave waters the tomatoes and minds his own business." },
  { name: "CBD Room, Close to Everything", age: 22, city: "Auckland", major: "Landlord: Property mgmt co.", budget: 340, clean: 2, sleep: "night", party: "often", smoking: "social", pets: "no", hobbies: ["Gaming","Partying"], music: ["EDM","Hip-Hop"], languages: ["English"], past: "mixed", avatar: "🏙️", tagline: "Walk to uni, walk to everywhere, walk of shame optional." },
  { name: "Quiet Room near Vic Uni", age: 24, city: "Wellington", major: "Landlord: Margaret", budget: 260, clean: 5, sleep: "early", party: "never", smoking: "no", pets: "no", hobbies: ["Reading","Hiking"], music: ["Classical","Indie"], languages: ["English"], past: "great", avatar: "📚", tagline: "Landlord is a retired librarian. It shows." },
  { name: "Creative Flat, Aro Valley", age: 22, city: "Wellington", major: "Landlord: Flat co-op", budget: 230, clean: 3, sleep: "flexible", party: "sometimes", smoking: "no", pets: "okay", hobbies: ["Art","Music","Movies"], music: ["Indie","Rock"], languages: ["English","Spanish"], past: "great", avatar: "🎨", tagline: "Fairy lights, house plants, and one very opinionated cat." },
  { name: "Family Home, Spare Room", age: 26, city: "Christchurch", major: "Landlord: The Wilsons", budget: 210, clean: 4, sleep: "early", party: "never", smoking: "no", pets: "have", hobbies: ["Cooking","Reading"], music: ["Country","Pop"], languages: ["English","Te Reo Māori"], past: "great", avatar: "🏠", tagline: "Landlady bakes on Sundays. You will gain weight, happily." },
  { name: "Party Flat near Uni", age: 21, city: "Christchurch", major: "Landlord: Absentee, mostly", budget: 250, clean: 2, sleep: "night", party: "often", smoking: "yes", pets: "okay", hobbies: ["Partying","Sports","Gaming"], music: ["Hip-Hop","EDM"], languages: ["English"], past: "rocky", avatar: "🪩", tagline: "Neighbours know us by name. Not always fondly." },
  { name: "Cozy Room, Garden Flat", age: 23, city: "Hamilton", major: "Landlord: Mr. Patel", budget: 200, clean: 4, sleep: "flexible", party: "sometimes", smoking: "no", pets: "okay", hobbies: ["Hiking","Cooking","Gaming"], music: ["Indie","K-Pop"], languages: ["English","Mandarin"], past: "great", avatar: "🌿", tagline: "Herb garden out back. Landlord low-key a plant dad." },
  { name: "Studious Student Flat", age: 21, city: "Dunedin", major: "Landlord: Uni housing", budget: 190, clean: 5, sleep: "night", party: "never", smoking: "no", pets: "no", hobbies: ["Reading","Gym"], music: ["Classical","Rock"], languages: ["English"], past: "first", avatar: "🕯️", tagline: "Silent library energy. Great for exams, less for FOMO." },
  { name: "Beachy Vibes Room", age: 24, city: "Tauranga", major: "Landlord: Nikau", budget: 240, clean: 3, sleep: "flexible", party: "sometimes", smoking: "social", pets: "have", hobbies: ["Art","Music","Movies"], music: ["Pop","Indie","K-Pop"], languages: ["English","Spanish"], past: "great", avatar: "🏖️", tagline: "Ten minutes from the beach, zero minutes from good vibes." },
  { name: "Handyman's Flat", age: 25, city: "Whanganui", major: "Landlord: Koro Wiremu", budget: 180, clean: 3, sleep: "early", party: "sometimes", smoking: "no", pets: "okay", hobbies: ["Sports","Cooking","Gaming"], music: ["Country","Rock"], languages: ["English","Te Reo Māori"], past: "great", avatar: "🔨", tagline: "Landlord fixes everything within the hour. Mind = blown." }
];

// Silly rotating lines shown on the loading screen
const LOADING_JOKES = [
  "Calculating vibes...",
  "Cross-referencing snack preferences...",
  "Checking who actually does the dishes...",
  "Consulting the flat spirits...",
  "Measuring compatible chaos levels...",
  "Making sure nobody's a serial dish-avoider...",
  "Almost there, don't swipe yet..."
];

// Jokes shown on the "It's a match!" popup
const MATCH_JOKES = [
  "May your Wi-Fi always be strong and your milk always be yours.",
  "A love story built on shared cleanliness standards.",
  "Somewhere, a group chat is about to be created.",
  "Compatible vibes detected. Rent responsibly.",
  "This could be the start of a beautiful flat.",
  "May your dishes pile up equally and your playlists blend perfectly."
];

// ---------------------------------------------------------------------------
// STATE
// ---------------------------------------------------------------------------
const state = {
  city: null,
  mode: null,       // "flatmate" | "room"
  user: {},         // answers from the questionnaire
  deck: [],         // shuffled list of profiles for this session
  index: 0,         // current position in the deck
  likedCount: 0,
  totalCount: 0
};

// ---------------------------------------------------------------------------
// SCREEN NAVIGATION
// ---------------------------------------------------------------------------
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ---------------------------------------------------------------------------
// SCORING — compares the user's questionnaire answers to a sample profile.
// Returns { total: 0-100, breakdown: {label: "xx%"} }
// ---------------------------------------------------------------------------
function jaccard(a, b) {
  if (a.length === 0 && b.length === 0) return 0.5;
  const setB = new Set(b);
  const intersection = a.filter(x => setB.has(x)).length;
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : intersection / union;
}

function computeScore(user, profile) {
  const breakdown = {};
  let score = 0;

  const budgetDiff = Math.abs(user.budget - profile.budget);
  const budgetScore = Math.max(0, 1 - budgetDiff / 200);
  score += budgetScore * 20;
  breakdown["Budget match"] = budgetScore;

  const cleanDiff = Math.abs(user.clean - profile.clean);
  const cleanScore = 1 - cleanDiff / 4;
  score += cleanScore * 15;
  breakdown["Cleanliness"] = cleanScore;

  const sleepScore = user.sleep === profile.sleep ? 1 : (user.sleep === "flexible" || profile.sleep === "flexible" ? 0.6 : 0.2);
  score += sleepScore * 10;
  breakdown["Sleep schedule"] = sleepScore;

  const partyLevels = { never: 0, sometimes: 1, often: 2 };
  const partyDiff = Math.abs(partyLevels[user.party] - partyLevels[profile.party]);
  const partyScore = 1 - partyDiff / 2;
  score += partyScore * 15;
  breakdown["Party vibe"] = partyScore;

  let smokingScore;
  if (user.smoking === profile.smoking) smokingScore = 1;
  else if (user.smoking === "social" || profile.smoking === "social") smokingScore = 0.6;
  else smokingScore = 0.1;
  score += smokingScore * 10;
  breakdown["Smoking"] = smokingScore;

  let petsScore;
  if ((user.pets === "no" && profile.pets === "have") || (profile.pets === "no" && user.pets === "have")) petsScore = 0.1;
  else if (user.pets === profile.pets) petsScore = 1;
  else petsScore = 0.7;
  score += petsScore * 10;
  breakdown["Pets"] = petsScore;

  const hobbiesScore = jaccard(user.hobbies, profile.hobbies);
  score += hobbiesScore * 5;
  breakdown["Hobbies"] = hobbiesScore;

  const musicScore = jaccard(user.music, profile.music);
  score += musicScore * 5;
  breakdown["Music taste"] = musicScore;

  const langScore = jaccard(user.languages, profile.languages);
  score += langScore * 5;
  breakdown["Languages"] = langScore;

  const ageDiff = Math.abs(user.age - profile.age);
  const ageScore = Math.max(0, 1 - ageDiff / 10);
  score += ageScore * 5;
  breakdown["Age"] = ageScore;

  return { total: Math.round(score), breakdown };
}

// ---------------------------------------------------------------------------
// CHIP MULTISELECT (hobbies / music / languages)
// ---------------------------------------------------------------------------
function setupChipGrid(gridId) {
  const grid = document.getElementById(gridId);
  grid.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => chip.classList.toggle("selected"));
  });
}

function getSelectedChips(gridId) {
  return Array.from(document.getElementById(gridId).querySelectorAll(".chip.selected"))
    .map(chip => chip.textContent.trim().replace(/^\p{Emoji}+\s*/u, ""));
}

// ---------------------------------------------------------------------------
// QUIZ INPUT LIVE LABELS
// ---------------------------------------------------------------------------
function setupRangeLabels() {
  const budget = document.getElementById("q-budget");
  const budgetValue = document.getElementById("q-budget-value");
  budget.addEventListener("input", () => {
    budgetValue.textContent = `$${budget.value} / week`;
  });

  const clean = document.getElementById("q-clean");
  const cleanValue = document.getElementById("q-clean-value");
  const cleanLabels = { 1: "🌪️ Chaotic gremlin", 2: "🙃 Pretty relaxed", 3: "😐 Balanced", 4: "🧼 Fairly tidy", 5: "✨ Neat freak" };
  clean.addEventListener("input", () => {
    cleanValue.textContent = cleanLabels[clean.value];
  });
}

// ---------------------------------------------------------------------------
// CARD RENDERING + SWIPE LOGIC
// ---------------------------------------------------------------------------
function renderStack() {
  const stack = document.getElementById("card-stack");
  stack.innerHTML = "";

  const visible = state.deck.slice(state.index, state.index + 3);
  // render back-to-front so the first item ends up on top
  visible.slice().reverse().forEach((entry, i) => {
    const depth = visible.length - 1 - i;
    const card = buildCardElement(entry, depth);
    stack.appendChild(card);
  });

  updateCounter();

  if (state.index >= state.deck.length) {
    finishDeck();
  }
}

function buildCardElement(entry, depth) {
  const { profile, score } = entry;
  const card = document.createElement("div");
  card.className = "profile-card";
  card.style.transform = `translateY(${depth * 10}px) scale(${1 - depth * 0.04})`;
  card.style.zIndex = String(10 - depth);
  card.style.opacity = depth > 2 ? "0" : String(1 - depth * 0.15);

  card.innerHTML = `
    <div class="profile-score">${score.total}% match</div>
    <div class="profile-avatar">${profile.avatar}</div>
    <div class="profile-name">${profile.name}, ${profile.age}</div>
    <div class="profile-sub">${profile.major} · ${profile.city} · $${profile.budget}/wk</div>
    <div class="profile-tagline">"${profile.tagline}"</div>
    <div class="profile-tags">
      ${profile.hobbies.map(h => `<span class="tag">${h}</span>`).join("")}
      ${profile.music.slice(0,2).map(m => `<span class="tag">${m}</span>`).join("")}
    </div>
    <div class="swipe-stamp like">LIKE</div>
    <div class="swipe-stamp nope">NOPE</div>
  `;

  if (depth === 0) makeDraggable(card, entry);
  return card;
}

function updateCounter() {
  const shown = Math.min(state.index + 1, state.deck.length);
  document.getElementById("swipe-counter").textContent = `${shown} / ${state.deck.length}`;
}

let dragging = false;

function makeDraggable(card, entry) {
  let startX = 0, currentX = 0, isDown = false;

  const onDown = (x) => { isDown = true; dragging = true; startX = x; card.style.transition = "none"; };
  const onMove = (x) => {
    if (!isDown) return;
    currentX = x - startX;
    const rotate = currentX / 12;
    card.style.transform = `translateX(${currentX}px) rotate(${rotate}deg)`;
    const likeStamp = card.querySelector(".swipe-stamp.like");
    const nopeStamp = card.querySelector(".swipe-stamp.nope");
    likeStamp.style.opacity = currentX > 20 ? Math.min(currentX / 100, 1) : 0;
    nopeStamp.style.opacity = currentX < -20 ? Math.min(-currentX / 100, 1) : 0;
  };
  const onUp = () => {
    if (!isDown) return;
    isDown = false;
    card.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    if (currentX > 110) {
      swipeCard(card, entry, "like");
    } else if (currentX < -110) {
      swipeCard(card, entry, "pass");
    } else {
      card.style.transform = "translateX(0) rotate(0)";
    }
    currentX = 0;
    setTimeout(() => { dragging = false; }, 50);
  };

  card.addEventListener("mousedown", (e) => onDown(e.clientX));
  window.addEventListener("mousemove", (e) => onMove(e.clientX));
  window.addEventListener("mouseup", onUp);

  card.addEventListener("touchstart", (e) => onDown(e.touches[0].clientX), { passive: true });
  card.addEventListener("touchmove", (e) => onMove(e.touches[0].clientX), { passive: true });
  card.addEventListener("touchend", onUp);
}

function swipeCard(card, entry, direction) {
  const flyX = direction === "like" ? 700 : -700;
  card.style.transform = `translateX(${flyX}px) rotate(${flyX / 12}deg)`;
  card.style.opacity = "0";

  state.totalCount++;
  if (direction === "like") {
    state.likedCount++;
    if (entry.score.total >= 65) {
      setTimeout(() => showMatch(entry), 250);
    }
  }

  setTimeout(() => {
    state.index++;
    renderStack();
  }, 260);
}

// Manual buttons (pass / like) act on the current top card
function triggerTopSwipe(direction) {
  if (dragging) return;
  const stack = document.getElementById("card-stack");
  const topCard = stack.lastElementChild;
  if (!topCard) return;
  const entry = state.deck[state.index];
  if (!entry) return;
  swipeCard(topCard, entry, direction);
}

function finishDeck() {
  document.getElementById("end-summary").textContent =
    `You liked ${state.likedCount} out of ${state.totalCount} ${state.mode === "flatmate" ? "flatmates" : "rooms"} in ${state.city}. Not bad!`;
  showScreen("screen-end");
}

// ---------------------------------------------------------------------------
// MATCH POPUP + CONFETTI
// ---------------------------------------------------------------------------
function showMatch(entry) {
  document.getElementById("match-avatar-them").textContent = entry.profile.avatar;
  document.getElementById("match-name").textContent = `You and ${entry.profile.name} are a ${entry.score.total}% match!`;
  document.getElementById("match-joke").textContent = MATCH_JOKES[Math.floor(Math.random() * MATCH_JOKES.length)];
  spawnConfetti();
  document.getElementById("match-overlay").classList.add("active");
}

function spawnConfetti() {
  const colors = ["#ff3fb0", "#39ff8f", "#3fd0ff", "#a45bff"];
  const container = document.getElementById("confetti");
  container.innerHTML = "";
  for (let i = 0; i < 45; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${1.5 + Math.random() * 1.5}s`;
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    container.appendChild(piece);
  }
}

// ---------------------------------------------------------------------------
// INFO POPUP ("why this match")
// ---------------------------------------------------------------------------
function showInfo() {
  const entry = state.deck[state.index];
  if (!entry) return;
  const box = document.getElementById("info-breakdown");
  box.innerHTML = Object.entries(entry.score.breakdown)
    .map(([label, val]) => `<div class="info-row"><span>${label}</span><span>${Math.round(val * 100)}%</span></div>`)
    .join("");
  document.getElementById("info-overlay").classList.add("active");
}

// ---------------------------------------------------------------------------
// QUIZ SUBMISSION -> BUILD DECK -> LOADING -> SWIPE SCREEN
// ---------------------------------------------------------------------------
function collectUserAnswers() {
  return {
    name: document.getElementById("q-name").value.trim() || "You",
    age: Number(document.getElementById("q-age").value),
    major: document.getElementById("q-major").value.trim(),
    budget: Number(document.getElementById("q-budget").value),
    clean: Number(document.getElementById("q-clean").value),
    sleep: document.getElementById("q-sleep").value,
    party: document.getElementById("q-party").value,
    smoking: document.getElementById("q-smoking").value,
    pets: document.getElementById("q-pets").value,
    hobbies: getSelectedChips("hobby-grid"),
    music: getSelectedChips("music-grid"),
    languages: getSelectedChips("lang-grid"),
    past: document.getElementById("q-past").value
  };
}

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildDeck() {
  const source = state.mode === "flatmate" ? FLATMATES : ROOMS;
  let pool = source.filter(p => p.city === state.city);
  // Fallback: if a city has too few sample profiles, fill in from other cities
  if (pool.length < 3) {
    pool = pool.concat(source.filter(p => p.city !== state.city).slice(0, 3 - pool.length));
  }
  const scored = pool.map(profile => ({ profile, score: computeScore(state.user, profile) }));
  scored.sort((a, b) => b.score.total - a.score.total);
  return scored;
}

function runLoadingSequence(callback) {
  showScreen("screen-loading");
  const textEl = document.getElementById("loading-text");
  let i = 0;
  textEl.textContent = LOADING_JOKES[0];
  const interval = setInterval(() => {
    i++;
    textEl.textContent = LOADING_JOKES[i % LOADING_JOKES.length];
  }, 450);
  setTimeout(() => {
    clearInterval(interval);
    callback();
  }, 1800);
}

// ---------------------------------------------------------------------------
// WIRE UP EVERYTHING ONCE THE PAGE LOADS
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  setupChipGrid("hobby-grid");
  setupChipGrid("music-grid");
  setupChipGrid("lang-grid");
  setupRangeLabels();

  document.getElementById("btn-start").addEventListener("click", () => showScreen("screen-city"));
  document.getElementById("back-to-landing").addEventListener("click", () => showScreen("screen-landing"));

  document.querySelectorAll(".city-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      state.city = chip.dataset.city;
      document.getElementById("mode-city-label").textContent = `Looking in ${state.city}`;
      showScreen("screen-mode");
    });
  });
  document.getElementById("back-to-city").addEventListener("click", () => showScreen("screen-city"));

  document.querySelectorAll(".mode-card").forEach(card => {
    card.addEventListener("click", () => {
      state.mode = card.dataset.mode;
      showScreen("screen-quiz");
    });
  });
  document.getElementById("back-to-mode").addEventListener("click", () => showScreen("screen-mode"));
  document.getElementById("back-to-quiz").addEventListener("click", () => showScreen("screen-quiz"));

  document.getElementById("quiz-form").addEventListener("submit", (e) => {
    e.preventDefault();
    state.user = collectUserAnswers();
    state.deck = buildDeck();
    state.index = 0;
    state.likedCount = 0;
    state.totalCount = 0;

    runLoadingSequence(() => {
      const modeLabel = state.mode === "flatmate" ? "Finding a Flatmate" : "Finding a Room";
      document.getElementById("swipe-title").textContent = `${modeLabel} in ${state.city}`;
      showScreen("screen-swipe");
      renderStack();
    });
  });

  document.getElementById("btn-pass").addEventListener("click", () => triggerTopSwipe("pass"));
  document.getElementById("btn-like").addEventListener("click", () => triggerTopSwipe("like"));
  document.getElementById("btn-info").addEventListener("click", showInfo);

  document.getElementById("btn-keep-swiping").addEventListener("click", () => {
    document.getElementById("match-overlay").classList.remove("active");
  });
  document.getElementById("btn-close-info").addEventListener("click", () => {
    document.getElementById("info-overlay").classList.remove("active");
  });

  document.getElementById("btn-restart").addEventListener("click", () => {
    state.city = null;
    state.mode = null;
    showScreen("screen-landing");
  });
});
