// TributePage.js
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for internal links
  const links = document.querySelectorAll('a[href^="#"]');
  
  for (let link of links) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Example of adding click functionality to the tribute link
  const tributeLink = document.getElementById('tribute-link');
  tributeLink.addEventListener('click', function () {
    alert('You are about to leave the page to learn more about Carl Sagan.');
  });

const readMore = document.getElementById('Read-More');
  readMore.addEventListener('click', function () {
    alert('You are about to leave the page to read more about Carl Sagan.');
  });
});

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value;
    if (message.trim() === '') return;

    appendMessage('user', message);
    userInput.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        appendMessage('bot', botResponse);
    }, 1000);
}

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    // Basic predefined responses
    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you?": "I'm just a bot, but thanks for asking!",
        "what is your name?": "I'm your friendly ChatBot.",
        "bye": "Goodbye! Have a great day!",
    };

    return responses[userMessage.toLowerCase()] || "Sorry, I didn't understand that.";
}
