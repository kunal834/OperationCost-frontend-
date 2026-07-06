import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-lg w-full text-center">
        <p className="text-7xl md:text-8xl font-bold text-blue-600 mb-2">404</p>

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          Page Not Found
        </h1>

        <p className="text-gray-500 mb-8">
          Sorry, the page you're looking for doesn't exist or may have been
          moved. Let's get you back to safe ground.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            to="/treatments"
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center"
          >
            <Search size={18} />
            Browse Treatments
          </Link>
        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-6 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mx-auto"
        >
          <ArrowLeft size={16} />
          Go back
        </button>
      </div>
    </div>
  );
}

export default NotFound;
