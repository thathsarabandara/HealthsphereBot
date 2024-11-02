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
        sinhala: ['වෙබ් සංචාලනය', 'වෛද්‍යවරයා සොයන්න', 'පාරිභෝගික සේවාව'],
        tamil: ['வலை வழிசெலுத்தல்', 'டாக்டரைக் கண்டுபிடி', 'வாடிக்கையாளர் பராமரிப்பு'],
        englishWebNavigation: ['Register', 'Medical Packages', 'Pharmacy', 'Prescription History', 'Payment History', 'User Profile', 'Home'],
        sinhalaWebNavigation: ['ලියාපදිංචි කරන්න', 'වෛද්‍ය පැකේජ', 'ෆාමසිය', 'බෙහෙත් වට්‍ටෝරු ඉතිහාසය', 'ගෙවීම් ඉතිහාසය', 'පරිශීලක පැතිකඩ', 'මුල් පිටුව'],
        tamilWebNavigation: ['பதிவு', 'மருத்துவ தொகுப்புகள்', 'மருந்தகம்', 'மருந்து வரலாறு', 'கட்டண வரலாறு', 'பயனர் சுயவிவரம்', 'வீடு'],
        englishFindDoctor: ['By Symptoms', 'By Category', 'By Name'],
        sinhalaFindDoctor: ['ලක්ෂණ මගින්', 'වර්ගය මගින්', 'නම මගින්'],
        tamilFindDoctor: ['அறிகுறிகள் மூலம்', 'வகை மூலம்', 'பெயர் மூலம்'],
        englishCustomerCare: ['FAQs', 'Talk to Representative'],
        sinhalaCustomerCare: ['නිති අසන පැන', 'නියෝජිතයා සමඟ කතා කරන්න'],
        tamilCustomerCare: ['FAQகள்', 'பிரதிநிதியிடம் பேசு'],
        englishDoctorCategory: ['General Practitioner', 'Pediatrician', 'Cardiologist', 'Dermatologist', 'Neurologist', 'Oncologist', 'Psychiatrist', 'Endocrinologist', 'Gastroenterologist', 'Orthopedic Surgeon', 'Ophthalmologist', 'Pulmonologist'],
        sinhalaDoctorCategory: ['සාමාන්‍ය වෛද්‍යවරයා', 'ළමා රෝග විශේෂඥ', 'හෘද රෝග විශේෂඥ', 'චර්ම රෝග විශේෂඥ', 'ස්නායු වෛද්‍ය', 'පිළිකා වෛද්‍ය', 'මනෝ වෛද්‍ය', 'එන්ඩොක්‍රිනොලොජිස්ට්', 'ආමාශ රෝග විශේෂඥ', 'විකලාංග ශල්‍ය වෛද්‍ය', 'අක්ෂි වෛද්‍ය', 'පුල්මනොලොජිස්ට්'],
        tamilDoctorCategory: ['பொது மருத்துவர்', 'குழந்தை மருத்துவர்', 'இருதய மருத்துவர்', 'தோல் நோய் மருத்துவர்', 'நரம்பியல் நிபுணர்', 'புற்றுநோய் மருத்துவர்', 'மனநல மருத்துவர்', 'எண்டோகிரைனாலஜிஸ்ட்', 'இரைப்பைக் குடலியல் நிபுணர்', 'எலும்பியல் மருத்துவர்', 'கண் மருத்துவர்', 'நுரையீரல் மருத்துவர்'],
        englishRegister: ['Web Navigation', 'Find Doctor', 'Customer Care','home'],
        sinhalaRegister: ['වෙබ් සංචාලනය', 'වෛද්‍යවරයා සොයන්න', 'පාරිභෝගික සත්කාර', 'මුල් පිටුව'],
        tamilRegister: ['வலை வழிசெலுத்தல்', 'டாக்டரைக் கண்டுபிடி', 'வாடிக்கையாளர் பராமரிப்பு', 'வீடு'],
    };

    return buttons[section] || [];
}

// Additional function to get doctor details based on category
function getDoctorDetailsByCategory(category) {
    // This function could return a list of doctors based on the provided category
    // Placeholder data as an example
    const doctorData = {
        'General Practitioner': ['Dr. Smith', 'Dr. John'],
        'Pediatrician': ['Dr. Jane', 'Dr. Emily'],
        'Cardiologist': ['Dr. Max', 'Dr. Lee'],
        // Add more categories and respective doctors as needed
    };

    return doctorData[category] || [];
}

module.exports = { setSection, getSection, getButtonsForSection, getDoctorDetailsByCategory };
