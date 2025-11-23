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
        title: "Frontend Development Intern",
        organization: "KaVaaVi Technologies Pvt. Ltd., Nagpur",
        period: "Dec, 2024 - March, 2025",
        type: "Internship",
        icon: Briefcase,
        highlights: [
          "Gained hands-on experience in front-end and back-end technologies.",
          "Improved full-stack skills while working in a professional team environment.",
          "Collaborated on real-world projects using React, Node.js, and databases.",
          "Maintained confidentiality and contributed effectively throughout the internship.",
        ],
      },
      {
        title: "Full Stack Developer Intern",
        organization: "LGPS Pvt. Ltd., Nagpur",
        period: "June, 2024 - July, 2024",
        type: "Internship",
        icon: Code2,
        highlights: [
          "Built full-stack modules with frontend + backend integration.",
          "Developed RESTful APIs and responsive UI components.",
          "Collaborated to improve project structure and maintainability.",
          "Contributed to database operations and workflow design.",
        ],
      },
      {
        title: "Machine Learning Intern",
        organization: "TechnoHacks EduTech",
        period: "April, 2024 - May, 2024",
        type: "Internship",
        icon: Code2,
        highlights: [
          "Executed real-world data analysis and predictive modeling projects.",
          "Applied machine learning algorithms, preprocessing, and evaluation techniques.",
          "Developed practical solutions to complex problems in data science.",
          "Enhanced skills in Python, scikit-learn, and data visualization.",
        ],
      },
      {
        title: "Web Designer Intern",
        organization: "REVAT Network, Nagpur",
        period: "July, 2023 - August, 2023",
        type: "Internship",
        icon: Briefcase,
        highlights: [
          "Designed and developed responsive web pages",
          "Utilized HTML, CSS, and JavaScript technologies",
          "Gained foundational frontend development skills",
          "Collaborated with team members on web projects",
        ],
      },
      {
        title: "Self-Learning & Skill Building",
        organization: "Personal Journey",
        period: "2023 - Present",
        type: "Continuous Learning",
        icon: TrendingUp,
        highlights: [
          "Completed 10+ courses in SQL, Python, Power BI, Oracle Cloud, and Data Engineering.",
          "Built 5+ end-to-end data analytics, BI, and ETL automation projects.",
          "Mastered ETL pipeline development, data modeling, and dashboard design.",
          "Improved problem-solving through hands-on practice.",
        ],
      },
      {
        title: "Data Analytics & BI Projects",
        organization: "Freelance & Personal Projects",
        period: "2023 - Present",
        type: "Project Work",
        icon: Code2,
        highlights: [
          "Built interactive Power BI dashboards with advanced DAX.",
          "Processed large datasets using Python (Pandas, NumPy).",
          "Wrote optimized SQL queries, joins, CTEs, and windows functions.",
          "Performed data cleaning, validation, and reporting.",
        ],
      },
      {
        title: "Technical Mastery Track",
        organization: "Hands-on Practical Learning",
        period: "2023 - Present",
        type: "Skill Development",
        icon: Award,
        highlights: [
          "Advanced SQL: Window functions, CTEs, query optimization.",
          "Python for Data: Pandas, NumPy, automation scripts.",
          "Power BI: DAX, star schemas, interactive UX.",
          "Data Engineering: ETL workflows, Airflow, Snowflake basics.",
        ],
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { icon: Briefcase, label: "Internships Completed", value: "4" },
      { icon: Award, label: "Certifications", value: "3+" },
      { icon: Code2, label: "Projects Completed", value: "10+" },
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
            A growing career shaped by real-world internships, data projects, and continuous learning
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
