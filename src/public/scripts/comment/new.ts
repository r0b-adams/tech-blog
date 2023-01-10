const commentForm = document.getElementById("new-comment-form");

commentForm?.addEventListener("submit", async e => {
  try {
    e.preventDefault();
    const contentTextArea = commentForm.querySelector("textarea");
    const content = (contentTextArea as HTMLTextAreaElement).value;
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post_id: commentForm.dataset.postId,
        content,
      }),
    });
    if (response.ok) {
      window.location.reload();
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
});
