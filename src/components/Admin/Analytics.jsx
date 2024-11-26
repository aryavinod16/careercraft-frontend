import React from "react";

const Analytics = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Users */}
        <div className="bg-white shadow-md rounded-md p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-600">Total Users</h3>
          <p className="text-3xl font-bold text-blue-500">120</p>
        </div>

        {/* Active Jobs */}
        <div className="bg-white shadow-md rounded-md p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-600">Active Jobs</h3>
          <p className="text-3xl font-bold text-green-500">45</p>
        </div>

        {/* Applications Received */}
        <div className="bg-white shadow-md rounded-md p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-600">Applications</h3>
          <p className="text-3xl font-bold text-purple-500">300</p>
        </div>
      </div>

     
    </div>
  );
};

export default Analytics;

