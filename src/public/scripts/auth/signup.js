const signupForm = document?.getElementById("signup-form");
signupForm?.addEventListener("submit", async e => {
  const inputs = Array.from(signupForm.querySelectorAll("input"));
  const [unInput, emInput, pwInput] = inputs;
  try {
    e.preventDefault();
    const username = unInput.value;
    const password = pwInput.value;
    const email = emInput.value;
    if (username && email && password) {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      if (response.ok) {
        window.location.replace("/dashboard");
      } else {
        const data = await response.json();
        console.log(data);
        inputs.forEach(input => (input.value = ""));
      }
    } else {
      alert("need username, email, and password");
    }
  } catch (error) {
    console.log(error);
  }
});
