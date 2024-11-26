import React from 'react';
import Navbar from './Navbar';
import JobCard from './JobCard';

const randomjobs = [1, 2, 3, 4];

const Browse = () => {
  return (
    <>
      <Navbar />
      <div className='bg-white min-h-screen'>
        <div className='max-w-7xl mx-auto my-10 px-4'>
          <h1 className='font-extrabold text-2xl sm:text-3xl text-center my-10 text-blue-800'>
            Search Results ({randomjobs.length})
          </h1>
          <div className='flex justify-between items-center mb-6'>
            <input
              type='text'
              placeholder='Search jobs...'
              className='border rounded-md p-2 shadow-sm focus:ring-2 focus:ring-blue-600 outline-none'
            />
            <select
              className='border rounded-md p-2 shadow-sm focus:ring-2 focus:ring-blue-600 outline-none'
            >
              <option>Sort by</option>
              <option>Date</option>
              <option>Relevance</option>
              <option>Salary</option>
            </select>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {randomjobs.map((item, index) => (
              <JobCard key={index} />
            ))}
          </div>
          <div className='flex justify-center mt-10'>
            <button className='px-4 py-2 bg-blue-600 text-white rounded-md mx-1 hover:bg-blue-700'>
              Previous
            </button>
            <button className='px-4 py-2 bg-blue-300 text-white rounded-md mx-1 hover:bg-blue-700'>
              1
            </button>
            <button className='px-4 py-2 bg-blue-600 text-white rounded-md mx-1 hover:bg-blue-700'>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
