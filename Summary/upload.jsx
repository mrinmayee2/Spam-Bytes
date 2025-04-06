import React, { useState } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [qualification, setQualification] = useState("undergraduate");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleQualificationChange = (e) => {
    setQualification(e.target.value);
  };

  const handleUpload = () => {
    // Placeholder function – integrate with Flask API
    console.log("Uploading:", selectedFile, "for", qualification);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Upload Research Paper</h1>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-xl space-y-6">
        <div>
          <label className="block text-sm mb-2">Select PDF File</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full bg-gray-700 p-3 rounded-lg text-white"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Choose Qualification Level</label>
          <select
            value={qualification}
            onChange={handleQualificationChange}
            className="w-full bg-gray-700 p-3 rounded-lg text-white"
          >
            <option value="mid_school">Middle School</option>
            <option value="high_school">High School</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="post_graduate">Post Graduate</option>
            <option value="phd">PhD</option>
            <option value="normal_reader">Normal Reader</option>
          </select>
        </div>

        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold"
        >
          Upload & Summarize
        </button>
      </div>
    </div>
  );
};

export default Upload;
