const logout_button = document.getElementById("logout-btn") as HTMLButtonElement;

logout_button?.addEventListener("click", async e => {
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
