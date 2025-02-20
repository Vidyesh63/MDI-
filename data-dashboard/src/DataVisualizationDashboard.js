// This component showcases my skills in data visualization and filtering using React and Chart.js.
// It simulates an API call to fetch sales data and provides a filter to view data by month.

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './DataVisualizationDashboard.css';

// Register Chart.js components so the chart renders properly.
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DataVisualizationDashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState('All'); // State to store selected month

  // Simulate fetching data from an API; I use setTimeout to mimic a network delay.
  useEffect(() => {
    setTimeout(() => {
      const sampleSales = [
        { date: 'Jan', sales: 65 },
        { date: 'Feb', sales: 59 },
        { date: 'Mar', sales: 80 },
        { date: 'Apr', sales: 81 },
        { date: 'May', sales: 56 },
        { date: 'Jun', sales: 55 },
        { date: 'Jul', sales: 40 }
      ];
      setSalesData(sampleSales);
      setLoading(false); // Set loading to false after data is fetched
    }, 1000);
  }, []);

  // Filter data based on selected month
  const filteredData =
    selectedMonth === 'All' ? salesData : salesData.filter(record => record.date === selectedMonth);

  // Prepare the data format that Chart.js expects.
  const chartData = {
    labels: filteredData.map(record => record.date),
    datasets: [
      {
        label: 'Monthly Sales',
        data: filteredData.map(record => record.sales),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="dashboard">
      <h1>Monthly Sales Overview</h1>
      
      {/* Dropdown to filter sales data by month */}
      <label htmlFor="monthFilter">Filter by Month:</label>
      <select id="monthFilter" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
        <option value="All">All</option>
        <option value="Jan">January</option>
        <option value="Feb">February</option>
        <option value="Mar">March</option>
        <option value="Apr">April</option>
        <option value="May">May</option>
        <option value="Jun">June</option>
        <option value="Jul">July</option>
      </select>

      {loading ? (
        <div>Loading...</div> // Show loading message while data is being fetched
      ) : (
        <Line data={chartData} />
      )}
    </div>
  );
};

export default DataVisualizationDashboard;
