import React, { useState } from "react";

function PostJobs() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description: "Looking for an experienced React developer.",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "New York, USA",
      type: "Part-time",
      description: "Node.js developer with experience in APIs.",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    location: "",
    type: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handlePostJob = () => {
    if (newJob.title && newJob.location && newJob.type && newJob.description) {
      setJobs([...jobs, { id: jobs.length + 1, ...newJob }]);
      setShowModal(false);
      setNewJob({ title: "", location: "", type: "", description: "" });
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Your Posted Jobs</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-[#1E3A8A] text-white rounded hover:bg-blue-700"
        >
          Post Job
        </button>
      </div>

      {/* Posted Jobs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white shadow rounded-md p-4 border">
            <h2 className="text-lg font-bold text-[#1E3A8A]">{job.title}</h2>
            <p className="text-sm text-gray-600">{job.location}</p>
            <p className="text-sm text-gray-600">{job.type}</p>
            <p className="mt-2 text-gray-700">{job.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[#1E3A8A]">Post a New Job</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                value={newJob.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={newJob.location}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <select
                name="type"
                value={newJob.type}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
              </select>
              <textarea
                name="description"
                placeholder="Job Description"
                value={newJob.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 mr-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handlePostJob}
                className="px-4 py-2 bg-[#1E3A8A] text-white rounded hover:bg-blue-700"
              >
                Post Job
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostJobs;
