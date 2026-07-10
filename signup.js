const authConfig = window.COURT_COMPASS_SUPABASE || {};
const authClient = window.supabase?.createClient(authConfig.url, authConfig.publishableKey);
const signupForm = document.querySelector("#signupForm");
const signinForm = document.querySelector("#signinForm");

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

    if (!authClient) {
      setAuthMessage(signupForm, "Signup is not configured yet.", true);
      return;
    }

    const formData = new FormData(signupForm);
    setSubmitting(signupForm, true);

    const { error } = await authClient.auth.signUp({
      email: formData.get("email"),
      password: formData.get("password"),
      options: {
        data: {
          full_name: formData.get("fullName"),
        },
        emailRedirectTo: `${window.location.origin}/signin.html`,
      },
    });

    setSubmitting(signupForm, false);

    if (error) {
      setAuthMessage(signupForm, error.message, true);
      return;
    }

    setAuthMessage(signupForm, "Check your email to confirm your account.");
  });
}

if (signinForm) {
  const button = signinForm.querySelector("button[type='submit']");
  button.dataset.label = button.textContent;

  signinForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!authClient) {
      setAuthMessage(signinForm, "Sign in is not configured yet.", true);
      return;
    }

    const formData = new FormData(signinForm);
    setSubmitting(signinForm, true);

    const { error } = await authClient.auth.signInWithPassword({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    setSubmitting(signinForm, false);

    if (error) {
      setAuthMessage(signinForm, error.message, true);
      return;
    }

    window.location.href = "./index.html";
  });
}
