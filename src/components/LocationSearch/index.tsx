import React, { useState } from 'react';

interface LocationSearchProps {
  onSearch: (location: string) => void;
  isLoading: boolean;
}

/**
 * Component for searching locations to get weather data
 */
const LocationSearch: React.FC<LocationSearchProps> = ({ onSearch, isLoading }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mb-6">
      <div className="flex">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name or zip code"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg cursor-pointer disabled:bg-blue-300"
          disabled={isLoading || !location.trim()}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            'Search'
          )}
        </button>
      </div>
    </form>
  );
};

export default LocationSearch;