const { getButtonsForSection } = require('../services/sectionService');

let firstTime = true; // Use a boolean for clarity

function englishResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (firstTime) {
        responseText = "'How can I assist you in English?'";
        buttons = getButtonsForSection('english'); // Correctly get buttons for 'english'
        firstTime = false; // Set to false after the first response
    } else if (msg.includes('Web Navigation')) {
        responseText = "Here are the options for Web Navigation:";
        buttons = getButtonsForSection('englishWebNavigation'); // Get buttons for Web Navigation
    } else if (msg.includes('Find Doctor')) {
        responseText = "How would you like to find a doctor?";
        buttons = getButtonsForSection('englishFindDoctor'); // Get buttons for Find Doctor
    } else if (msg.includes('Customer Care')) {
        responseText = "How can we assist you with Customer Care?";
        buttons = getButtonsForSection('englishCustomerCare'); // Get buttons for Customer Care
    } else {
        responseText = "I'm here to help! You said: " + msg;
        buttons = getButtonsForSection('english'); // Default to English buttons
    }

    return { responseText, buttons };
}

module.exports = { englishResponse };
