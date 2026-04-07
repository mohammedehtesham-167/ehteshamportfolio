function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

/* SCROLL ANIMATION */
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

/* CHATBOX */
function toggleChat() {
  const chat = document.getElementById("chatbox");

  if (chat.style.display === "flex") {
    chat.style.display = "none";
  } else {
    chat.style.display = "flex";
  }
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chat = document.getElementById("chat-messages");

  chat.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

  let reply = "Thanks for reaching out!";

  if (message.toLowerCase().includes("email")) {
    reply = "You can contact me at: mohammedehtesham1901@gmail.com";
  } 
  else if (message.toLowerCase().includes("phone")) {
    reply = "Call me at: +1 773 739 7618";
  } 
  else if (message.toLowerCase().includes("linkedin")) {
    reply = "Check my LinkedIn in the contact section.";
  }

  setTimeout(() => {
    chat.innerHTML += `<div><strong>Me:</strong> ${reply}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  input.value = "";
}
