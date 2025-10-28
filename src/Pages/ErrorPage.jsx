import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6">
      <div className="text-center">
      
        <h1 className="text-8xl font-extrabold text-blue-600 mb-2">Oops!</h1>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {error?.status === 404
            ? "Page Not Found"
            : "Something went wrong."}
        </h2>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {error?.statusText || error?.message || 
           "We can't seem to find the page you're looking for."}
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <FaHome />
          Back to Home
        </Link>

        <p className="text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} NiyogBangla • All rights reserved
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;