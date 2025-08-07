import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-pink-50 flex items-center justify-center px-4 mt-10">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-extrabold text-pink-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-pink-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition duration-200 font-medium"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
