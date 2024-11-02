const { getButtonsForSection } = require('../../services/sectionService');
const { categoryResponse } = require('./categoryResponse');
const { categorizeSymptoms } = require('./catgorizeSymptoms');

const categoryKeywordList = [
    'வகை மூலம்',
    'பொது மருத்துவர்',
    'குழந்தை மருத்துவர்',
    'இருதய மருத்துவர்',
    'தோல் நோய் மருத்துவர்',
    'நரம்பியல் நிபுணர்',
    'புற்றுநோய் மருத்துவர்',
    'மனநல மருத்துவர்',
    'எண்டோகிரைனாலஜிஸ்ட்',
    'இரைப்பைக் குடலியல் நிபுணர்',
    'எலும்பியல் மருத்துவர்',
    'கண் மருத்துவர்',
    'நுரையீரல் மருத்துவர்'
];

async function findDoctorResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('Find Doctor')) {
        responseText = [
            "🎉 ஃபைண்ட் டாக்டர் பிரிவுக்கு வரவேற்கிறோம்!",
            "🤗 உங்கள் தேவைகளின் அடிப்படையில் சரியான நிபுணரைக் கண்டறிய உங்களுக்கு உதவ நான் இங்கு இருக்கிறேன். வகை, பெயர் அல்லது உங்கள் அறிகுறிகளின் அடிப்படையில் நீங்கள் தேடலாம்.",
            "💬 நீங்கள் எவ்வாறு தொடர விரும்புகிறீர்கள் என்பதை எனக்குத் தெரிவிக்கவும் அல்லது கீழே உள்ள விருப்பத்தைத் தேர்வு செய்யவும்."
            ];
        buttons = getButtonsForSection('englishFindDoctor'); 

    } else if (categoryKeywordList.some(keyword => msg.includes(keyword))) {
        ({ responseText, buttons } = await categoryResponse(msg));

    } else if (msg.includes('By Name')) {
        responseText = [
            "🔍 பெயர் மூலம் கண்டுபிடி அம்சம் தற்போது கிடைக்கவில்லை.",
            "📅 சிரமத்திற்கு வருந்துகிறோம். இதற்கிடையில், வகை அல்லது அறிகுறிகளின் அடிப்படையில் மருத்துவர்களைக் கண்டறிய நான் உங்களுக்கு உதவ முடியும்.",
            "💡 தயவுசெய்து கீழே ஒரு விருப்பத்தைத் தேர்வுசெய்யவும் அல்லது வேறு எப்படி நான் உதவ முடியும் என்பதை எனக்குத் தெரிவிக்கவும்!"
            ];
        buttons = getButtonsForSection('tamilRegister');

    } else if (msg.includes('By Symptoms')) {
        responseText = [
            "📝 உங்கள் அறிகுறிகளை எனக்கு அனுப்பவும்.",
            "💬 உங்கள் அறிகுறிகளை தெளிவாக விவரிக்கவும், சரியான நிபுணரிடம் நான் உங்களுக்கு வழிகாட்டுகிறேன்."
            ];
        buttons = [];

    } else {
        const category = await categorizeSymptoms(msg);

        if (category === 'பொது மருத்துவர்') {
            responseText = [
                "🩺 உங்கள் அறிகுறிகளின் அடிப்படையில், ஒரு பொது பயிற்சியாளர் உங்களுக்கு மிகவும் பொருத்தமானவர் என்று தெரிகிறது.",
                "📞 மேலும் உதவிக்கு, நீங்கள் எங்கள் வாடிக்கையாளர் சேவையைத் தொடர்புகொள்ளலாம் அல்லது நேரடியாக சந்திப்பைத் திட்டமிடலாம்.",
                "📄 இங்கே ஒரு GP உடனான சந்திப்பைத் திட்டமிடலாம்: <a href='http://localhost:3000/finddoctors/generalpractitioner'>இங்கே கிளிக் செய்யவும்</a>"
                ];
            buttons = getButtonsForSection('tamilRegister');

        } else if (category === 'குழந்தை மருத்துவர்') {
            responseText = [
                "👶 உங்கள் அறிகுறிகளின் அடிப்படையில், குழந்தை நல மருத்துவர் உதவலாம், குறிப்பாக குழந்தைகளின் உடல்நலக் கவலைகளுக்கு.",
                "💬 மேலும் உதவிக்கு, வாடிக்கையாளர் சேவையைத் தொடர்புகொள்ளவும் அல்லது இங்கே சந்திப்பைத் திட்டமிடவும்.",
                "📄 இங்கே ஒரு குழந்தை மருத்துவரை முன்பதிவு செய்யுங்கள்: <a href='http://localhost:3000/finddoctors/pediatrician'>இங்கே கிளிக் செய்யவும்</a>"
                ];
            buttons = getButtonsForSection('tamilRegister');

        } else if (category === 'இருதய மருத்துவர்') {
            responseText = [
                "💓 இதயம் மற்றும் சுற்றோட்ட பிரச்சனைகள் தொடர்பான உங்கள் அறிகுறிகளுக்கு இருதயநோய் நிபுணர் மிகவும் பொருத்தமானவர்.",
                "📞 உங்களுக்கு கூடுதல் உதவி தேவைப்பட்டால் அல்லது சந்திப்பைத் திட்டமிடினால் வாடிக்கையாளர் சேவையைத் தொடர்புகொள்ளவும்.",
                "📄 இதயநோய் நிபுணரை இங்கே பதிவு செய்யவும்: <a href='http://localhost:3000/finddoctors/cardiologist'>இங்கே கிளிக் செய்யவும்</a>"
                ];
            buttons = getButtonsForSection('tamilRegister');

        } else if (category === 'தோல் நோய் மருத்துவர்') {
            responseText = [
                "🧴 A Dermatologist is recommended for skin-related symptoms.",
                "💬 For assistance, you can reach Customer Care or book an appointment directly.",
                "📄 Book a Dermatologist here: <a href='http://localhost:3000/finddoctors/dermatologist'>click here</a>"
            ];
            buttons = getButtonsForSection('tamilRegister');

        } else if (category === 'நரம்பியல் நிபுணர்') {
            responseText = [
                "🧴 தோல் தொடர்பான அறிகுறிகளுக்கு ஒரு தோல் மருத்துவர் பரிந்துரைக்கப்படுகிறார்.",
                "💬 உதவிக்கு, நீங்கள் வாடிக்கையாளர் சேவையை அணுகலாம் அல்லது நேரடியாக சந்திப்பை பதிவு செய்யலாம்.",
                "📄 இங்கே ஒரு தோல் மருத்துவரை முன்பதிவு செய்யுங்கள்: <a href='http://localhost:3000/finddoctors/dermatologist'>இங்கே கிளிக் செய்யவும்</a>"
                ];
            buttons = getButtonsForSection('tamilRegister');

        } else if (category === 'புற்றுநோய் மருத்துவர்') {
            responseText =[
                "🩸 புற்றுநோய் தொடர்பான கவலைகளுக்கு, புற்றுநோயியல் நிபுணர் பரிந்துரைக்கப்படுகிறார்.",
                "💬 உங்களுக்கு கூடுதல் உதவி தேவைப்பட்டால் வாடிக்கையாளர் சேவையைத் தொடர்புகொள்ளவும் அல்லது நீங்கள் சந்திப்பைத் திட்டமிடலாம்.",
                "📄 புற்றுநோயியல் நிபுணரை இங்கே பதிவு செய்யவும்: <a href='http://localhost:3000/finddoctors/oncologist'>இங்கே கிளிக் செய்யவும்</a>"
                ];
            buttons = getButtonsForSection('tamilRegister');

        } else if (category === 'மனநல மருத்துவர்') {
            responseText = [
                "🧘 மனநலக் கவலைகள் ஒரு மனநல மருத்துவரால் தீர்க்கப்படலாம்.",
                "💬 வாடிக்கையாளர் சேவையை அணுகவும் அல்லது சந்திப்பை பதிவு செய்யவும்.",
                "📄 ஒரு மனநல மருத்துவரை இங்கே பதிவு செய்யவும்: <a href='http://localhost:3000/finddoctors/psychiatrist'>இங்கே கிளிக் செய்யவும்</a>"
                ];
            buttons = getButtonsForSection('tamilRegister');

        } else if (category === 'எண்டோகிரைனாலஜிஸ்ட்') {
            responseText = [
                "🩸 ஒரு உட்சுரப்பியல் நிபுணர் ஹார்மோன் மற்றும் சுரப்பி பிரச்சனைகளுக்கு உதவ முடியும்.",
                "💬 கூடுதல் உதவிக்கு வாடிக்கையாளர் சேவையைத் தொடர்புகொள்ளவும் அல்லது சந்திப்பைத் திட்டமிடவும்.",
                "📄 ஒரு உட்சுரப்பியல் நிபுணரை இங்கே பதிவு செய்யவும்: <a href='http://localhost:3000/finddoctors/endocrinologist'>இங்கே கிளிக் செய்யவும்</a>"
                ];
            buttons = getButtonsForSection('tamilRegister');

        } else if (category === 'இரைப்பைக் குடலியல் நிபுணர்') {
            responseText = [
                "🍽️ செரிமான அமைப்பின் பிரச்சனைகளுக்கு காஸ்ட்ரோஎன்டாலஜிஸ்ட் பொருத்தமானவர்.",
                "💬 மேலும் உதவிக்கு, வாடிக்கையாளர் சேவையைத் தொடர்புகொள்ளவும் அல்லது சந்திப்பை முன்பதிவு செய்யவும்.",
                "📄 காஸ்ட்ரோஎன்டாலஜிஸ்ட்டை இங்கே பதிவு செய்யுங்கள்: <a href='http://localhost:3000/finddoctors/gastroenterologist'>இங்கே கிளிக் செய்யவும்</a>"
                ];
            buttons = getButtonsForSection('tamilRegister');

        } else if (category === 'எலும்பியல் மருத்துவர்') {
            responseText = [
                "🦴 எலும்பு, மூட்டு அல்லது தசை பிரச்சனைகளுக்கு, எலும்பியல் அறுவை சிகிச்சை நிபுணர் பரிந்துரைக்கப்படுகிறார்.",
                "📞 உதவிக்கு வாடிக்கையாளர் சேவையைத் தொடர்புகொள்ளவும் அல்லது சந்திப்பைத் திட்டமிடவும்.",
                "📄 எலும்பியல் அறுவை சிகிச்சை நிபுணரை இங்கே பதிவு செய்யவும்: <a href='http://localhost:3000/finddoctors/orthopedicsurgeon'>இங்கே கிளிக் செய்யவும்</a>"
                ];
            buttons = getButtonsForSection('tamilRegister');

        } else if (category === 'கண் மருத்துவர்') {
            responseText = [
                "👁️ கண் தொடர்பான கவலைகளுக்கு ஒரு கண் மருத்துவர் பொருத்தமானவர்.",
                "💬 நீங்கள் வாடிக்கையாளர் சேவையை தொடர்பு கொள்ளலாம் அல்லது நேரடியாக சந்திப்பை திட்டமிடலாம்.",
                "📄 இங்கே ஒரு கண் மருத்துவரை முன்பதிவு செய்யுங்கள்: <a href='http://localhost:3000/finddoctors/ophthalmologist'>இங்கே கிளிக் செய்யவும்</a>"
                ];
            buttons = getButtonsForSection('tamilRegister');

        } else if (category === 'நுரையீரல் மருத்துவர்') {
            responseText = [
                "💨 நுரையீரல் நிபுணர் சுவாச பிரச்சனைகளுக்கு மிகவும் பொருத்தமானவர்.",
                "💬 வாடிக்கையாளர் சேவையைத் தொடர்புகொள்ளவும் அல்லது சந்திப்பை முன்பதிவு செய்யவும்.",
                "📄 நுரையீரல் நிபுணரை இங்கே பதிவு செய்யவும்: <a href='http://localhost:3000/finddoctors/pulmonologist'>இங்கே கிளிக் செய்யவும்</a>"
                ];
            buttons = getButtonsForSection('tamilRegister');

        } else {
            responseText = [
                `🔍 உங்கள் அறிகுறிகளின் அடிப்படையில், ${வகை} உடன் ஆலோசனை பெறுவது நல்லது.`,
                "💡 மேலும் உதவிக்கு வாடிக்கையாளர் சேவையைத் தொடர்பு கொள்ளவும் அல்லது சந்திப்பை முன்பதிவு செய்ய வழங்கப்பட்ட இணைப்பைப் பயன்படுத்தவும்."
                ];
            buttons = getButtonsForSection('tamilRegister');
        }
    }

    return { responseText, buttons };
}

module.exports = { findDoctorResponse };
