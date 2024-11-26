import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecruiterSidebar from './RecruiterSidebar';

function RecruiterNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="p-4 bg-[#1E3A8A] text-white border-b border-gray-200">
      <div className="container flex justify-between items-center h-16 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center p-2">
          <h1 className="text-xl font-bold md:text-2xl">
            Career<span className="text-[#60A5FA]">Craft</span>
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link
              to="/recruiter"
              className={`flex items-center px-4 -mb-1 ${isHovered ? 'text-black' : 'text-white'}`}
            >
              Dashboard
            </Link>
          </li>
          <li
            className="flex"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link
              to="/recruiter/manage-applications"
              className="flex items-center px-4 -mb-1 text-white hover:text-[#60A5FA] transition duration-300"
            >
              Manage Applications
            </Link>
          </li>
          <li
            className="flex"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link
              to="/recruiter/post-jobs"
              className="flex items-center px-4 -mb-1 text-white hover:text-[#60A5FA] transition duration-300"
            >
              Post Jobs
            </Link>
          </li>
        </ul>

        {/* Login Button */}
        <div className="hidden lg:flex">
          <Link to="/login">
            <button className="px-6 py-2 text-sm font-medium bg-[#1E3A8A] text-white rounded-md hover:bg-[#60A5FA] transition duration-300">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Sidebar Toggle */}
        <button onClick={toggleSidebar} className="p-2 lg:hidden text-white">
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
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && <RecruiterSidebar onClose={toggleSidebar} />}
    </header>
  );
}

export default RecruiterNavbar;
