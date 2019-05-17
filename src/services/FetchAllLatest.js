export const fetchAllLatest = (id, apiKey) => {
    const URL = `https://api.thingspeak.com/channels/${id}/feeds.json?api_key=${apiKey}&results=1`;
    return fetch(URL)
        .then((response) => response.json());
}