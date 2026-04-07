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
  const msg = input.value.toLowerCase().trim();

  if (!msg) return;

  const chat = document.getElementById("chat-messages");

  // USER MESSAGE
  chat.innerHTML += `<div><b>You:</b> ${msg}</div>`;

  let reply = "I didn’t understand that. Try asking about my skills, email, or education.";

  // SMART REPLIES ABOUT YOU
  if (msg.includes("name")) {
    reply = "My name is Ehtesham Jawid Mohammed.";
  }
  else if (msg.includes("email")) {
    reply = "You can email me at mohammedehtesham1901@gmail.com";
  }
  else if (msg.includes("phone")) {
    reply = "My phone number is +1 773 739 7618";
  }
  else if (msg.includes("skills")) {
    reply = "I have skills in Data Analysis, SQL, Power BI, Tableau, Excel, and Business Analysis.";
  }
  else if (msg.includes("education")) {
    reply = "I am pursuing Masters in Business Analytics at Avila University and completed BBA from Osmania University.";
  }
  else if (msg.includes("linkedin")) {
    reply = "You can find my LinkedIn in the contact section.";
  }
  else if (msg.includes("github")) {
    reply = "Check my GitHub profile in the contact section.";
  }

  // BOT REPLY
  setTimeout(() => {
    chat.innerHTML += `<div><b>Me:</b> ${reply}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  input.value = "";
}
