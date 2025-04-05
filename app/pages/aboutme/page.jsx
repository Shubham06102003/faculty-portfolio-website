import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-10 sm:px-8 lg:px-24 text-gray-800 mt-15">
      <div className="max-w-5xl mx-auto space-y-10">

        <h1 className="text-3xl font-bold text-blue-900 text-center">About Me</h1>

        {/* Qualifications */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Qualification</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Ph.D. – SJJTU (Pursuing)</li>
            <li>M.E. (Computer Network) – SPPU – 6.68 CGPA</li>
            <li>B.E. (IT) – BAMU – 68%</li>
          </ul>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Work Experience</h2>
          <p>
            Working as Associate Professor in Information Technology Department, JSPM's Rajarshi Shahu College of Engineering, Pune since <strong>02/07/2012</strong>
          </p>
        </section>

        {/* Subjects Taught */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Subjects Taught</h2>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Universal Human Values and Ethics</li>
            <li>System Software</li>
            <li>Software Testing and Quality Assurance</li>
            <li>Multimedia System</li>
            <li>Operating System</li>
            <li>Software Engineering</li>
            <li>Advance Computer Architecture</li>
            <li>Digital Electronics and Logic Design</li>
            <li>Object Oriented Programming</li>
            <li>Embedded Operating System</li>
            <li>Microprocessor</li>
            <li>Fundamentals of Programming Languages</li>
            <li>Advance Software Modeling</li>
            <li>Business Analytics and Intelligence</li>
          </ul>
        </section>

        {/* Other Responsibilities */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Other Responsibilities</h2>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>NBA Criteria 6 Coordinator</li>
            <li>Institute Moodle Coordinator</li>
            <li>Exam Coordinator</li>
            <li>Admission Coordinator</li>
            <li>Faculty Feedback Coordinator</li>
            <li>Module Coordinator</li>
            <li>Project Coordinator</li>
            <li>ERP Coordinator</li>
            <li>ICT Coordinator</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
