"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaUserAlt, FaTruck } from "react-icons/fa";

const profileOptions = [
  {
    label: "Farmer",
    bg: "bg-[url('/images/farmer.png')]",
  },
  {
    label: "Consumer",
    bg: "bg-[url('/images/consumer.png')]",
  },
  {
    label: "Logistics",
    bg: "bg-[url('/images/logistics.png')]",
  },
];

const ProfileTypeLeft = ({currentStep = 1}) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white px-4 sm:px-6 lg:px-12 xl:px-20 py-10">
      <div className="flex items-center justify-center mb-6 space-x-4">
    {[1, 2, 3].map((step, index) => (
      <React.Fragment key={step}>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
            ${step === currentStep ? "bg-green-700 text-white" : "bg-gray-300 text-gray-700"}`}
        >
          {step}
        </div>
        {index < 2 && <div className="w-10 h-[2px] bg-gray-300" />}
      </React.Fragment>
    ))}
  </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
        Select Profile Type
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        {profileOptions.map((option) => (
          <motion.div
            key={option.label}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(option.label)}
            className={`cursor-pointer rounded-xl h-44 sm:h-52 md:h-56 bg-cover bg-center shadow-lg relative overflow-hidden group transition-all duration-300 ease-in-out ${option.bg} ${
              selected === option.label ? "ring-4 ring-green-700" : ""
            }`}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        
              <span className="mt-2 text-lg font-bold">{option.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <button
        disabled={!selected}
        className="mt-10 bg-green-700 text-white py-3 px-10 rounded-full max-w-[200px] w-full hover:bg-green-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default ProfileTypeLeft;
