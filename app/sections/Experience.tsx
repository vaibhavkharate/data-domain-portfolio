"use client";

import { Briefcase, Code2, TrendingUp, Award } from "lucide-react";
import { memo, useMemo } from "react";

// Reusable Experience Card Component
const ExperienceCard = memo(function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  return (
    <div className="relative group">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Timeline Icon */}
        <div className="hidden md:flex items-start justify-center flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative p-4 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500/50 rounded-full">
              <exp.icon className="text-blue-400" size={24} aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="flex-1">
          <article
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8
            hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            aria-label={`${exp.title} at ${exp.organization}`}
          >
            <header className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-blue-400 font-semibold">{exp.organization}</p>
              </div>

              <div className="text-right">
                <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-300 text-sm font-medium">
                  {exp.period}
                </span>
                <p className="text-gray-400 text-sm mt-2">{exp.type}</p>
              </div>
            </header>

            <ul className="space-y-3">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

      </div>
    </div>
  );
});

// TypeScript optional (safe even in JS)
interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  type: string;
  icon: any;
  highlights: string[];
}

export default function Experience() {
  const experiences = useMemo<ExperienceItem[]>(
    () => [
      {
        title: "Data Analytics Intern",
        organization: "KaVaaVi Technologies Pvt. Ltd., Nagpur",
        period: "Dec, 2024 - March, 2025",
        type: "Internship",
        icon: Briefcase,
        highlights: [
          "Worked with structured datasets to understand data flow, validation, and transformation across systems",
          "Collaborated with product and development teams to translate business requirements into data-driven insights.",
          "Assisted in preparing basic reports and dashboards to track application usage and performance trends.",
          "Applied SQL queries and data exploration techniques to extract meaningful information from datasets.",
        ],
      },
      {
        title: "Full Stack Developer Intern",
        organization: "LGPS Pvt. Ltd., Nagpur",
        period: "June, 2024 - July, 2024",
        type: "Internship",
        icon: Code2,
        highlights: [
          "Assisted in developing application modules involving frontend, backend, and database interaction.",
          "Worked with REST APIs and relational databases to retrieve and manage structured data.",
          "Supported data handling tasks such as validation, storage, and query-based retrieval.",
          "Improved understanding of how business data flows through applications.",
        ],
      },
      {
        title: "Machine Learning Intern",
        organization: "TechnoHacks EduTech",
        period: "April, 2024 - May, 2024",
        type: "Internship",
        icon: Code2,
        highlights: [
          "Performed exploratory data analysis on structured datasets to identify trends and patterns.",
          "Cleaned, prepared, and analyzed data using Python libraries.",
          "Applied basic machine learning techniques to support data-driven insights.",
          "Strengthened foundations in data analysis, visualization, and analytical thinking.",
        ],
      },
      {
        title: "Web Designer Intern",
        organization: "REVAT Network, Nagpur",
        period: "July, 2023 - August, 2023",
        type: "Internship",
        icon: Briefcase,
        highlights: [
          "Designed responsive web pages with attention to usability and layout structure.",
          "Worked with HTML, CSS, and JavaScript to present structured information clearly.",
          "Developed an understanding of how data and content are presented to users.",
          "Collaborated with team members to meet project requirements and timelines.",
        ],
      },
     
      {
        title: "Data Analytics & BI Projects",
        organization: "Freelance & Personal Projects",
        period: "2023 - Present",
        type: "Project Work",
        icon: Code2,
        highlights: [
          "Built interactive Power BI dashboards to track key metrics and business insights.",
          "Analyzed structured datasets using Python (Pandas, NumPy) for trend identification.",
          "Wrote efficient SQL queries using joins, CTEs, and aggregations.",
          "Performed data cleaning, validation, and reporting to support decision-making.",
        ],
      },
     
    ],
    []
  );

  const stats = useMemo(
    () => [
      { icon: Briefcase, label: "Internships Completed", value: "4" },
      { icon: Award, label: "Certifications", value: "3" },
      { icon: Code2, label: "Projects Completed", value: "6-8" },
    ],
    []
  );

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A growing profile built through internships, data analysis projects, and continuous skill development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center 
              hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="inline-flex p-4 bg-blue-500/10 rounded-xl mb-4">
                <stat.icon className="text-blue-400" size={32} aria-hidden="true" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
