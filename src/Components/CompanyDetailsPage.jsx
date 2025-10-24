import React, { useState } from "react";

const CompanyDetailsPage = ({ details }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  if (!details || !details.name) {
    return (
      <div className="text-center text-gray-600 py-20 text-lg">
        Loading company details…
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col items-center mb-12">
        <img
          src={details.logo}
          alt={details.name}
          className="h-24 w-24 object-contain mb-4"
        />
        <h1 className="text-3xl font-bold mb-1 text-gray-800">{details.name}</h1>
        <p className="text-gray-500">{details.industry}</p>
        <p className="text-gray-600">{details.location}</p>
        <a
          href={details.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mt-2"
        >
          Visit Website
        </a>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-gray-800">Available Jobs</h2>

      {details?.jobs?.length > 0 ? (
        <div className="space-y-6">
          {details.jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-100 shadow-sm rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-md transition"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {job.title}
                </h3>
                <p className="text-gray-500">
                  {job.jobType} • {job.location}
                </p>
                <p className="text-blue-600 font-medium">{job.salary}</p>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="mt-4 md:mt-0 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No current openings.</p>
      )}

    
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-secondary bg-opacity-60 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg relative p-6 overflow-y-auto max-h-[90vh]">
           

            <img
              src={selectedJob.bannerImage}
              alt={selectedJob.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            <h3 className="text-2xl font-bold mb-2">{selectedJob.title}</h3>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Type:</span> {selectedJob.jobType}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Location:</span>{" "}
              {selectedJob.location}
            </p>
            <p className="text-gray-600 mb-3">
              <span className="font-semibold">Salary:</span>{" "}
              {selectedJob.salary}
            </p>
            <p className="text-gray-700 mb-4">{selectedJob.description}</p>

            <h4 className="font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
              {selectedJob.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>

            {/* 🔘 Modal Buttons */}
            <div className="flex justify-between">
              <a
                href={details.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition"
              >
                Apply
              </a>
              <button
                onClick={() => setSelectedJob(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-md transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CompanyDetailsPage;