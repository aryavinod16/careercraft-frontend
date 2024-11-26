import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Dummy logged-in user data (replace with actual state or API data)
  const user = {
    isLoggedIn: false, // Set to false to test the "Login" button
    name: 'John Doe',
    profileImage: 'https://via.placeholder.com/150', // Replace with user's image URL
  };

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    console.log('Logged out');
    // Add logout logic here (clear token, update state, etc.)
    navigate('/login');
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

        {/* Navigation Links */}
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link to="/">Home</Link>
          </li>
          <li className="flex">
            <Link to="/jobs">Jobs</Link>
          </li>
          <li className="flex">
            <Link to="/browse">Browse</Link>
          </li>
        </ul>

        {/* User Profile or Login */}
        <div className="hidden lg:flex items-center relative">
          {user.isLoggedIn ? (
            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
              <img
                src={user.profileImage}
                alt="User Profile"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <span className="hidden sm:block font-medium">{user.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          ) : (
            <Link to="/login">
              <button className="px-6 py-2 text-sm font-medium bg-[#60A5FA] text-white rounded-md hover:bg-[#1E3A8A]">
                Login
              </button>
            </Link>
          )}

          {/* Dropdown Menu */}
          {isDropdownOpen && user.isLoggedIn && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              <ul className="py-2">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate('/profile')}
                >
                  Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate('/settings')}
                >
                  Settings
                </li>
                <li
                  className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Sidebar Toggle */}
        <button onClick={toggleSidebar} className="p-2 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
    </header>
  );
}

export default Navbar;
