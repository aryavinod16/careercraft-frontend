import React from "react";

const ManageUsers = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

      <div className="bg-white shadow-md rounded-md overflow-hidden">
        {/* Table */}
        <table className="table-auto w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold">#</th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold">Name</th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold">Email</th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold">Role</th>
              <th className="px-6 py-3 text-center text-gray-600 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-800">1</td>
              <td className="px-6 py-4 text-gray-800">Anu</td>
              <td className="px-6 py-4 text-gray-800">anu@example.com</td>
              <td className="px-6 py-4 text-gray-800">Employee</td>
              <td className="px-6 py-4 text-center">
                <button className="px-4 py-2 mr-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>

            {/* Sample Row 2 */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-800">2</td>
              <td className="px-6 py-4 text-gray-800">Ginu</td>
              <td className="px-6 py-4 text-gray-800">ginu@example.com</td>
              <td className="px-6 py-4 text-gray-800">User</td>
              <td className="px-6 py-4 text-center">
                <button className="px-4 py-2 mr-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>

            {/* Add more rows as needed */}
          </tbody>
        </table>

        {/* No Users Placeholder */}
        <div className="text-center py-6 text-gray-500" hidden>
          No users found.
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;

