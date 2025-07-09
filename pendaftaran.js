const form = document.getElementById("registrationForm");
const list = document.getElementById("participantList");

let participants = JSON.parse(localStorage.getItem("participants") || "[]");

function renderParticipants() {
  list.innerHTML = "";
  participants.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} (${p.email}) - Pembayaran: ${p.payment}`;
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const payment = document.getElementById("payment").value;

  if (name && email) {
    participants.push({ name, email, payment });
    localStorage.setItem("participants", JSON.stringify(participants));
    renderParticipants();
    form.reset();
    alert("Pendaftaran berhasil!");
  }
});

renderParticipants();
