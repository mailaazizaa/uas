const form = document.getElementById("feedbackForm");
const list = document.getElementById("feedbackList");

let feedbacks = JSON.parse(localStorage.getItem("feedbacks") || "[]");

function renderFeedback() {
  list.innerHTML = "";
  feedbacks.forEach(fb => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${fb.name}</strong>: ${fb.text}`;
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("feedbackName").value.trim();
  const text = document.getElementById("feedbackText").value.trim();

  if (name && text) {
    feedbacks.push({ name, text });
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
    renderFeedback();
    form.reset();
    alert("Terima kasih atas feedback-nya!");
  }
});

renderFeedback();
