"use client";

import { Download, Eye, Database, BarChart3, GitBranch } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  /* ------------------------------ Animation Variants ------------------------------ */
  const textFadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
      show: { opacity: 1, y: 0 },
    }),
    [prefersReducedMotion]
  );

  const smoothFloat = useMemo(
    () =>
      prefersReducedMotion
        ? undefined
        : {
            y: [0, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
          },
    [prefersReducedMotion]
  );

  return (
    <section
      id="home"
      aria-label="Hero Section"
      role="banner"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-slate-950"
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-black"
      />

      {/* Decorative Orbs */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            aria-hidden="true"
            className="absolute -left-20 -top-10 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute right-10 bottom-28 w-60 h-60 rounded-full bg-cyan-400/15 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT — TEXT AREA */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/40 border border-slate-800 rounded-full 
              text-blue-300 text-sm font-medium w-max mx-auto lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Open to Data Analyst Opportunities
            </div>

            {/* Name */}
            <motion.h1
              initial="hidden"
              animate="show"
              variants={textFadeUp}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            >
              Vaibhav{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Kharate
              </span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial="hidden"
              animate="show"
              variants={textFadeUp}
              transition={{ delay: 0.15 }}
              className="text-xl sm:text-2xl font-semibold text-slate-300"
            >
              Data Analyst
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial="hidden"
              animate="show"
              variants={textFadeUp}
              transition={{ delay: 0.22 }}
              className="text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Transforming raw data into actionable insights through SQL-driven analysis,
              interactive Power BI dashboards, and business-focused reporting.

            </motion.p>

            {/* Buttons */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={textFadeUp}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="Images\Vaibhav_Kharate_Data_Analytics_Resume_Dec25.pdf"
                role="button"
                aria-label="Download Resume"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg 
                bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold
                shadow-md hover:shadow-blue-500/25 transition-transform duration-300 hover:-translate-y-1"
              >
                <Download size={18} aria-hidden="true" />
                Download Resume
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="#projects"
                role="button"
                aria-label="View Projects"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-slate-700 
                text-slate-200 hover:text-blue-300 hover:border-blue-600 transition"
              >
                <Eye size={18} aria-hidden="true" />
                View Projects
              </a>
            </motion.div>

            {/* Skill Badges */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={textFadeUp}
              transition={{ delay: 0.38 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start text-slate-300 pt-3"
            >
              {[
                { icon: Database, text: "Advanced SQL" },
                { icon: BarChart3, text: "Power BI Dashboards" },
                { icon: GitBranch, text: "Data Analysis & Reporting" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm">
                  <Icon className="text-blue-400" size={18} aria-hidden="true" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — PROFILE IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.2 }}
              className="relative"
            >
              {/* Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] 
                rounded-full bg-blue-500/20 blur-3xl"
              />

              {/* Profile Image (optimized via Next.js Image) */}
              <Image
                src="/Images/profile_pic.jpg"
                width={360}
                height={360}
                priority
                alt="Portrait of Vaibhav Kharate"
                className="rounded-full object-cover object-top w-[260px] h-[260px] sm:w-[360px] sm:h-[360px]
                shadow-xl shadow-blue-500/30"
              />

              {/* Caption */}
              <div className="mt-4 text-center lg:text-right">
                <p className="text-sm text-slate-300 font-medium">Vaibhav Kharate</p>
                <p className="text-xs text-slate-500">
                  Data Analyst
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={smoothFloat}
      >
        <div className="w-7 h-11 border-2 border-slate-700 rounded-2xl flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
