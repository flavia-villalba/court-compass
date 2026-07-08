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
  grid: document.querySelector("#adminGrid"),
  template: document.querySelector("#adminCardTemplate"),
  filters: document.querySelectorAll("[data-status-filter]"),
};

let statusFilter = "pending";

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
    "notes",
  ].forEach((field) => {
    if (form.elements[field]) form.elements[field].value = tournament[field] || "";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await updateTournament(tournament.id, formToTournamentPayload(form));
  });

  card.querySelector(".approve-button").addEventListener("click", async () => {
    await updateTournament(tournament.id, { ...formToTournamentPayload(form), status: "approved" });
  });

  card.querySelector(".reject-button").addEventListener("click", async () => {
    await updateTournament(tournament.id, { status: "rejected" });
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

async function updateTournament(id, updates) {
  const { error } = await adminClient.from("tournaments").update(updates).eq("id", id);
  if (error) {
    alert(error.message);
    return;
  }
  await loadAdminTournaments();
}

adminEls.loginForm.addEventListener("submit", requestLogin);
adminEls.signOutButton.addEventListener("click", async () => {
  await adminClient.auth.signOut();
  showLogin();
});

adminEls.filters.forEach((button) => {
  button.addEventListener("click", async () => {
    statusFilter = button.dataset.statusFilter;
    adminEls.filters.forEach((item) => item.classList.toggle("active", item === button));
    await loadAdminTournaments();
  });
});

initAdmin();
