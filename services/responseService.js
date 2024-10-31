// services/responseService.js
async function generateResponse(message, userSession, section) {
    let response;

    switch (section) {
        case 'home':
            response = `Welcome to the Home section! How can I assist you today?`;
            break;
        case 'appointment':
            response = `You're in the Appointment section. Would you like to book, check, or reschedule an appointment?`;
            break;
        case 'support':
            response = `This is the Support section. You can view FAQs or speak with a representative.`;
            break;
        default:
            response = `I'm here to help! You said: ${message}`;
    }

    return response;
}

module.exports = { generateResponse };
