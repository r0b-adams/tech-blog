const deleteBtn = document?.querySelector("button#delete");
const editPostForm = document?.getElementById("edit-post-form");
deleteBtn?.addEventListener("click", async e => {
  try {
    const post_id = editPostForm.dataset.post_id;
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
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

editPostForm?.addEventListener("submit", async e => {
  try {
    e.preventDefault();
    const post_id = editPostForm.dataset.post_id;
    const [titleInput, contentTextarea] = Array.from(editPostForm.elements);
    const title = titleInput.value;
    const content = contentTextarea.value;
    if (title && content) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      if (response.ok) {
        window.location.replace(`/posts/${post_id}`);
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
