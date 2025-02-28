import React from 'react';
import { WeatherCondition } from '@/models/weatherTypes';

interface WeatherIconProps {
  condition: WeatherCondition;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Component to display weather condition icon
 */
const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16',
    large: 'w-24 h-24',
  };

  // WeatherAPI.com provides icons we can use directly
  return (
    <img 
      src={`https:${condition.icon}`} 
      alt={condition.text}
      className={`${sizeClasses[size]}`}
      title={condition.text}
    />
  );
};

export default WeatherIcon;