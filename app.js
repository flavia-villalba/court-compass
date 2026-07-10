const supabaseConfig = window.COURT_COMPASS_SUPABASE || {};
const supabaseRestUrl = supabaseConfig.url ? `${supabaseConfig.url}/rest/v1` : "";

const seedTournaments = [
  {
    id: "nd-middle-school-championship",
    name: "North Dakota Middle School Basketball Championship",
    host: "State Basketball Championship",
    startDate: "2026-03-06",
    endDate: "2026-03-08",
    city: "Fargo",
    state: "ND",
    gender: "Boys & Girls",
    grades: "3-8",
    format: "State Championship",
    playStyle: "5v5",
    venue: "Fargo Parks Sports Center + additional venues",
    registrationLink: "https://www.statebasketballchampionship.com/nd-tourney-overview",
    fee: "",
    awards: "State Championship trophies + Live Stream",
    contact: "",
    website: "https://www.statebasketballchampionship.com",
    notes: "Qualification required",
    lat: 46.8772,
    lng: -96.7898,
  },
  {
    id: "tuesday-2v2-fargo",
    name: "Tuesday 2v2 Tournament",
    host: "Fargo Basketball Academy",
    startDate: "2026-06-30",
    endDate: "2026-06-30",
    city: "Fargo",
    state: "ND",
    gender: "Boys",
    grades: "3-6",
    format: "2v2 Tournament",
    playStyle: "2v2",
    venue: "Fargo Basketball Academy & Shoot360 Fargo",
    registrationLink: "https://www.fargobasketball.com/basketball/youth-tournaments",
    fee: "$50",
    awards: "Division Champion Awards",
    contact: "Katie Johnson",
    website: "https://www.fargobasketball.com",
    notes: "4 Game Guarantee",
    lat: 46.8772,
    lng: -96.7898,
  },
  {
    id: "july-3v3-grand-forks",
    name: "July Continuous 3v3v3 League",
    host: "Fargo Basketball Academy",
    startDate: "2026-07-06",
    endDate: "2026-07-29",
    city: "Grand Forks",
    state: "ND",
    gender: "Boys & Girls",
    grades: "4-8",
    format: "League",
    playStyle: "3v3",
    venue: "Shoot360 Grand Forks",
    registrationLink: "https://www.fargobasketball.com/basketball/youth-tournaments",
    fee: "",
    awards: "",
    contact: "Katie Johnson",
    website: "https://www.fargobasketball.com",
    notes: "Continuous league",
    lat: 47.9253,
    lng: -97.0329,
  },
  {
    id: "k3-summer-league",
    name: "K-3 Summer League",
    host: "Fargo Basketball Academy",
    startDate: "2026-07-06",
    endDate: "2026-08-05",
    city: "Fargo",
    state: "ND",
    gender: "Boys & Girls",
    grades: "K-3",
    format: "Development League",
    playStyle: "3v3",
    venue: "Fargo Basketball Academy",
    registrationLink: "https://www.fargobasketball.com/basketball/youth-tournaments",
    fee: "",
    awards: "",
    contact: "Katie Johnson",
    website: "https://www.fargobasketball.com",
    notes: "",
    lat: 46.8772,
    lng: -96.7898,
  },
  {
    id: "spring-showcase",
    name: "Spring Showcase",
    host: "Sanford Sports",
    startDate: "2026-05-02",
    endDate: "2026-05-03",
    city: "Fargo",
    state: "ND",
    gender: "Boys",
    grades: "Youth",
    format: "Travel Tournament",
    playStyle: "5v5",
    venue: "Fargo Parks Sports Center",
    registrationLink: "https://www.sanfordsports.com/sports/academy/basketball/fargo/tournaments",
    fee: "",
    awards: "Championship Awards",
    contact: "",
    website: "https://www.sanfordsports.com",
    notes: "",
    lat: 46.8772,
    lng: -96.7898,
  },
  {
    id: "beulah-summer-slam",
    name: "Beulah Summer Slam",
    host: "Local Organizer (TournamentInsights)",
    startDate: "2026-07-11",
    endDate: "2026-07-12",
    city: "Beulah",
    state: "ND",
    gender: "Boys & Girls",
    grades: "Youth",
    format: "Travel Tournament",
    playStyle: "5v5",
    venue: "TBD",
    registrationLink: "",
    fee: "",
    awards: "Tournament Awards",
    contact: "",
    website: "https://www.tournamentinsights.com/basketball/north-dakota",
    notes: "",
    lat: 47.2633,
    lng: -101.7779,
  },
  {
    id: "ballin-in-the-basin",
    name: "Ballin' in the Basin",
    host: "Williston Parks & Recreation",
    startDate: "2026-12-13",
    endDate: "2026-12-14",
    city: "Williston",
    state: "ND",
    gender: "Boys & Girls",
    grades: "3-8",
    format: "Travel Tournament",
    playStyle: "5v5",
    venue: "Williston ARC & local facilities",
    registrationLink: "https://www.willistonparks.com/ballin-in-the-basin",
    fee: "",
    awards: "State Qualifier",
    contact: "",
    website: "https://www.willistonparks.com",
    notes: "",
    lat: 48.1469,
    lng: -103.6179,
  },
  {
    id: "rise-up-summer-clash",
    name: "Rise Up Summer Clash",
    host: "Rise Up Basketball Academy",
    startDate: "2026-07-18",
    endDate: "2026-07-18",
    city: "Fargo",
    state: "ND",
    gender: "Boys & Girls",
    grades: "4-8",
    format: "Travel Tournament",
    playStyle: "5v5",
    venue: "Fargo",
    registrationLink: "https://www.riseupbasketballacademy.com/signup",
    fee: "$275",
    awards: "Team Awards",
    contact: "",
    website: "https://www.riseupbasketballacademy.com",
    notes: "Date estimated from existing Court Compass listing.",
    lat: 46.8772,
    lng: -96.7898,
  },
  {
    id: "patriots-fall-classic",
    name: "Patriots Fall Classic",
    host: "Local Organizer",
    startDate: "2025-11-01",
    endDate: "2025-11-02",
    city: "Bismarck",
    state: "ND",
    gender: "Boys & Girls",
    grades: "3-8",
    format: "Qualifier Tournament",
    playStyle: "5v5",
    venue: "TBD",
    registrationLink: "",
    fee: "",
    awards: "ND State Qualifier",
    contact: "",
    website: "",
    notes: "Qualifier for State Championship",
    lat: 46.8083,
    lng: -100.7837,
  },
  {
    id: "grand-forks-ymca-classic",
    name: "Grand Forks YMCA Classic",
    host: "Grand Forks YMCA",
    startDate: "2025-11-08",
    endDate: "2025-11-09",
    city: "Grand Forks",
    state: "ND",
    gender: "Boys & Girls",
    grades: "3-8",
    format: "Qualifier Tournament",
    playStyle: "5v5",
    venue: "Grand Forks YMCA",
    registrationLink: "",
    fee: "",
    awards: "ND State Qualifier",
    contact: "",
    website: "",
    notes: "Qualifier",
    lat: 47.9253,
    lng: -97.0329,
  },
  {
    id: "devils-lake-basketball",
    name: "Devils Lake Basketball Tournament",
    host: "Local Organizer",
    startDate: "2025-11-15",
    endDate: "2025-11-15",
    city: "Devils Lake",
    state: "ND",
    gender: "Boys & Girls",
    grades: "Youth",
    format: "Qualifier Tournament",
    playStyle: "5v5",
    venue: "TBD",
    registrationLink: "",
    fee: "",
    awards: "ND State Qualifier",
    contact: "",
    website: "",
    notes: "",
    lat: 48.1128,
    lng: -98.8651,
  },
  {
    id: "valley-city-youth",
    name: "Valley City Youth Basketball Tournament",
    host: "VCPR",
    startDate: "2025-11-15",
    endDate: "2025-11-15",
    city: "Valley City",
    state: "ND",
    gender: "Boys & Girls",
    grades: "Youth",
    format: "Qualifier Tournament",
    playStyle: "5v5",
    venue: "TBD",
    registrationLink: "",
    fee: "",
    awards: "ND State Qualifier",
    contact: "",
    website: "",
    notes: "",
    lat: 46.9233,
    lng: -98.0032,
  },
  {
    id: "empire-triple-crown",
    name: "Empire Triple Crown Basketball Tournament",
    host: "Empire Basketball",
    startDate: "2025-11-08",
    endDate: "2025-11-09",
    city: "Fargo",
    state: "ND",
    gender: "Boys & Girls",
    grades: "Youth",
    format: "Qualifier Tournament",
    playStyle: "5v5",
    venue: "TBD",
    registrationLink: "",
    fee: "",
    awards: "ND State Qualifier",
    contact: "",
    website: "",
    notes: "",
    lat: 46.8772,
    lng: -96.7898,
  },
  {
    id: "empire-double-crown",
    name: "Empire Double Crown Basketball Tournament",
    host: "Empire Basketball",
    startDate: "2025-11-15",
    endDate: "2025-11-15",
    city: "Fargo",
    state: "ND",
    gender: "Boys & Girls",
    grades: "Youth",
    format: "Qualifier Tournament",
    playStyle: "5v5",
    venue: "TBD",
    registrationLink: "",
    fee: "",
    awards: "ND State Qualifier",
    contact: "",
    website: "",
    notes: "",
    lat: 46.8772,
    lng: -96.7898,
  },
  {
    id: "impact-tip-off",
    name: "Impact Tip Off",
    host: "Impact Sports",
    startDate: "2025-11-08",
    endDate: "2025-11-09",
    city: "Sioux Falls",
    state: "SD",
    gender: "Boys & Girls",
    grades: "3-8",
    format: "Qualifier Tournament",
    playStyle: "5v5",
    venue: "TBD",
    registrationLink: "",
    fee: "",
    awards: "State Qualifier",
    contact: "",
    website: "",
    notes: "",
    lat: 43.546,
    lng: -96.7313,
  },
  {
    id: "impact-let-it-fly",
    name: "Impact Let It Fly",
    host: "Impact Sports",
    startDate: "2025-11-15",
    endDate: "2025-11-16",
    city: "Sioux Falls",
    state: "SD",
    gender: "Boys & Girls",
    grades: "3-8",
    format: "Qualifier Tournament",
    playStyle: "5v5",
    venue: "TBD",
    registrationLink: "",
    fee: "",
    awards: "State Qualifier",
    contact: "",
    website: "",
    notes: "",
    lat: 43.546,
    lng: -96.7313,
  },
  {
    id: "impact-hoopsgiving",
    name: "Impact Hoopsgiving",
    host: "Impact Sports",
    startDate: "2025-11-22",
    endDate: "2025-11-23",
    city: "Sioux Falls",
    state: "SD",
    gender: "Boys & Girls",
    grades: "3-8",
    format: "Qualifier Tournament",
    playStyle: "5v5",
    venue: "TBD",
    registrationLink: "",
    fee: "",
    awards: "State Qualifier",
    contact: "",
    website: "",
    notes: "",
    lat: 43.546,
    lng: -96.7313,
  },
  {
    id: "northern-state-girls",
    name: "Northern State Girls Youth Tournament",
    host: "Northern State University",
    startDate: "2025-12-07",
    endDate: "2025-12-07",
    city: "Aberdeen",
    state: "SD",
    gender: "Girls",
    grades: "Youth",
    format: "Youth Tournament",
    playStyle: "5v5",
    venue: "Northern State University",
    registrationLink: "",
    fee: "",
    awards: "Tournament Awards",
    contact: "",
    website: "",
    notes: "",
    lat: 45.4647,
    lng: -98.4865,
  },
  {
    id: "pacesetter-nd",
    name: "Pacesetter North Dakota State Tournament",
    host: "Pacesetter Sports",
    startDate: "",
    endDate: "",
    city: "Multiple Cities",
    state: "ND",
    gender: "Boys & Girls",
    grades: "4-9",
    format: "State Tournament",
    playStyle: "5v5",
    venue: "Multiple Venues",
    registrationLink: "https://www.pacesettersports.net/youth-tournaments",
    fee: "",
    awards: "Qualifier for Great Five-State Championships",
    contact: "",
    website: "https://www.pacesettersports.net",
    notes: "Exact 2026 date to be confirmed.",
    lat: 47.5515,
    lng: -101.002,
  },
  {
    id: "pacesetter-sd",
    name: "Pacesetter South Dakota State Tournament",
    host: "Pacesetter Sports",
    startDate: "",
    endDate: "",
    city: "Multiple Cities",
    state: "SD",
    gender: "Boys & Girls",
    grades: "4-9",
    format: "State Tournament",
    playStyle: "5v5",
    venue: "Multiple Venues",
    registrationLink: "https://www.pacesettersports.net/youth-tournaments",
    fee: "",
    awards: "Qualifier for Great Five-State Championships",
    contact: "",
    website: "https://www.pacesettersports.net",
    notes: "Exact 2026 date to be confirmed.",
    lat: 44.2998,
    lng: -99.4388,
  },
];

const stateBounds = {
  minLat: 40.2,
  maxLat: 49.2,
  minLng: -116.2,
  maxLng: -90.0,
};

const stateLabels = [
  { label: "MT", lat: 47.0, lng: -110.4 },
  { label: "WY", lat: 43.0, lng: -107.5 },
  { label: "ND", lat: 47.5, lng: -100.3 },
  { label: "SD", lat: 44.4, lng: -100.0 },
  { label: "MN", lat: 46.3, lng: -94.5 },
  { label: "IA", lat: 42.1, lng: -93.5 },
];

const supportedStates = ["IA", "MN", "MT", "ND", "SD", "WY"];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const today = new Date().toISOString().slice(0, 10);
const cityCoordinates = {
  "Fargo, ND": { lat: 46.8772, lng: -96.7898 },
  "Grand Forks, ND": { lat: 47.9253, lng: -97.0329 },
  "Beulah, ND": { lat: 47.2633, lng: -101.7779 },
  "Williston, ND": { lat: 48.1469, lng: -103.6179 },
  "Bismarck, ND": { lat: 46.8083, lng: -100.7837 },
  "Devils Lake, ND": { lat: 48.1128, lng: -98.8651 },
  "Valley City, ND": { lat: 46.9233, lng: -98.0032 },
  "Sioux Falls, SD": { lat: 43.546, lng: -96.7313 },
  "Aberdeen, SD": { lat: 45.4647, lng: -98.4865 },
  "Multiple Cities, ND": { lat: 47.5515, lng: -101.002 },
  "Multiple Cities, SD": { lat: 44.2998, lng: -99.4388 },
};

const els = {
  search: document.querySelector("#searchInput"),
  state: document.querySelector("#stateFilter"),
  city: document.querySelector("#cityFilter"),
  month: document.querySelector("#monthFilter"),
  gender: document.querySelector("#genderFilter"),
  format: document.querySelector("#formatFilter"),
  grid: document.querySelector("#tournamentGrid"),
  resultCount: document.querySelector("#resultCount"),
  empty: document.querySelector("#emptyState"),
  template: document.querySelector("#cardTemplate"),
  clear: document.querySelector("#clearFiltersButton"),
  cardsButton: document.querySelector("#cardsViewButton"),
  mapButton: document.querySelector("#mapViewButton"),
  tournamentsView: document.querySelector("#tournamentsView"),
  mapView: document.querySelector("#mapView"),
  mapCanvas: document.querySelector("#mapCanvas"),
  mapList: document.querySelector("#mapList"),
  calendarView: document.querySelector("#calendarView"),
  submitView: document.querySelector("#submitView"),
  viewTitle: document.querySelector("#viewTitle"),
  form: document.querySelector("#submitForm"),
  success: document.querySelector("#formSuccess"),
  detailsModal: document.querySelector("#detailsModal"),
  detailsTitle: document.querySelector("#detailsTitle"),
  detailsHost: document.querySelector("#detailsHost"),
  detailsDate: document.querySelector("#detailsDate"),
  detailsPlace: document.querySelector("#detailsPlace"),
  detailsGrades: document.querySelector("#detailsGrades"),
  detailsFormat: document.querySelector("#detailsFormat"),
  detailsVenue: document.querySelector("#detailsVenue"),
  detailsAwards: document.querySelector("#detailsAwards"),
  detailsContact: document.querySelector("#detailsContact"),
  detailsNotes: document.querySelector("#detailsNotes"),
  detailsRegister: document.querySelector("#detailsRegister"),
  flyerFrame: document.querySelector("#flyerFrame"),
  detailsFlyer: document.querySelector("#detailsFlyer"),
};

let currentView = "tournaments";
let visualMode = "cards";
let favorites = readStored("courtCompassFavorites", []);
let submitted = readStored("courtCompassSubmissions", []);
let liveTournaments = [];
let usingLiveData = false;

function readStored(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function allTournaments() {
  if (usingLiveData) return liveTournaments;
  return [...seedTournaments, ...submitted];
}

async function supabaseRequest(path, options = {}) {
  if (!supabaseRestUrl || !supabaseConfig.publishableKey) {
    throw new Error("Supabase is not configured.");
  }

  const response = await fetch(`${supabaseRestUrl}${path}`, {
    ...options,
    headers: {
      apikey: supabaseConfig.publishableKey,
      Authorization: `Bearer ${supabaseConfig.publishableKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Supabase request failed with ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

async function loadApprovedTournaments() {
  try {
    const rows = await supabaseRequest("/tournaments?select=*&status=eq.approved&order=start_date.asc.nullslast");
    liveTournaments = rows.map(dbToTournament);
    usingLiveData = liveTournaments.length > 0;
  } catch (error) {
    console.warn("Using starter tournament data because Supabase could not be loaded.", error);
    usingLiveData = false;
  }
}

function dbToTournament(row) {
  const coords = cityCoordinates[`${row.city || ""}, ${row.state || ""}`] || {};
  return {
    id: row.id,
    name: row.name,
    host: row.host,
    startDate: row.start_date || "",
    endDate: row.end_date || "",
    city: row.city,
    state: row.state,
    gender: row.gender,
    grades: row.grades,
    format: row.tournament_format,
    playStyle: row.play_style,
    venue: row.venue,
    registrationLink: row.registration_link,
    fee: row.entry_fee,
    awards: row.prize_awards,
    contact: row.contact_name,
    website: row.website,
    notes: row.notes,
    flyerUrl: row.flyer_url,
    status: row.status,
    lat: coords.lat,
    lng: coords.lng,
  };
}

function formToDatabaseRow(data) {
  return {
    name: data.name,
    host: data.host,
    start_date: data.startDate || null,
    end_date: data.endDate || null,
    city: data.city,
    state: data.state,
    gender: data.gender,
    grades: data.grades,
    tournament_format: data.format,
    play_style: data.playStyle,
    venue: data.venue,
    registration_link: data.registrationLink,
    entry_fee: data.fee,
    website: data.registrationLink,
    flyer_url: data.flyerUrl,
    notes: data.notes,
    status: "pending",
  };
}

function formatDateRange(tournament) {
  if (!tournament.startDate) return "Date TBD";
  const start = new Date(`${tournament.startDate}T00:00:00`);
  const end = tournament.endDate ? new Date(`${tournament.endDate}T00:00:00`) : null;
  const startText = `${monthNames[start.getMonth()]} ${start.getDate()}`;
  if (!end || tournament.startDate === tournament.endDate) return startText;
  return `${startText} - ${monthNames[end.getMonth()]} ${end.getDate()}`;
}

function monthKey(tournament) {
  if (!tournament.startDate) return "";
  return tournament.startDate.slice(0, 7);
}

function monthLabel(key) {
  const [year, month] = key.split("-");
  return `${monthNames[Number(month) - 1]} ${year}`;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function populateFilters() {
  [els.state, els.city, els.month, els.gender, els.format].forEach((select) => {
    const first = select.querySelector("option");
    select.innerHTML = "";
    select.append(first);
  });
  supportedStates.forEach((state) => els.state.add(new Option(state, state)));
  unique(allTournaments().map((item) => item.city)).forEach((city) => els.city.add(new Option(city, city)));
  unique(allTournaments().map(monthKey)).forEach((key) => els.month.add(new Option(monthLabel(key), key)));
  unique(allTournaments().map((item) => item.gender)).forEach((gender) => els.gender.add(new Option(gender, gender)));
  unique(allTournaments().map((item) => item.playStyle)).forEach((format) => els.format.add(new Option(format, format)));
}

function filteredTournaments() {
  const query = els.search.value.trim().toLowerCase();
  return allTournaments()
    .filter((item) => supportedStates.includes(item.state))
    .filter((item) => isUpcoming(item))
    .filter((item) => !els.state.value || item.state === els.state.value)
    .filter((item) => !els.city.value || item.city === els.city.value)
    .filter((item) => !els.month.value || monthKey(item) === els.month.value)
    .filter((item) => !els.gender.value || item.gender === els.gender.value)
    .filter((item) => !els.format.value || item.playStyle === els.format.value)
    .filter((item) => {
      if (!query) return true;
      return [item.name, item.host, item.city, item.state, item.venue, item.format, item.grades]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => (a.startDate || "9999").localeCompare(b.startDate || "9999"));
}

function isUpcoming(tournament) {
  if (!tournament.startDate) return true;
  const comparisonDate = tournament.endDate || tournament.startDate;
  return comparisonDate >= today;
}

function render() {
  const items = currentView === "favorites"
    ? filteredTournaments().filter((item) => favorites.includes(item.id))
    : filteredTournaments();

  if (currentView === "calendar") {
    renderCalendar(items);
    return;
  }

  if (currentView === "submit") {
    showPanel("submit");
    return;
  }

  showPanel(visualMode);
  renderCards(items);
  renderMap(items);
}

function showPanel(mode) {
  els.tournamentsView.classList.toggle("hidden", mode !== "cards");
  els.mapView.classList.toggle("hidden", mode !== "map");
  els.calendarView.classList.toggle("hidden", mode !== "calendar");
  els.submitView.classList.toggle("hidden", mode !== "submit");
  els.cardsButton.classList.toggle("active", mode === "cards");
  els.mapButton.classList.toggle("active", mode === "map");
}

function renderCards(items) {
  els.grid.innerHTML = "";
  els.resultCount.textContent = `${items.length} tournament${items.length === 1 ? "" : "s"} found`;
  els.empty.style.display = items.length ? "none" : "block";

  items.forEach((item) => {
    const card = els.template.content.firstElementChild.cloneNode(true);
    const saved = favorites.includes(item.id);
    card.querySelector(".favorite-button").classList.toggle("saved", saved);
    card.querySelector(".favorite-button").textContent = saved ? "♥" : "♡";
    card.querySelector(".card-status").textContent = item.status === "Pending Review" ? "Pending review" : item.registrationLink ? "Registration open" : "Details pending";
    card.querySelector("h3").textContent = item.name;
    card.querySelector(".host").textContent = `by ${item.host || "Organizer TBD"}`;
    card.querySelector(".date").textContent = formatDateRange(item);
    card.querySelector(".place").textContent = `${item.city}, ${item.state}`;
    card.querySelector(".grades").textContent = item.grades || "Grades TBD";
    card.querySelector(".venue").textContent = item.venue || "Venue TBD";
    card.querySelector(".fee").textContent = item.fee || "Fee TBD";
    card.querySelector(".tags").innerHTML = [item.gender, item.playStyle, item.format].filter(Boolean).map((tag) => `<span class="tag">${tag}</span>`).join("");

    const register = card.querySelector(".register-link");
    if (item.registrationLink) {
      register.href = item.registrationLink;
      register.textContent = "Register Now";
    } else {
      register.removeAttribute("href");
      register.classList.add("disabled");
      register.textContent = "Link Pending";
    }

    card.querySelector(".favorite-button").addEventListener("click", () => {
      favorites = saved ? favorites.filter((id) => id !== item.id) : [...favorites, item.id];
      writeStored("courtCompassFavorites", favorites);
      render();
    });

    card.querySelector(".details-button").addEventListener("click", () => showDetails(item));

    els.grid.append(card);
  });
}

function showDetails(item) {
  const eventLink = item.registrationLink || item.website || "";
  els.detailsTitle.textContent = item.name || "Tournament details";
  els.detailsHost.textContent = `by ${item.host || "Organizer TBD"}`;
  els.detailsDate.textContent = formatDateRange(item);
  els.detailsPlace.textContent = `${item.city || "City TBD"}, ${item.state || "State TBD"}`;
  els.detailsGrades.textContent = item.grades || "Grades TBD";
  els.detailsFormat.textContent = [item.gender, item.playStyle, item.format].filter(Boolean).join(" · ") || "Format TBD";
  els.detailsVenue.textContent = item.venue || "Venue TBD";
  els.detailsAwards.textContent = item.awards || "Awards TBD";
  els.detailsContact.textContent = item.contact || "Contact TBD";
  els.detailsNotes.textContent = item.notes || "No extra notes yet.";

  if (item.flyerUrl) {
    els.detailsFlyer.src = item.flyerUrl;
    els.detailsFlyer.alt = `${item.name || "Tournament"} flyer`;
    els.flyerFrame.classList.remove("hidden");
  } else {
    els.detailsFlyer.removeAttribute("src");
    els.detailsFlyer.alt = "";
    els.flyerFrame.classList.add("hidden");
  }

  if (eventLink) {
    els.detailsRegister.href = eventLink;
    els.detailsRegister.classList.remove("disabled");
    els.detailsRegister.textContent = item.registrationLink ? "Open Registration" : "Open Website";
  } else {
    els.detailsRegister.removeAttribute("href");
    els.detailsRegister.classList.add("disabled");
    els.detailsRegister.textContent = "No Event Link";
  }

  els.detailsModal.classList.remove("hidden");
}

function closeDetails() {
  els.detailsModal.classList.add("hidden");
}

function renderMap(items) {
  els.mapCanvas.innerHTML = "";
  els.mapList.innerHTML = "";

  stateLabels.forEach((state) => {
    const label = document.createElement("span");
    label.className = "map-label";
    label.textContent = state.label;
    const point = project(state.lat, state.lng);
    label.style.left = `${point.x}%`;
    label.style.top = `${point.y}%`;
    els.mapCanvas.append(label);
  });

  const grouped = new Map();
  items.forEach((item) => {
    const key = `${item.city}, ${item.state}`;
    grouped.set(key, [...(grouped.get(key) || []), item]);
  });

  grouped.forEach((group, label) => {
    const first = group[0];
    const coords = resolveCoordinates(first);
    const point = project(coords.lat, coords.lng);
    const pin = document.createElement("button");
    pin.className = "map-pin";
    pin.textContent = group.length;
    pin.style.left = `${point.x}%`;
    pin.style.top = `${point.y}%`;
    pin.title = label;
    pin.addEventListener("click", () => {
      els.search.value = first.city;
      render();
    });
    els.mapCanvas.append(pin);

    const item = document.createElement("article");
    item.className = "map-list-item";
    item.innerHTML = `<h3>${label}</h3><p>${group.length} tournament${group.length === 1 ? "" : "s"}</p>`;
    els.mapList.append(item);
  });
}

function resolveCoordinates(item) {
  if (item.lat && item.lng) return { lat: item.lat, lng: item.lng };
  return cityCoordinates[`${item.city}, ${item.state}`] || { lat: 45.5, lng: -101.5 };
}

function project(lat, lng) {
  const x = ((lng - stateBounds.minLng) / (stateBounds.maxLng - stateBounds.minLng)) * 100;
  const y = (1 - (lat - stateBounds.minLat) / (stateBounds.maxLat - stateBounds.minLat)) * 100;
  return { x: Math.min(94, Math.max(6, x)), y: Math.min(94, Math.max(6, y)) };
}

function renderCalendar(items) {
  showPanel("calendar");
  els.calendarView.innerHTML = "";
  const byMonth = new Map();
  items.forEach((item) => {
    const key = monthKey(item) || "Date TBD";
    byMonth.set(key, [...(byMonth.get(key) || []), item]);
  });

  byMonth.forEach((monthItems, key) => {
    const section = document.createElement("section");
    section.className = "calendar-item";
    section.innerHTML = `<h3>${key === "Date TBD" ? key : monthLabel(key)}</h3><p>${monthItems.map((item) => `${formatDateRange(item)} · ${item.name} · ${item.city}, ${item.state}`).join("<br>")}</p>`;
    els.calendarView.append(section);
  });
}

function setView(view) {
  currentView = view;
  document.querySelectorAll("[data-view-button]").forEach((button) => {
    button.classList.toggle("active", button.dataset.viewButton === view);
  });
  els.viewTitle.textContent = view === "favorites" ? "Saved Tournaments" : view === "calendar" ? "Tournament Calendar" : view === "submit" ? "Submit Tournament" : "Upcoming Tournaments";
  render();
}

function resetFilters() {
  [els.search, els.state, els.city, els.month, els.gender, els.format].forEach((field) => {
    field.value = "";
  });
  render();
}

async function handleSubmit(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(els.form).entries());
  const tournament = {
    id: `submitted-${Date.now()}`,
    name: data.name,
    host: data.host,
    startDate: data.startDate,
    endDate: data.endDate,
    city: data.city,
    state: data.state,
    gender: data.gender,
    grades: data.grades,
    format: data.format,
    playStyle: data.playStyle,
    venue: data.venue,
    registrationLink: data.registrationLink,
    fee: data.fee,
    awards: "",
    contact: "",
    website: data.registrationLink,
    flyerUrl: data.flyerUrl,
    notes: data.notes,
    status: "Pending Review",
    lat: 46.8772,
    lng: -100.0,
  };

  try {
    await supabaseRequest("/tournaments", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify(formToDatabaseRow(data)),
    });
  } catch (error) {
    console.warn("Saved locally because Supabase submission failed.", error);
    submitted = [...submitted, tournament];
    writeStored("courtCompassSubmissions", submitted);
  }

  els.form.reset();
  els.success.style.display = "block";
  setTimeout(() => {
    els.success.style.display = "none";
  }, 3500);
}

async function initApp() {
  await loadApprovedTournaments();
  populateFilters();
  render();
}

initApp();

[els.search, els.state, els.city, els.month, els.gender, els.format].forEach((field) => {
  field.addEventListener("input", render);
});

els.clear.addEventListener("click", resetFilters);
els.cardsButton.addEventListener("click", () => {
  visualMode = "cards";
  setView(currentView === "submit" || currentView === "calendar" ? "tournaments" : currentView);
});
els.mapButton.addEventListener("click", () => {
  visualMode = "map";
  setView(currentView === "submit" || currentView === "calendar" ? "tournaments" : currentView);
});
els.form.addEventListener("submit", handleSubmit);

document.querySelectorAll("[data-view-button]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.viewButton));
});

document.querySelectorAll("[data-close-details]").forEach((button) => {
  button.addEventListener("click", closeDetails);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDetails();
});
