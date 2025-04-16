"use client";

import { useState } from "react";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import TestimonialCarousel from "./TestimonialCarousel";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


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
          <h2 className="text-3xl font-bold text-gray-900 text-center">Sign In</h2>
          {/* Social Buttons */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center border border-[#096036] text-[#096036] py-2 px-4 rounded-full hover:bg-[#096036]/10 transition">
              <FaGoogle className="mr-2" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center border border-blue-600 text-blue-600 py-2 px-4 rounded-full hover:bg-blue-50 transition">
              <FaFacebook className="mr-2" />
              Continue with Facebook
            </button>
          </div>

          {/* Or separator */}
          <div className="flex items-center gap-4">
            <hr className="flex-grow border-[#096036]" />
            <span className="text-[#000000]">Or</span>
            <hr className="flex-grow border-[#096036]" />
          </div>
        
          {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096036] transition"
                          required
                        />
                      </div>
          
                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096036] transition pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#096036]"
                            tabIndex={-1}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                      </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm text-gray-600">Keep me signed in</span>
              </label>
              <Link href="#" className="text-sm text-green-600 hover:underline">
                Forgot your password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#096036] text-white py-2 px-4 rounded-lg hover:bg-[#096036CC"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-green-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section - Image & Testimonials */}
      <div className="hidden md:flex md:w-1/2 relative items-center justify-center text-white">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-45 md:bg-left xl:bg-center"
                style={{ backgroundImage: "url('/images/millet.png')" }}
                aria-hidden="true"
              />
      
              {/* Green overlay */}
              <div
                className="absolute inset-0 bg-[#096036CC] mix-blend-multiply"
                aria-hidden="true"
              />
      
              {/* Foreground content */}
              <div className="relative z-10 p-8 max-w-md text-center">
                <TestimonialCarousel
                  testimonials={[
                    {
                      name: "Josephine John",
                      role: "Verified Farmer",
                      text: "AfriFarma has completely transformed my small farm business. I’ve reached more customers in the past three months than I ever thought possible. The dashboard is easy to use, and I love being able to track my sales trends.",
                      image: "https://randomuser.me/api/portraits/women/3.jpg",
                    },
                    {
                      name: "Yusuf Falytom",
                      role: "Trusted Logistics Partner",
                      text: "Partnering with AfriFarma has been great for my delivery business. The real-time GPS tracking and clear delivery details make my work efficient. Plus, I’ve gained new clients and improved my service ratings!",
                      image: "https://randomuser.me/api/portraits/men/1.jpg",
                    },
                    {
                      name: "Mary Okeke",
                      role: "Satisfied Customer",
                      text: "Shopping on AfriFarma is a breeze! I’ve never had fresher vegetables delivered straight to my door. The product reviews and farmer profiles give me confidence in what I’m buying. It’s my go-to marketplace for farm-fresh produce.",
                      image: "https://randomuser.me/api/portraits/women/2.jpg",
                    },
                    // Add more...
                  ]}
                />
              </div>
            </div>
    </div>
  );
}
