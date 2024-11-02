// services/sectionService.js
const sectionStates = {};

function setSection(socketId, section) {
    sectionStates[socketId] = section;
}

function getSection(socketId) {
    return sectionStates[socketId] || 'home'; // Default to 'home' if not set
}

function getButtonsForSection(section) {
    const buttons = {
        home: ['English', 'සිංහල', 'தமிழ்'],
        english: ['Web Navigation', 'Find Doctor', 'Customer Care'],
        sinhala: ['ව්‍යුහ විකල්ප', 'මරුණුවන් වෞෂධ සොයාගන්න', 'පාරිභෝගික සේවාව'],
        tamil: ['இணைய வழிசெலுத்தல்', 'மருத்துவர் கண்டுபிடிக்கவும்', 'வாடிக்கையாளர் சேவை'],
        englishWebNavigation: ['Register', 'Medical Packages', 'Pharmacy', 'Prescription History', 'Payment History', 'User Profile', 'Home'],
        sinhalaWebNavigation: ['ලියාපදිංචි', 'ව්‍යුහ අන්තර්ගත', 'මඩල', 'පතුරු තොරතුරු', 'පණිවුඩ ගෙවීම්', 'පරිශීලක මට්ටම', 'මුල් පිටුව'],
        tamilWebNavigation: ['பதிவு', 'மருத்துவ தொகுப்புகள்', 'மருந்தகம்', 'மருந்து வரலாறு', 'பணம் செலுத்தும் வரலாறு', 'பயனர் சுயவிவரம்', 'முகப்பு'],
        englishFindDoctor: ['By Symptoms', 'By Category', 'By Name'],
        sinhalaFindDoctor: ['ලක්ෂණ මගින්', 'වර්ගය මගින්', 'නම මගින්'],
        tamilFindDoctor: ['அறிகுறிகள் மூலம்', 'வகை மூலம்', 'பெயர் மூலம்'],
        englishCustomerCare: ['FAQs', 'Talk to Representative'],
        sinhalaCustomerCare: ['අවධාරණ ප‍්‍රශ්න', 'නියෝජිතයාට කතා කරන්න'],
        tamilCustomerCare: ['அடிக்கடி கேட்கப்படும் கேள்விகள்', 'நிதானமா பேசவும்'],
        englishRegister:['Web Navigation', 'Find Doctor', 'Customer Care' ,'Stop Assitant'],
        englishDoctorCategory:['General Practitioner','Pediatrician','Cardiologist','Dermatologist','Neurologist','Oncologist','Psychiatrist','Endocrinologist','Gastroenterologist','Orthopedicsurgeon','Ophthalmologist','Pulmonologist']
    };

    return buttons[section] || [];
}


module.exports = { setSection, getSection, getButtonsForSection };
