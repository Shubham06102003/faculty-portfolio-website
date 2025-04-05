"use client";
import React from "react";

const workshopImages = [
  // Add your image URLs here. For example:
  "/fdp-workshop/w1.jpg",
  "/fdp-workshop/w2.jpg",
  "/fdp-workshop/w3.jpg",
  "/fdp-workshop/w4.jpg",
  "/fdp-workshop/w5.jpg",
  "/fdp-workshop/w6.jpg",
  // Add more image paths as needed
];

export default function FDPWorkshopPage() {
  return (
    <div className="bg-[#f9fafb] min-h-screen px-4 sm:px-8 lg:px-16 py-12 text-gray-800 mt-15">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#3B82F6] mb-10">
          FDPs & Workshops
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {workshopImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md border border-gray-200"
            >
              <img
                src={src}
                alt={`Workshop ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
