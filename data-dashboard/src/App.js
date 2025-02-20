// In main App component, I simply render the DataVisualizationDashboard component.
import React from 'react';
import DataVisualizationDashboard from './DataVisualizationDashboard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* Display the dashboard that shows the sales chart */}
      <DataVisualizationDashboard />
    </div>
  );
};

export default App;
