const API_KEY = '3b4330ed2cdaa954d0449b2b3bea1958';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;



export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(){
  return {
    type: 'FETCH_WEATHER'
  };
}
