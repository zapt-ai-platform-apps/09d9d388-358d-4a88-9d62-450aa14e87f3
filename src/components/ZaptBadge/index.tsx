import React from 'react';

/**
 * A badge showing that the app was made with ZAPT
 */
const ZaptBadge: React.FC = () => {
  return (
    <a 
      href="https://www.zapt.ai" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-2 left-2 text-xs text-gray-600 hover:text-gray-900 transition-colors"
    >
      Made on ZAPT
    </a>
  );
};

export default ZaptBadge;