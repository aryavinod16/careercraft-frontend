import React from 'react';
import LatestJobCards from './LatestJobCards';

const randomjobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 px-4">
      {/* Section Header */}
      <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left text-[#1E3A8A]">
        <span className="text-[#60A5FA]">Latest & Top</span> Job Openings
      </h1>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
        {randomjobs.slice(0, 6).map((item, index) => (
          <div key={index} className="bg-white border border-[#60A5FA] rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <LatestJobCards />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
