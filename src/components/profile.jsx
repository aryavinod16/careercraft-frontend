import React, { useState } from "react";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "Kevin Heart",
    email: "kevin@example.com",
    phone: "+123456789",
    location: "New York",
    resume: null,
    about: "Discuss only on work hour, unless you wanna discuss about music 🎶",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSaveChanges = () => {
    console.log("Saved Changes:", formData);
    alert("Changes Saved!");
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
      {/* Profile Picture */}
      <div className="flex items-center gap-6 mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-blue-500"
        />
        <div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Change Picture
          </button>
          <button className="px-4 py-2 ml-4 bg-red-500 text-white rounded-md hover:bg-red-600">
            Delete Picture
          </button>
        </div>
      </div>

      {/* Editable Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium">Profile Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-gray-600 font-medium">Upload Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileUpload}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {formData.resume && (
            <p className="mt-2 text-sm text-green-600">
              {formData.resume.name} uploaded successfully!
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-600 font-medium">About Me</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="mt-6">
        <button
          onClick={handleSaveChanges}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
