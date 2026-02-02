import React from 'react';

/**
 * StatusIcon Component
 * Renders appropriate SVG icon based on shipment status
 * @param {string} status - Current shipment status
 */
const StatusIcon = ({ status }) => {
  switch (status) {
    case 'In Transit':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 16H2V4h11l3 4v8z" stroke="#ff9f43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18.5" cy="16" r="2" fill="#ff9f43"/>
          <circle cx="5.5" cy="16" r="2" fill="#ff9f43"/>
          <path d="M13 4h4.5L22 8.5V16h-4" stroke="#ff9f43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    
    case 'Delivered':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#26de81"/>
          <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    
    case 'Out for Delivery':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6h15v10H1V6z" fill="#4bcffa" stroke="#4bcffa" strokeWidth="1.5"/>
          <circle cx="5" cy="18" r="2" fill="#4bcffa"/>
          <circle cx="15" cy="18" r="2" fill="#4bcffa"/>
          <path d="M16 6h3l3 4v6h-6V6z" fill="#4bcffa" stroke="#4bcffa" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M8 2v4M12 2v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    
    case 'Pending':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#fc5c65"/>
          <path d="M12 6v6l4 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    
    case 'Cancelled':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#95a5a6"/>
          <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      );
    
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 16H2V4h11l3 4v8z" stroke="#ff9f43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18.5" cy="16" r="2" fill="#ff9f43"/>
          <circle cx="5.5" cy="16" r="2" fill="#ff9f43"/>
        </svg>
      );
  }
};

export default StatusIcon;
