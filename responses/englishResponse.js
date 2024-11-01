const { getButtonsForSection } = require('../services/sectionService');
const { webNavigationResponse } = require('./english/webNavigationResponse')
const navigationKeywords = [
    'Web Navigation',
    'Register',
    'Medical Packages',
    'Pharmacy',
    'Prescription History',
    'Payment History',
    'User Profile'
];

async function englishResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('English')) {
        responseText = ['🎉 Thank you for choosing English!', 
            "🤗 I'm here to make your experience seamless and informative. Whether you have questions about our services, need help navigating the website, or want to find a doctor based on your symptoms, I'm just a message away!",
            "💬 How can I assist you today? ",
        ];
        buttons = getButtonsForSection('english'); // Correctly get buttons for 'english'
    } else if (navigationKeywords.some(keyword => msg.includes(keyword))) {
        ({ responseText: responseText, buttons } = await webNavigationResponse(msg));
        
    } else if (msg.includes('Customer Care','FAQs','Talk to Representative')) {
        responseText = "How can we assist you with Customer Care?";
        buttons = getButtonsForSection('englishCustomerCare'); // Get buttons for Customer Care
    } else{
        responseText = "How would you like to find a doctor?";
        buttons = getButtonsForSection('englishFindDoctor'); // Get buttons for Find Doctor
    }

    return { responseText, buttons };
}

module.exports = { englishResponse  };
