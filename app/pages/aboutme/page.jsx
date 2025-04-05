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
            Working as Associate Professor in Information Technology Department, JSPM's Rajarshi Shahu College of Engineering, Pune since <strong>10/02/2010</strong>
          </p>
        </section>

        {/* Subjects Taught */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Subjects Taught</h2>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Machine Learning & Applications</li>
            <li>Computational Statistics</li>
            <li>Computer Organization and Architecture</li>
            <li>Digital Electronics and Logic Design</li>
            <li>Processor Architecture and Interfacing</li>
            <li>Information Retrieval</li>
            <li>Information and Cyber Security</li>
            <li>Human Computer & Interaction</li>
          </ul>
        </section>

        {/* Portfolios Handled */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Portfolios Handled</h2>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>NBA Criterion IV and VI Coordinator</li>
            <li>NBA Module Coordinator</li>
            <li>NAAC Criterion IV Coordinator</li>
            <li>Autonomy Coordinator</li>
            <li>Department Academic Coordinator</li>
            <li>Artificial Coding Club Coordinator</li>
            <li>University Exam Senior Supervisor</li>
            <li>Autonomy Exam Coordinator</li>
            <li>Institute Magazine Committee Coordinator</li>
            <li>Innovation Cell Coordinator</li>
            <li>JSPM Satellite Club Coordinator</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
