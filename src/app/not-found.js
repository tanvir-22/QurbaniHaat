"use client";
import React from "react";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md w-full">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 9v4m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Something went wrong
        </h1>

        {/* Message */}
        <p className="text-gray-500 mb-6">
          Sorry, an unexpected error has occurred.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="text-white px-6 py-1 rounded-xl btn btn-primary"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
