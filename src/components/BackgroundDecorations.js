import React from 'react';

/**
 * BackgroundDecorations Component
 * Renders decorative vehicle and package shapes in the background
 */
const BackgroundDecorations = () => {
  return (
    <>
      {/* Delivery Truck 1 - Top Right */}
      <svg className="bg-decoration truck-bg-1" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 40V16h28l6 8v16H4z" fill="white" opacity="0.9"/>
        <rect x="38" y="16" width="18" height="8" fill="white" opacity="0.9"/>
        <path d="M38 24h18l8 8v8H38V24z" fill="white" opacity="0.9"/>
        <circle cx="14" cy="44" r="4" fill="white" opacity="0.9"/>
        <circle cx="50" cy="44" r="4" fill="white" opacity="0.9"/>
        <rect x="8" y="20" width="6" height="4" fill="rgba(74,144,226,0.3)"/>
        <rect x="16" y="20" width="6" height="4" fill="rgba(74,144,226,0.3)"/>
        <rect x="24" y="20" width="6" height="4" fill="rgba(74,144,226,0.3)"/>
      </svg>

      {/* Large Delivery Truck 2 - Bottom Left */}
      <svg className="bg-decoration truck-bg-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="18" width="36" height="20" rx="2" fill="white" opacity="0.9"/>
        <path d="M38 18h8l10 10v10H38V18z" fill="white" opacity="0.9"/>
        <circle cx="12" cy="42" r="5" fill="white" opacity="0.9"/>
        <circle cx="44" cy="42" r="5" fill="white" opacity="0.9"/>
        <rect x="6" y="22" width="8" height="6" fill="rgba(74,144,226,0.3)"/>
        <rect x="16" y="22" width="8" height="6" fill="rgba(74,144,226,0.3)"/>
        <rect x="26" y="22" width="8" height="6" fill="rgba(74,144,226,0.3)"/>
        <rect x="42" y="24" width="8" height="8" fill="rgba(74,144,226,0.3)"/>
      </svg>

      {/* Truck 3 - Middle Right */}
      <svg className="bg-decoration truck-bg-3" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="20" width="32" height="18" rx="1" fill="white" opacity="0.9"/>
        <path d="M36 20h6l8 8v10h-14V20z" fill="white" opacity="0.9"/>
        <circle cx="12" cy="42" r="4" fill="white" opacity="0.9"/>
        <circle cx="42" cy="42" r="4" fill="white" opacity="0.9"/>
        <rect x="8" y="24" width="6" height="5" fill="rgba(74,144,226,0.3)"/>
        <rect x="16" y="24" width="6" height="5" fill="rgba(74,144,226,0.3)"/>
        <rect x="24" y="24" width="6" height="5" fill="rgba(74,144,226,0.3)"/>
      </svg>

      {/* Delivery Van 1 - Middle Left */}
      <svg className="bg-decoration van-bg-1" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 40V20h36v20H8z" fill="white" opacity="0.9"/>
        <path d="M8 20L16 12h20l8 8H8z" fill="white" opacity="0.9"/>
        <circle cx="18" cy="44" r="4" fill="white" opacity="0.9"/>
        <circle cx="36" cy="44" r="4" fill="white" opacity="0.9"/>
        <rect x="12" y="24" width="8" height="6" fill="rgba(74,144,226,0.3)"/>
        <rect x="22" y="24" width="8" height="6" fill="rgba(74,144,226,0.3)"/>
        <rect x="32" y="24" width="8" height="6" fill="rgba(74,144,226,0.3)"/>
      </svg>

      {/* Delivery Van 2 - Top Center-Left */}
      <svg className="bg-decoration van-bg-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="22" width="40" height="18" rx="2" fill="white" opacity="0.9"/>
        <path d="M6 22L12 16h22l6 6H6z" fill="white" opacity="0.9"/>
        <circle cx="16" cy="44" r="4" fill="white" opacity="0.9"/>
        <circle cx="36" cy="44" r="4" fill="white" opacity="0.9"/>
        <rect x="10" y="26" width="7" height="5" fill="rgba(74,144,226,0.3)"/>
        <rect x="19" y="26" width="7" height="5" fill="rgba(74,144,226,0.3)"/>
        <rect x="28" y="26" width="7" height="5" fill="rgba(74,144,226,0.3)"/>
      </svg>

      {/* Package Box 1 */}
      <svg className="bg-decoration package-bg-1" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="40" height="40" rx="3" fill="white" opacity="0.9" stroke="white" strokeWidth="2"/>
        <path d="M12 28h40M32 12v40" stroke="rgba(74,144,226,0.4)" strokeWidth="3"/>
        <circle cx="32" cy="32" r="6" fill="rgba(74,144,226,0.3)"/>
      </svg>

      {/* Package Box 2 */}
      <svg className="bg-decoration package-bg-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="16" width="32" height="32" rx="2" fill="white" opacity="0.9" stroke="white" strokeWidth="2"/>
        <path d="M16 30h32M32 16v32" stroke="rgba(74,144,226,0.4)" strokeWidth="2.5"/>
        <path d="M20 20l24 24M44 20L20 44" stroke="rgba(74,144,226,0.2)" strokeWidth="2"/>
      </svg>

      {/* Motion Arrow */}
      <svg className="bg-decoration arrow-bg-1" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 32h40M40 20l12 12-12 12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
        <path d="M8 32h40M40 20l12 12-12 12" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
      </svg>
    </>
  );
};

export default BackgroundDecorations;
