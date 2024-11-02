const { getButtonsForSection } = require('../services/sectionService');
const { customerCareResponse } = require('./sinhala/customCareResponse');
const { findDoctorResponse } = require('./sinhala/findDocotorResponse');
const { webNavigationResponse } = require('./sinhala/webNavigationResponse')

const navigationKeywords = [
    'වෙබ් සංචාලනය',
    'ලියාපදිංචිය',
    'වෛද්‍ය පැකේජ',
    'ෆාමසිය',
    'බෙහෙත් වට්ටෝරු ඉතිහාසය',
    'ගෙවීම් ඉතිහාසය',
    'පරිශීලක පැතිකඩ'
];
const customeCareKeywords = [
    'පාරිභෝගික සේවාව',
    'නිති අසන පැන',
    'නියෝජිතයා සමඟ කතා කරන්න'

]

async function englishResponse(msg) {
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
        ({ responseText: responseText, buttons } = await customerCareResponse(msg));
    } else{
        ({ responseText: responseText, buttons } = await findDoctorResponse(msg));
    }

    return { responseText, buttons };
}

module.exports = { englishResponse  };
