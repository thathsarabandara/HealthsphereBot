const { getButtonsForSection } = require('../../services/sectionService');

function customerCareResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('Customer Care')) {
        responseText = [
            "🎉 Thank you for choosing the Customer Care section!",
            "🤗 I'm here to make your experience seamless and informative. Whether you have questions about our services, need help navigating the website, or want to find a doctor, I'm just a message away!",
            "💬 How can I assist you with web navigation or any inquiries today?"
        ];
        buttons = getButtonsForSection('englishCustomerCare'); 

    } else if (msg.includes('FAQs')) {
        responseText = [
            "📖 Welcome to the FAQs section!",
            "I'm here to answer your frequently asked questions and provide guidance on any specific queries you may have.",
            "🔎 What would you like to know about today?"
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Talk to Representative')) {
        responseText = [
            "📞 Connecting you with a representative!",
            "I'm here to help bridge the gap and connect you with our support team for personalized assistance.",
            "💬 How can I assist you further before I connect you?"
        ];
        buttons = getButtonsForSection('englishRegister');

    }
    
    return { responseText, buttons };
}

module.exports = { customerCareResponse };
