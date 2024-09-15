export interface WeatherData {
    city: string;
    temperature: number;
    humidity: number;
    windSpeed: number;
    condition: string;
    iconUrl: string;
    date: string;
    uvIndex: number;
    forecast: Forecast[];
  }
  
  export interface Forecast {
    date: string;
    iconUrl: string;
    temperature: number;
    humidity: number;
  }
  