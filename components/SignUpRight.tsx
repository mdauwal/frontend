"use client";

import React from "react";
import TestimonialCarousel from "@/components/TestimonialCarousel";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

interface SignUpRightProps {
  backgroundImage?: string;
  testimonials: Testimonial[];
}

const SignUpRight: React.FC<SignUpRightProps> = ({
  backgroundImage = "/images/millet.png",
  testimonials,
}) => {
  return (
    <div className="hidden md:flex md:w-1/2 relative items-center justify-center text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45 md:bg-left xl:bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        aria-hidden="true"
      />

      {/* Green overlay */}
      <div
        className="absolute inset-0 bg-[#096036CC] mix-blend-multiply"
        aria-hidden="true"
      />

      {/* Foreground content */}
      <div className="relative z-10 p-8 max-w-md text-center">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>
  );
};

export default SignUpRight;
