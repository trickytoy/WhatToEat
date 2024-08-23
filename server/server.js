const cors = require('cors');
const express = require('express');
const axios = require('axios');
const OpenAIApi = require('openai');

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = process.env.PORT || 5000;

// Initialize OpenAI API client
const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY, // Use the environment variable for the API key
});

app.post('/generate-text', async (req, res) => {
    const { prompt } = req.body;
    console.log(prompt);

    try {
        // Constructing a prompt for OpenAI API
        const userPrompt = `MealType: ${prompt.MealType}, ProteinIntake: ${prompt.ProteinIntake}, How Many people: ${prompt.HowManyPeople}, Special Note: ${prompt.SpecialNote}`;
        
        // Call OpenAI API to generate text
        const response = await openai.completions.create({
            model: "text-davinci-003", // Use the appropriate model
            prompt: userPrompt,
            max_tokens: 500,
            n: 1,
            stop: null,
            temperature: 0.7, 
        });

        const aiText = response.data.choices[0].text.trim();
        console.log("AI Response:", aiText);

        res.json({
            Ingredients: [
                { Name: "Spaghetti", Quantity: "400g", Calories: "1480 kcal", Protein: "50g" },
                { Name: "Egg yolks", Quantity: "4", Calories: "220 kcal", Protein: "12g" },
                { Name: "Parmesan cheese", Quantity: "1 cup (grated)", Calories: "431 kcal", Protein: "38g" },
                { Name: "Guanciale (or pancetta)", Quantity: "150g", Calories: "500 kcal", Protein: "25g" },
                { Name: "Garlic", Quantity: "1 clove", Calories: "4 kcal", Protein: "0.2g" },
                { Name: "Black pepper", Quantity: "As needed", Calories: "Negligible", Protein: "Negligible" }
            ],
            Recipe: [
                "Boil the spaghetti in salted water according to the package instructions until al dente.",
                "While the pasta cooks, cut the guanciale into small pieces and fry it in a pan until crispy. Add the garlic clove for flavor and remove it before mixing with the pasta.",
                "In a bowl, mix the egg yolks with the grated Parmesan cheese and a generous amount of black pepper.",
                "Drain the pasta and save some of the cooking water. Add the hot spaghetti to the pan with guanciale. Remove the pan from heat.",
                "Quickly mix the egg mixture with the pasta, adding a little pasta water to create a creamy sauce.",
                "Serve immediately with extra grated Parmesan and black pepper on top."
            ]
        });

    } catch (error) {
        console.error("Error with OpenAI API:", error);
        res.status(500).json({ error: "Failed to generate text." });
    }

    console.log(req.body);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
