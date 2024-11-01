const { getButtonsForSection } = require('../services/sectionService');

let firstTime = true;

function tamilResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (firstTime) {
        responseText = "நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?";
        buttons = getButtonsForSection('tamil'); // Get buttons for 'tamil'
        firstTime = false; // Set to false after the first response
    } else if (msg.includes('இணைய வழிசெலுத்தல்')) {
        responseText = "இணைய வழிசெலுத்தலுக்கான விருப்பங்கள் இங்கு உள்ளன:";
        buttons = getButtonsForSection('tamilWebNavigation'); // Get buttons for Web Navigation
    } else if (msg.includes('மருத்துவர் கண்டுபிடிக்கவும்')) {
        responseText = "மருத்துவரைப் புகாரளிக்க நீங்கள் எப்படி விரும்புகிறீர்கள்?";
        buttons = getButtonsForSection('tamilFindDoctor'); // Get buttons for Find Doctor
    } else if (msg.includes('வாடிக்கையாளர் சேவை')) {
        responseText = "வாடிக்கையாளர் சேவையில் உங்களுக்கு எவ்வாறு உதவ வேண்டும்?";
        buttons = getButtonsForSection('tamilCustomerCare'); // Get buttons for Customer Care
    } else {
        responseText = "நான் உங்களுக்கு உதவ விரும்புகிறேன்! நீங்கள் கூறியது: " + msg;
        buttons = getButtonsForSection('tamil'); // Default to Tamil buttons
    }

    return { responseText, buttons };
}

module.exports = { tamilResponse };
