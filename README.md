# Weather App

A simple web application that displays the current weather conditions for any location.

## Features

- Current weather conditions display
- 3-day weather forecast
- Automatic geolocation detection
- Search for weather by city name or zip code
- Responsive design for all devices

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- WeatherAPI.com

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn
   ```
3. Create a `.env` file in the root directory and add your WeatherAPI.com API key:
   ```
   VITE_PUBLIC_WEATHER_API_KEY=your_api_key_here
   ```

### Development

Run the development server:

```
npm run dev
```

or

```
yarn dev
```

### Building for Production

Build the app for production:

```
npm run build
```

or

```
yarn build
```

## API

This app uses the [WeatherAPI.com](https://www.weatherapi.com/) service. You need to register for a free API key to use this application.