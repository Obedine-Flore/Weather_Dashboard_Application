import { getWeatherData } from './weatherService';
import { updateWeatherUI, showError } from './weatherComponent';
import '/styles.css';

const cityEl = document.getElementById("enter-city") as HTMLInputElement;
const searchEl = document.getElementById("search-button")!;
const clearEl = document.getElementById("clear-history")!;
const historyEl = document.getElementById("history")!;
let searchHistory = JSON.parse(localStorage.getItem("search") || "[]");

searchEl.addEventListener("click", async () => {
  const searchTerm = cityEl.value;
  try {
    const weatherData = await getWeatherData(searchTerm);
    updateWeatherUI(weatherData);
    searchHistory.push(searchTerm);
    localStorage.setItem("search", JSON.stringify(searchHistory));
    renderSearchHistory();
  } catch (error) {
    const errMsg = (error as Error).message;  // Explicitly cast to Error type
    console.error(errMsg);
  }
});

clearEl.addEventListener("click", () => {
  localStorage.clear();
  searchHistory = [];
  renderSearchHistory();
});

function renderSearchHistory() {
  historyEl.innerHTML = "";
  searchHistory.forEach((city: string) => {
    const historyItem = document.createElement("input");
    historyItem.setAttribute("type", "text");
    historyItem.setAttribute("readonly", "true");
    historyItem.classList.add("form-control", "d-block", "bg-white");
    historyItem.value = city;
    historyItem.addEventListener("click", () => getWeatherData(city).then(updateWeatherUI));
    historyEl.append(historyItem);
  });
}

renderSearchHistory();
if (searchHistory.length > 0) {
  getWeatherData(searchHistory[searchHistory.length - 1]).then(updateWeatherUI);
}
