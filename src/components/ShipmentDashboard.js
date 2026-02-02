import React, { useState, useEffect } from 'react';
import ShipmentCard from './ShipmentCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import { fetchShipments } from '../services/api';
import './ShipmentDashboard.css';

/**
 * Main Dashboard Component
 * Manages state for shipments, loading, errors, filtering, and sorting
 */
const ShipmentDashboard = () => {
  // State management
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [expandedId, setExpandedId] = useState(null);

  // Fetch shipments on component mount
  useEffect(() => {
    fetchShipments()
      .then(data => {
        setShipments(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter shipments by status
  const filteredShipments = shipments.filter(shipment => 
    filterStatus === 'All' || shipment.status === filterStatus
  );

  // Sort shipments by estimated delivery date
  const sortedShipments = [...filteredShipments].sort((a, b) => {
    if (sortBy === 'delivery-asc') {
      return new Date(a.estimatedDelivery) - new Date(b.estimatedDelivery);
    } else if (sortBy === 'delivery-desc') {
      return new Date(b.estimatedDelivery) - new Date(a.estimatedDelivery);
    }
    return 0; // default order
  });

  // Handle card expansion toggle
  const handleToggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
    console.log(`Toggled details view for shipment ID: ${id}`);
  };

  // Show loading state
  if (loading) {
    return <LoadingSpinner />;
  }

  // Show error state
  if (error) {
    return (
      <div>
        <div className="header">
          <h1>Shipment Status Dashboard</h1>
        </div>
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="header">
        <h1>Shipment Status Dashboard</h1>
        
        {/* Controls Bar - Filter and Sort */}
        <div className="controls-bar">
          <span className="filter-label">Filter by Status:</span>
          <select 
            className="filter-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            aria-label="Filter shipments by status"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="In Transit">In Transit</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <select 
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort shipments"
          >
            <option value="default">Sort: Default</option>
            <option value="delivery-asc">Sort: Earliest Delivery</option>
            <option value="delivery-desc">Sort: Latest Delivery</option>
          </select>
        </div>
      </div>

      {/* Shipments Grid */}
      <div className="shipments-grid">
        {sortedShipments.map(shipment => (
          <ShipmentCard 
            key={shipment.id}
            shipment={shipment}
            isExpanded={expandedId === shipment.id}
            onToggle={() => handleToggleExpand(shipment.id)}
          />
        ))}
      </div>

      {/* No Results Message */}
      {sortedShipments.length === 0 && (
        <div className="no-results">
          No shipments found for the selected filter.
        </div>
      )}
    </div>
  );
};

export default ShipmentDashboard;
