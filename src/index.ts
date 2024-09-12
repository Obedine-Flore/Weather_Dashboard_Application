import { fetchWeather } from './weatherService';
import { renderWeather } from './weatherComponent';
import './styles.css';

const getWeatherButton = document.getElementById('getWeatherButton');
const weatherInfo = document.getElementById('weatherInfo');

if (getWeatherButton) {
    getWeatherButton.addEventListener('click', () => {
        const cityInput = (document.getElementById('cityInput') as HTMLInputElement).value;

        if (cityInput) {
            // Fetch weather data and display it
            fetchWeather(cityInput)
                .then(data => {
                    if (data) {
                        weatherInfo!.innerHTML = `
                            <h2>Weather in ${data.cityName}</h2>
                            <p>Temperature: ${data.temperature}°C</p>
                            <p>Humidity: ${data.humidity}%</p>
                            <p>Condition: ${data.weatherCondition}</p>
                        `;
                    } else {
                        weatherInfo!.innerHTML = `<p>City not found!</p>`;
                    }
                })
                .catch(error => {
                    weatherInfo!.innerHTML = `<p>Error fetching weather data!</p>`;
                    console.error(error);
                });
        } else {
            weatherInfo!.innerHTML = `<p>Please enter a city name!</p>`;
        }
    });
}
