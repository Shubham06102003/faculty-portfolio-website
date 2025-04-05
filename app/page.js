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

      <main className="flex-grow px-4 sm:px-6 md:px-12 py-10 space-y-16 max-w-screen-xl mx-auto w-full mt-15">
        {/* Carousel */}
        <section>
          <Carousel />
        </section>

        {/* Famous Quote */}
        <section className="text-center max-w-4xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl italic text-gray-700 leading-relaxed">
            "Education is not the learning of facts, but the training of the
            mind to think."
          </p>
          <span className="block mt-3 text-gray-500 text-sm sm:text-base font-medium">
            - Albert Einstein
          </span>
        </section>

        {/* Professor Info Section */}
        <section className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          {/* Professor Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Professor Photo"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl object-cover w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto"
            />
          </div>

          {/* Professor Info */}
          <div className="w-full lg:w-2/3 space-y-5 text-center lg:text-left text-base sm:text-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
              Prof. Rupali Umbare
            </h2>

            <p>
              <strong className="text-blue-700">Designation:</strong> Professor,
              Department of Information Technology
            </p>

            <div>
              <strong className="text-blue-700">Education:</strong>
              <ul className="mt-2 pl-4 list-disc text-left lg:pl-6">
                <li className="mt-1">
                  <span className="font-medium">Ph.D.</span> from SJJTU
                  (Pursuing)
                </li>
                <li className="mt-1">
                  <span className="font-medium">M.E. (Computer Network)</span>{" "}
                  from SPPU with 6.68 CGPA
                </li>
                <li className="mt-1">
                  <span className="font-medium">
                    B.E. (Information Technology)
                  </span>{" "}
                  from BAMU with 68%
                </li>
              </ul>
            </div>

            <p>
              <strong className="text-blue-700">Address:</strong> JSPM's Rajarshi Shahu College of Engineering, Tathawade,
              Pune
            </p>

            <p>
              <strong className="text-blue-700">Email:</strong>{" "}
              rupaliumbare@jspmrscoe.edu.in
            </p>

            <p>
              <strong className="text-blue-700">Interests:</strong> Machine
              Learning, NLP, EdTech
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
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogleScholar />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
