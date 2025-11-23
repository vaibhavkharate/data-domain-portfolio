"use client";

import { useMemo, type ReactElement, type ReactNode } from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const fadeContainer = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
  },
};

// Social item type
type SocialItem = {
  href: string;
  label: string;
  icon: ReactElement;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Quick Links (memoized for performance)
  const quickLinks = useMemo(
    () => ["About", "Skills", "Projects", "Experience", "Education", "Contact"],
    []
  );

  // Social links (memoized)
  const socialLinks = useMemo<SocialItem[]>(
    () => [
      {
        href: "https://linkedin.com/in/vaibhavkharate",
        label: "LinkedIn",
        icon: <Linkedin size={22} className="text-gray-300 group-hover:text-blue-400 transition-colors" />,
      },
      {
        href: "https://github.com/vaibhavkharate",
        label: "GitHub",
        icon: <Github size={22} className="text-gray-300 group-hover:text-blue-400 transition-colors" />,
      },
      {
        href: "mailto:vaibhav.s.kharate@gmail.com",
        label: "Email",
        icon: <Mail size={22} className="text-gray-300 group-hover:text-blue-400 transition-colors" />,
      },
    ],
    []
  );

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 py-16">
      {/* Line Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      {/* Main Container */}
      <motion.div
        variants={fadeContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* ---- Top Section ---- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Branding */}
          <FooterColumn title="VAIBHAV">
            <p className="text-gray-400 leading-relaxed">
              Data Analyst & Aspiring Data Engineer experienced in crafting 
              scalable dashboards, ETL workflows, and insight-driven solutions.
            </p>
          </FooterColumn>

          {/* Quick Links */}
          <FooterColumn title="Quick Links">
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Social Links */}
          <FooterColumn title="Connect">
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>

            <p className="text-gray-400 mt-5 text-sm">
              Open to freelance & full-time opportunities
            </p>
          </FooterColumn>
        </div>

        {/* ---- Bottom Section ---- */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Vaibhav Kharate. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with React, Next.js & Tailwind — Designed with precision.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

/* ============================================= */
/* -------------- SUBCOMPONENTS ---------------- */
/* ============================================= */

// Footer Column Wrapper
function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>
      {children}
    </div>
  );
}

// Social Icon Component
function SocialIcon({ href, label, icon }: SocialItem) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group p-3 rounded-xl bg-slate-800/60 border border-slate-700 
                 hover:border-blue-500 hover:bg-blue-500/20 transition-all"
    >
      {icon}
    </a>
  );
}
