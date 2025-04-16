"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import TestimonialCarousel from "./TestimonialCarousel";

export default function SignUpForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); // clear error
    console.log("Sign Up:", { email, password });

  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Section - Sign Up Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-[#000000] text-center">
            Sign Up
          </h2>

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

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#096036] transition pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#096036]"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Link href="/profile-type">
  <button className="w-full bg-[#096036CC] text-white py-2 px-4 rounded-lg hover:bg-[#07512e] transition">
    Sign Up
  </button>
</Link>
          </form>

          {/* Footer Link */}
          <p className="text-center text-sm text-[#000000] mt-4">
            Already have an account?{" "}
            <Link href="/signin" className="text-[#096036CC] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section - Background + Testimonial */}
      <div className="hidden md:flex md:w-1/2 relative items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45 md:bg-left xl:bg-center"
          style={{ backgroundImage: "url('/images/millet.png')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[#096036CC] mix-blend-multiply"
          aria-hidden="true"
        />
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
            ]}
          />
        </div>
      </div>
    </div>
  );
}
