const { getButtonsForSection } = require('../../services/sectionService');

function customerCareResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('வாடிக்கையாளர் பராமரிப்பு')) {
        responseText = [
            "🎉 வாடிக்கையாளர் பராமரிப்புப் பிரிவைத் தேர்ந்தெடுத்ததற்கு நன்றி!",
            "🤗 உங்கள் அனுபவத்தைத் தடையற்றதாகவும், தகவலறிந்ததாகவும் மாற்ற நான் இங்கு வந்துள்ளேன். எங்கள் சேவைகளைப் பற்றி உங்களுக்கு ஏதேனும் கேள்விகள் இருந்தாலோ, இணையதளத்தில் வழிசெலுத்துவதற்கு உதவி தேவைப்பட்டாலோ, அல்லது மருத்துவரைக் கண்டறிய விரும்பினாலும், நான் ஒரு செய்தியில் இருக்கிறேன்!",
            "💬 இன்று இணைய வழிசெலுத்தல் அல்லது ஏதேனும் விசாரணைகளில் நான் உங்களுக்கு எப்படி உதவ முடியும்?"
            ];
        buttons = getButtonsForSection('englishCustomerCare'); 

    } else if (msg.includes('FAQகள்')) {
        responseText = [
            "📖 அடிக்கடி கேட்கப்படும் கேள்விகள் பகுதிக்கு வரவேற்கிறோம்!",
            "உங்கள் அடிக்கடி கேட்கப்படும் கேள்விகளுக்குப் பதிலளிப்பதற்காகவும், உங்களிடம் ஏதேனும் குறிப்பிட்ட கேள்விகளுக்கு வழிகாட்டுதலை வழங்கவும் நான் இங்கு வந்துள்ளேன்.",
            "🔎 நீங்கள் இன்று எதைப் பற்றி தெரிந்து கொள்ள விரும்புகிறீர்கள்?"
            ];
        buttons = getButtonsForSection('englishFAQs');

    } else if (msg.includes('பிரதிநிதியிடம் பேசு')) {
        responseText = [
            "📞 Connecting you with a representative!",
            "I'm here to help bridge the gap and connect you with our support team for personalized assistance.",
            "💬 How can I assist you further before I connect you?"
        ];
        buttons = getButtonsForSection('englishRepresentative');

    }
    
    return { responseText, buttons };
}

module.exports = { customerCareResponse };
