import React, { useState } from "react";
import Navbar from "./Navbar";

const JobDescription = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        resume: null,
    });

    const job = {
        title: "Backend Developer",
        company: "Techy",
        location: "Pune",
        description: "We are looking for a skilled backend developer to join our team.",
        requirements: ["Proficient in Node.js", "Experience with MongoDB", "API development"],
        salary: "15 LPA",
        jobType: "Full-Time",
        experience: "2+ years",
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "resume") {
            setFormData({ ...formData, resume: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = () => {
        console.log("Form Data:", formData);
        // Add logic to send form data to the backend
        setModalOpen(false);
    };

    return (
        <>
        <Navbar/>
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold text-blue-700">{job.title}</h1>
            <div className="mt-4">
                <p className="text-lg font-medium text-gray-600">
                    <strong>Company:</strong> {job.company}
                </p>
                <p className="text-lg font-medium text-gray-600">
                    <strong>Location:</strong> {job.location}
                </p>
                <p className="text-lg text-gray-700 mt-2">
                    <strong>Description:</strong> {job.description}
                </p>
            </div>
            <div className="mt-4">
                <p className="text-lg font-medium text-blue-700">
                    <strong>Requirements:</strong>
                </p>
                <ul className="list-disc pl-6">
                    {job.requirements.map((req, index) => (
                        <li key={index} className="text-gray-700">{req}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <p className="text-lg font-medium text-blue-700">
                    <strong>Salary:</strong> {job.salary}
                </p>
                <p className="text-lg font-medium text-blue-700">
                    <strong>Job Type:</strong> {job.jobType}
                </p>
                <p className="text-lg font-medium text-blue-700">
                    <strong>Experience Required:</strong> {job.experience}
                </p>
            </div>
            <div className="mt-6">
                {/* Apply Now Button */}
                <button
                    onClick={() => setModalOpen(true)}
                    className="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
                >
                    Apply Now
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Apply for {job.title}</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="resume">
                                    Resume
                                </label>
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    onChange={handleInputChange}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </form>
                        <div className="mt-6 flex justify-end gap-4">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default JobDescription;
