const { getButtonsForSection } = require('../../services/sectionService');

function webNavigationResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('වෙබ් සංචාලනය')) {
        responseText = [
            "🎉 වෙබ් සංචාලනය තෝරා ගැනීම ගැන ඔබට ස්තුතියි!",
            "🤗 මම ඔබේ අත්දැකීම බාධාවකින් තොරව සහ තොරතුරු සපයන්නට මෙහි සිටිමි. ඔබට අපගේ සේවාවන් පිළිබඳ ප්‍රශ්න ඇත්නම්, වෙබ් අඩවියේ සැරිසැරීමට උදවු අවශ්‍ය වුවද, හෝ ඔබේ රෝග ලක්ෂණ මත පදනම්ව වෛද්‍යවරයකු සොයා ගැනීමට අවශ්‍ය වුවද, මම පණිවිඩයක් එපිටින් සිටිමි!",
            "💬 අද මම ඔබට වෙබ් සංචාලනය සඳහා සහය වන්නේ කෙසේද?"
            ];
        buttons = getButtonsForSection('sinhalaWebNavigation'); 

    } else if (msg.includes('ලියාපදිංචි කරන්න')) {
        responseText = [
            "📝 ඔබව ලියාපදිංචි කිරීමට සූදානම්ද?",
            "ගිණුම් ලියාපදිංචියට ප්‍රවේශ වීමට මෙම සබැඳිය භාවිතා කරන්න: <a href='http://localhost:3000/register'>මෙහි ක්ලික් කරන්න</a>.",
            "ලියාපදිංච් කිරීමේ ක්‍රියාවලියට ඔබට සහාය වීමට හෝ මඟ දිගේ ඕනෑම ප්‍රශ්නයකට පිළිතුරු දීමට මම මෙහි සිටිමි."
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    } else if (msg.includes('වෛද්‍ය පැකේජ')) {
        responseText = [
            "💼 වෛද්‍ය පැකේජ ගවේෂණය කරනවාද?",
            "වැඩිදුර තොරතුරු සඳහා අපගේ වෛද්‍ය පැකේජ පිටුවට පිවිසෙන්න: <a href='http://localhost:3000/medical-packages'>මෙහි ක්ලික් කරන්න</a>.",
            "අප විසින් පිරිනමනු ලබන පැකේජ තේරුම් ගැනීමට හෝ නිවැරදි තොරතුරු වෙත ඔබව යොමු කිරීමට මට ඔබට උදවු කළ හැක."
            ];
        buttons = getButtonsForSection('sinhalaRegister'); // Make sure this key exists in your section service

    } else if (msg.includes('ෆාමසිය')) {
        responseText = [
            "💊 අපගේ ෆාමසි සේවා සඳහා උදවු අවශ්‍යද?",
            "ඔබට ෆාමසි සේවාවන්ට මෙතැනින් ප්‍රවේශ විය හැක: <a href='http://localhost:3000/pharmacy'>මෙහි ක්ලික් කරන්න</a>.",
            "එය ඖෂධ පිළිබඳ තොරතුරු හෝ ඔබේ ෆාමසි පැතිකඩ සමඟ උදව් වේවා, මම සහාය වීමට මෙහි සිටිමි!"
            ];
        buttons = getButtonsForSection('sinhalaRegister'); // Make sure this key exists in your section service

    } else if (msg.includes('බෙහෙත් වට්‍ටෝරු ඉතිහාසය')) {
        responseText = [
            "📜 ඔබේ බෙහෙත් වට්ටෝරු ඉතිහාසය සමාලෝචනය කරනවාද?",
            "ඔබගේ වාර්තා සැරිසැරීමට ඇති විකල්ප මෙන්න: <a href='http://localhost:3000/prescription-history'>මෙහි ක්ලික් කරන්න</a>.",
            "ඔබේ බෙහෙත් වට්ටෝරු සමඟ මට ඔබට සහාය විය හැක."
            ];
        buttons = getButtonsForSection('sinhalaRegister'); // Make sure this key exists in your section service

    } else if (msg.includes('ගෙවීම් ඉතිහාසය')) {
        responseText = [
            "💳 ගෙවීම් ඉතිහාසය දෙස බලනවාද?",
            "ඔබට ඔබේ ගනුදෙනු ඉතිහාසය මෙතැනින් පරීක්ෂා කළ හැක: <a href='http://localhost:3000/payment-history'>මෙහි ක්ලික් කරන්න</a>.",
            "ඔබේ ගෙවීම් සම්බන්ධ ප්‍රශ්න හරහා මට ඔබට මග පෙන්විය හැක."
            ];
        buttons = getButtonsForSection('sinhalaRegister'); // Make sure this key exists in your section service

    } else if (msg.includes('පරිශීලක පැතිකඩ')) {
        responseText = [
            "👤 ඔබගේ පරිශීලක පැතිකඩ කළමනාකරණය කිරීම?",
            "ඔබේ පැතිකඩ සැකසීම් මෙතැනින් ප්‍රවේශ වන්න: <a href='http://localhost:3000/user-profile'>මෙහි ක්ලික් කරන්න</a>.",
            "ඔබේ පැතිකඩ විස්තර යාවත්කාලීන කිරීමට මට ඔබට සහාය විය හැක."
            ];
        buttons = getButtonsForSection('sinhalaRegister'); // Make sure this key exists in your section service

    } else {
        responseText = [
            "👨⚕️ වෛද්‍යවරයකු සොයා ගැනීමට සොයනවාද?",
            "මට ඔබට රෝග ලක්ෂණ, ප්‍රවර්ගය හෝ නම අනුව සෙවීමට උදවු කළ හැක. ඔබගේ සෙවීම මෙතැනින් ආරම්භ කරන්න: <a href='http://localhost:3000/find-doctor'>මෙහි ක්ලික් කරන්න</a>.",
            "🔍 ඔබ ඉදිරියට යාමට කැමති කෙසේද?"
            ];
        buttons = getButtonsForSection('sinhalaRegister'); // Make sure this key exists in your section service
    }

    return { responseText, buttons };
}

module.exports = { webNavigationResponse };
