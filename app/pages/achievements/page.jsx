"use client";
import React from "react";

const certificates = [
  // Add paths to your certificate images here
  "/certificates/c1.jpg",
  "/certificates/c2.jpg",
  "/certificates/c3.jpg",
  "/certificates/c4.jpg",
  "/certificates/c5.jpg",
  // Add more as needed
];

export default function AchievementsPage() {
  return (
    <div className="bg-[#f9fafb] min-h-screen px-4 sm:px-8 lg:px-16 py-12 text-gray-800 mt-15">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#3B82F6] mb-10">
          Achievements & Certificates
        </h1>

        <div className="space-y-10">
          {certificates.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md border border-gray-200"
            >
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
