import Anthropic from "@anthropic-ai/sdk"
const SYSTEM_PROMPT = `
You are a music connoisseur that gives users song recommendations. You receive a user's preferred genre (or fusion of genres), their current mood (or moods) and/or an artist whose style they want to listen to. With this information, give the user a song recommendation, complete with album, track, and artist. DO NOT give the user a song from the same artist they inputted! Format your response in markdown to make it easier to render to a web page.
`

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
})

export async function getSongFromClaude(genres, moods, artist) {
    const genreString = genres.join(", ");
    const moodString = moods.join(", ");

    const msg = await anthropic.messages.create({
        model: "claude-3-7-sonnet-20250219",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I feel like listening to ${genreString}. I'm currently feeling these emotions ${moodString}. ${artist.length > 0 ? `I want to listen to someone that would remind me of ${artist}` : ""}. Please give me a song you'd recommend I listen to!` },
        ],
    });
    return msg.content[0].text
}
