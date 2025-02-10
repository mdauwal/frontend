"use client";

import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here (e.g., API call)
    console.log("Sign In:", { email, password });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Sign Up</h2>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center bg-gray-100 py-2 px-4 rounded-lg shadow hover:bg-gray-200">
              <FaGoogle className="text-red-500 mr-2" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center bg-gray-100 py-2 px-4 rounded-lg shadow hover:bg-gray-200">
              <FaFacebook className="text-blue-600 mr-2" />
              Continue with Facebook
            </button>
          </div>
          <div className="flex items-center justify-center my-4">
            <span className="text-gray-500">Or</span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm text-gray-600">Keep me signed in</span>
              </label>
              <a href="#" className="text-sm text-green-600 hover:underline">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/signup" className="text-green-600 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Right Section - Image & Testimonials */}
      <div className="hidden md:flex md:w-1/2 bg-green-700 text-white items-center justify-center">
        <div className="text-center max-w-md p-8">
          <p className="text-lg italic mb-4">
            "As a restaurant owner, AfriFarma is a lifesaver! I can order high-quality ingredients
            in bulk and have them delivered on time. It’s reliable, transparent, and perfect for my
            business needs."
          </p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden">
              <img
                src="https://via.placeholder.com/48"
                alt="Femi Alabi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-3">
              <p className="font-bold">Femi Alabi</p>
              <p className="text-sm">Restaurant Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
