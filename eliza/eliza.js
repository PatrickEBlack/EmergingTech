const chatHistory = document.getElementById("chat-history");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

// ELIZA response logic with basic phrases
function getResponse(input) {
  const responses = {
    hello: "Hi there! How are you feeling today?",
    hi: "Hello! How can I assist you?",
    hey: "Hey! What's on your mind?",
    "how are you": "I'm just a program, but I'm here to help. How about you?",
    "i am fine":
      "That's great to hear! Tell me more about what's on your mind.",
    "what is your name": "I'm ELIZA, your virtual assistant. What's yours?",
    "i feel sad":
      "I'm sorry to hear that. Can you tell me more about what's making you feel this way?",
    "i feel happy": "That's wonderful! What’s bringing you joy today?",
    bye: "Goodbye! Remember, I'm here if you need someone to talk to.",
    "thank you": "You're welcome! I'm here to help.",
    "i am stressed": "I'm here to listen. What’s causing you stress?",
    "i need help": "Of course, I’m here to assist. What do you need help with?",
    "i feel anxious":
      "That can be tough. Would you like to talk about what’s making you feel anxious?",
    "tell me about yourself":
      "I'm ELIZA, a chatbot designed to help you with your thoughts and feelings.",
    default: "I'm not sure I understand. Can you explain a bit more?",
  };

  // Fallback for unrecognized inputs
  input = input.toLowerCase();
  return (
    responses[input] ||
    (input.includes("feel") &&
      "It sounds like you’re experiencing something significant. Can you elaborate?") ||
    (input.includes("help") && "What can I help you with?") ||
    (input.includes("stressed") &&
      "Stress can be overwhelming. What's been going on?") ||
    (input.includes("happy") &&
      "That's fantastic! What’s the reason for your happiness?") ||
    (input.includes("sad") &&
      "I'm sorry you're feeling this way. What’s been troubling you?") ||
    responses["default"]
  );
}

// Add a message to the chat history
function addMessage(sender, message) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = `${sender}: ${message}`;
  chatHistory.appendChild(messageDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to bottom
}

// Handle user input
function handleInput() {
  const input = userInput.value.trim();
  if (input) {
    addMessage("You", input);
    const response = getResponse(input);
    addMessage("ELIZA", response);
    userInput.value = "";
  }
}

// Event listener for send button
sendButton.addEventListener("click", handleInput);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleInput();
  }
});

// Add a message to the chat history
function addMessage(sender, message) {
  const messageDiv = document.createElement("div");

  // styles for sender names: green for user, red for ELIZA
  if (sender === "ELIZA") {
    messageDiv.innerHTML = `<strong style="color: red;">${sender}:</strong> ${message}`;
  } else if (sender === "You") {
    messageDiv.innerHTML = `<strong style="color: green;">${sender}:</strong> ${message}`;
  }

  chatHistory.appendChild(messageDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to bottom
}
