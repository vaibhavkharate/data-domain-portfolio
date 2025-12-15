"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import {
  ExternalLink,
  Github,
  BarChart3,
  Users,
  Database,
} from "lucide-react";

/** -------------------------------
 * Type Definitions
 --------------------------------*/
type Project = {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  github: string;
  demo: string;
  gradient: string;
  image: string;
};

/** -------------------------------
 * PROJECT DATA (Memoized)
 --------------------------------*/
const useProjectData = (): Project[] =>
  useMemo(
    () => [
      {
        title: "Bank Customer Churn Analysis",
        description:
          "Analyzed customer churn patterns to identify key risk factors using SQL and Python, and built interactive Power BI dashboards to support retention-focused decision-making.",
        technologies: ["SQL", "Power BI", "Python", "MySQL", "Pandas"]
,
        icon: Users,
        github: "https://github.com/vaibhavkharate/Bank-Customer-Analytics-Dashboard",
        demo: "https://app.powerbi.com/view?r=eyJrIjoiMDFhMzBiNjctNTdlYy00NDUyLWE2NTMtMDY4NTE1YWRhZjBmIiwidCI6IjM1NjFhYTFjLWI0NWEtNDg5Ni1hNTY4LTFlN2RkYWE3YjM5YiJ9",
        gradient: "from-purple-600 to-blue-500",
        image: "/Images/project_pic/Bank_Customer_analysis.png",
      },
      {
        title: "Global Sales Analysis Dashboard",
        description:
          "Developed a comprehensive Power BI dashboard to analyze sales performance, revenue trends, and regional customer behavior, enabling data-driven business insights.",
        technologies: ["SQL", "Power BI", "Python", "MySQL", "Pandas"]
,
        icon: BarChart3,
        github: "https://github.com/vaibhavkharate/global-sales-analysis-dashboard",
        demo: "https://app.powerbi.com/view?r=eyJrIjoiNGFjMmZhMzgtZmYwMS00YWY2LWFhODgtOTFhM2NjOTAwN2EwIiwidCI6IjM1NjFhYTFjLWI0NWEtNDg5Ni1hNTY4LTFlN2RkYWE3YjM5YiJ9&embedImagePlaceholder=true",
        gradient: "from-blue-600 to-blue-400",
        image: "/Images/project_pic/Sales_Analysis_Dashboard.jpg",
      },
      {
        title: "Customer Shopping Behaviour Analysis",
        description:
          "Performed in-depth retail data analysis using advanced SQL techniques including joins, CTEs, and window functions to uncover customer shopping behavior and trends.",
        technologies: ["SQL", "PostgreSQL", "Power BI", "Python", "Pandas"],
        icon: Database,
        github: "https://github.com/vaibhavkharate/customer-shopping-behavior-analysis-dashboard",
        demo: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMmEzZmRlYzYtMmE1NS00YzA5LTliNzgtNzYzY2IyOWNmYjk4IiwidCI6IjM1NjFhYTFjLWI0NWEtNDg5Ni1hNTY4LTFlN2RkYWE3YjM5YiJ9",
        gradient: "from-orange-600 to-red-500",
        image: "/Images/project_pic/customer_shopping_behaviour_analysis.jpg",
      },
    ],
    []
  );

/** -------------------------------
 * Reusable UI Chips
 --------------------------------*/
const TechTag = ({ tech }: { tech: string }) => (
  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-300 text-sm font-medium">
    {tech}
  </span>
);

/** -------------------------------
 * Project Card Component
 --------------------------------*/
const ProjectCard = ({ project }: { project: Project }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm
                 border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300
                 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
      role="listitem"
    >
      {/* Top Accent Line */}
      <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

      {/* Image */}
      <div className="relative w-full h-48">
        {!imgError ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL="/Images/fallback.jpg"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <Image
            src="/Images/fallback.jpg"
            alt="Fallback image"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          {/* Icon */}
          <div
            className={`p-4 bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-xl`}
          >
            <project.icon className="text-white" size={30} />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href={project.github}
              aria-label={`${project.title} GitHub Repo`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
            >
              <Github className="text-gray-300 hover:text-blue-400" size={20} />
            </a>
            <a
              href={project.demo}
              aria-label={`${project.title} Live Demo`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
            >
              <ExternalLink
                className="text-gray-300 hover:text-blue-400"
                size={20}
              />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <TechTag key={i} tech={tech} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pt-2">
        <div className="px-6 pb-6 flex justify-center">
          <a
            href={project.demo || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg text-white font-semibold hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2"
            aria-label={`${project.title} - View details`}
          >
            View Dashboard
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </article>
  );
};

/** -------------------------------
 * MAIN PROJECTS COMPONENT
 --------------------------------*/
export default function Projects() {
  const projects = useProjectData();

  const renderCard = useCallback(
    (project: Project, index: number) => (
      <ProjectCard key={index} project={project} />
    ),
    []
  );

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Real-world data analytics projects showcasing SQL analysis, Power BI dashboards,
          and data-driven business insights.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" role="list">
          {projects.map(renderCard)}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/vaibhavkharate?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r
                       from-blue-600 to-blue-500 text-white rounded-lg font-semibold
                       hover:shadow-lg hover:shadow-blue-500/40 transition"
            aria-label="View all projects on GitHub"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
