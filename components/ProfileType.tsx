"use client";

import React from "react";
import ProfileTypeLeft from "./ProfileTypeLeft";
import SignUpRight from "./SignUpRight";

const testimonials = [
    {
      name: "Josephine John",
      role: "Verified Farmer",
      text: "AfriFarma has completely transformed my small farm business. I’ve reached more customers in the past three months than I ever thought possible. The dashboard is easy to use, and I love being able to track my sales trends.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Yusuf Falytom",
      role: "Trusted Logistics Partner",
      text: "Partnering with AfriFarma has been great for my delivery business. The real-time GPS tracking and clear delivery details make my work efficient.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Mary Okeke",
      role: "Satisfied Customer",
      text: "Shopping on AfriFarma is a breeze! I’ve never had fresher vegetables delivered straight to my door. The product reviews and farmer profiles give me confidence.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

const ProfileType = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <ProfileTypeLeft />
      <SignUpRight
        backgroundImage="/images/millet.png"
        testimonials={testimonials}
      />
    </div>
  );
};

export default ProfileType;
