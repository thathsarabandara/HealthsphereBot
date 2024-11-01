const { generateResponse } = require('../services/responseService');
const { manageSession } = require('../services/sessionService');
const { setSection, getSection } = require('../services/sectionService');

let welcomeMark = 1;
let languageMark = 0; // 1 - English(Default), 2 - Sinhala, 3 - Tamil

function handleChatEvents(io, socket) {
    socket.on('message', async (msg) => {
        const userSession = await manageSession(socket.id);
        
        // Handle language selection and reset marks
        if (msg.includes('home')) {
            welcomeMark = 1;
            languageMark = 0;
            setSection(socket.id, 'home'); // Set section to home
        } else if (msg.includes('English')) {
            languageMark = 1;
            setSection(socket.id, 'english');
        } else if (msg.includes('සිංහල')) {
            languageMark = 2;
            setSection(socket.id, 'sinhala');
        } else if (msg.includes('தமிழ்')) {
            languageMark = 3;
            setSection(socket.id, 'tamil');
        }

        const section = getSection(socket.id);

        // Generate response with buttons
        const { responseText, buttons } = await generateResponse(msg, userSession, section);

        // Send response messages
        if (Array.isArray(responseText)) {
            responseText.forEach((text, index) => {
                setTimeout(() => {
                    io.to(socket.id).emit('botResponse', { responseText: text, buttons: null });

                    // Show buttons only after sending all messages
                    if (index === responseText.length - 1) {
                        if (buttons && buttons.length > 0) {
                            io.to(socket.id).emit('botResponse', { responseText: null, buttons });
                        }
                    }
                }, index * 1500); // 1.5 seconds delay between messages
            });
        } else {
            // If response is not an array, just send it directly
            io.to(socket.id).emit('botResponse', { responseText, buttons });
        }
    });
}

module.exports = { handleChatEvents };
