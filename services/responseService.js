const { welcomeResponse } = require('../responses/welcomeResponse');
const { englishResponse } = require('../responses/englishResponse');
const { sinhalaResponse } = require('../responses/sinhalaResponse');
const { tamilResponse } = require('../responses/tamilResponse');
const { getButtonsForSection } = require('./sectionService');

async function generateResponse(message, userSession, section) {
    let responseText = '';
    let buttons = []; // Initialize buttons array

    // Generate response and buttons based on the section
    switch (section) {
        case 'home':
            responseText = welcomeResponse(message); // Call welcomeResponse
            buttons = getButtonsForSection(section); // Get buttons for the home section
            break;
        case 'english':
            // Destructure response and buttons from the englishResponse function
            ({ responseText: responseText, buttons } = await englishResponse(message));
            break;
        case 'sinhala':
            // Destructure response and buttons from the sinhalaResponse function
            ({ responseText: responseText, buttons } = await sinhalaResponse(message));
            break;
        case 'tamil':
            // Destructure response and buttons from the tamilResponse function
            ({ responseText: responseText, buttons } = await tamilResponse(message));
            break;
            
    }
    console.log('Response Text:', responseText);
    console.log('Buttons:', buttons);

    return { responseText, buttons }; // Return both response and buttons
}

module.exports = { generateResponse };
