"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import logoAnimation from "../../public/assets/logo.json";


/* -----------------------------------------------------
   ✔ Custom Hook — Optimized Section + Scroll Tracking
------------------------------------------------------ */
function useScrollTracking() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 20);

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    let current = "#home";

    // Only one loop + no forced layout reflow
    for (const section of sections) {
      const rectTop = section.offsetTop - 160;
      if (scrollY >= rectTop) {
        current = `#${section.id}`;
      }
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isScrolled, activeSection, setActiveSection };
}

/* -----------------------------------------------------
   ✔ MAIN Navigation Component (Improved)
------------------------------------------------------ */
export default function Navigation() {
  const { isScrolled, activeSection, setActiveSection } = useScrollTracking();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Memoized links to avoid re-renders
  const navLinks = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#education", label: "Education" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  // Smooth scrolling with close-mobile logic
  const scrollToSection = useCallback(
    (e: React.MouseEvent, href: string) => {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });

      setActiveSection(href);
      setIsMobileMenuOpen(false);
    },
    [setActiveSection]
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform
        ${
          isScrolled
            ? "bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-blue-500/10 border-b border-white/5"
            : "bg-transparent"
        }
      `}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        
        {/* ✔ Logo */}
        {/* Logo */}
        <div onClick={(e) => scrollToSection(e as any, "#home")}
        className="flex items-center gap-3">
          <div className="w-10 h-10">
            <Lottie animationData={logoAnimation} loop={true} />
          </div>
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-3xl font-extrabold text-blue-400 tracking-wide"
          >
            Vaibhav
          </motion.h1>
        </div> 
        {/* <button
          onClick={(e) => scrollToSection(e as any, "#home")}
          className="text-2xl font-bold tracking-wide text-white focus:outline-none flex items-center gap-1"
          aria-label="Scroll to home"
        >
          <span className="text-blue-400">Vaibhav</span>
        </button> */}

        {/* ✔ Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href;
            return (
              <button
                key={href}
                onClick={(e) => scrollToSection(e as any, href)}
                className={`relative text-base font-medium transition-all
                  ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }
                `}
              >
                {label}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-px bg-gradient-to-r from-blue-400 to-blue-600"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* ✔ Mobile Toggle */}
        <button
          aria-label="Toggle mobile navigation menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✔ Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 animate-in fade-in slide-in-from-top"
          role="menu"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(({ href, label }) => {
              const isActive = activeSection === href;
              return (
                <button
                  key={href}
                  onClick={(e) => scrollToSection(e as any, href)}
                className={`w-full text-left px-3 py-2 rounded-lg text-lg transition-all
                    ${
                      isActive
                        ? "text-blue-400 bg-slate-800"
                        : "text-gray-300 hover:text-blue-400 hover:bg-slate-800"
                    }
                  `}
                  role="menuitem"
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
