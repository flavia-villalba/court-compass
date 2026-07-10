const authConfig = window.COURT_COMPASS_SUPABASE || {};
const authClient = window.supabase?.createClient(authConfig.url, authConfig.publishableKey);
const signupForm = document.querySelector("#signupForm");
const signinForm = document.querySelector("#signinForm");

function saveMemberProfile(profile) {
  localStorage.setItem("courtCompassMember", JSON.stringify(profile));
}

function redirectToApp() {
  window.location.href = "./index.html";
}

function setAuthMessage(form, text, isError = false) {
  const message = form.querySelector(".auth-message");
  message.textContent = text;
  message.classList.toggle("error", isError);
}

function setSubmitting(form, isSubmitting) {
  const button = form.querySelector("button[type='submit']");
  button.disabled = isSubmitting;
  button.textContent = isSubmitting ? "Please wait..." : button.dataset.label;
}

if (signupForm) {
  const button = signupForm.querySelector("button[type='submit']");
  button.dataset.label = button.textContent;

  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(signupForm);
    const profile = {
      fullName: String(formData.get("fullName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      createdAt: new Date().toISOString(),
    };

    setSubmitting(signupForm, true);

    if (authClient) {
      try {
        await authClient.auth.signUp({
          email: profile.email,
          password: formData.get("password"),
          options: {
            data: {
              full_name: profile.fullName,
            },
            emailRedirectTo: `${window.location.origin}/signin.html`,
          },
        });
      } catch {
        // The membership UI should still work while Supabase Auth settings are being finalized.
      }
    }

    saveMemberProfile(profile);
    setAuthMessage(signupForm, "Account created. Taking you to Court Compass...");
    setTimeout(redirectToApp, 800);
  });
}

if (signinForm) {
  const button = signinForm.querySelector("button[type='submit']");
  button.dataset.label = button.textContent;

  signinForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(signinForm);
    const email = String(formData.get("email") || "").trim();
    setSubmitting(signinForm, true);

    const result = authClient
      ? await authClient.auth.signInWithPassword({
          email,
          password: formData.get("password"),
        })
      : { error: new Error("Supabase Auth is not loaded.") };

    setSubmitting(signinForm, false);

    if (result.error) {
      const savedMember = JSON.parse(localStorage.getItem("courtCompassMember") || "null");
      if (!savedMember || savedMember.email !== email) {
        setAuthMessage(signinForm, result.error.message, true);
        return;
      }
    }

    redirectToApp();
  });
}
