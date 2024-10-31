// config/socket.js
const { handleChatEvents } = require('../sockets/chatbotSocket');

function initializeSocket(io) {
    io.on('connection', (socket) => {
        console.log('New client connected');
        handleChatEvents(io, socket);
        socket.on('disconnect', () => console.log('Client disconnected'));
    });
}

module.exports = { initializeSocket };
