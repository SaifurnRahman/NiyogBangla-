import React from "react";
import heroImage from '../assets/Hero.jpeg'

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* ===== Left Content ===== */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Find Your <span className="text-blue-600">Dream Job</span> in Bangladesh
          </h1>
          <p className="text-gray-600 text-lg">
            NiyogBangla connects you with top employers across Bangladesh. 
            Discover the right opportunities, apply easily, and move forward in your career — all in one place.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
              Explore Jobs
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition duration-300">
              Post a Job
            </button>
          </div>
        </div>

        {/* ===== Right Image ===== */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Career growth illustration"
            className="w-full max-w-md rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;