import React from 'react';
import { FaUserEdit } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";

const steps = [
  {
    id: 1,
    title: "Register Your Account",
    description:
      "Create an account to access thousands of opportunities that match your skills and interests.",
    icon: <FaUserEdit className="text-4xl text-blue-600" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Apply For Dream Job",
    description:
      "Search and apply for your desired job quickly. Save favorites and track your applications easily.",
    icon: <MdWorkOutline className="text-4xl text-purple-600" />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    title: "Upload Your Resume",
    description:
      "Upload your resume or CV to let employers find you based on your skills and experience.",
    icon: <HiOutlineDocumentText className="text-4xl text-green-600" />,
    color: "bg-green-100 text-green-600",
  },
];

const HowItWorks = () => {
    return (
        <div>
             <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
       
        <p className="text-blue-600 font-semibold uppercase">
          Working Process
        </p>
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          How It Works
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-8 text-left"
            >
              <div
                className={`w-16 h-16 ${step.color} flex items-center justify-center rounded-lg mb-6`}
              >
                {step.icon}
              </div>

              <div className="flex items-center mb-3">
                <span className="text-3xl font-bold text-gray-300 mr-2">
                  0{step.id}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default HowItWorks;