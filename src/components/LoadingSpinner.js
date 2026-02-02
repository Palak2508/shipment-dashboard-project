import React from 'react';
import './LoadingSpinner.css';

/**
 * LoadingSpinner Component
 * Displays animated loading spinner while data is being fetched
 */
const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <div className="loading-text">Loading shipments...</div>
    </div>
  );
};

export default LoadingSpinner;
