import React from 'react';
import ShipmentDashboard from './components/ShipmentDashboard';
import BackgroundDecorations from './components/BackgroundDecorations';
import './App.css';

function App() {
  return (
    <div className="App">
      <BackgroundDecorations />
      <ShipmentDashboard />
    </div>
  );
}

export default App;
