import { WeatherData } from './weatherInterface';

export function updateWeatherUI(data: WeatherData) {
  const nameEl = document.getElementById('city-name')!;
  const currentPicEl = document.getElementById('current-pic')!;
  const currentTempEl = document.getElementById('temperature')!;
  const currentHumidityEl = document.getElementById('humidity')!;
  const currentWindEl = document.getElementById('wind-speed')!;
  const currentUVEl = document.getElementById('UV-index')!;
  const fivedayEl = document.getElementById('fiveday-header')!;
  const forecastEls = document.querySelectorAll('.forecast');

  // Update current weather
  nameEl.innerHTML = `${data.city} (${data.date})`;
  currentPicEl.setAttribute('src', data.iconUrl);
  currentPicEl.setAttribute('alt', data.condition);
  currentTempEl.innerHTML = `Temperature: ${data.temperature} &#176F`;
  currentHumidityEl.innerHTML = `Humidity: ${data.humidity}%`;
  currentWindEl.innerHTML = `Wind Speed: ${data.windSpeed} MPH`;

  // UV Index display with badge
  const UVIndex = document.createElement('span');
  UVIndex.classList.add('badge');
  if (data.uvIndex < 4) {
    UVIndex.classList.add('badge-success');
  } else if (data.uvIndex < 8) {
    UVIndex.classList.add('badge-warning');
  } else {
    UVIndex.classList.add('badge-danger');
  }
  UVIndex.innerHTML = `${data.uvIndex}`;
  currentUVEl.innerHTML = 'UV Index: ';
  currentUVEl.appendChild(UVIndex);

  // 5-day forecast
  fivedayEl.classList.remove('d-none');
  data.forecast.forEach((day, index) => {
    const forecastEl = forecastEls[index] as HTMLElement;
    forecastEl.innerHTML = `
      <p class="mt-3 mb-0 forecast-date">${day.date}</p>
      <img src="${day.iconUrl}" alt="Weather icon">
      <p>Temp: ${day.temperature} &#176F</p>
      <p>Humidity: ${day.humidity}%</p>
    `;
  });
}

export function showError(message: string) {
  const weatherContainer = document.getElementById('weather');
  weatherContainer!.innerHTML = `<p>${message}</p>`;
}
