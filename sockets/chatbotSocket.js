// sockets/chatbotSocket.js
const { generateResponse } = require('../services/responseService');
const { manageSession } = require('../services/sessionService');
const { setSection, getSection, getButtonsForSection } = require('../services/sectionService');

function handleChatEvents(io, socket) {
    socket.on('message', async (msg) => {
        console.log(`Message received: ${msg}`);
        const userSession = await manageSession(socket.id);
        
        // Determine section based on keywords
        if (msg.includes('appointment')) {
            setSection(socket.id, 'appointment');
        } else if (msg.includes('support')) {
            setSection(socket.id, 'support');
        } else {
            setSection(socket.id, 'home');
        }

        const section = getSection(socket.id);
        const response = await generateResponse(msg, userSession, section);
        const buttons = getButtonsForSection(section);
        
        // Send response and buttons to client
        io.to(socket.id).emit('botResponse', { response, buttons });
    });
}

module.exports = { handleChatEvents };
