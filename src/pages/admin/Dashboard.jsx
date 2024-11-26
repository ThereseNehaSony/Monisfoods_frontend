

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Admin/Sidebar';

const AdminDashboard = () => (
  <div className="flex">
    <Sidebar />  
    <div className="flex-grow p-8 bg-gray-100 min-h-screen">
      <Outlet /> 
    </div>
  </div>
);

export default AdminDashboard;
