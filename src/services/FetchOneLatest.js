export const fetchOneLatest = async (id, apiKey, field) => {
    const URL = `https://api.thingspeak.com/channels/${id}/fields/${field}.json?results=1&api_key=${apiKey}`;
    const response = await fetch(URL);
    return await response.json();
}
