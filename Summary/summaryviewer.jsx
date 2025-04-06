import React, { useState } from "react";

const SummaryViewer = () => {
  const [qualification, setQualification] = useState("undergraduate");
  const paperTitle = "The Impact of AI on Modern Education";

  const handleQualificationChange = (e) => {
    setQualification(e.target.value);
    // You would typically re-fetch or re-process the summary based on this change
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Original Title</h2>
          <p className="text-gray-300">{paperTitle}</p>
        </div>

        <div>
          <label className="block mb-2 text-sm">Select Qualification</label>
          <select
            value={qualification}
            onChange={handleQualificationChange}
            className="w-full bg-gray-700 p-2 rounded-lg text-white"
          >
            <option value="mid_school">Middle School</option>
            <option value="high_school">High School</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="post_graduate">Post Graduate</option>
            <option value="phd">PhD</option>
            <option value="normal_reader">Normal Reader</option>
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Summarized Paper</h1>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <p className="text-gray-200 leading-relaxed">
            {/* Replace this with dynamically rendered summary based on qualification */}
            Artificial Intelligence (AI) is significantly transforming how education
            is delivered and received. From personalized learning systems to
            intelligent tutoring applications, AI is paving the way for a more
            tailored and accessible educational experience. This summary changes
            based on the reader’s academic level.
          </p>
        </div>
      </main>
    </div>
  );
};

export default SummaryViewer;
