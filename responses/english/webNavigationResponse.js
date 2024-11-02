const { getButtonsForSection } = require('../../services/sectionService');

function webNavigationResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('Web Navigation')) {
        responseText = [
            "🎉 Thank you for choosing Web Navigation!",
            "🤗 I'm here to make your experience seamless and informative. Whether you have questions about our services, need help navigating the website, or want to find a doctor based on your symptoms, I'm just a message away!",
            "💬 How can I assist you for web navigation today?"
        ];
        buttons = getButtonsForSection('englishWebNavigation'); 

    } else if (msg.includes('Register')) {
        responseText = [
            "📝 Ready to get you registered?",
            "Use this link to access the Account Registration: <a href='http://localhost:3000/register'>click here</a>.",
            "I'm here to assist you with the registration process or answer any questions along the way."
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Medical Packages')) {
        responseText = [
            "💼 Exploring medical packages?",
            "Visit our Medical Packages page for more information: <a href='http://localhost:3000/medical-packages'>click here</a>.",
            "I can help you understand the packages we offer or guide you to the right information."
        ];
        buttons = getButtonsForSection('englishRegister'); // Make sure this key exists in your section service

    } else if (msg.includes('Pharmacy')) {
        responseText = [
            "💊 Need help with our Pharmacy services?",
            "You can access Pharmacy services here: <a href='http://localhost:3000/pharmacy'>click here</a>.",
            "Whether it's information on medications or help with your pharmacy profile, I'm here to assist!"
        ];
        buttons = getButtonsForSection('englishRegister'); // Make sure this key exists in your section service

    } else if (msg.includes('Prescription History')) {
        responseText = [
            "📜 Reviewing your Prescription History?",
            "Here are the options to navigate your records: <a href='http://localhost:3000/prescription-history'>click here</a>.",
            "I can assist you with your prescriptions."
        ];
        buttons = getButtonsForSection('englishRegister'); // Make sure this key exists in your section service

    } else if (msg.includes('Payment History')) {
        responseText = [
            "💳 Looking into Payment History?",
            "You can check your transaction history here: <a href='http://localhost:3000/payment-history'>click here</a>.",
            "I can guide you through your payment-related questions."
        ];
        buttons = getButtonsForSection('englishRegister'); // Make sure this key exists in your section service

    } else if (msg.includes('User Profile')) {
        responseText = [
            "👤 Managing your User Profile?",
            "Access your profile settings here: <a href='http://localhost:3000/user-profile'>click here</a>.",
            "I can assist you with updating your profile details."
        ];
        buttons = getButtonsForSection('englishRegister'); // Make sure this key exists in your section service

    } else {
        responseText = [
            "👨‍⚕️ Looking to find a doctor?",
            "I can help you search by symptoms, category, or name. Start your search here: <a href='http://localhost:3000/find-doctor'>click here</a>.",
            "🔍 How would you like to proceed?"
        ];
        buttons = getButtonsForSection('englishRegister'); // Make sure this key exists in your section service
    }

    return { responseText, buttons };
}

module.exports = { webNavigationResponse };
