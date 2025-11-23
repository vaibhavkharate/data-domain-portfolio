"use client";

import { Code2, Database, BarChart3, Brain, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

// ------------------------------------
// CONSTANTS & CONFIG
// ------------------------------------

const STRENGTHS = [
  { icon: Database, label: "SQL" },
  { icon: Code2, label: "Python" },
  { icon: BarChart3, label: "Power BI" },
  { icon: Brain, label: "Data Modeling" },
  { icon: TrendingUp, label: "ETL Pipelines" },
  { icon: Zap, label: "Cloud Basics" },
];

const TECHNOLOGIES = [
  "Excel",
  "PostgreSQL",
  "MySQL",
  "Snowflake",
  "Airflow",
  "Pandas",
  "NumPy",
  "DAX",
  "Git",
  "API Handling",
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

// ------------------------------------
// COMPONENT
// ------------------------------------

export default function About() {
  return (
    <section
      id="about"
      aria-label="About section"
      className="py-24 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950"
      />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Title */}
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold text-white"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Me
            </span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="w-24 h-1 mt-4 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
          />
        </motion.header>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            aria-label="Journey and role description"
            className="space-y-6"
          >
            {/* Journey */}
            <motion.article
              variants={fadeUp}
              className="bg-gradient-to-br from-slate-800/40 to-slate-900/50 backdrop-blur-xl border border-slate-700/40 rounded-2xl p-8 shadow-xl shadow-black/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                My Journey
              </h3>

              <p className="text-gray-300 leading-relaxed mb-3">
                I began my career in web development, building responsive and
                interactive user interfaces. As I worked with real systems, I
                developed a strong interest in understanding how data powers
                decisions behind the scenes.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Today, I specialize in transforming raw data into insights,
                designing scalable data architectures, and developing analytics
                workflows that help businesses make smarter decisions.
              </p>
            </motion.article>

            {/* What I do */}
            <motion.article
              variants={fadeUp}
              className="bg-gradient-to-br from-blue-900/20 to-slate-900/40 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 shadow-xl shadow-blue-900/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                What I Do
              </h3>

              <ul className="space-y-3 text-gray-300">
                {[
                  "Build dashboards and analytics solutions using Power BI and SQL",
                  "Automate and optimize ETL pipelines for smooth workflows",
                  "Design efficient data models for scalable cloud/data systems",
                  "Perform data cleaning, transformation & analysis using Python",
                ].map((task, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-400 text-xl">▹</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </motion.section>

          {/* RIGHT SIDE */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            aria-label="Skills and tools"
            className="space-y-8"
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl font-semibold text-white"
            >
              Core Strengths
            </motion.h3>

            {/* Strengths Grid */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {STRENGTHS.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  role="figure"
                  aria-label={label}
                  className="group bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl 
                             border border-slate-700/40 rounded-xl p-6 
                             hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 
                             transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon
                    size={32}
                    className="text-blue-400 mb-3 group-hover:scale-110 transition-transform"
                  />
                  <p className="text-gray-300 font-medium">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Tools */}
            <motion.div
              variants={fadeUp}
              className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl 
                         border border-slate-700/40 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Technologies & Tools
              </h3>

              <div className="flex flex-wrap gap-3">
                {TECHNOLOGIES.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 
                               rounded-lg text-blue-300 text-sm font-medium 
                               hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.section>
        </div>
      </main>
    </section>
  );
}
