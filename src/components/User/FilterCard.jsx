import React, { useState } from "react";
import { X } from "lucide-react"; // Close icon for the filter panel

const FilterJobs = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    location: "",
    industry: "",
    salary: "",
  });

  const [isOpen, setIsOpen] = useState(false); // State for toggling filters on mobile

  const handleChange = (category, value) => {
    const updatedFilters = { ...filters, [category]: value };
    setFilters(updatedFilters);
    if (onFilterChange) onFilterChange(updatedFilters);
  };

  const clearFilters = () => {
    const resetFilters = { location: "", industry: "", salary: "" };
    setFilters(resetFilters);
    if (onFilterChange) onFilterChange(resetFilters);
  };

  return (
    <>
      {/* Toggle Button for Filters (Visible on Small Screens Only) */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden px-4 py-2 bg-[#1E3A8A] text-white rounded-md hover:bg-[#60A5FA] mb-4"
      >
        Show Filters
      </button>

      {/* Filter Sidebar (Always Visible on Large Screens) */}
      <div
        className={`fixed lg:static top-0 left-0 h-full w-3/4 sm:w-1/2 lg:w-full lg:h-auto bg-white shadow-lg p-5 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Close Button (Only for Small Screens) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 lg:hidden"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-xl font-bold mb-4">Filter Jobs</h2>

        {/* Location Filter */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Location</h3>
          {["Remote", "On-Site", "Hybrid", "Kerala", "Delhi", "Bangalore"].map(
            (location) => (
              <label key={location} className="block text-sm mb-1">
                <input
                  type="radio"
                  name="location"
                  value={location}
                  checked={filters.location === location}
                  onChange={() => handleChange("location", location)}
                  className="mr-2"
                />
                {location}
              </label>
            )
          )}
        </div>

        {/* Industry Filter */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Industry</h3>
          {[
            "IT",
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Developer",
            "Marketing",
            "Healthcare",
          ].map((industry) => (
            <label key={industry} className="block text-sm mb-1">
              <input
                type="radio"
                name="industry"
                value={industry}
                checked={filters.industry === industry}
                onChange={() => handleChange("industry", industry)}
                className="mr-2"
              />
              {industry}
            </label>
          ))}
        </div>

        {/* Job Salary Filter */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Job Salary</h3>
          {[
            "0-40k",
            "40-60k",
            "60-80k",
            "80-100k",
            "1 Lakh - 5 Lakh",
            "Above 5 Lakh",
          ].map((salary) => (
            <label key={salary} className="block text-sm mb-1">
              <input
                type="radio"
                name="salary"
                value={salary}
                checked={filters.salary === salary}
                onChange={() => handleChange("salary", salary)}
                className="mr-2"
              />
              {salary}
            </label>
          ))}
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={clearFilters}
          className="mt-4 px-4 py-2 bg-[#1E3A8A] text-white rounded-md hover:bg-[#60A5FA]"
        >
          Clear Filters
        </button>
      </div>

      {/* Overlay for Mobile (Optional, for better UX) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default FilterJobs;
