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
const weatherService_1 = require("./weatherService");
const weatherComponent_1 = require("./weatherComponent");
require("./styles.css");
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
searchButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const city = cityInput.value;
    const weatherData = yield (0, weatherService_1.fetchWeather)(city);
    (0, weatherComponent_1.renderWeather)(weatherData);
}));
