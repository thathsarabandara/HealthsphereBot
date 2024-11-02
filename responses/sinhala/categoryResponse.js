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
        මා සතුව වෛද්‍ය කාණ්ඩ ලැයිස්තුවක් ඇත, ඒ සෑම එකක්ම කෙටි විස්තරයක් ඇත:

        - සාමාන්‍ය වෛද්‍යවරයා: සාමාන්‍ය සෞඛ්‍ය ගැටළු, වැළැක්වීමේ සත්කාර, සුළු තුවාල, පොදු රෝග.
        - හෘද රෝග විශේෂඥයා: හෘද සෞඛ්‍යය, පපුවේ වේදනාව, රුධිර පීඩන ගැටළු, ස්පන්දනය, හෘද වාහිනී ගැටළු.
        - චර්ම රෝග විශේෂඥයා: සමේ, හිසකෙස් සහ නියපොතු වැනි කුෂ්ඨ, කුරුලෑ, දද, මවුල වැනි ගැටළු.
        - ස්නායු විශේෂඥ: හිසරදය, ඉරුවාරදය, අපස්මාරය, ස්නායු ආබාධ වැනි තත්වයන්.
        - ඔන්කොලොජිස්ට්: පිළිකා ආශ්‍රිත ගැටළු, පිළිකා, ප්‍රතිකාර විකල්ප.
        - ළමා රෝග පිළිබඳ විශේෂඥ වෛද්‍ය: දරුවන්ගේ සහ නව යොවුන් වියේ දරුවන්ගේ සෞඛ්‍යය, එන්නත්, වර්ධනය සහ සංවර්ධන ගැටළු.
        - මනෝචිකිත්සකයා: මානසික සෞඛ්ය ගැටළු, මානසික අවපීඩනය, කාංසාව, හැසිරීම් ආබාධ.
        - අන්තරාසර්ග රෝග විශේෂඥයා: හෝමෝන ගැටළු, දියවැඩියාව, තයිරොයිඩ් ගැටළු, පරිවෘත්තීය ආබාධ.
        - ආමාශ ආන්ත්‍ර විද්‍යා: ආහාර ජීර්ණ පද්ධතිය, බඩේ වේදනාව, අම්ල පිත්ත, අක්මා ගැටළු.
        - විකලාංග ශල්‍ය වෛද්‍යවරයා: අස්ථි, සන්ධි සහ මාංශ පේශි ගැටළු, අස්ථි බිඳීම්, ආතරයිටිස්.
        - අක්ෂි වෛද්‍යවරයා: අක්ෂි සෞඛ්‍යය, පෙනීමේ ගැටළු, ඇසේ සුද, ග්ලුකෝමා.
        - Pulmonologist: ශ්වසන ගැටළු, ඇදුම, නිදන්ගත කැස්ස, පෙනහළු තත්වයන්.

        මෙම කාණ්ඩ මත පදනම්ව, පහත රෝග ලක්ෂණ වඩාත් සුදුසු කාණ්ඩයට වර්ග කරන්න:

        රෝග ලක්ෂණ: ${symptoms}

        ප්‍රවර්ග නාමයෙන් පමණක් ප්‍රතිචාර දක්වන්න.
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
