export const fetchAllLatest = async (id, apiKey) => {
    const URL = `https://api.thingspeak.com/channels/${id}/feeds.json?api_key=${apiKey}&results=1`;
    const response = await fetch(URL);
    return await response.json();
}