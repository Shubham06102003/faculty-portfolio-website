"use client";
import React from "react";

const researchPapers = [
  "Wireless Water Quality Monitoring System, National conference on Advances in Recent Trends in Computing, Jan 15-16, 2010.",
  "Improving Performance of IDS using Honeypot, National seminar on Advanced trends in Mobile Computing, Feb 5-6, 2010.",
  "Honeypots: Improving Intrusion Detection System, International Conference on Green-IT and Open Source, Feb 20-22, 2010.",
  "Stock Market Forecasting Using Neural Network with Hadoop, International Conference on Science and Technology (ICST-2K14), Feb 21-22, 2014.",
  "Neural Network Based Stock Market Prediction and Analysis Using Hadoop, International Conference on Convergence of Technology, Apr 6-8, 2014.",
  "EAACK-A Secure Intrusion Detection and Prevention System for MANET's, International Conference on Pervasive Computing, Jan 8-10, 2015.",
  "IP Spoofing and Stepping Stone Attacks in Wireless Networks: Detection, Localization and Prevention, International Conference on Recent Innovations in Engineering, Science & Technology (ICRIEST), Apr 12, 2015.",
  "EAACK-A public key Cryptography Approach with Bouncing Theory in MANETs, IEEE International Conference on Computer Science and Mechanical Engineering, May 10, 2015.",
  "Disease Inference System on the basis of Health-Related Questions by using Sparse Deep Learning, National Conference on Innovation in Engineering Science and Technology, Dec 28-29, 2015.",
  "Disease Inference System on the basis of Health-Related Questions, International Conference on Emerging Trends in Engineering and Technology, Apr 17, 2016.",
  "Privacy Preserving Search over Encrypted Data on Cloud, International Journal for Scientific Research and Development, Feb 2017.",
  "Intelligent Car Accident Detection System, International Journal of Management, Technology and Engineering, Mar 2019.",
  "Vehicle Accident Detection using Smartphone, IEEE 5th International Conference on Computing Communication Control and Automation, Sept 21, 2019.",
  "Recognition of Hand Gesture Using Deep Learning, International Conference on Advanced Trends in Computer Science and Information Technology (ICATCSIT), 2020.",
  "Hand Gesture of Recognition Wearable Mouse Using Deep Learning, GIS SCIENCE JOURNAL, 2020.",
  "Airport Security Using Face-Recognition, International Journal of Future Generation Communication and Networking, 2020.",
  "Traveler’s Bank Fraud and Criminal Record Detection for Airport Surveillance, GIS SCIENCE JOURNAL, 2020.",
  "Fake News Detection using Machine Learning, International Journal of Innovative Research in Computer and Communication Engineering, June 2021.",
  "Detection of Covid-19 using Chest X-ray Images with the Help of Deep Learning, Mar 2022.",
  "Survey Paper on Accidental Area Precautionary System, International Journal of Scientific Research in Engineering and Management (IJSREM), Apr 2022.",
  "AI Based Email System using Speech Recognition, International Journal for Research in Applied Science & Engineering Technology (IJRASET), Apr 2022.",
  "Prediction and Detection of Liver Diseases using Machine Learning, IEEE Third International Conference on (TEMSMET), to be hosted by Vidya Vikas Insitute of Engineering & Technology, Mysuru on 10th & 11th February 2023."
];

const patents = [
  "AI based Computer for a Holistic Data Governance Framework",
  "AI based device for Microarray Gene Profile Analysis",
  "Artificial Intelligence-based medical testing equipment for Cancer Classification using Gene Profiles",
  "INTELLIGENT RESOURCE ALLOCATION IN IOT NETWORKS USING MACHINE LEARNING",
  "Improved Black board",
];

const copyrights = [
  "Characterizing and Classifying Brain Tumors via HOG Features",
  "Enhancing Healthcare System Using AI ML",
  "Deep Learning Approach for Driver Safety",
];

export default function ResearchPage() {
  return (
    <div className="bg-[#f9fafb] text-gray-800 min-h-screen py-12 px-4 sm:px-8 lg:px-16 mt-15">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#3B82F6] mb-10 text-center">
          Research Contributions
        </h1>

        {/* Paper Publications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4 border-b border-gray-300 pb-2">
            📄 Paper Publications
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-base">
            {researchPapers.map((paper, index) => (
              <li key={index}>{paper}</li>
            ))}
          </ol>
        </section>

        {/* Patents */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4 border-b border-gray-300 pb-2">
            🧾 Patents
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            {patents.map((patent, index) => (
              <li key={index}>{patent}</li>
            ))}
          </ul>
        </section>

        {/* Copyrights */}
        <section>
          <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4 border-b border-gray-300 pb-2">
            © Copyrights
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            {copyrights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}