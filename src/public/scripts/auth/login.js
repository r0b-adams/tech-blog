const loginForm = document?.getElementById("login-form");
loginForm?.addEventListener("submit", async e => {
  const inputs = Array.from(loginForm.querySelectorAll("input"));
  const [unInput, pwInput] = inputs;
  try {
    e.preventDefault();
    const username = unInput.value;
    const password = pwInput.value;
    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        window.location.replace("/dashboard");
      } else {
        const data = await response.json();
        console.log(data);
        inputs.forEach(input => (input.value = ""));
      }
    } else {
      alert("need username and password");
    }
  } catch (error) {
    console.log(error);
  }
});
