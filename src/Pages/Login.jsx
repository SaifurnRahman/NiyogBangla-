import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, Links } from "react-router";

const Login = () => {
 


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value
    console.log(email, password);
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6">
    
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Sign in to continue your journey with NiyogBangla
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <a
                href="#"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>

            <p className="text-sm text-gray-600 text-center">
              Don’t have an account?{" "} <span className="text-blue-600 font-medium hover:underline"> <Link to='/auth/registration'>Register Now</Link> </span>
              
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;