import React, { useEffect, useRef } from "react";
import { animate, scroll } from "motion";
import person from '../assets/student.png'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet-async";

const About = () => {
  const missionRef = useRef(null);

  useEffect(() => {
  document.title = "About| NiyogBangla";
}, []);

 const handleScroll = () => {
  if (missionRef.current) {
    window.scrollTo({
      top: missionRef.current.offsetTop,
      behavior: "smooth",
    });
  }
};

  // Simple entrance animation for hero image and text
  React.useEffect(() => {
    animate(
      ".about-hero-text",
      { opacity: [0, 1], x: [-40, 0] },
      { duration: 0.8, easing: "ease-out" }
    );
    animate(
      ".about-hero-image",
      { opacity: [0, 1], x: [40, 0] },
      { duration: 0.8, delay: 0.2, easing: "ease-out" }
    );
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen">
        <Helmet>
        <title>About | NiyogBangla</title>
        <meta
        name="description"
        content="Learn how NiyogBangla connects job seekers with top employers in Bangladesh."
      />
      </Helmet>
        <Navbar></Navbar>
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
            onClick={handleScroll}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Read More
          </button>
        </div>

        {/* Image side */}
        <div className="about-hero-image relative flex justify-end">
          <div className="absolute bg-yellow-400 w-80 h-80 rounded-full z-5 top-10 right-20 opacity-90"></div>
          <img
            src={person}
            alt="Professional"
            className="w-72 md:w-96 object-contain z-11"
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

      <section ref={missionRef} className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
        <p className="text-gray-600 leading-relaxed">
          NiyogBangla was created to transform how job seekers connect with
          companies across Bangladesh. Our mission is to make career search easy,
          transparent, and efficient for everyone — from fresh graduates to
          seasoned professionals.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
          What We Do
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We provide a central platform where employers and job seekers meet. Our
          advanced job‑matching tools and verified company listings ensure that every
          application you send reaches the right people. We aim to empower talent and
          support organizations in building their dream teams.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
          Why Choose Us
        </h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Thousands of verified job listings available 24/7.</li>
          <li>Secure and fast application process with one‑click apply.</li>
          <li>Personalized job suggestions based on your profile.</li>
          <li>Trusted by 200+ companies and millions of job seekers.</li>
        </ul>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default About;