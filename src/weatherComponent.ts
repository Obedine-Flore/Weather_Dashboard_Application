import { WeatherData } from './weatherInterface';

export const renderWeather = (weatherData: WeatherData | null): void => {
  const weatherContainer = document.getElementById('weather')!;
  if (weatherData) {
    weatherContainer.innerHTML = `
      <h1>Weather in ${weatherData.cityName}</h1>
      <p>Temperature: ${weatherData.temperature} °C</p>
      <p>Humidity: ${weatherData.humidity}%</p>
      <p>Condition: ${weatherData.weatherCondition}</p>
    `;
  } else {
    weatherContainer.innerHTML = '<p>City not found or error fetching weather data.</p>';
  }
};
