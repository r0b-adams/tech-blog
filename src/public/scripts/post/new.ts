const newPostForm = document?.getElementById("new-post-form") as HTMLFormElement;
newPostForm?.addEventListener("submit", async e => {
  try {
    e.preventDefault();
    const [titleInput, contentTextarea] = Array.from(newPostForm.elements);
    const title = (titleInput as HTMLInputElement).value;
    const content = (contentTextarea as HTMLTextAreaElement).value;
    if (title && content) {
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
    } else {
      alert("need title and content");
    }
  } catch (error) {
    console.log(error);
  }
});
