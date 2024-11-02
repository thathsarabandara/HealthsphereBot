const { getButtonsForSection } = require('../../services/sectionService');

function webNavigationResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('Web Navigation')) {
        responseText = [
            "🎉 Thank you for choosing Web Navigation!",
            "🤗 I'm here to make your experience seamless and informative. Whether you have questions about our services, need help navigating the website, or want to find a doctor based on your symptoms, I'm just a message away!",
            "💬 How can I assist you for web navigation today?"
        ]
        buttons = getButtonsForSection('englishWebNavigation'); 

    } else if (msg.includes('Register')) {
        responseText = [
            "📝 Ready to get you registered!",
            "I'm here to assist you with the registration process or answer any questions along the way.",
            "📄 Use this link to get access Accout Resgistration <a href = 'http://localhost:3000/register'>click this</a>"
        ]
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Medical Packages')) {
        responseText = [
            "💼 Exploring medical packages?",
            "I can help you understand the packages we offer or guide you to the right information.",
            "💡 How can I assist you with this today?"
        ]
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Pharmacy')) {
        responseText = [
            "💊 Need help with our Pharmacy services?",
            "Whether it's information on medications or help with your pharmacy profile, I'm here to assist!",
            "🚑 How can I help you today?"
        ]
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Prescription History')) {
        responseText = [
            "📜 Reviewing your Prescription History?",
            "Here are the options to navigate your records or get assistance with your prescriptions.",
            "🩺 How can I assist you further?"
        ]
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Payment History')) {
        responseText = [
            "💳 Looking into Payment History?",
            "I can guide you through your transaction history or answer any payment-related questions.",
            "🧾 How can I be of help?"
        ]
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('User Profile')) {
        responseText = [
            "👤 Managing your User Profile?",
            "I can assist you with updating your profile details or navigating user settings.",
            "🔧 What would you like to do today?"
        ]
        buttons = getButtonsForSection('englishRegister');

    } else {
        responseText = [
            "👨‍⚕️ Looking to find a doctor?",
            "I can help you search by symptoms, category, or name to find the right specialist.",
            "🔍 How would you like to proceed?"
        ]
        buttons = getButtonsForSection('englishRegister');
    }

    return { responseText, buttons };
}

module.exports = { webNavigationResponse };
