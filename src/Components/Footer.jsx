import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ===== Brand Info ===== */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-3">NiyogBangla</h2>
          <p className="text-gray-600 mb-4">
            Connecting talented job seekers with leading companies across Bangladesh.
            Build your future career with us.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"><FaTwitter /></a>
            <a href="#" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"><FaLinkedinIn /></a>
            <a href="#" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/find-jobs" className="hover:text-blue-600 transition">Find Jobs</a></li>
            <li><a href="/companies" className="hover:text-blue-600 transition">Companies</a></li>
            <li><a href="/about" className="hover:text-blue-600 transition">About Us</a></li>
          </ul>
        </div>

        {/* ===== Resources ===== */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/blog" className="hover:text-blue-600 transition">Blog</a></li>
            <li><a href="/faq" className="hover:text-blue-600 transition">FAQs</a></li>
            <li><a href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-600 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* ===== Contact Section ===== */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Us</h3>
          <p className="text-gray-600">Dhaka, Bangladesh</p>
          <p className="text-gray-600">Email: support@niyogbangla.com</p>
          <p className="text-gray-600 mb-3">Phone: +880 1234‑567890</p>
          <a
            href="mailto:support@niyogbangla.com"
            className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* ===== Bottom line ===== */}
      <div className="border-t border-gray-200 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="font-semibold text-blue-600">NiyogBangla</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;