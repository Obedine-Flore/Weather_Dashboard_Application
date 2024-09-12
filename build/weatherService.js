"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWeather = void 0;
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const fetchWeather = (city) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = yield response.json();
        return {
            temperature: data.main.temp,
            humidity: data.main.humidity,
            weatherCondition: data.weather[0].description,
            cityName: data.name,
        };
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.fetchWeather = fetchWeather;
