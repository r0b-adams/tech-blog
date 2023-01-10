const postForm = document?.getElementById("new-post-form") as HTMLFormElement;

postForm?.addEventListener("submit", async e => {
  try {
    e.preventDefault();
    const [titleInput, contentTextArea] = postForm.elements;
    const title = (titleInput as HTMLInputElement).value;
    const content = (contentTextArea as HTMLTextAreaElement).value;
    const response = await fetch("/api/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
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
