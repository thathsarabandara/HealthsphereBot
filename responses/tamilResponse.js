const { getButtonsForSection } = require('../services/sectionService');
const { customerCareResponse } = require('./tamil/customeCareResponse');
const { findDoctorResponse } = require('./tamil/findDoctorResponse');
const { webNavigationResponse } = require('./tamil/webNavigationResponse')

const navigationKeywords = [
    'வலை வழிசெலுத்தல்',
    'பதிவு',
    'மருத்துவ தொகுப்புகள்',
    'மருந்தகம்',
    'மருந்து வரலாறு',
    'கட்டண வரலாறு',
    'பயனர் சுயவிவரம்'
];
const customeCareKeywords = [
    'வாடிக்கையாளர் பராமரிப்பு',
    'FAQகள்',
    'பிரதிநிதியிடம் பேசு'

]

async function tamilResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('සිංහල')) {
        responseText = ['🎉 සිංහල තේරීම ගැන ස්තුතියි!',
            "🤗 මම ඔබේ අත්දැකීම බාධාවකින් තොරව සහ තොරතුරු සපයන්නට මෙහි සිටිමි. ඔබට අපගේ සේවාවන් පිළිබඳ ප්‍රශ්න ඇත්නම්, වෙබ් අඩවියේ සැරිසැරීමට උදවු අවශ්‍ය වුවද, හෝ ඔබේ රෝග ලක්ෂණ මත පදනම්ව වෛද්‍යවරයකු සොයා ගැනීමට අවශ්‍ය වුවද, මම පණිවිඩයක් එපිටින් සිටිමි!",
            "💬 මම අද ඔබට උදව් කරන්නේ කෙසේද?",
            ];
        buttons = getButtonsForSection('sinhala'); // Correctly get buttons for 'english'
    } else if (navigationKeywords.some(keyword => msg.includes(keyword))) {
        ({ responseText: responseText, buttons } = await webNavigationResponse(msg));

    } else if (customeCareKeywords.some(keyword =>msg.includes(keyword))) {
        ({ responseText: responseText, buttons } = await findDoctorResponse(msg));
    } else{
        ({ responseText: responseText, buttons } = await findDoctorResponse(msg));
    }

    return { responseText, buttons };
}

module.exports = { tamilResponse  };
