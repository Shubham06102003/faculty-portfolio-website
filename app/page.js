import Carousel from "./components/Carousel";
import Image from "next/image";
import Navbar from "./NavBar/navbar";
import {
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaGoogleScholar,
} from "react-icons/fa6";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-4 sm:px-6 md:px-12 py-10 space-y-16 max-w-screen-xl mx-auto w-full">
        {/* Carousel */}
        <section>
          <Carousel />
        </section>

        {/* Famous Quote */}
        <section className="text-center max-w-4xl mx-auto px-4">
          <p className="text-lg sm:text-lg md:text-xl lg:text-2xl italic text-gray-600 leading-relaxed">
            "Education is not the learning of facts, but the training of the mind to think."
          </p>
          <span className="block mt-2 text-gray-500 text-sm sm:text-base font-medium">
            – Albert Einstein
          </span>
        </section>

        {/* Professor Info Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          {/* Professor Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/image.png"
              alt="Professor Photo"
              width={300}
              height={300}
              className="rounded-xl shadow-lg object-cover w-[250px] sm:w-[300px] h-auto"
            />
          </div>

          {/* Professor Info */}
          <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
              Prof. Rupali Umbare
            </h2>
            <p>
              <strong className="text-blue-700">Designation:</strong> Professor, Department of IT
            </p>
            <p>
              <strong className="text-blue-700">Education:</strong> Ph.D. in Computer Science
            </p>
            <p>
              <strong className="text-blue-700">Address:</strong> JSPM's RSCOE, Pune
            </p>
            <p>
              <strong className="text-blue-700">Email:</strong> rupaliumbare@jspmrscoe.edu.in
            </p>
            <p>
              <strong className="text-blue-700">Interests:</strong> Machine Learning, NLP, EdTech
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center sm:text-left text-gray-600">
            © 2025 Prof. Rupali Umbare. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-blue-600 text-2xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
              <FaGoogleScholar />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
