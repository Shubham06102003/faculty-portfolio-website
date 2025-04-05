"use client";

import Carousel from "./components/Carousel";
import Image from "next/image";
import Navbar from "./NavBar/navbar";
import {
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col animate-fadeIn">
      <Navbar />

      <main className="flex-grow px-4 sm:px-6 md:px-12 py-10 space-y-16 max-w-screen-xl mx-auto w-full mt-15">
        {/* Carousel */}
        <section>
          <Carousel />
        </section>

        {/* Famous Quote */}
        <section className="text-center max-w-4xl mx-auto px-4 animate-fadeIn">
          <p className="text-base sm:text-lg md:text-xl italic text-gray-700 leading-relaxed">
            {`"Education is not the learning of facts, but the training of the mind to think."`}
          </p>
          <span className="block mt-3 text-gray-500 text-sm sm:text-base font-medium">
            - Albert Einstein
          </span>
        </section>

        {/* Professor Info Section */}
        <section className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 animate-fadeIn">
          {/* Professor Image */}
          <div className="w-full flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Professor Photo"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl object-cover w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto"
            />
          </div>

          {/* Professor Info */}
          <div className="w-full space-y-5 text-center lg:text-left text-base sm:text-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
              Prof. Rupali Umbare
            </h2>

            <p>
              <strong className="text-blue-700">Designation:</strong>Assistant Professor,
              Department of Information Technology
            </p>

            {/* Education */}
            <div>
              <strong className="text-blue-700 block mb-2">Education:</strong>
              <ul className="list-disc list-inside space-y-2 text-left">
                <li>
                  <span className="font-medium">Ph.D.</span> from SJJTU
                  (Pursuing)
                </li>
                <li>
                  <span className="font-medium">M.E. (Computer Network)</span>{" "}
                  from SPPU with 6.68 CGPA
                </li>
                <li>
                  <span className="font-medium">
                    B.E. (Information Technology)
                  </span>{" "}
                  from BAMU with 68%
                </li>
              </ul>
            </div>

            <p>
              <strong className="text-blue-700">Address:</strong>{" "}
              {`JSPM's Rajarshi Shahu College of Engineering, Tathawade, Pune`}
            </p>

            <p>
              <strong className="text-blue-700">Email:</strong>{" "}
              rtumbare_it@jspmrscoe.edu.in
            </p>

            <p>
              <strong className="text-blue-700">Member:</strong> LMISTE, IEEE, ACM
            </p>
          </div>
        </section>

        {/* External Profiles Section */}
        <section className="text-center mt-10 animate-fadeIn">
          <h3 className="text-xl font-semibold text-blue-800 mb-6">
            External Profiles
          </h3>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            {/* Google Scholar */}
            <a
              href="https://scholar.google.com/citations?user=I9lS3dwAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 animate-scaleIn"
            >
              <div className="w-[140px] h-[50px] relative">
                <Image
                  src="/gs.jpg"
                  alt="Google Scholar"
                  fill
                  className="object-contain rounded-md shadow-md"
                />
              </div>
            </a>

            {/* Scopus */}
            <a
              href="https://www.scopus.com/results/authorNamesList.uri?sort=count-f&src=al&sid=326724389e225cff0bd8d6f8e97600db&sot=al&sdt=al&sl=42&s=AUTHLASTNAME%28umbare%29+AND+AUTHFIRST%28rupali%29"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 animate-scaleIn"
            >
              <div className="w-[140px] h-[50px] relative">
                <Image
                  src="/se.png"
                  alt="Scopus"
                  fill
                  className="object-contain rounded-md shadow-md"
                />
              </div>
            </a>

            {/* ResearchGate */}
            <a
              href="https://www.researchgate.net/profile/Rupali-Umbare?ev=hdr_xprf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 animate-scaleIn"
            >
              <div className="w-[140px] h-[50px] relative">
                <Image
                  src="/rs.jpg"
                  alt="ResearchGate"
                  fill
                  className="object-contain rounded-md shadow-md"
                />
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-6 mt-12 animate-fadeIn">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center sm:text-left text-gray-600">
            © 2025 Prof. Rupali Umbare. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-blue-600 text-2xl">
            <a
              href="https://www.linkedin.com/in/rupali-umbare-90193b1b4"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
