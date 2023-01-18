const logoutButton = document?.getElementById("logout-btn")

logoutButton?.addEventListener("click", async _e => {
  try {
    const response = await fetch("/api/users/logout", {
      method: "DELETE",
    });
    if (response.ok) {
      window.location.replace("/");
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
});
