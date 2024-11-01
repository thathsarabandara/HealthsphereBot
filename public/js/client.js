const socket = io();

// Initial state: chat input is visible
showInput(true);

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

socket.on('botResponse', ({ responseText, buttons }) => {
    // Display bot's messages
    if (responseText) {
        if (Array.isArray(responseText)) {
            responseText.forEach(msg => displayMessage(msg, 'botMessage'));
        } else {
            displayMessage(responseText, 'botMessage');
        }
    }

    // Update buttons if they exist
    if (buttons && buttons.length > 0) {
        updateButtons(buttons);
    } else {
        hideButtons(); // Show input if no buttons
    }
});

function updateButtons(buttons) {
    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.innerHTML = ''; // Clear previous buttons

    buttons.forEach(buttonText => {
        const button = document.createElement('button');
        button.innerText = buttonText;
        button.addEventListener('click', () => {
            socket.emit('message', buttonText); // Emit button text as message
            displayMessage(buttonText, 'userMessage'); // Display user's button click
        });
        buttonContainer.appendChild(button);
    });

    showInput(false); // Hide input when buttons are present
}


// Function to display messages in the chat
function displayMessage(text, sender) {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    
    if (sender === 'userMessage') {
        // User message structure
        messageElement.classList.add('user-message-area');
        messageElement.innerHTML = `
            <div class="message-row user">
                <div class="profile-pic-area">
                    <img src="../Assets/profilepicture.png" alt="User Profile" class="profile-pic-small">
                    <div class="profile-name">You</div>
                </div>
                <div class="message-content user-message">
                    <p>${text}</p>
                    <span class="time">${getCurrentTime()}</span>
                </div>
            </div>
        `;
    } else {
        // Bot message structure
        messageElement.classList.add('server-message-area');
        messageElement.innerHTML = `
            <div class="message-row bot">
                <div class="profile-pic-area">
                    <img src="../Assets/bot-profile-picture.png" alt="Bot Profile" class="profile-pic-small">
                    <div class="profile-name">SOMI</div>
                </div>
                <div class="message-content bot-message">
                    <p>${text}</p>
                    <span class="time">${getCurrentTime()}</span>
                </div>
            </div>
        `;
    }

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Helper function to get the current time
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'P.M.' : 'A.M.';
    const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

function hideButtons() {
    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.innerHTML = ''; // Clear previous buttons
    showInput(true); // Show input when no buttons
}

function showInput(visible) {
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessage');

    if (visible) {
        messageInput.classList.remove('hidden');
        sendMessageBtn.classList.remove('hidden');
    } else {
        messageInput.classList.add('hidden');
        sendMessageBtn.classList.add('hidden');
    }
}
    function openForm() {
    document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
    document.getElementById("myForm").style.display = "none";
    }
