import React from 'react';
import './ErrorMessage.css';

/**
 * ErrorMessage Component
 * Displays error message when data fetching fails
 * @param {string} message - Error message to display
 */
const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <div className="error-message">{message}</div>
    </div>
  );
};

export default ErrorMessage;
