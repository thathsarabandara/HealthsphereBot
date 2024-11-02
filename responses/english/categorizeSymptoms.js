// Import the OpenAI library
const { OpenAI } = require('openai');
require ('dotenv').config();

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Make sure your API key is set in .env
});

// Function to categorize symptoms
async function categorizeSymptoms(symptoms) {
    const prompt = `
        I have a list of medical categories, each with a brief description:
        
        - General Practitioner: General health concerns, preventive care, minor injuries, common illnesses.
        - Cardiologist: Heart health, chest pain, blood pressure issues, palpitations, cardiovascular concerns.
        - Dermatologist: Skin, hair, and nail issues such as rashes, acne, eczema, moles.
        - Neurologist: Conditions like headaches, migraines, epilepsy, neurological disorders.
        - Oncologist: Cancer-related concerns, tumors, treatment options.
        - Pediatrician: Health of children and adolescents, vaccinations, growth and development issues.
        - Psychiatrist: Mental health issues, depression, anxiety, behavioral disorders.
        - Endocrinologist: Hormonal issues, diabetes, thyroid problems, metabolic disorders.
        - Gastroenterologist: Digestive system, stomach pain, acid reflux, liver issues.
        - Orthopedic Surgeon: Bone, joint, and muscular issues, fractures, arthritis.
        - Ophthalmologist: Eye health, vision issues, cataracts, glaucoma.
        - Pulmonologist: Respiratory issues, asthma, chronic cough, lung conditions.
        
        Based on these categories, classify the following symptoms into the most appropriate category:
        
        Symptoms: ${symptoms}
        
        Respond with only the category name.
    `;

    try {
        // Make the API call to OpenAI using the client method
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            temperature: 0,
        });

        // Extract and return the category from the response
        const category = response.choices[0].message.content.trim();
        return category;

    } catch (error) {
        console.error("Error categorizing symptoms:", error);
        return "An error occurred while processing your request.";
    }
}

// Export the function for use in other files
module.exports = {
    categorizeSymptoms,
};
