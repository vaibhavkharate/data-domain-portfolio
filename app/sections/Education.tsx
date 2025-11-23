"use client";

import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';

export default function Education() {
  const certifications = [
    'Oracle Autonomous Database Cloud 2025 Certified Professional',
    'Oracle Data Platform 2025 Certified Foundations Associate',
    'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Education &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic foundation and industry-recognized Certifications
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Degree Section */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-blue-500/10 rounded-xl">
                <GraduationCap className="text-blue-400" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Degree</h3>
                <p className="text-blue-400 font-semibold">Higher Education</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xl font-semibold text-white mb-2">B.Tech in Computer Science & Engineering</p>
              <p className="text-gray-400">S.B. Jain Institute of Engineering, Management and Research, Nagpur</p>

              <div className="border-t border-slate-700 pt-4">
                <p className="text-gray-400 mb-2">
                  <span className="text-blue-400 font-semibold">Duration:</span> 2022 - 2025
                </p>
                <p className="text-gray-400">
                  <span className="text-blue-400 font-semibold">University:</span> RTMNU, Nagpur
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 mt-4">
                <p className="text-gray-300 leading-relaxed">
                  Built strong fundamentals in software development, databases, algorithms,
                  cloud fundamentals, and modern engineering practices.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Concentration Section */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-blue-500/10 rounded-xl">
                <BookOpen className="text-blue-400" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Learning Focus</h3>
                <p className="text-blue-400 font-semibold">Specialization Areas</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                'Data Analysis & Business Intelligence',
                'ETL, Data Pipelines & Automation',
                'Database Systems & SQL Optimization',
                'Cloud Foundations (Oracle, Azure)',
                'Python for Data & Automation',
                'Web Development Fundamentals',
              ].map((focus, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{focus}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/50 rounded-xl p-4 mt-6">
              <p className="text-gray-300 leading-relaxed">
                Transitioned from web development to data analytics through hands-on projects,
                certifications, and self-paced learning with real datasets and business scenarios.
              </p>
            </div>
          </div>
        </div>

        {/* Certification Section */}
        <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-blue-500/10 rounded-xl">
              <Award className="text-blue-400" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
              <p className="text-gray-400">Validated expertise from recognized global platforms</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-xl p-5 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-x-1"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                  <div>
                    <p className="text-gray-200 font-medium">{cert}</p>
                    <p className="text-gray-500 text-sm mt-1">Completed</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Continuous learning through top online platforms:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Coursera', 'Udemy', 'Oracle Learning', 'LinkedIn Learning', 'YouTube'].map((platform) => (
                <span
                  key={platform}
                  className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
