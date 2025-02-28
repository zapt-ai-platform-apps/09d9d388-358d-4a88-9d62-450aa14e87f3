import React, { useState, useEffect } from 'react';
import './index.css';
import { useWeather } from '@/hooks/useWeather';
import LocationSearch from '@/components/LocationSearch';
import WeatherDisplay from '@/components/WeatherDisplay';
import ZaptBadge from '@/components/ZaptBadge';

const App: React.FC = () => {
  const [userLocation, setUserLocation] = useState<string | undefined>(undefined);
  const { weatherData, loading, error, fetchWeatherForLocation } = useWeather(userLocation);

  // Try to get user's location on first load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation(`${latitude},${longitude}`);
        },
        (error) => {
          console.error('Error getting location:', error);
          // Default to a major city if geolocation fails
          setUserLocation('London');
        }
      );
    } else {
      // Geolocation not supported by browser
      setUserLocation('London');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 text-gray-900 p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Weather App</h1>
        <p className="text-lg text-blue-600">Check the current weather for any location</p>
      </header>

      <LocationSearch onSearch={fetchWeatherForLocation} isLoading={loading} />

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 w-full max-w-md" role="alert">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      )}

      {loading && !weatherData && (
        <div className="flex flex-col items-center justify-center p-8">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-blue-600">Loading weather data...</p>
        </div>
      )}

      {weatherData && <WeatherDisplay weatherData={weatherData} />}

      <ZaptBadge />
    </div>
  );
};

export default App;