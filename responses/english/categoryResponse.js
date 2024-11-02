const { getButtonsForSection } = require('../../services/sectionService');

function categoryResponse(msg) {
    let responseText = '';
    let buttons = [];

    if (msg.includes('By Category')) {
        responseText = [
            "🎉 Welcome to the Find by Category section!",
            "🤗 Here is a quick overview of our medical specialties to help you choose the right doctor:",
            "",
            "🩺 **General Practitioner**: Primary care for general health concerns.",
            "👶 **Pediatrician**: Specialized care for children and adolescents.",
            "❤️ **Cardiologist**: Focused on heart and cardiovascular health.",
            "🌱 **Dermatologist**: Expertise in skin, hair, and nail conditions.",
            "🧠 **Neurologist**: Treats brain and nervous system disorders.",
            "🎗️ **Oncologist**: Cancer diagnosis and treatment.",
            "🧘 **Psychiatrist**: Mental health and behavioral disorders.",
            "🩸 **Endocrinologist**: Hormone and metabolic conditions.",
            "🍽️ **Gastroenterologist**: Digestive system and related issues.",
            "🦴 **Orthopedic Surgeon**: Musculoskeletal health and injuries.",
            "👁️ **Ophthalmologist**: Eye care and vision health.",
            "🌬️ **Pulmonologist**: Respiratory system and lung conditions.",
            "",
            "💬 Select a category to learn more or find a doctor in that specialty."
        ];
        buttons = getButtonsForSection('englishDoctorCategory'); 

    } else if (msg.includes('General Practitioner')) {
        responseText = [
            "🩺 General Practitioner",
            "General practitioners provide primary care and handle a broad range of health issues. They are often the first point of contact for patients.",
            "📄 You can schedule an appointment with a GP here: <a href='http://localhost:3000/finddoctors/generalpractitioner'>click this</a>"
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Pediatrician')) {
        responseText = [
            "👶 Pediatrician",
            "Pediatricians specialize in the medical care of infants, children, and adolescents. They monitor growth, provide vaccinations, and address pediatric-specific concerns.",
            "📄 Book an appointment with a Pediatrician here: <a href='http://localhost:3000/finddoctors/pediatrician'>click this</a>"
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Cardiologist')) {
        responseText = [
            "❤️ Cardiologist",
            "Cardiologists diagnose and treat heart conditions such as arrhythmias, heart disease, and high blood pressure.",
            "📄 Schedule a consultation with a Cardiologist here: <a href='http://localhost:3000/finddoctors/cardiologist'>click this</a>"
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Dermatologist')) {
        responseText = [
            "🌱 Dermatologist",
            "Dermatologists treat skin, hair, and nail issues, including acne, eczema, and skin infections.",
            "📄 Find a Dermatologist here: <a href='http://localhost:3000/finddoctors/dermatologist'>click this</a>"
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Neurologist')) {
        responseText = [
            "🧠 Neurologist",
            "Neurologists focus on conditions affecting the brain and nervous system, such as epilepsy, migraines, and stroke.",
            "📄 Book an appointment with a Neurologist here: <a href='http://localhost:3000/finddoctors/neurologist'>click this</a>"
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Oncologist')) {
        responseText = [
            "🎗️ Oncologist",
            "Oncologists specialize in diagnosing and treating cancer. They provide support for patients undergoing chemotherapy and other treatments.",
            "📄 Schedule a consultation with an Oncologist here: <a href='http://localhost:3000/finddoctors/oncologist'>click this</a>"
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Psychiatrist')) {
        responseText = [
            "🧘 Psychiatrist",
            "Psychiatrists diagnose and treat mental health disorders, including depression, anxiety, and bipolar disorder.",
            "📄 Find a Psychiatrist here: <a href='http://localhost:3000/finddoctors/psychiatrist'>click this</a>"
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Endocrinologist')) {
        responseText = [
            "🩸 Endocrinologist",
            "Endocrinologists treat hormonal disorders such as diabetes, thyroid conditions, and metabolic issues.",
            "📄 Book an appointment with an Endocrinologist here: <a href='http://localhost:3000/finddoctors/endocrinologist'>click this</a>"
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Gastroenterologist')) {
        responseText = [
            "🍽️ Gastroenterologist",
            "Gastroenterologists focus on digestive system health, treating issues like IBS, acid reflux, and liver disease.",
            "📄 Find a Gastroenterologist here: <a href='http://localhost:3000/finddoctors/gastroenterologist'>click this</a>"
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Orthopedic Surgeon')) {
        responseText = [
            "🦴 Orthopedic Surgeon",
            "Orthopedic surgeons address musculoskeletal issues, including bone fractures, joint problems, and sports injuries.",
            "📄 Schedule a consultation with an Orthopedic Surgeon here: <a href='http://localhost:3000/finddoctors/orthopedicsurgeon'>click this</a>"
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Ophthalmologist')) {
        responseText = [
            "👁️ Ophthalmologist",
            "Ophthalmologists specialize in eye health, treating conditions like cataracts, glaucoma, and vision issues.",
            "📄 Find an Ophthalmologist here: <a href='http://localhost:3000/finddoctors/ophthalmologist'>click this</a>"
        ];
        buttons = getButtonsForSection('englishRegister');

    } else if (msg.includes('Pulmonologist')) {
        responseText = [
            "🌬️ Pulmonologist",
            "Pulmonologists specialize in respiratory health, treating conditions like asthma, COPD, and lung infections.",
            "📄 Schedule a consultation with a Pulmonologist here: <a href='http://localhost:3000/finddoctors/pulmonologist'>click this</a>"
        ];
        buttons = getButtonsForSection('englishRegister');

    }

    return { responseText, buttons };
}

module.exports = { categoryResponse };
