// public/js/client.js
const socket = io();

document.getElementById('sendMessage').addEventListener('click', sendMessage);
document.getElementById('messageInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') sendMessage();
});

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (!message) return;

    displayMessage(message, 'userMessage');
    socket.emit('message', message);
    messageInput.value = ''; // Clear input
}

socket.on('botResponse', ({ response, buttons }) => {
    displayMessage(response, 'botMessage');
    updateButtons(buttons);
});

function displayMessage(text, className) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function updateButtons(buttons) {
    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.innerHTML = ''; // Clear buttons

    buttons.forEach(buttonText => {
        const button = document.createElement('button');
        button.innerText = buttonText;
        button.addEventListener('click', () => socket.emit('message', buttonText));
        buttonContainer.appendChild(button);
    });
}
