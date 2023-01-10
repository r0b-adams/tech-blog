const signup_form = document.getElementById("signup-form");

signup_form?.addEventListener("submit", async e => {
  const [un_input, em_input, pw_input] = signup_form.querySelectorAll("input");
  try {
    e.preventDefault();
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: un_input.value,
        email: em_input.value,
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
