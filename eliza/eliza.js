// Get DOM elements
const chatHistory = document.getElementById("chat-history");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

// Define patterns and their corresponding responses
const patterns = [
  {
    // \b means word boundary, whereas /i means non case-sensitive
    // If any of the words in the pattern are given as a prompt, the response will be provided accordingly
    pattern: /\b(hi|hello|hey)\b/i,
    responses: [
      "Hello! How are you feeling today?",
      "Hi there! What's on your mind?",
      "Greetings! How has your day been?"
    ]
  },
  {
    pattern: /\b(sad|depressed|unhappy)\b/i,
    responses: [
      "I'm sorry you're feeling down. Can you tell me more about what's troubling you?",
      "It sounds difficult. What do you think is causing these feelings?",
      "I'm here to listen. When did you start feeling this way?"
    ]
  },
  {
    pattern: /\b(happy|glad|excited|good)\b/i,
    responses: [
      "That's wonderful! What's making you feel this way?",
      "I'm glad to hear that! Tell me more about what's going well.",
      "That's great! What contributed to these positive feelings?"
    ]
  },
  {
    pattern: /\b(angry|mad|frustrated)\b/i,
    responses: [
      "I can sense your frustration. What happened?",
      "What's causing these strong feelings?",
      "Tell me more about why you're feeling this way."
    ]
  },
  {
    pattern: /\b(family|mom|dad|sister|brother)\b/i,
    responses: [
      "Family relationships can be complex. How do you feel about that?",
      "Tell me more about your family situation.",
      "How long has this been going on with your family?"
    ]
  },
  {
    pattern: /\b(work|job|career|boss)\b/i,
    responses: [
      "Work can be quite stressful. How does this affect you?",
      "Tell me more about your work situation.",
      "How do you feel about your career path?"
    ]
  },
  {
    pattern: /(i think|i believe|i feel like)/i,
    responses: [
      "Why do you think that?",
      "What makes you feel this way?",
      "Could you elaborate on that thought?"
    ]
  },
  {
    pattern: /\b(always|never|everyone|nobody)\b/i,
    responses: [
      "That's quite absolute. Are there any exceptions?",
      "Always? Can you think of any situations where this wasn't the case?",
      "Are you sure it's that absolute?"
    ]
  },
  {
    pattern: /\b(stressed|anxiety|anxious|worry|worried)\b/i,
    responses: [
      "What's causing you to feel this way?",
      "How long have you been feeling stressed?",
      "Let's talk about what's making you anxious.",
      "What do you usually do when you feel this way?"
    ]
  },
  {
    pattern: /\b(friend|friends)\b/i,
    responses: [
      "Friends play an important role in our lives. Tell me more about this.",
      "How do your friends influence your life?",
      "What makes this friendship significant to you?"
    ]
  }
];

// Default responses are used when a user response doesnt match a predefined input
const defaultResponses = [
  "Can you tell me more about that?",
  "How does that make you feel?",
  "What do you think about this situation?",
  "I'm listening. Please continue.",
  "Could you elaborate on that?",
  "That's interesting. Why do you say that?",
  "Let's explore that further.",
  "What makes you feel this way?"
];

// Exact match responses
const exactResponses = {
  "how are you": "Ah sure ya know yerself. You?",
  "what is your name": "I'm ELIZA, your virtual assistant. What's yours?",
  "thank you": "You're welcome! I'm here to help.",
  "bye": "Goodbye! Remember, I'm here if you need someone to talk to.",
  "no": "LET ME HELP YOU! I really have nothing else to do.",
  "help": "I'm here to help and listen. What's on your mind?",
  "who are you": "I'm ELIZA, a conversational agent designed to listen and respond to your thoughts and feelings."
};

// Get response based on input
function getResponse(input) {
  const lowercaseInput = input.toLowerCase();
  
  // Check for exact matches first
  if (exactResponses[lowercaseInput]) {
    return exactResponses[lowercaseInput];
  }

  // Check patterns for matches
  for (const { pattern, responses } of patterns) {
    if (pattern.test(lowercaseInput)) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }

  // If no pattern matches, return a random default response
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Add a message to the chat history
function addMessage(sender, message) {
  const messageDiv = document.createElement("div");

  // styles for sender names: green for user, red for ELIZA
  // This just makes it easier to read
  if (sender === "ELIZA") {
    messageDiv.innerHTML = `<strong style="color: red;">${sender}:</strong> ${message}`;
  } else if (sender === "You") {
    messageDiv.innerHTML = `<strong style="color: green;">${sender}:</strong> ${message}`;
  }

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

// Event listeners
sendButton.addEventListener("click", handleInput);
userInput.addEventListener("keydown", (e) => {
  // User doesnt have to click "send", they can just hit enter on their keyboard
  if (e.key === "Enter") {
    handleInput();
  }
});