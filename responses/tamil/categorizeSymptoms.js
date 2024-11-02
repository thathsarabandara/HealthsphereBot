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
        என்னிடம் மருத்துவ வகைகளின் பட்டியல் உள்ளது, ஒவ்வொன்றும் சுருக்கமான விளக்கத்துடன்:

        - பொது பயிற்சியாளர்: பொது சுகாதார கவலைகள், தடுப்பு பராமரிப்பு, சிறிய காயங்கள், பொதுவான நோய்கள்.
        - இருதயநோய் நிபுணர்: இதய ஆரோக்கியம், மார்பு வலி, இரத்த அழுத்தப் பிரச்சினைகள், படபடப்பு, இருதயக் கோளாறுகள்.
        - தோல் மருத்துவர்: சொறி, முகப்பரு, அரிக்கும் தோலழற்சி, மச்சம் போன்ற தோல், முடி, மற்றும் நகப் பிரச்சினைகள்.
        - நரம்பியல் நிபுணர்: தலைவலி, ஒற்றைத் தலைவலி, கால்-கை வலிப்பு, நரம்பியல் கோளாறுகள் போன்ற நிலைகள்.
        - புற்றுநோயியல் நிபுணர்: புற்றுநோய் தொடர்பான கவலைகள், கட்டிகள், சிகிச்சை விருப்பங்கள்.
        - குழந்தை மருத்துவர்: குழந்தைகள் மற்றும் இளம்பருவத்தினரின் ஆரோக்கியம், தடுப்பூசிகள், வளர்ச்சி மற்றும் வளர்ச்சி பிரச்சினைகள்.
        - மனநல மருத்துவர்: மனநலப் பிரச்சினைகள், மனச்சோர்வு, பதட்டம், நடத்தை கோளாறுகள்.
        - உட்சுரப்பியல் நிபுணர்: ஹார்மோன் பிரச்சினைகள், நீரிழிவு, தைராய்டு பிரச்சினைகள், வளர்சிதை மாற்றக் கோளாறுகள்.
        - காஸ்ட்ரோஎன்டாலஜிஸ்ட்: செரிமான அமைப்பு, வயிற்று வலி, அமில ரிஃப்ளக்ஸ், கல்லீரல் பிரச்சினைகள்.
        - எலும்பியல் அறுவை சிகிச்சை நிபுணர்: எலும்பு, மூட்டு மற்றும் தசை சம்பந்தமான பிரச்சினைகள், எலும்பு முறிவுகள், மூட்டுவலி.
        - கண் மருத்துவர்: கண் ஆரோக்கியம், பார்வை பிரச்சினைகள், கண்புரை, கிளௌகோமா.
        - நுரையீரல் நிபுணர்: சுவாச பிரச்சனைகள், ஆஸ்துமா, நாள்பட்ட இருமல், நுரையீரல் நிலைகள்.

        இந்த வகைகளின் அடிப்படையில், பின்வரும் அறிகுறிகளை மிகவும் பொருத்தமான வகையாக வகைப்படுத்தவும்:

        அறிகுறிகள்: ${symptoms}

        வகைப் பெயருடன் மட்டும் பதிலளிக்கவும்.
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
