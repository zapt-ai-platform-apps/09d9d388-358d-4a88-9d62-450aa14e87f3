import React from 'react';
import { WeatherData } from '@/models/weatherTypes';
import WeatherIcon from './WeatherIcon';

interface WeatherDisplayProps {
  weatherData: WeatherData;
}

/**
 * Component to display current weather information
 */
const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  const { location, current } = weatherData;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{location.name}</h2>
          <p className="text-gray-600">{location.region}, {location.country}</p>
          <p className="text-sm text-gray-500">Last updated: {current.last_updated}</p>
        </div>
        <WeatherIcon condition={current.condition} size="large" />
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-4xl font-bold text-gray-800">{current.temp_c}°C</p>
            <p className="text-gray-600">Feels like: {current.feelslike_c}°C</p>
            <p className="text-gray-700 font-medium">{current.condition.text}</p>
          </div>
          
          <div className="text-right">
            <p className="text-gray-700"><span className="font-medium">Humidity:</span> {current.humidity}%</p>
            <p className="text-gray-700"><span className="font-medium">Wind:</span> {current.wind_kph} km/h {current.wind_dir}</p>
            <p className="text-gray-700"><span className="font-medium">UV Index:</span> {current.uv}</p>
          </div>
        </div>
        
        {weatherData.forecast && (
          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">3-Day Forecast</h3>
            <div className="flex justify-between">
              {weatherData.forecast.forecastday.map((day) => (
                <div key={day.date} className="flex flex-col items-center">
                  <p className="text-sm font-medium text-gray-700">
                    {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                  </p>
                  <WeatherIcon condition={day.day.condition} size="small" />
                  <p className="text-sm text-gray-800">
                    {Math.round(day.day.maxtemp_c)}° <span className="text-gray-500">{Math.round(day.day.mintemp_c)}°</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherDisplay;