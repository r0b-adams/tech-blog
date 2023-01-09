const logout_button = document.getElementById("logout-btn") as HTMLButtonElement;

logout_button?.addEventListener("click", async e => {
  const response = await fetch("/api/users/logout", {
    method: "DELETE",
  });
  if (response.ok) {
    window.location.replace("/");
  }
});
