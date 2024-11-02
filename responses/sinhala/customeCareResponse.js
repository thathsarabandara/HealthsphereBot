const { getButtonsForSection } = require('../../services/sectionService');

function customerCareResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('පාරිභෝගික සේවාව')) {
        responseText = [
            "🎉 පාරිභෝගික සේවා අංශය තෝරා ගැනීම ගැන ඔබට ස්තුතියි!",
            "🤗 මම ඔබේ අත්දැකීම බාධාවකින් තොරව සහ තොරතුරු සපයන්නට මෙහි සිටිමි. ඔබට අපගේ සේවාවන් පිළිබඳව ප්‍රශ්න ඇත්නම්, වෙබ් අඩවියේ සැරිසැරීමට උදවු අවශ්‍ය වුවද, හෝ වෛද්‍යවරයකු සොයා ගැනීමට අවශ්‍ය වුවද, මම පණිවිඩයක් එපිටින් සිටිමි!",
            "💬 අද දින වෙබ් සංචාලනය හෝ කිසියම් විමසීමක් සඳහා මම ඔබට සහාය වන්නේ කෙසේද?"
            ];
        buttons = getButtonsForSection('sinhalaCustomerCare'); 

    } else if (msg.includes('නිති අසන පැන')) {
        responseText = [
            "📖 නිතර අසන පැන අංශයට සාදරයෙන් පිළිගනිමු!",
            "ඔබේ නිතර අසන ප්‍රශ්නවලට පිළිතුරු දීමට සහ ඔබට ඇති ඕනෑම විශේෂිත විමසුම් සඳහා මග පෙන්වීමට මම මෙහි සිටිමි.",
            "🔎 ඔබ අද දැන ගැනීමට කැමති කුමක්ද?"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    } else if (msg.includes('නියෝජිතයා සමඟ කතා කරන්න')) {
        responseText = [
            "📞 ඔබව නියෝජිතයෙකු සමඟ සම්බන්ධ කිරීම!",
            "පෞද්ගලීකරණය කළ සහාය සඳහා අපගේ සහය කණ්ඩායම සමඟ ඔබව සම්බන්ධ කිරීමට සහ පරතරය පියවීමට උදවු කිරීමට මම මෙහි සිටිමි.",
            "💬 මම ඔබව සම්බන්ධ කිරීමට පෙර ඔබට තවදුරටත් උදව් කරන්නේ කෙසේද?"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    }
    
    return { responseText, buttons };
}

module.exports = { customerCareResponse };
