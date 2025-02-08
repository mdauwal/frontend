"use client";

import React, { useState } from "react";
import { Bookmark, Minus, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  variant: string;
  price: number; // Changed to number
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Tomatoes", variant: "Vegetables", price: 55, image: "/images/hero-bg-1.jpg" },
  { id: 2, name: "Banana", variant: "Fruits", price: 60, image: "/images/hero-bg-2.jpg" },
  { id: 3, name: "Guinea Fowl", variant: "Livestock", price: 30, image: "/images/gfowl.jpg" },
  { id: 4, name: "Rice", variant: "Crops", price: 23, image: "/images/rice.jpg" },
  { id: 5, name: "Hen", variant: "Livestock", price: 55, image: "/images/fowl.jpg" },
  { id: 6, name: "Goat", variant: "Livestock", price: 60, image: "/images/goat.jpg" },
  { id: 7, name: "Okra", variant: "Vegetables", price: 30, image: "/images/hero-bg-3.jpg" },
  { id: 8, name: "Maize", variant: "Crops", price: 23, image: "/images/maize.jpg" },
  { id: 9, name: "Carrots", variant: "Vegetables", price: 55, image: "/images/carrot.jpg" },
  { id: 10, name: "Pepper", variant: "Vegetables", price: 60, image: "/images/pepper.jpg" },
  { id: 11, name: "Garlic", variant: "Vegetables", price: 30, image: "/images/garlic.jpg" },
  { id: 12, name: "Fish", variant: "Livestock", price: 23, image: "/images/fish.jpg" },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="bg-white p-4 rounded-2xl flex flex-col">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={160}
        className="w-full h-40 object-cover rounded-xl"
      />
      <div className="flex justify-between items-center mt-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <Bookmark className="text-[#000000] cursor-pointer" />
      </div>
      <p className="text-gray-500 text-sm">{product.variant}</p>
      <div className="mt-1 flex items-center">
        <span className="text-lg font-bold text-[#000000]">${product.price}</span>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center border border-[#096036] px-2 py-1 rounded-full">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-1 text-[#096036]"
          >
            <Minus size={16} />
          </button>
          <span className="px-3">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-1 text-[#096036]"
          >
            <Plus size={16} />
          </button>
        </div>
        <button className="bg-[#096036] text-white px-4 py-2 rounded-full text-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};


const AllProducts: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < products.length) {
      setCurrentIndex((prev) => prev + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - itemsPerPage);
    }
  };

  const visibleProducts = showAll
    ? products
    : products.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10 relative">
      <div className="flex justify-between items-center">
        <h2 className="text-[#096036] text-3xl font-bold">All Products</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className={`px-5 py-2.5 text-sm font-semibold rounded-full border-2 transition-all duration-300 ease-in-out ${
            showAll
              ? "bg-[#096036] text-white border-[#096036] shadow-md scale-105"
              : "border-[#096036] text-[#096036] hover:bg-[#096036] hover:text-white hover:shadow-md active:scale-95"
          }`}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
      <p className="text-gray-500 mt-2">
        Discover all fresh farm produce and livestock at unbeatable prices, sourced directly from trusted farmers.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-hidden">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {!showAll && (
        <div className="flex justify-between items-center mt-6 relative">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${
                  Math.floor(currentIndex / itemsPerPage) === i ? "bg-[#096036]" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 border-2 border-[#096036] text-[#096036] rounded-full hover:bg-[#096036] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex + itemsPerPage >= products.length}
              className="p-2 border-2 border-[#096036] text-[#096036] rounded-full hover:bg-[#096036] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllProducts;
