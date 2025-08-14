import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `
You are a music connoisseur that gives users song recommendations. You receive a user's preferred genre (or fusion of genres), their current mood (or moods) and/or an artist whose style they want to listen to. With this information, give the user a song recommendation, complete with album, track, and artist. DO NOT give the user a song from the same artist they inputted! Format your response in markdown to make it easier to render to a web page.
`;

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { genres, moods, artist } = req.body;

        if (!genres || !Array.isArray(genres) || genres.length === 0) {
            return res.status(400).json({ error: 'Genres are required' });
        }

        const anthropic = new Anthropic({
            apiKey: process.env.ANTHROPIC_API_KEY,
        });

        const genreString = genres.join(", ");
        const moodString = moods ? moods.join(", ") : "";
        const artistString = artist || "";

        let prompt = `I feel like listening to ${genreString}.`;
        if (moodString) {
            prompt += ` I'm currently feeling these emotions: ${moodString}.`;
        }
        if (artistString.length > 0) {
            prompt += ` I want to listen to someone that would remind me of ${artistString}.`;
        }
        prompt += " Please give me a song you'd recommend I listen to!";

        const msg = await anthropic.messages.create({
            model: "claude-3-7-sonnet-20250219",
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: [
                { 
                    role: "user", 
                    content: prompt
                },
            ],
        });

        res.status(200).json({ 
            recommendation: msg.content[0].text,
            success: true 
        });

    } catch (error) {
        console.error("Error getting song recommendation:", error);
        
        if (error.message?.includes('authentication')) {
            return res.status(401).json({ 
                error: 'API authentication failed. Check your API key.' 
            });
        }
        
        res.status(500).json({ 
            error: 'Failed to get song recommendation',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}