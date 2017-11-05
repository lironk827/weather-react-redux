import axios from 'axios';

const API_KEY = 'd8d3164eb976c62b42772e9112929b0b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    let url = `${ROOT_URL}&q=${city},us`;

    // axios is used to send request from browser (like jquery ajax) and return a promise
    const weatherPromise = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload:weatherPromise
    }
}