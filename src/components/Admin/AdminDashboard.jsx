import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

function AdminDashboard() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header/Navbar */}
      <AdminNavbar /> {/* Reuse your existing Navbar */}

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 shadow rounded-md hover:shadow-lg transition duration-300 ease-in-out">
            <h3 className="text-lg font-semibold text-[#1E3A8A]">Total Users</h3>
            <p className="text-2xl font-bold text-black">120</p>
          </div>
          <div className="bg-white p-6 shadow rounded-md hover:shadow-lg transition duration-300 ease-in-out">
            <h3 className="text-lg font-semibold text-[#1E3A8A]">Total Jobs</h3>
            <p className="text-2xl font-bold text-black">45</p>
          </div>
          <div className="bg-white p-6 shadow rounded-md hover:shadow-lg transition duration-300 ease-in-out">
            <h3 className="text-lg font-semibold text-[#1E3A8A]">Active Applications</h3>
            <p className="text-2xl font-bold text-black">30</p>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="bg-white p-6 shadow rounded-md mb-6">
          <h2 className="text-2xl font-bold text-[#1E3A8A]">Welcome to the Admin Panel</h2>
          <p className="text-gray-600">Select a menu item from the sidebar to get started.</p>
        </div>

        {/* Render Nested Routes */}
        <Outlet />
      </main>
    </div>
  );
}

export default AdminDashboard;
