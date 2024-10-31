// services/sectionService.js
const sectionStates = {};

function setSection(socketId, section) {
    sectionStates[socketId] = section;
}

function getSection(socketId) {
    return sectionStates[socketId] || 'home'; // Default to 'home' if not set
}

function getButtonsForSection(section) {
    const buttons = {
        home: ['Book Appointment', 'Contact Support'],
        appointment: ['Check Availability', 'Reschedule Appointment'],
        support: ['FAQs', 'Talk to Representative']
    };
    return buttons[section] || [];
}

module.exports = { setSection, getSection, getButtonsForSection };
