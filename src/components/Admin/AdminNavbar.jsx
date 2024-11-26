
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
function AdminNavbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div>
       <header className="p-4 dark:bg-[#1E3A8A] dark:text-white border-b border-gray-200">
      <div className="container flex justify-between items-center h-16 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center p-2">
          <h1 className="text-xl font-bold md:text-2xl">
            Career<span className="text-[#60A5FA] ">Craft</span>
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <a
                                rel="noopener noreferrer"
                                
                                className={`flex items-center px-4 -mb-1 ${isHovered ? 'text-black' : 'text-[#60A5FA] '}`}
                            >
                                <Link to="/admin"> Dashboard</Link>
                               
                            </a>
                        </li>
                        <li
                            className="flex"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <a
                                rel="noopener noreferrer"
                              
                                className="flex items-center px-4 -mb-1 hover:text-[#60A5FA]  transition duration-300"
                            >
                               <Link to="/admin/manage-users"> Manage Users</Link>
                            </a>
                        </li>
                        <li
                            className="flex"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="flex items-center px-4 -mb-1 hover:text-[#60A5FA]  transition duration-300"
                            >
                              <Link to="/admin/manage-jobs">   Manage Jobs</Link>
                            </a>
                        </li>
                        <li
                            className="flex"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="flex items-center px-4 -mb-1 hover:text-[#60A5FA]  transition duration-300"
                            >
                              <Link to="/admin/analytics">  Analytics</Link>
                            </a>
                        </li>
                    </ul>

        {/* Login Button */}
        <div className="hidden lg:flex">
          <Link to="/login">
            <button className="px-6 py-2 text-sm font-medium bg-[#60A5FA]  text-white rounded-md hover:bg-[#4d96ef] ">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Sidebar Toggle */}
        <button onClick={toggleSidebar} className="p-2 lg:hidden">
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
      {isSidebarOpen && <AdminSidebar onClose={toggleSidebar} />}
    </header>
    </div>
  )
}

export default AdminNavbar
