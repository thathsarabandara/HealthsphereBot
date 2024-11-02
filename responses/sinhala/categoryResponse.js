const { getButtonsForSection } = require('../../services/sectionService');

function categoryResponses(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('වර්ගය මගින්')) {
        responseText = [
            "🎉 ප්‍රවර්ගය අනුව සොයන්න කොටස වෙත සාදරයෙන් පිළිගනිමු!",
            "🤗 ඔබට නිවැරදි වෛද්‍යවරයා තෝරා ගැනීමට උපකාර කිරීම සඳහා අපගේ වෛද්‍ය විශේෂතා පිළිබඳ ඉක්මන් දළ විශ්ලේෂණයක් මෙන්න:",
            "",
            "🩺 **සාමාන්‍ය වෛද්‍යවරයා**: සාමාන්‍ය සෞඛ්‍ය ගැටළු සඳහා ප්‍රාථමික සත්කාර.",
            "👶 **ළමා රෝග විශේෂඥ**: ළමුන් සහ නව යොවුන් වියේ දරුවන් සඳහා විශේෂිත සත්කාර.",
            "❤️ **හෘද වෛද්‍ය**: හදවත සහ හෘද වාහිනී සෞඛ්‍යය කෙරෙහි අවධානය යොමු කර ඇත.",
            "🌱 **චර්ම රෝග විශේෂඥ**: සම, හිසකෙස් සහ නිය තත්ත්වයන් පිළිබඳ ප්‍රවීණත්වය.",
            "🧠 **ස්නායු විශේෂඥ**: මොළයේ සහ ස්නායු පද්ධතියේ ආබාධවලට ප්‍රතිකාර කරයි.",
            "🎗️ **පිළිකා වෛද්‍ය**: පිළිකා රෝග විනිශ්චය සහ ප්‍රතිකාර.",
            "🧘 **මනෝ වෛද්‍ය**: මානසික සෞඛ්‍ය සහ චර්යා ආබාධ.",
            "🩸 **එන්ඩොක්‍රිනොලොජිස්ට්**: හෝමෝන සහ පරිවෘත්තීය තත්වයන්.",
            "🍽️ **ආමාශ රෝග විශේෂඥ**: ආහාර ජීර්ණ පද්ධතිය සහ අදාළ ගැටළු.",
            "🦴 ** විකලාංග ශල්‍ය වෛද්‍ය**: මාංශ පේශි සෞඛ්‍යය සහ තුවාල.",
            "👁️ ** අක්ෂි වෛද්‍ය**: අක්ෂි රැකවරණය සහ පෙනීම සෞඛ්‍යය.",
            "🌬️ **පුල්මනොලොජිස්ට්**: ශ්වසන පද්ධතිය සහ පෙනහළු තත්වයන්.",
            "",
            "💬 වැඩි විස්තර දැන ගැනීමට ප්‍රවර්ගයක් තෝරන්න හෝ එම විශේෂත්වය තුළ වෛද්‍යවරයකු සොයා ගන්න."
            ];
        buttons = getButtonsForSection('sinhalaDoctorCategory'); 

    } else if (msg.includes('සාමාන්‍ය වෛද්‍යවරයා')) {
        responseText = [
            "🩺 සාමාන්‍ය වෛද්‍යවරයා",
            "සාමාන්‍ය වෛද්‍යවරුන් ප්‍රාථමික සත්කාර සපයන අතර පුළුල් පරාසයක සෞඛ්‍ය ගැටලු හසුරුවයි. ඔවුන් බොහෝ විට රෝගීන් සඳහා සම්බන්ධ වීමේ පළමු ස්ථානය වේ.",
            "📄 ඔබට GP සමඟ හමුවීමක් උපලේඛනගත කළ හැක: <a href='http://localhost:3000/finddoctors/generalpractitioner'>මෙය ක්ලික් කරන්න</a>"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    } else if (msg.includes('ළමා රෝග විශේෂඥ')) {
        responseText = [
            "👶 ළමා රෝග විශේෂඥයා",
            "ළමා රෝග විශේෂඥයින් ළදරුවන්, ළමුන් සහ නව යොවුන් වියේ දරුවන්ගේ වෛද්‍ය ප්‍රතිකාර සඳහා විශේෂඥයින් වෙති. ඔවුන් වර්ධනය නිරීක්ෂණය කරයි, එන්නත් ලබා දෙයි, සහ ළමා විශේෂිත ගැටළු වලට විසඳුම් ලබා දෙයි.",
            "📄 ළමා රෝග පිළිබඳ විශේෂඥ වෛද්‍යවරයකු සමඟ හමුවීමක් වෙන්කරවා ගන්න: <a href='http://localhost:3000/finddoctors/pediatrician'>මෙය ක්ලික් කරන්න</a>"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    } else if (msg.includes('හෘද රෝග විශේෂඥ')) {
        responseText = [
            "❤️ හෘද රෝග විශේෂඥයා",
            "හෘද රෝග විශේෂඥයින් හෘද රෝග, හෘද රෝග සහ අධි රුධිර පීඩනය වැනි හෘද රෝග හඳුනාගෙන ප්‍රතිකාර කරති.",
            "📄 හෘද රෝග විශේෂඥයෙකු සමඟ උපදේශනයක් මෙහි උපලේඛනගත කරන්න: <a href='http://localhost:3000/finddoctors/cardiologist'>මෙය ක්ලික් කරන්න</a>"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    } else if (msg.includes('චර්ම රෝග විශේෂඥ')) {
        responseText = [
            "🌱 චර්ම රෝග විශේෂඥයා",
            "චර්ම රෝග විශේෂඥයින් කුරුලෑ, දද සහ සමේ ආසාදන ඇතුළු සම, හිසකෙස් සහ නිය ගැටළු වලට ප්‍රතිකාර කරයි.",
            "📄 මෙහි චර්ම රෝග විශේෂඥ වෛද්‍යවරයකු සොයා ගන්න: <a href='http://localhost:3000/finddoctors/dermatologist'>මෙය ක්ලික් කරන්න</a>"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    } else if (msg.includes('ස්නායු වෛද්‍ය')) {
        responseText = [
            "🧠 ස්නායු විශේෂඥ",
            "ස්නායු විශේෂඥයින් අපස්මාරය, ඉරුවාරදය සහ ආඝාතය වැනි මොළයට සහ ස්නායු පද්ධතියට බලපාන තත්වයන් කෙරෙහි අවධානය යොමු කරයි.",
            "📄 ස්නායු විශේෂඥයෙකු සමඟ හමුවීමක් වෙන්කරවා ගන්න: <a href='http://localhost:3000/finddoctors/neurologist'>මෙය ක්ලික් කරන්න</a>"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    } else if (msg.includes('පිළිකා වෛද්‍ය')) {
        responseText = [
            "🎗️ පිළිකා රෝග විශේෂඥයා",
            "පිළිකා රෝග නිශ්චය කිරීම සහ ප්‍රතිකාර කිරීම සඳහා පිළිකා රෝග විශේෂඥයින් විශේෂඥයි. ඔවුන් රසායනික චිකිත්සාව සහ අනෙකුත් ප්‍රතිකාර වලට භාජනය වන රෝගීන් සඳහා සහාය ලබා දේ.",
            "📄 මෙහි පිළිකා රෝග විශේෂඥ වෛද්‍යවරයකු සමඟ උපදේශනයක් උපලේඛනගත කරන්න: <a href='http://localhost:3000/finddoctors/oncologist'>මෙය ක්ලික් කරන්න</a>"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    } else if (msg.includes('මනෝ වෛද්‍ය')) {
        responseText = [
            "🧘 මනෝ වෛද්‍යවරයා",
            "මනෝ වෛද්‍යවරු මානසික අවපීඩනය, කාංසාව සහ බයිපෝල අක්‍රමිකතා ඇතුළු මානසික සෞඛ්‍ය ආබාධ හඳුනාගෙන ප්‍රතිකාර කරති.",
            "📄 මෙතැනින් මනෝ වෛද්‍යවරයකු සොයා ගන්න: <a href='http://localhost:3000/finddoctors/psychiatrist'>මෙය ක්ලික් කරන්න</a>"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    } else if (msg.includes('අන්තරාසර්ග විද්‍යාඥයා')) {
        responseText = [
            "🩸 අන්තරාසර්ග විද්‍යාඥයා",
            "අන්තරාසර්ග විද්‍යාඥයින් දියවැඩියාව, තයිරොයිඩ් තත්වයන් සහ පරිවෘත්තීය ගැටළු වැනි හෝමෝන ආබාධවලට ප්‍රතිකාර කරයි.",
            "📄 අන්තරාසර්ග විද්‍යාඥයෙකු සමඟ හමුවීමක් වෙන්කරවා ගන්න: <a href='http://localhost:3000/finddoctors/endocrinologist'>මෙය ක්ලික් කරන්න</a>"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    } else if (msg.includes('ආමාශ රෝග විශේෂඥ')) {
        responseText = [
            "🍽️ ආමාශ ආන්ත්‍ර රෝග විශේෂඥයා",
            "Gastroenterologists ආහාර ජීර්ණ පද්ධතියේ සෞඛ්‍යය, IBS, අම්ල පිත්ත සහ අක්මා රෝග වැනි ගැටළු වලට ප්‍රතිකාර කිරීම කෙරෙහි අවධානය යොමු කරයි.",
            "📄 ආමාශ ආන්ත්‍ර රෝග විශේෂඥ වෛද්‍යවරයකු සොයා ගන්න: <a href='http://localhost:3000/finddoctors/gastroenterologist'>මෙය ක්ලික් කරන්න</a>"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    } else if (msg.includes('විකලාංග ශල්‍ය වෛද්‍ය')) {
        responseText = [
            "🦴 විකලාංග ශල්‍ය වෛද්‍ය",
            "විකලාංග ශල්‍ය වෛද්‍යවරුන් අස්ථි බිඳීම්, සන්ධි ගැටළු සහ ක්‍රීඩා තුවාල ඇතුළුව මාංශ පේශී ගැටළු විසඳයි.",
            "📄 විකලාංග ශල්‍ය වෛද්‍යවරයකු සමඟ උපදේශනයක් මෙහි උපලේඛනගත කරන්න: <a href='http://localhost:3000/finddoctors/orthopedicsurgeon'>මෙය ක්ලික් කරන්න</a>"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    } else if (msg.includes('අක්ෂි වෛද්‍ය')) {
        responseText = [
            "👁️ අක්ෂි වෛද්‍යවරයා",
            "අක්ෂි වෛද්‍යවරු ඇසේ සෞඛ්‍යය, ඇසේ සුද, ග්ලුකෝමා සහ පෙනීමේ ගැටළු වැනි තත්වයන්ට ප්‍රතිකාර කරති.",
            "📄 අක්ෂි වෛද්‍යවරයකු මෙතැනින් සොයා ගන්න: <a href='http://localhost:3000/finddoctors/ophthalmologist'>මෙය ක්ලික් කරන්න</a>"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    } else if (msg.includes('පෙනහළු විශේෂඥ')) {
        responseText = [
            "🌬️ පෙනහළු විශේෂඥයා",
            "පෙනහළු විශේෂඥයින් ශ්වසන සෞඛ්‍යය, ඇදුම, COPD සහ පෙනහළු ආසාදන වැනි තත්වයන්ට ප්‍රතිකාර කිරීම පිළිබඳ විශේෂඥයින්.",
            "📄 පුඵ්ඵුසීය විශේෂඥයෙකු සමඟ උපදේශනයක් මෙහි උපලේඛනගත කරන්න: <a href='http://localhost:3000/finddoctors/pulmonologist'>මෙය ක්ලික් කරන්න</a>"
            ];
        buttons = getButtonsForSection('sinhalaRegister');

    }

    return { responseText, buttons };
}

module.exports = { categoryResponses };