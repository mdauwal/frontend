"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
};

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialCarousel({ testimonials }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
      <div className="relative z-10 max-w-md w-full text-center text-white backdrop-blur-xs rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-300">
        {/* Star rating */}
        <div className="flex justify-center mb-4">
          <div className="flex space-x-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>

        {/* Testimonial text */}
        <p className="text-base md:text-lg italic mb-6 leading-relaxed">"{current.text}"</p>

        {/* Avatar and user info */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-white shadow-md">
            <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <p className="font-semibold text-sm md:text-base">{current.name}</p>
            <p className="text-xs md:text-sm text-gray-200">{current.role}</p>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center space-x-4">
          <button onClick={handlePrev} className="hover:text-gray-300 transition">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex space-x-1">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
          <button onClick={handleNext} className="hover:text-gray-300 transition">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
