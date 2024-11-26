

import React from 'react';

import Sidebar from '../../components/Admin/Sidebar';
const DashboardPage = () => (

    <div className="flex">
    <Sidebar />  {/* Sidebar is included here */}
    <div className="flex-grow p-8 bg-gray-100 min-h-screen">
      <p>Dash</p> {/* Outlet renders the selected admin page content */}

      <button
          className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
          onClick={exportPDF}
        >
          Export Teachers to PDF
        </button>
    </div>
  </div>
);

export default DashboardPage;
