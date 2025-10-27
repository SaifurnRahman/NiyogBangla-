import React from "react";
import person from "../assets/student.png"; 
import { animate } from "motion";
import { Link } from "react-router";

const AboutSection = () => {

   React.useEffect(() => {
    animate(
      ".about-hero-text",
      { opacity: [0, 1], x: [-40, 0] },
      { duration: 1, easing: "ease-out" }
    );
    animate(
      ".about-hero-image",
      { opacity: [0, 1], x: [40, 0] },
      { duration: 1, delay: 0.2, easing: "ease-out" }
    );
  }, []);


  return (
     <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
   
           <div className="about-hero-text">
             <p className="text-blue-600 font-semibold uppercase">About</p>
             <h2 className="text-4xl font-bold text-gray-800 leading-snug mb-4">
               We help you
               <br />
               connect with the organizer
             </h2>
             <p className="text-gray-600 mb-6">
               Get paid easily and securely. Use our resources to become independent
               and showcase your professional skills.
             </p>
             <button
               className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
             >
              <Link to='/about'> Read More</Link>
             </button>
           </div>
   
           {/* Image side */}
           <div className="about-hero-image relative flex justify-end">
             <div className="absolute bg-yellow-400 h-100 w-100 rounded-full z-5 top-15 right-30 opacity-90"></div>
             <img
               src={person}
               alt="Professional"
               className="w-72 md:w-150 object-contain z-11"
             />
   
             {/* Floating stat cards */}
             <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg px-4 py-2 text-left z-10">
               <h4 className="text-orange-500 font-bold text-xl">3M+</h4>
               <p className="text-sm text-gray-500">Daily active users</p>
             </div>
             <div className="absolute bottom-16 left-0 bg-white shadow-lg rounded-lg px-4 py-2 text-left z-12">
               <h4 className="text-purple-500 font-bold text-xl">1M+</h4>
               <p className="text-sm text-gray-500">Stories shared</p>
             </div>
             <div className="absolute top-1/3 right-10 bg-white shadow-lg rounded-lg px-4 py-2 text-left z-12">
               <h4 className="text-green-500 font-bold text-xl">7K+</h4>
               <p className="text-sm text-gray-500">Open positions</p>
             </div>
           </div>
         </section>
   
  );
};

export default AboutSection;