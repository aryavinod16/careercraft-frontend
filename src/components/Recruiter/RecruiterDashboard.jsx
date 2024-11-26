import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import RecruiterNavbar from './RecruiterNavbar';

function RecruiterDashboard() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Recruiter Navbar */}
      <RecruiterNavbar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 shadow rounded-md">
            <h3 className="text-lg font-semibold">Jobs Posted</h3>
            <p className="text-2xl font-bold">15</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md">
            <h3 className="text-lg font-semibold">Applications Received</h3>
            <p className="text-2xl font-bold">50</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md">
            <h3 className="text-lg font-semibold">Open Positions</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="bg-white p-4 shadow rounded-md">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default RecruiterDashboard;
