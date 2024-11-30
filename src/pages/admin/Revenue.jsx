import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../../common/api';

const RevenueDashboard = () => {
  const [revenue, setRevenue] = useState({
    totalBreakfastRevenue: 0,
    totalLunchRevenue: 0,
    totalSnackRevenue: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch revenue data (daily or monthly)
  const fetchRevenue = async (timePeriod = 'monthly') => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/api/admin/revenue/${timePeriod}`);
      setRevenue(response.data);
    } catch (err) {
      setError('Failed to fetch revenue data');
    } finally {
      setLoading(false);
    }
  };

  // Fetch revenue data when component mounts
  useEffect(() => {
    fetchRevenue(); // Default to daily revenue
  }, []);

  return (
    <div className="container p-6">
      <h1 className="text-2xl font-bold mb-6">Revenue Dashboard</h1>

      {/* Time Period Selection */}
      <div className="mb-4">
        <button 
          onClick={() => fetchRevenue('daily')}
          className="bg-blue-500 text-white p-2 mr-4 rounded"
        >
          Daily
        </button>
        <button 
          onClick={() => fetchRevenue('monthly')}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Monthly
        </button>
      </div>

      {/* Display Loading or Error */}
      {/* {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>} */}

      {/* Display Revenue Data */}
      {/* {!loading && !error && ( */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded">
            <h2 className="font-semibold">Breakfast Revenue</h2>
            <p className="text-xl">${revenue.totalBreakfastRevenue.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded">
            <h2 className="font-semibold">Lunch Revenue</h2>
            <p className="text-xl">${revenue.totalLunchRevenue.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded">
            <h2 className="font-semibold">Snack Revenue</h2>
            <p className="text-xl">${revenue.totalSnackRevenue.toFixed(2)}</p>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default RevenueDashboard;
``
