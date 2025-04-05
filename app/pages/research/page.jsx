"use client";
import React from "react";

const researchPapers = [
  "D. Salunke et al., A Survey Paper On Role-Based Access Control, IJARCCE, 2013.",
  "Dipmala Salunke, Girish Potdar, Comparative Approaches of Query Optimization, IJCSN, 2013.",
  "S. Kalbhor et al., A Survey On Digital Signature, IJETAE, 2015.",
  "Dipmala Salunke et al., Hybrid Cloud for Secure Deduplication, IJIRSET, 2016.",
  "D. T. Salunke et al., Graphical Password Authentication Mechanisms, 2017.",
  "Mrunal V Arak, D.T. Salunke et al., MRGA Authentication, IJISRT, 2017.",
  "H. Kapase et al., Twitter Sentiment Analysis, IRJET, 2018.",
  "D.T. Salunke et al., Online Mentoring Platform, JSPM RSCOE, 2019.",
  "Prof. D. T. Salunke et al., Text Summarization using LSTM, IJRDTT, 2019.",
  "S. Shirode et al., Marathi Character Recognition using CNN, IJRAR, 2020.",
  "V. Wani et al., Diabetic Eye Disease Detection, JETIR, 2020.",
  "S. Gidde et al., Indian Sign Language Detection, IJIRCCE, 2021.",
  "P. Jadhav et al., Devanagari Recognition using CNN, IEEE CCGE21, 2021.",
  "Sentiment Analysis using Bayesian Logistic Regression, JJTU Rajasthan, 2021.",
  "Attended: National Conference “Digital India”, 2021.",
  "Attended: Int. Conf. on CCGE, 2021.",
  "Deep Learning for Dental Diagnostics, Springer ICCBI 2021.",
  "D. Salunke et al., Devanagari Recognition using CNN, IEEE CCGE, 2021.",
  "DL Techniques for Dental Diagnostics, Springer ICCBI, 2021.",
  "Krishna Sheth et al., Dental Disease Classification, GIS Science, 2021.",
  "Image Augmentation in DL: A Review, IJARCCE, 2022.",
  "Dental Plaque Classification using CNN, GIS Science, 2022.",
  "M. Yewange et al., Real-Time Object Detection: A Survey, IJISRT, 2022.",
  "Dental Plaque Classification using CNN, GIS Science, 2022.",
  "R. Chintalwar et al., License Plate Recognition Survey, Springer ICEI-2022.",
  "D. Salunke et al., Dental Caries Detection with CNN, IJATEE, 2022.",
];

const patents = [
  "A Robust Biometric Fingerprint Recognition System using Level 3 Features and ML, 13/05/2019.",
];

const copyrights = [
  "Real-time Object Detection using Deep Learning, 2022.",
  "MASK RCNN for Dental X-ray Segmentation & Tooth Numbering, 2022.",
  "Automatic Vehicle Plate Recognition using Deep Learning, 2022.",
];

export default function ResearchPage() {
  return (
    <div className="bg-[#f9fafb] text-gray-800 min-h-screen py-12 px-4 sm:px-8 lg:px-16 mt-15">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#3B82F6] mb-10 text-center">
          Research Contributions
        </h1>

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

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4 border-b border-gray-300 pb-2">
            📑 Patent
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            {patents.map((patent, index) => (
              <li key={index}>{patent}</li>
            ))}
          </ul>
        </section>

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
