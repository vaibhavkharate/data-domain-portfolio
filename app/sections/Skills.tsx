"use client";

import { BarChart3, Code2, Database, GitBranch, Wrench } from "lucide-react";
import { memo } from "react";

// ---------------------------------------------
// Data Configurations (Clean, DRY, Maintainable)
// ---------------------------------------------
const SKILL_CATEGORIES = [
  {
    title: "Data Analytics",
    icon: BarChart3,
    skills: ["Power BI", "Excel", "SQL", "DAX"],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Pandas", "NumPy"],
  },
  {
    title: "Data Engineering",
    icon: GitBranch,
    skills: ["ETL Pipelines", "Data Modeling", "Snowflake", "Airflow"],
  },
  {
    title: "Database Systems",
    icon: Database,
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Other Tools",
    icon: Wrench,
    skills: ["Git", "API Handling"],
  },
];

const TECH_STACK = [
  "Power BI", "Python", "SQL", "Pandas", "NumPy", "DAX", "Excel",
  "PostgreSQL", "MySQL", "Snowflake", "Airflow", "ETL",
  "Git", "APIs",
];

// ---------------------------------------------
// Reusable Utility Component
// ---------------------------------------------
const SkillTag = memo(({ label }: { label: string }) => (
  <span
    role="listitem"
    className="px-5 py-2 text-sm font-medium text-gray-300 rounded-xl
      bg-slate-900/40 border border-transparent
      bg-gradient-to-r from-slate-900/60 to-slate-800/40
      hover:text-blue-400 hover:border-blue-500/40
      transition-all duration-300 hover:scale-105 cursor-default"
  >
    {label}
  </span>
));

SkillTag.displayName = "SkillTag";

// ---------------------------------------------
// Main Component
// ---------------------------------------------
export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950"
      ></div>

      {/* Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="text-center mb-16">
          <h2
            id="skills-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Skills
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4"></div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for solving real-world data challenges
          </p>
        </header>

        {/* Skill Categories Grid */}
        <main
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SKILL_CATEGORIES.map(({ title, icon: Icon, skills }) => (
            <article
              key={title}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm
                border border-slate-700/50 rounded-2xl p-8 transition-all duration-300
                hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition">
                  <Icon className="text-blue-400" size={28} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3" role="list">
                {skills.map((skill) => (
                  <SkillTag key={skill} label={skill} />
                ))}
              </div>
            </article>
          ))}
        </main>

        {/* Tech Stack Overview */}
        <section
          aria-labelledby="tech-stack-title"
          className="mt-16 bg-gradient-to-r from-blue-900/20 to-slate-900/50 
            backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8"
        >
          <h3
            id="tech-stack-title"
            className="text-2xl font-bold text-white mb-6 text-center"
          >
            Tech Stack Overview
          </h3>

          <div
            role="list"
            className="flex flex-wrap justify-center gap-4"
          >
            {TECH_STACK.map((tech) => (
              <div
                key={tech}
                role="listitem"
                className="px-6 py-3 rounded-xl text-gray-300 font-medium
                  bg-gradient-to-r from-slate-800/80 to-slate-900/80
                  border border-slate-700/50
                  hover:border-blue-500/50 hover:text-blue-400 hover:scale-105
                  transition-all duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
}
