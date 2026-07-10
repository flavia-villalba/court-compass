const adminConfig = window.COURT_COMPASS_SUPABASE || {};
const adminClient = window.supabase.createClient(adminConfig.url, adminConfig.publishableKey);

const adminEls = {
  loginPanel: document.querySelector("#loginPanel"),
  reviewPanel: document.querySelector("#reviewPanel"),
  loginForm: document.querySelector("#loginForm"),
  emailInput: document.querySelector("#emailInput"),
  loginMessage: document.querySelector("#loginMessage"),
  signOutButton: document.querySelector("#signOutButton"),
  adminStatus: document.querySelector("#adminStatus"),
  csvInput: document.querySelector("#csvInput"),
  importCsvButton: document.querySelector("#importCsvButton"),
  csvImportMessage: document.querySelector("#csvImportMessage"),
  previewModal: document.querySelector("#previewModal"),
  previewName: document.querySelector("#previewName"),
  previewHost: document.querySelector("#previewHost"),
  previewDate: document.querySelector("#previewDate"),
  previewPlace: document.querySelector("#previewPlace"),
  previewGrades: document.querySelector("#previewGrades"),
  previewVenue: document.querySelector("#previewVenue"),
  previewTags: document.querySelector("#previewTags"),
  previewFee: document.querySelector("#previewFee"),
  previewRegister: document.querySelector("#previewRegister"),
  previewEventLink: document.querySelector("#previewEventLink"),
  grid: document.querySelector("#adminGrid"),
  template: document.querySelector("#adminCardTemplate"),
  filters: document.querySelectorAll("[data-status-filter]"),
};

let statusFilter = "pending";

const csvHeaderMap = {
  tournamentname: "name",
  name: "name",
  hostorganization: "host",
  host: "host",
  organization: "host",
  startdate: "start_date",
  enddate: "end_date",
  city: "city",
  state: "state",
  gender: "gender",
  grades: "grades",
  grade: "grades",
  tournamentformat: "tournament_format",
  format: "tournament_format",
  "3v35v5": "play_style",
  playstyle: "play_style",
  venue: "venue",
  registrationlink: "registration_link",
  registrationurl: "registration_link",
  entryfee: "entry_fee",
  fee: "entry_fee",
  prizeawards: "prize_awards",
  awards: "prize_awards",
  contactname: "contact_name",
  contactemail: "contact_email",
  email: "contact_email",
  phone: "phone",
  website: "website",
  sourceurl: "source_url",
  source: "source_url",
  notes: "notes",
};

async function initAdmin() {
  const { data } = await adminClient.auth.getSession();
  if (data.session) {
    showReview();
    await loadAdminTournaments();
  } else {
    showLogin();
  }
}

function showLogin() {
  adminEls.loginPanel.classList.remove("hidden");
  adminEls.reviewPanel.classList.add("hidden");
  adminEls.signOutButton.classList.add("hidden");
}

function showReview() {
  adminEls.loginPanel.classList.add("hidden");
  adminEls.reviewPanel.classList.remove("hidden");
  adminEls.signOutButton.classList.remove("hidden");
}

async function requestLogin(event) {
  event.preventDefault();
  const email = adminEls.emailInput.value.trim();
  const redirectTo = `${window.location.origin}${window.location.pathname}`;
  const { error } = await adminClient.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: redirectTo },
  });

  adminEls.loginMessage.textContent = error
    ? error.message
    : "Check your email for the secure login link.";
}

async function loadAdminTournaments() {
  adminEls.adminStatus.textContent = "Loading tournaments...";
  adminEls.grid.innerHTML = "";

  let query = adminClient
    .from("tournaments")
    .select("*")
    .order("created_at", { ascending: false });

  if (statusFilter) query = query.eq("status", statusFilter);

  const { data, error } = await query;
  if (error) {
    adminEls.adminStatus.textContent = "Could not load tournaments. Make sure your email is in admin_users and you ran the admin SQL fix.";
    return;
  }

  adminEls.adminStatus.textContent = `${data.length} tournament${data.length === 1 ? "" : "s"} shown`;
  data.forEach(renderAdminCard);
}

function renderAdminCard(tournament) {
  const card = adminEls.template.content.firstElementChild.cloneNode(true);
  const form = card.querySelector("form");
  card.querySelector("h3").textContent = tournament.name || "Untitled tournament";
  card.querySelector(".status-pill").textContent = tournament.status;

  [
    "name",
    "host",
    "start_date",
    "end_date",
    "city",
    "state",
    "gender",
    "grades",
    "tournament_format",
    "play_style",
    "venue",
    "entry_fee",
    "registration_link",
    "website",
    "source_url",
    "notes",
  ].forEach((field) => {
    if (form.elements[field]) form.elements[field].value = tournament[field] || "";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await updateTournament(tournament.id, formToTournamentPayload(form));
  });

  card.querySelector(".preview-button").addEventListener("click", () => {
    showPreview(formToTournamentPayload(form));
  });

  card.querySelector(".approve-button").addEventListener("click", async () => {
    await updateTournament(tournament.id, { ...formToTournamentPayload(form), status: "approved" });
  });

  card.querySelector(".reject-button").addEventListener("click", async () => {
    await updateTournament(tournament.id, { status: "rejected" });
  });

  card.querySelector(".delete-button").addEventListener("click", async () => {
    await deleteTournament(tournament.id, tournament.name);
  });

  adminEls.grid.append(card);
}

function formToTournamentPayload(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  return {
    ...data,
    start_date: data.start_date || null,
    end_date: data.end_date || null,
    updated_at: new Date().toISOString(),
  };
}

function formatPreviewDate(startDate, endDate) {
  if (!startDate) return "Date TBD";
  const start = new Date(`${startDate}T00:00:00`);
  const startText = start.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  if (!endDate || endDate === startDate) return startText;
  const end = new Date(`${endDate}T00:00:00`);
  const endText = end.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  return `${startText} - ${endText}`;
}

function showPreview(tournament) {
  const eventLink = tournament.registration_link || tournament.website || tournament.source_url || "";
  adminEls.previewName.textContent = tournament.name || "Untitled tournament";
  adminEls.previewHost.textContent = `by ${tournament.host || "Organizer TBD"}`;
  adminEls.previewDate.textContent = formatPreviewDate(tournament.start_date, tournament.end_date);
  adminEls.previewPlace.textContent = [tournament.city, tournament.state].filter(Boolean).join(", ") || "Location TBD";
  adminEls.previewGrades.textContent = tournament.grades || "Grades TBD";
  adminEls.previewVenue.textContent = tournament.venue || "Venue TBD";
  adminEls.previewFee.textContent = tournament.entry_fee || "Fee TBD";
  adminEls.previewTags.innerHTML = [tournament.gender, tournament.play_style, tournament.tournament_format]
    .filter(Boolean)
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  if (eventLink) {
    adminEls.previewRegister.href = eventLink;
    adminEls.previewEventLink.href = eventLink;
    adminEls.previewRegister.classList.remove("disabled");
    adminEls.previewEventLink.classList.remove("disabled");
    adminEls.previewRegister.textContent = "Register Now";
    adminEls.previewEventLink.textContent = tournament.registration_link ? "Open Event Page" : "Open Source Page";
  } else {
    adminEls.previewRegister.removeAttribute("href");
    adminEls.previewEventLink.removeAttribute("href");
    adminEls.previewRegister.classList.add("disabled");
    adminEls.previewEventLink.classList.add("disabled");
    adminEls.previewRegister.textContent = "Link Pending";
    adminEls.previewEventLink.textContent = "No Link Yet";
  }

  adminEls.previewModal.classList.remove("hidden");
}

function closePreview() {
  adminEls.previewModal.classList.add("hidden");
}

async function updateTournament(id, updates) {
  const { error } = await adminClient.from("tournaments").update(updates).eq("id", id);
  if (error) {
    alert(error.message);
    return;
  }
  await loadAdminTournaments();
}

async function deleteTournament(id, name) {
  const confirmed = window.confirm(`Delete "${name || "this tournament"}" permanently?`);
  if (!confirmed) return;

  const { error } = await adminClient.from("tournaments").delete().eq("id", id);
  if (error) {
    alert(error.message);
    return;
  }

  await loadAdminTournaments();
}

function normalizeCsvHeader(header) {
  return header.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(value);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  row.push(value);
  if (row.some((cell) => cell.trim())) rows.push(row);
  return rows;
}

function normalizeDate(value) {
  const trimmed = value.trim();
  if (!trimmed || !/\d/.test(trimmed)) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed;

  const slashDate = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
  if (slashDate) {
    const [, month, day, rawYear] = slashDate;
    const year = rawYear.length === 2 ? `20${rawYear}` : rawYear;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  return null;
}

function csvRowsToTournaments(rows) {
  const [headers, ...dataRows] = rows;
  const mappedHeaders = headers.map((header) => csvHeaderMap[normalizeCsvHeader(header)] || null);

  return dataRows
    .map((cells) => {
      const tournament = { status: "pending" };
      cells.forEach((cell, index) => {
        const field = mappedHeaders[index];
        if (!field) return;
        tournament[field] = cell.trim();
      });

      tournament.name = tournament.name || "";
      tournament.start_date = tournament.start_date ? normalizeDate(tournament.start_date) : null;
      tournament.end_date = tournament.end_date ? normalizeDate(tournament.end_date) : null;
      tournament.state = tournament.state ? tournament.state.toUpperCase() : "";
      tournament.source_url = tournament.source_url || tournament.website || tournament.registration_link || "";

      return tournament;
    })
    .filter((row) => row.name);
}

function readCsvFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsText(file);
  });
}

async function importCsv() {
  const file = adminEls.csvInput.files?.[0];
  if (!file) {
    adminEls.csvImportMessage.textContent = "Choose a CSV file first.";
    return;
  }

  adminEls.csvImportMessage.textContent = "Reading CSV...";

  try {
    const text = await readCsvFile(file);
    const rows = parseCsv(text);
    const tournaments = csvRowsToTournaments(rows);

    if (!tournaments.length) {
      adminEls.csvImportMessage.textContent = "No tournament rows found. Check the CSV headers.";
      return;
    }

    const { error } = await adminClient.from("tournaments").insert(tournaments);
    if (error) throw error;

    adminEls.csvImportMessage.textContent = `${tournaments.length} tournament${tournaments.length === 1 ? "" : "s"} imported as pending.`;
    adminEls.csvInput.value = "";
    statusFilter = "pending";
    adminEls.filters.forEach((item) => item.classList.toggle("active", item.dataset.statusFilter === "pending"));
    await loadAdminTournaments();
  } catch (error) {
    adminEls.csvImportMessage.textContent = error.message || "CSV import failed.";
  }
}

adminEls.loginForm.addEventListener("submit", requestLogin);
adminEls.signOutButton.addEventListener("click", async () => {
  await adminClient.auth.signOut();
  showLogin();
});

adminEls.importCsvButton.addEventListener("click", importCsv);

document.querySelectorAll("[data-close-preview]").forEach((button) => {
  button.addEventListener("click", closePreview);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePreview();
});

adminEls.filters.forEach((button) => {
  button.addEventListener("click", async () => {
    statusFilter = button.dataset.statusFilter;
    adminEls.filters.forEach((item) => item.classList.toggle("active", item === button));
    await loadAdminTournaments();
  });
});

initAdmin();
