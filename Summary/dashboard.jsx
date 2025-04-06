import React from "react";
import { PlusCircle } from "lucide-react";

const Dashboard = () => {
  const pastSummaries = [
    { title: "AI in Healthcare", date: "April 5, 2025" },
    { title: "Quantum Computing 101", date: "April 3, 2025" },
    { title: "Neural Networks Overview", date: "March 29, 2025" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      {/* Past Summaries Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Your Past Summaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pastSummaries.map((paper, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-xl shadow-md hover:bg-gray-700 transition"
            >
              <h3 className="text-xl font-medium">{paper.title}</h3>
              <p className="text-gray-400 text-sm">Summarized on {paper.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upload New Paper Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        <PlusCircle size={80} className="text-blue-500 hover:text-blue-600 cursor-pointer" />
        <p className="mt-4 text-lg text-gray-300">Click the icon to upload a new research paper</p>
      </div>
    </div>
  );
};

export default Dashboard;
