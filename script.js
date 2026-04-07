console.log("Portfolio loaded!");
<script>
function toggleChat() {
  const chat = document.getElementById("chatbox");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  const chat = document.getElementById("chat-messages");

  chat.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

  let reply = "Thanks for your message! I'll get back to you.";

  if (message.toLowerCase().includes("email")) {
    reply = "You can email me at mohammedehtesham1901@gmail.com";
  }

  if (message.toLowerCase().includes("phone")) {
    reply = "You can call me at +1 773 739 7618";
  }

  setTimeout(() => {
    chat.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  input.value = "";
}
</script>
