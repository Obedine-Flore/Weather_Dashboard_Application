import { WeatherData } from './weatherInterface';

const API_KEY = '60dccc7704e75e782cee31e2bc97ccff';// Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city: string): Promise<WeatherData | null> => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    return {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      weatherCondition: data.weather[0].description,
      cityName: data.name,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
