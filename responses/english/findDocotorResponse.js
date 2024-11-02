const { getButtonsForSection } = require('../../services/sectionService');
const { categoryResponse } = require('./categoryResponse');
const { categorizeSymptoms } = require('./categorizeSymptoms');

const categoryKeywordList = [
    'By Category',
    'General Practitioner',
    'Pediatrician',
    'Cardiologist',
    'Dermatologist',
    'Neurologist',
    'Oncologist',
    'Psychiatrist',
    'Endocrinologist',
    'Gastroenterologist',
    'Orthopedicsurgeon',
    'Ophthalmologist',
    'Pulmonologist'
];

async function findDoctorResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('Find Doctor')) {
        responseText = [
            "🎉 Welcome to the Find Doctor section!",
            "🤗 I’m here to help you find the right specialist based on your needs. You can search by category, by name, or based on your symptoms.",
            "💬 Let me know how you would like to proceed, or choose an option below."
        ];
        buttons = getButtonsForSection('englishFindDoctor'); 

    } else if (categoryKeywordList.some(keyword => msg.includes(keyword))) {
        ({ responseText, buttons } = await categoryResponse(msg));

    } else if (msg.includes('By Name')) {
        responseText = [
            "🔍 Find by Name feature is currently unavailable.",
            "📅 We apologize for the inconvenience. In the meantime, I can help you find doctors by category or based on symptoms.",
            "💡 Please choose an option below, or let me know how else I can assist!"
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('By Symptoms')) {
        responseText = [
            "📝 Please send me your symptoms.",
            "💬 Describe your symptoms clearly, and I’ll guide you to the right specialist."
        ];
        buttons = [];

    } else {
        const category = await categorizeSymptoms(msg);

        if (category === 'General Practitioner') {
            responseText = [
                "🩺 Based on your symptoms, it seems that a General Practitioner would be the best fit for you.",
                "📞 For further assistance, you can contact our Customer Care, or you can schedule an appointment directly.",
                "📄 You can schedule an appointment with a GP here: <a href='http://localhost:3000/finddoctors/generalpractitioner'>click here</a>"
            ];
            buttons = getButtonsForSection('englishFindDoctorGeneralPractitioner');

        } else if (category === 'Pediatrician') {
            responseText = [
                "👶 Based on your symptoms, a Pediatrician could help, especially for children’s health concerns.",
                "💬 For further assistance, reach out to Customer Care or schedule an appointment here.",
                "📄 Book a Pediatrician here: <a href='http://localhost:3000/finddoctors/pediatrician'>click here</a>"
            ];
            buttons = getButtonsForSection('englishFindDoctorPediatrician');

        } else if (category === 'Cardiologist') {
            responseText = [
                "💓 A Cardiologist would be best suited for your symptoms related to heart and circulatory issues.",
                "📞 Contact Customer Care if you need more help, or schedule an appointment.",
                "📄 Book a Cardiologist here: <a href='http://localhost:3000/finddoctors/cardiologist'>click here</a>"
            ];
            buttons = getButtonsForSection('englishFindDoctorCardiologist');

        } else if (category === 'Dermatologist') {
            responseText = [
                "🧴 A Dermatologist is recommended for skin-related symptoms.",
                "💬 For assistance, you can reach Customer Care or book an appointment directly.",
                "📄 Book a Dermatologist here: <a href='http://localhost:3000/finddoctors/dermatologist'>click here</a>"
            ];
            buttons = getButtonsForSection('englishFindDoctorDermatologist');

        } else if (category === 'Neurologist') {
            responseText = [
                "🧠 A Neurologist could help with neurological symptoms like headaches or nerve-related issues.",
                "📞 You may contact Customer Care for more information or schedule an appointment.",
                "📄 Book a Neurologist here: <a href='http://localhost:3000/finddoctors/neurologist'>click here</a>"
            ];
            buttons = getButtonsForSection('englishFindDoctorNeurologist');

        } else if (category === 'Oncologist') {
            responseText = [
                "🩸 For cancer-related concerns, an Oncologist is recommended.",
                "💬 Contact Customer Care if you need further assistance, or you can schedule an appointment.",
                "📄 Book an Oncologist here: <a href='http://localhost:3000/finddoctors/oncologist'>click here</a>"
            ];
            buttons = getButtonsForSection('englishFindDoctorOncologist');

        } else if (category === 'Psychiatrist') {
            responseText = [
                "🧘 Mental health concerns can be addressed by a Psychiatrist.",
                "💬 Feel free to reach out to Customer Care or book an appointment.",
                "📄 Book a Psychiatrist here: <a href='http://localhost:3000/finddoctors/psychiatrist'>click here</a>"
            ];
            buttons = getButtonsForSection('englishFindDoctorPsychiatrist');

        } else if (category === 'Endocrinologist') {
            responseText = [
                "🩸 An Endocrinologist can assist with hormonal and glandular issues.",
                "💬 Contact Customer Care for more help, or schedule an appointment.",
                "📄 Book an Endocrinologist here: <a href='http://localhost:3000/finddoctors/endocrinologist'>click here</a>"
            ];
            buttons = getButtonsForSection('englishFindDoctorEndocrinologist');

        } else if (category === 'Gastroenterologist') {
            responseText = [
                "🍽️ A Gastroenterologist is suited for digestive system concerns.",
                "💬 For further assistance, contact Customer Care or book an appointment.",
                "📄 Book a Gastroenterologist here: <a href='http://localhost:3000/finddoctors/gastroenterologist'>click here</a>"
            ];
            buttons = getButtonsForSection('englishFindDoctorGastroenterologist');

        } else if (category === 'Orthopedicsurgeon') {
            responseText = [
                "🦴 For bone, joint, or muscle issues, an Orthopedic Surgeon is recommended.",
                "📞 Contact Customer Care for help, or schedule an appointment.",
                "📄 Book an Orthopedic Surgeon here: <a href='http://localhost:3000/finddoctors/orthopedicsurgeon'>click here</a>"
            ];
            buttons = getButtonsForSection('englishFindDoctorOrthopedic');

        } else if (category === 'Ophthalmologist') {
            responseText = [
                "👁️ An Ophthalmologist would be suitable for eye-related concerns.",
                "💬 You may contact Customer Care or schedule an appointment directly.",
                "📄 Book an Ophthalmologist here: <a href='http://localhost:3000/finddoctors/ophthalmologist'>click here</a>"
            ];
            buttons = getButtonsForSection('englishFindDoctorOphthalmologist');

        } else if (category === 'Pulmonologist') {
            responseText = [
                "💨 A Pulmonologist is best suited for respiratory issues.",
                "💬 Feel free to contact Customer Care or book an appointment.",
                "📄 Book a Pulmonologist here: <a href='http://localhost:3000/finddoctors/pulmonologist'>click here</a>"
            ];
            buttons = getButtonsForSection('englishFindDoctorPulmonologist');

        } else {
            responseText = [
                `🔍 Based on your symptoms, a consultation with a ${category} would be advisable.`,
                "💡 Please reach out to Customer Care for more help or use the provided link to book an appointment."
            ];
            buttons = getButtonsForSection('english');
        }
    }

    return { responseText, buttons };
}

module.exports = { findDoctorResponse };
