const login_form = document.getElementById("login-form");

login_form?.addEventListener("submit", async e => {
  const [un_input, pw_input] = login_form.querySelectorAll("input");
  try {
    e.preventDefault();
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: un_input.value,
        password: pw_input.value,
      }),
    });
    if (response.ok) {
      window.location.replace("/dashboard");
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
});
