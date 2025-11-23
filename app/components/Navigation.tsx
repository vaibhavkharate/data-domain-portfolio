"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Menu, X } from "lucide-react";

// Custom hook for scroll & section tracking
function useScrollTracking() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    let current = "#home";

    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top <= 150) current = "#" + section.id;
    });

    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isScrolled, activeSection, setActiveSection };
}

export default function Navigation() {
  const { isScrolled, activeSection, setActiveSection } = useScrollTracking();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      setActiveSection(href);
      setIsMobileMenuOpen(false);
    },
    [setActiveSection]
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-blue-500/10 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wide text-white"
          onClick={(e) => scrollToSection(e, "#home")}
        >
          <span className="text-blue-400">Vaibhav</span>Kharate
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => scrollToSection(e, href)}
                className={`relative text-sm font-medium transition-colors ${
                  isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-px bg-gradient-to-r from-blue-400 to-blue-600"></span>
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle navigation menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(({ href, label }) => {
              const isActive = activeSection === href;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => scrollToSection(e, href)}
                  className={`block px-3 py-2 rounded-lg text-base transition-all ${
                    isActive
                      ? "text-blue-400 bg-slate-800"
                      : "text-gray-300 hover:text-blue-400 hover:bg-slate-800"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
