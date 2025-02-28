import { useState, useEffect } from 'react';
import { fetchWeather } from '@/services/weatherService';
import { WeatherData } from '@/models/weatherTypes';

interface UseWeatherResult {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
  fetchWeatherForLocation: (location: string) => Promise<void>;
}

/**
 * Hook to manage weather data fetching and state
 * @param defaultLocation Optional default location to fetch on load
 */
export function useWeather(defaultLocation?: string): UseWeatherResult {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(!!defaultLocation);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherForLocation = async (location: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeather(location);
      setWeatherData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (defaultLocation) {
      fetchWeatherForLocation(defaultLocation);
    }
  }, [defaultLocation]);

  return {
    weatherData,
    loading,
    error,
    fetchWeatherForLocation
  };
}