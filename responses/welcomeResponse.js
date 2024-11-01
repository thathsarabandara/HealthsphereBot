// responses/welcomeResponse.js
const { getButtonsForSection } = require('../services/sectionService');

function welcomeResponse(msg) {
    // Define the welcome messages
    const welcomeMessages = [
        "👋 Welcome to Healthsphere! We're glad to have you here.",
        "🤖 I'm SOMI, your Supportive Observant Medical Informative bot. I'm here to assist you with your medical inquiries and help you navigate our services.",
        "🌐 Please choose a language to get started: English, Tamil, or Sinhala."
    ];

    // Send each message separately
    return welcomeMessages;
}

module.exports = { welcomeResponse };
