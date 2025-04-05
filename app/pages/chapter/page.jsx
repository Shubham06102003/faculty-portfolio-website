"use client";

import Image from "next/image";
import Navbar from "@/app/NavBar/navbar";

export default function AsmPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Navbar />

      <main className="flex-grow px-4 sm:px-6 md:px-12 py-12 max-w-6xl mx-auto w-full text-center space-y-10 mt-15">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 animate-fadeInUp">
          ASM Chapter
        </h1>

        {/* Image */}
        <div className="relative w-full max-w-3xl mx-auto h-64 sm:h-80 md:h-[400px] animate-zoomIn">
          <Image
            src="/chapter/ch1.jpg"
            alt="ASM Chapter"
            fill
            className="object-contain rounded-xl shadow-lg"
          />
        </div>
      </main>
    </div>
  );
}
