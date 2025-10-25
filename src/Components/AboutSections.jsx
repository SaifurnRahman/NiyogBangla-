import React from "react";
import studentImg from "../assets/student.png"; // ← replace with your image path

const AboutSection = () => {
  return (
    <section className="bg-blue-50 rounded-3xl my-20">
      <div className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* ========= LEFT CONTENT ========= */}
        <div className="text-left">
          <p className="text-blue-600 font-semibold uppercase mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-800 mb-4">
            We help you <br /> connect with the organizer
          </h2>
          <p className="text-gray-600 mb-6">
            Get paid easily and securely. Use our resources to become 
            independent and showcase your professional skills.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
            Read More
          </button>
        </div>

        
        <div className="relative flex justify-center">       
          <img
            src={studentImg}
            alt="Student"
            className="w-72 md:w-200 object-contain"
          />

         
          <div className="absolute top-10 left-0 bg-white shadow-lg rounded-lg px-4 py-3 text-left">
            <h4 className="text-orange-500 font-bold text-xl">3M+</h4>
            <p className="text-sm text-gray-600">Million daily active users</p>
          </div>

          <div className="absolute bottom-16 left-0 bg-white shadow-lg rounded-lg px-4 py-3 text-left">
            <h4 className="text-purple-500 font-bold text-xl">1M+</h4>
            <p className="text-sm text-gray-600">Million stories shared</p>
          </div>

          <div className="absolute top-1/3 right-0 bg-white shadow-lg rounded-lg px-4 py-3 text-left">
            <h4 className="text-green-500 font-bold text-xl">7K+</h4>
            <p className="text-sm text-gray-600">Open job positions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;