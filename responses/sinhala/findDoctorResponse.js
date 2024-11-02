const { getButtonsForSection } = require('../../services/sectionService');
const { categoryResponse } = require('./categoryResponse');
const { categorizeSymptoms } = require('./catgorizeSymptoms');

const categoryKeywordList = [
    'වර්ගය මගින්',
    'සාමාන්‍ය වෛද්‍යවරයා',
    'ළමා රෝග විශේෂඥ',
    'හෘද රෝග විශේෂඥ',
    'චර්ම රෝග විශේෂඥ',
    'ස්නායු වෛද්‍ය',
    'පිළිකා වෛද්‍ය',
    'මනෝ වෛද්‍ය',
    'එන්ඩොක්‍රිනොලොජිස්ට්',
    'ආමාශ රෝග විශේෂඥ',
    'විකලාංග ශල්‍ය වෛද්‍ය',
    'අක්ෂි වෛද්‍ය',
    'පුල්මනොලොජිස්ට්'
];

async function findDoctorResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('Find Doctor')) {
        responseText = [
            "🎉 Find Doctor අංශයට සාදරයෙන් පිළිගනිමු!",
            "🤗 ඔබේ අවශ්‍යතා මත පදනම්ව නිවැරදි විශේෂඥයා සොයා ගැනීමට ඔබට උදවු කිරීමට මම මෙහි සිටිමි. ඔබට ප්‍රවර්ගය අනුව, නම අනුව, හෝ ඔබේ රෝග ලක්ෂණ මත පදනම්ව සෙවිය හැක.",
            "💬 ඔබ ඉදිරියට යාමට කැමති ආකාරය මට දන්වන්න, නැතහොත් පහත විකල්පයක් තෝරන්න."
            ];
        buttons = getButtonsForSection('englishFindDoctor'); 

    } else if (categoryKeywordList.some(keyword => msg.includes(keyword))) {
        ({ responseText, buttons } = await categoryResponse(msg));

    } else if (msg.includes('By Name')) {
        responseText = [
            "🔍 නමින් සොයන්න විශේෂාංගය දැනට නොමැත.",
            "📅 අපහසුතාවයට අපි සමාව අයදිමු. මේ අතරතුර, මට ඔබට වෛද්‍යවරුන් කාණ්ඩ අනුව හෝ රෝග ලක්ෂණ මත පදනම්ව සොයා ගැනීමට උදවු කළ හැක.",
            "💡 කරුණාකර පහත විකල්පයක් තෝරන්න, නැතහොත් මට සහාය විය හැක්කේ කෙසේදැයි මට දන්වන්න!"
            ];
        buttons = getButtonsForSection('englishFindDoctorUnavailable');

    } else if (msg.includes('By Symptoms')) {
        responseText = [
            "📝 කරුණාකර මට ඔබේ රෝග ලක්ෂණ එවන්න.",
            "💬 ඔබේ රෝග ලක්ෂණ පැහැදිලිව විස්තර කරන්න, මම ඔබට නිවැරදි විශේෂඥයා වෙත යොමු කරන්නම්."
            ];
        buttons = [];

    } else {
        const category = await categorizeSymptoms(msg);

        if (category === 'සාමාන්‍ය වෛද්‍යවරයා') {
            responseText = [
                "🩺 ඔබගේ රෝග ලක්ෂණ මත පදනම්ව, සාමාන්‍ය වෛද්‍යවරයෙකු ඔබට වඩාත් සුදුසු වනු ඇති බව පෙනේ.",
                "📞 වැඩිදුර සහාය සඳහා, ඔබට අපගේ පාරිභෝගික සේවා හා සම්බන්ධ විය හැක, නැතහොත් ඔබට සෘජුවම හමුවීමක් උපලේඛනගත කළ හැක.",
                "📄 ඔබට GP සමඟ හමුවීමක් උපලේඛනගත කළ හැක: <a href='http://localhost:3000/finddoctors/generalpractitioner'>මෙහි ක්ලික් කරන්න</a>"
                ];
            buttons = getButtonsForSection('englishFindDoctorGeneralPractitioner');

        } else if (category === 'ළමා රෝග විශේෂඥ') {
            responseText = [
                "👶 ඔබේ රෝග ලක්ෂණ මත පදනම්ව, විශේෂයෙන්ම දරුවන්ගේ සෞඛ්‍ය ගැටළු සඳහා ළමා රෝග විශේෂඥ වෛද්‍යවරයෙකුට උපකාර කළ හැක.",
                "💬 වැඩිදුර සහාය සඳහා, පාරිභෝගික සේවා වෙත සම්බන්ධ වන්න හෝ මෙහි හමුවීමක් උපලේඛනගත කරන්න.",
                "📄 ළමා රෝග විශේෂඥ වෛද්‍යවරයකු මෙහි වෙන්කරවා ගන්න: <a href='http://localhost:3000/finddoctors/pediatrician'>මෙහි ක්ලික් කරන්න</a>"
                ];
            buttons = getButtonsForSection('englishFindDoctorPediatrician');

        } else if (category === 'හෘද රෝග විශේෂඥ') {
            responseText = [
                "💓 හෘද රෝග හා රුධිර සංසරණ ගැටළු වලට අදාල ඔබගේ රෝග ලක්ෂණ සඳහා වඩාත් සුදුසු වන්නේ හෘද රෝග විශේෂඥයෙක්.",
                "📞 ඔබට තවත් උදවු අවශ්‍ය නම්, හෝ හමුවීමක් උපලේඛනගත කිරීමට පාරිභෝගික සත්කාරය අමතන්න.",
                "📄 හෘද රෝග විශේෂඥයෙකු මෙහි වෙන්කරවා ගන්න: <a href='http://localhost:3000/finddoctors/cardiologist'>මෙහි ක්ලික් කරන්න</a>"
                ];
            buttons = getButtonsForSection('englishFindDoctorCardiologist');

        } else if (category === 'චර්ම රෝග විශේෂඥ') {
            responseText = [
                "🧴 සම ආශ්‍රිත රෝග ලක්ෂණ සඳහා චර්ම රෝග විශේෂඥයෙකු නිර්දේශ කරනු ලැබේ.",
                "💬 උපකාර සඳහා, ඔබට පාරිභෝගික සේවා වෙත සම්බන්ධ වීමට හෝ සෘජුවම හමුවීමක් වෙන්කරවා ගැනීමට හැකිය.",
                "📄 මෙහි චර්ම රෝග විශේෂඥ වෛද්‍යවරයකු වෙන්කරවා ගන්න: <a href='http://localhost:3000/finddoctors/dermatologist'>මෙහි ක්ලික් කරන්න</a>"
                ];
            buttons = getButtonsForSection('englishFindDoctorDermatologist');

        } else if (category === 'ස්නායු වෛද්‍ය') {
            responseText = [
                "🧠 ස්නායු විශේෂඥයෙකුට හිසරදය හෝ ස්නායු ආශ්‍රිත ගැටළු වැනි ස්නායු රෝග ලක්ෂණ සඳහා උපකාර කළ හැක.",
                "📞 ඔබට වැඩි විස්තර සඳහා පාරිභෝගික සේවා සම්බන්ධ කර ගැනීමට හෝ හමුවීමක් උපලේඛනගත කළ හැක.",
                "📄 මෙහි ස්නායු විශේෂඥයෙකු වෙන්කරවා ගන්න: <a href='http://localhost:3000/finddoctors/neurologist'>මෙහි ක්ලික් කරන්න</a>"
                ];
            buttons = getButtonsForSection('englishFindDoctorNeurologist');

        } else if (category === 'පිළිකා වෛද්‍ය') {
            responseText = [
                "🩸 For cancer-related concerns, an Oncologist is recommended.",
                "💬 Contact Customer Care if you need further assistance, or you can schedule an appointment.",
                "📄 Book an Oncologist here: <a href='http://localhost:3000/finddoctors/oncologist'>click here</a>"
            ];
            buttons = getButtonsForSection('englishFindDoctorOncologist');

        } else if (category === 'මනෝ වෛද්‍ය') {
            responseText = [
                "🧘 මානසික සෞඛ්‍ය ගැටළු මනෝ වෛද්‍යවරයෙකුට විසඳා ගත හැක.",
                "💬 පාරිභෝගික සේවා වෙත සම්බන්ධ වීමට හෝ හමුවීමක් වෙන්කරවා ගැනීමට නිදහස් වන්න.",
                "📄 මෙතැනින් මනෝ වෛද්‍යවරයකු වෙන්කරවා ගන්න: <a href='http://localhost:3000/finddoctors/psychiatrist'>මෙතන ක්ලික් කරන්න</a>"
                ];
            buttons = getButtonsForSection('englishFindDoctorPsychiatrist');

        } else if (category === 'එන්ඩොක්‍රිනොලොජිස්ට්') {
            responseText = [
                "🩸 අන්තරාසර්ග විද්‍යා ologist යෙකුට හෝමෝන සහ ග්‍රන්ථි ආශ්‍රිත ගැටළු සඳහා සහාය විය හැක.",
                "💬 වැඩි උපකාර සඳහා පාරිභෝගික සේවා අමතන්න, නැතහොත් හමුවීමක් උපලේඛනගත කරන්න.",
                "📄 අන්තරාසර්ග විද්‍යාඥයෙකු මෙහි වෙන්කරවා ගන්න: <a href='http://localhost:3000/finddoctors/endocrinologist'>මෙතන ක්ලික් කරන්න</a>"
                ];
            buttons = getButtonsForSection('englishFindDoctorEndocrinologist');

        } else if (category === 'ආමාශ රෝග විශේෂඥ') {
            responseText = [
                "🍽️ ආහාර දිරවීමේ පද්ධතියේ ගැටළු සඳහා ගැස්ට්‍රෝ එන්ටෙරොලොජිස්ට්වරයෙකු සුදුසුය.",
                "💬 වැඩිදුර සහාය සඳහා, පාරිභෝගික සේවා අමතන්න හෝ හමුවීමක් වෙන්කරවා ගන්න.",
                "📄 Gastroenterologist කෙනෙක් මෙතනින් වෙන්කරවා ගන්න: <a href='http://localhost:3000/finddoctors/gastroenterologist'>මෙහි ක්ලික් කරන්න</a>"
                ];
            buttons = getButtonsForSection('englishFindDoctorGastroenterologist');

        } else if (category === 'විකලාංග ශල්‍ය වෛද්‍ය') {
            responseText =[
                "🦴 අස්ථි, සන්ධි හෝ මාංශ පේශි ගැටළු සඳහා, විකලාංග ශල්‍ය වෛද්‍යවරයකු නිර්දේශ කරනු ලැබේ.",
                "📞 උදවු සඳහා පාරිභෝගික සේවා අමතන්න, නැතහොත් හමුවීමක් උපලේඛනගත කරන්න.",
                "📄 විකලාංග ශල්‍ය වෛද්‍යවරයකු මෙහි වෙන්කරවා ගන්න: <a href='http://localhost:3000/finddoctors/orthopedicsurgeon'>මෙතන ක්ලික් කරන්න</a>"
                ];
            buttons = getButtonsForSection('englishFindDoctorOrthopedic');

        } else if (category === 'අක්ෂි වෛද්‍ය') {
            responseText =[
                "👁️ ඇස් සම්බන්ධ ගැටළු සඳහා අක්ෂි වෛද්‍යවරයකු සුදුසු වේ.",
                "💬 ඔබට පාරිභෝගික සේවා හා සම්බන්ධ වීමට හෝ හමුවීමක් සෘජුවම උපලේඛනගත කළ හැක.",
                "📄 අක්ෂි වෛද්‍යවරයකු මෙහි වෙන්කරවා ගන්න: <a href='http://localhost:3000/finddoctors/ophthalmologist'>මෙහි ක්ලික් කරන්න</a>"
                ];
            buttons = getButtonsForSection('englishFindDoctorOphthalmologist');

        } else if (category === 'පුල්මනොලොජිස්ට්') {
            responseText = [
                "💨 ශ්වසන රෝග සඳහා වඩාත් සුදුසු වන්නේ පෙනහළු විශේෂඥ වෛද්‍යවරයෙක්.",
                "💬 පාරිභෝගික සේවා සම්බන්ධ කර ගැනීමට හෝ හමුවීමක් වෙන්කරවා ගැනීමට නිදහස් වන්න.",
                "📄 පුඵ්ඵුසීය වෛද්‍යවරයකු මෙහි වෙන්කරවා ගන්න: <a href='http://localhost:3000/finddoctors/pulmonologist'>මෙහි ක්ලික් කරන්න</a>"
                ];
            buttons = getButtonsForSection('englishFindDoctorPulmonologist');

        } else {
            responseText = [
                `🔍 ඔබේ රෝග ලක්ෂණ මත පදනම්ව, ${ප්‍රවර්ගය} සමඟ උපදේශනය යෝග්‍ය වනු ඇත.`,
                "💡 කරුණාකර වැඩි උපකාර සඳහා පාරිභෝගික සේවා වෙත සම්බන්ධ වන්න හෝ හමුවීමක් වෙන්කරවා ගැනීමට සපයා ඇති සබැඳිය භාවිතා කරන්න."
                ];
            buttons = getButtonsForSection('english');
        }
    }

    return { responseText, buttons };
}

module.exports = { findDoctorResponse };
