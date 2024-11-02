const { getButtonsForSection } = require('../services/sectionService');
const { customerCareResponse } = require('./english/customCareResponse');
const { findDoctorResponse } = require('./english/findDocotorResponse');
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
const customeCareKeywords = [
    'Customer Care',
    'FAQs',
    'Talk to Representative'

]

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

    } else if (customeCareKeywords.some(keyword =>msg.includes(keyword))) {
        ({ responseText: responseText, buttons } = await customerCareResponse(msg));
    } else{
        ({ responseText: responseText, buttons } = await findDoctorResponse(msg));
    }

    return { responseText, buttons };
}

module.exports = { englishResponse  };
