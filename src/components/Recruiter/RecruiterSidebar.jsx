import React from 'react'
import { Link } from 'react-router-dom'


function RecruiterSidebar({onClose}) {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex">
        {/* Overlay */}
        <div
          onClick={onClose}
          className="flex-1 bg-black bg-opacity-50 cursor-pointer"
          aria-label="Close Sidebar Overlay"
        ></div>

        {/* Sidebar */}
        <div
          className="w-60 bg-white p-4 shadow-lg flex flex-col"
          role="navigation"
          aria-label="Sidebar Menu"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Admin Panel</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-black"
              aria-label="Close Sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <ul className="space-y-2">
            <li>
              <Link
                to="/recruiter/dashboard"
                onClick={onClose}
                className="block p-2 rounded-md hover:bg-gray-200 text-gray-700"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/recruiter/manage-applications"
                onClick={onClose}
                className="block p-2 rounded-md hover:bg-gray-200 text-gray-700"
              >
                Manage Applications
              </Link>
            </li>
            <li>
              <Link
                to="/recruiter/post-jobs"
                onClick={onClose}
                className="block p-2 rounded-md hover:bg-gray-200 text-gray-700"
              >
                Post Jobs
              </Link>
            </li>
           
          </ul>

          {/* Footer (optional) */}
          <div className="mt-auto border-t pt-4">
            <p className="text-sm text-gray-500">© 2024 Your App</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecruiterSidebar
