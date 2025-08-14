export async function getSongFromClaude(genres, moods, artist) {
    try {
        const response = await fetch('/api/song-recommendation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                genres, 
                moods: moods || [], 
                artist: artist || "" 
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || `HTTP error! status: ${response.status}`);
        }

        return data.recommendation;

    } catch (error) {
        console.error("Error getting song recommendation:", error);
        throw new Error("Failed to get song recommendation: " + error.message);
    }
}