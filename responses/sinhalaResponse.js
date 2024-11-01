const { getButtonsForSection } = require('../services/sectionService');

let firstTime = true;

function sinhalaResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (firstTime) {
        responseText = "ඔබට කෙසේ හැකියාවක් කරන්නද?";
        buttons = getButtonsForSection('sinhala'); // Get buttons for 'sinhala'
        firstTime = false; // Set to false after the first response
    } else if (msg.includes('ව්‍යුහ විකල්ප')) {
        responseText = "ව්‍යුහ විකල්ප සඳහා පහත විකල්ප බලන්න:";
        buttons = getButtonsForSection('sinhalaWebNavigation'); // Get buttons for Web Navigation
    } else if (msg.includes('මරුණුවන් වෞෂධ සොයාගන්න')) {
        responseText = "මරුණුවන් වෞෂධ සොයාගන්න, කෙසේද?";
        buttons = getButtonsForSection('sinhalaFindDoctor'); // Get buttons for Find Doctor
    } else if (msg.includes('පාරිභෝගික සේවාව')) {
        responseText = "පාරිභෝගික සේවාව ගැන ඔබට කෙසේද?";
        buttons = getButtonsForSection('sinhalaCustomerCare'); // Get buttons for Customer Care
    } else {
        responseText = "මට ඔබට උදව් කිරීමට සතුටුයි! ඔබ කිව්වේ: " + msg;
        buttons = getButtonsForSection('sinhala'); // Default to Sinhala buttons
    }

    return { responseText, buttons };
}

module.exports = { sinhalaResponse };
