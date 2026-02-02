import React from 'react';
import StatusIcon from './StatusIcon';
import './ShipmentCard.css';

/**
 * ShipmentCard Component
 * Displays individual shipment information with expandable details
 * @param {Object} shipment - Shipment data object
 * @param {boolean} isExpanded - Whether the card is expanded
 * @param {Function} onToggle - Function to toggle card expansion
 */
const ShipmentCard = ({ shipment, isExpanded, onToggle }) => {
  /**
   * Get CSS class for status badge based on shipment status
   */
  const getStatusClass = (status) => {
    return `status-badge status-${status.toLowerCase().replace(/\s+/g, '-')}`;
  };

  /**
   * Format date string to readable format
   */
  const formatDate = (dateString) => {
    if (dateString === "N/A") return dateString;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="shipment-card" onClick={onToggle}>
      {/* Card Header with Icon and Status */}
      <div className="card-header">
        <div className="icon-container">
          <StatusIcon status={shipment.status} />
        </div>
        <div className="card-title-section">
          <div className="tracking-number">{shipment.trackingNumber}</div>
          <div className={getStatusClass(shipment.status)}>
            {shipment.status}
          </div>
        </div>
      </div>

      {/* Basic Card Details */}
      <div className="card-details">
        <div className="detail-row">
          <span className="detail-label">Estimated Delivery:</span>
          <span className="detail-value">{formatDate(shipment.estimatedDelivery)}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Last Location:</span>
          <span className="detail-value">{shipment.lastLocation}</span>
        </div>
      </div>

      {/* Expanded Details Section */}
      {isExpanded && (
        <div className="expanded-details">
          <div className="expanded-grid">
            <div className="detail-row">
              <div>
                <div className="detail-label">Sender:</div>
                <div className="detail-value">{shipment.sender}</div>
              </div>
            </div>
            <div className="detail-row">
              <div>
                <div className="detail-label">Receiver:</div>
                <div className="detail-value">{shipment.receiver}</div>
              </div>
            </div>
            <div className="detail-row">
              <div>
                <div className="detail-label">Weight:</div>
                <div className="detail-value">{shipment.weight}</div>
              </div>
            </div>
            <div className="detail-row">
              <div>
                <div className="detail-label">Package Type:</div>
                <div className="detail-value">{shipment.packageType}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Details Button */}
      <button 
        className="view-details-btn"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        aria-label={isExpanded ? 'Hide shipment details' : 'View shipment details'}
      >
        {isExpanded ? 'Hide Details' : 'View Details'}
      </button>
    </div>
  );
};

export default ShipmentCard;
