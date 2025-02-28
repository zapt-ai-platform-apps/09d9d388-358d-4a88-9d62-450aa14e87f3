import { WeatherData, WeatherError } from '@/models/weatherTypes';
import * as Sentry from '@sentry/browser';

/**
 * Fetches weather data for a given location
 * @param query Location to get weather for (city name, zip code, coordinates, etc.)
 * @returns Promise with weather data
 */
export async function fetchWeather(query: string): Promise<WeatherData> {
  try {
    console.log('Fetching weather for:', query);
    const apiKey = import.meta.env.VITE_PUBLIC_WEATHER_API_KEY;
    
    if (!apiKey) {
      throw new Error('Weather API key is missing. Please add it to your .env file.');
    }
    
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(query)}&days=3&aqi=no&alerts=no`
    );
    
    if (!response.ok) {
      const errorData = await response.json() as WeatherError;
      throw new Error(errorData.error || 'Failed to fetch weather data');
    }
    
    const data = await response.json() as WeatherData;
    console.log('Weather data received:', data);
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    Sentry.captureException(error);
    throw error;
  }
}