const express = require('express');
const { OpenAI } = require('openai');

// Create a new router object
const router = express.Router();

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Load API key from .env
});

// Define the route for generating captions and images
router.post('/captions-and-images', async (req, res) => {
    const { topic } = req.body;

    if (!topic) {
        return res.status(400).json({ error: 'Topic is required.' });
    }

    try {
        // Generate a single caption
        const captionPrompt = `As an Instagram copywriter, your task is to craft a captivating Instagram caption based on ${topic}. It should be designed to engage the platform's diverse audience, sparking interest and encouraging interaction. It must blend creativity with strategic hashtag and emojis. The caption should reflect the brand's voice, convey the message succinctly, and include a call-to-action that prompts followers to engage further, whether by liking, commenting, or sharing. Remember to keep the language relatable and ensure the caption complements the visual content for a cohesive post.`;
        const captionResponse = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: captionPrompt }],
        });

        const caption = captionResponse.choices[0].message.content.trim();
        console.log('Generated Caption:', caption);

        // Generate a single image
        const imagePrompt = `Uma foto realista e visualmente atraente sobre ${caption}, com detalhes bem definidos, estilo fotorrealista, iluminação natural, definição ultra-alta. É proíbido ter texto ou elementos escritos na imagem.`;
        const imageResponse = await openai.images.generate({
            prompt: imagePrompt,
            n: 1, // Only one image
            size: '1024x1024',
        });

        const imageUrl = imageResponse.data[0].url;
        console.log('Generated Image:', imageUrl);

        // Return the single caption and image
        res.json({ captions: [caption], images: [imageUrl] });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate caption or image.' });
    }
});

// Export the router
module.exports = router;
