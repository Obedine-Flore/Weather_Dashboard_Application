import axios from 'axios';
import { WeatherData } from './weatherInterface';

const APIKey = process.env.API_KEY;
const weatherBaseURL = 'https://api.openweathermap.org/data/2.5/weather';
const uvIndexBaseURL = 'https://api.openweathermap.org/data/2.5/uvi/forecast';
const forecastBaseURL = 'https://api.openweathermap.org/data/2.5/forecast';

export async function getWeatherData(cityName: string): Promise<WeatherData> {
  try {
    const weatherResponse = await axios.get(weatherBaseURL, {
      params: { q: cityName, appid: APIKey }
    });

    const data = weatherResponse.data;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    // Fetch UV index
    const uvResponse = await axios.get(uvIndexBaseURL, {
      params: { lat, lon, appid: APIKey, cnt: 1 }
    });

    // Fetch 5-day forecast
    const forecastResponse = await axios.get(forecastBaseURL, {
      params: { id: data.id, appid: APIKey }
    });

    const forecast = forecastResponse.data.list
      .filter((_: any, index: number) => index % 8 === 4)
      .map((item: any) => ({
        date: new Date(item.dt * 1000).toLocaleDateString(),
        iconUrl: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        temperature: k2f(item.main.temp),
        humidity: item.main.humidity
      }));

    return {
      city: data.name,
      temperature: k2f(data.main.temp),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      condition: data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      date: new Date(data.dt * 1000).toLocaleDateString(),
      uvIndex: uvResponse.data[0].value,
      forecast
    };
  } catch (error:any) {
    if (error.response && error.response.status === 404) {
        throw new Error("City not found. Please enter a valid city name.");
    } else {
        throw new Error("An error occurred while fetching weather data.");
    }
}
}

function k2f(K: number): number {
  return Math.floor((K - 273.15) * 1.8 + 32);
}
