"use client"; // Declare this as a client component

import React, { useState } from "react";
import Image from "next/image";

const products = [
  { id: 1, title: "Produit 1", price: "49,99 $", image: "/images/product1.webp" },
  { id: 2, title: "Produit 2", price: "59,99 $", image: "/images/product1.webp" },
  { id: 3, title: "Produit 3", price: "69,99 $", image: "/images/product1.webp" },
  { id: 4, title: "Produit 4", price: "79,99 $", image: "/images/product1.webp" },
  { id: 5, title: "Produit 5", price: "89,99 $", image: "/images/product1.webp" },
  { id: 6, title: "Produit 6", price: "99,99 $", image: "/images/product1.webp" },
  { id: 7, title: "Produit 7", price: "109,99 $", image: "/images/product1.webp" },
  { id: 8, title: "Produit 8", price: "119,99 $", image: "/images/product1.webp" },
  { id: 9, title: "Produit 9", price: "129,99 $", image: "/images/product1.webp" },
  { id: 10, title: "Produit 10", price: "139,99 $", image: "/images/product1.webp" },
  { id: 11, title: "Produit 11", price: "149,99 $", image: "/images/product1.webp" },
  { id: 12, title: "Produit 12", price: "159,99 $", image: "/images/product1.webp" },
];

const ProductCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4; // Display 4 items at once
  const totalItems = products.length;

  // Handle previous button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - itemsToShow : prevIndex - 1
    );
  };

  // Handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalItems - itemsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto flex items-center overflow-hidden relative">
        {/* Left Navigation Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 px-4 py-2 bg-turquoise-600 text-white rounded-lg hover:bg-turquoise-700"
        >
          ◀
        </button>

        {/* Product Cards */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
              width: `${(100 / itemsToShow) * totalItems}%`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-full sm:w-1/2 md:w-1/4 bg-white shadow-md rounded-lg p-4 m-2"
                style={{
                  maxWidth: "300px", // Fixed card width for responsive layout
                  minWidth: "250px", // Minimum width to ensure cards are responsive
                }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}   // Image width matches the card's width
                  height={300}  // Image height matches the card's height
                  className="rounded-lg object-cover mx-auto"
                />
                <h2 className="text-lg font-semibold mt-4 text-center">
                  {product.title}
                </h2>
                <p className="text-gray-700 text-lg font-bold mt-2 text-center">
                  {product.price}
                </p>
                <div className="flex justify-center mt-4 space-x-4">
                  <button className="px-4 py-2 bg-turquoise-600 text-white rounded-lg hover:bg-turquoise-700">
                    Acheter maintenant
                  </button>
                  <button className="px-4 py-2 bg-turquoise-600 text-white rounded-lg hover:bg-turquoise-700">
                    Ajouter aux favoris
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 px-4 py-2 bg-turquoise-600 text-white rounded-lg hover:bg-turquoise-700"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
