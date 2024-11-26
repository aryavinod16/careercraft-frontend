import React, { useState } from 'react';

function ManageApplications() {
  const [applications, setApplications] = useState([
    { id: 1, name: 'Ann', job: 'Software Engineer', status: 'Pending' },
    { id: 2, name: 'Jake', job: 'UI Designer', status: 'Pending' },
  ]);

  const handleAction = (id, action) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: action } : app
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Manage Applications</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Job</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td className="p-2 border">{app.name}</td>
              <td className="p-2 border">{app.job}</td>
              <td className="p-2 border">{app.status}</td>
              <td className="p-2 border">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700"
                  onClick={() => handleAction(app.id, 'Accepted')}
                >
                  Accept
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => handleAction(app.id, 'Rejected')}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageApplications;
