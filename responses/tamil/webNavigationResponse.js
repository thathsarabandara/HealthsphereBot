const { getButtonsForSection } = require('../../services/sectionService');

function webNavigationResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('இணைய வழிசெலுத்தல்')) {
        responseText = [
            "🎉 Thank you for choosing Web Navigation!",
            "🤗 I'm here to make your experience seamless and informative. Whether you have questions about our services, need help navigating the website, or want to find a doctor based on your symptoms, I'm just a message away!",
            "💬 How can I assist you for web navigation today?"
        ];
        buttons = getButtonsForSection('tamilWebNavigation'); 

    } else if (msg.includes('பதிவு')) {
        responseText = [
            "📝 நீங்கள் பதிவு செய்ய தயாரா?",
            "கணக்கு பதிவை அணுக இந்த இணைப்பை பயன்படுத்தவும்: <a href='http://localhost:3000/register'>இங்கே கிளிக் செய்யவும்</a>.",
            "பதிவு செயல்முறையில் உங்களுக்கு உதவ அல்லது வழியில் ஏதேனும் கேள்விகளுக்கு பதிலளிக்க நான் இங்கு வந்துள்ளேன்."
            ];
        buttons = getButtonsForSection('tamilRegister');

    } else if (msg.includes('Medical Packages')) {
        responseText = [
            "💼 மருத்துவப் பொதிகளை ஆராய்வதா?",
            "மேலும் தகவலுக்கு எங்கள் மருத்துவத் தொகுப்புகள் பக்கத்தைப் பார்வையிடவும்: <a href='http://localhost:3000/medical-packages'>இங்கே கிளிக் செய்யவும்</a>.",
            "நாங்கள் வழங்கும் பேக்கேஜ்களைப் புரிந்துகொள்ள அல்லது சரியான தகவலைப் பெற உங்களுக்கு வழிகாட்ட நான் உங்களுக்கு உதவ முடியும்."
            ];
        buttons = getButtonsForSection('tamilRegister'); // Make sure this key exists in your section service

    } else if (msg.includes('Pharmacy')) {
        responseText = [
            "💊 எங்கள் மருந்தக சேவைகளுக்கு உதவி தேவையா?",
            "நீங்கள் மருந்தக சேவைகளை இங்கே அணுகலாம்: <a href='http://localhost:3000/pharmacy'>இங்கே கிளிக் செய்யவும்</a>.",
            "மருந்துகள் பற்றிய தகவலாக இருந்தாலும் சரி அல்லது உங்கள் மருந்தக விவரத்தில் உதவியாக இருந்தாலும் சரி, நான் உதவ இங்கே இருக்கிறேன்!"
            ];
        buttons = getButtonsForSection('tamilRegister'); // Make sure this key exists in your section service

    } else if (msg.includes('Prescription History')) {
        responseText = [
            "📜 உங்கள் மருந்துச் சீட்டு வரலாற்றை மதிப்பாய்வு செய்கிறீர்களா?",
            "உங்கள் பதிவுகளை வழிசெலுத்துவதற்கான விருப்பங்கள் இதோ: <a href='http://localhost:3000/prescription-history'>இங்கே கிளிக் செய்யவும்</a>.",
            "உங்கள் மருந்துகளை நான் உங்களுக்கு உதவ முடியும்."
            ];
        buttons = getButtonsForSection('tamilRegister'); // Make sure this key exists in your section service

    } else if (msg.includes('Payment History')) {
        responseText = [
            "💳 கட்டண வரலாற்றைப் பார்க்கிறீர்களா?",
            "உங்கள் பரிவர்த்தனை வரலாற்றை இங்கே பார்க்கலாம்: <a href='http://localhost:3000/payment-history'>இங்கே கிளிக் செய்யவும்</a>.",
            "பணம் செலுத்துதல் தொடர்பான கேள்விகளுக்கு நான் உங்களுக்கு வழிகாட்ட முடியும்."
            ];
        buttons = getButtonsForSection('tamilRegister'); // Make sure this key exists in your section service

    } else if (msg.includes('User Profile')) {
        responseText = [
            "👤 உங்கள் பயனர் சுயவிவரத்தை நிர்வகிக்கிறீர்களா?",
            "உங்கள் சுயவிவர அமைப்புகளை இங்கே அணுகவும்: <a href='http://localhost:3000/user-profile'>இங்கே கிளிக் செய்யவும்</a>.",
            "உங்கள் சுயவிவர விவரங்களைப் புதுப்பிக்க நான் உங்களுக்கு உதவ முடியும்."
            ];
        buttons = getButtonsForSection('tamilRegister'); // Make sure this key exists in your section service

    } else {
        responseText = [
            "👨‍⚕️ மருத்துவரைத் தேடுகிறீர்களா?",
            "அறிகுறிகள், வகை அல்லது பெயர் மூலம் தேட நான் உங்களுக்கு உதவ முடியும். உங்கள் தேடலை இங்கே தொடங்கவும்: <a href='http://localhost:3000/find-doctor'>இங்கே கிளிக் செய்யவும்</a>.",
            "🔍 எப்படி தொடர விரும்புகிறீர்கள்?"
            ];
        buttons = getButtonsForSection('tamilRegister'); // Make sure this key exists in your section service
    }

    return { responseText, buttons };
}

module.exports = { webNavigationResponse };
