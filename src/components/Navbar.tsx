"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "WHAT I DO", href: "#competencies" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#07090e]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo inspired by the reference design (fluid loop mark) */}
          <a
            href="#"
            className="flex items-center gap-2.5 font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded-lg py-1 px-1.5"
            aria-label="Sudarshan P K Home"
          >
            {/* Sleek magenta/fuchsia logo loop */}
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-fuchsia-600 via-rose-500 to-purple-600 p-[2.5px] shadow-sm shadow-fuchsia-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-[14px] bg-white dark:bg-zinc-950 flex items-center justify-center">
                <span className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-tr from-fuchsia-600 via-rose-500 to-purple-600">
                  SP
                </span>
              </div>
            </div>
            <span className="text-lg font-black tracking-tight font-display">
              Sudarshan<span className="text-fuchsia-600">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links matching the reference uppercase spacing */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-bold tracking-wider"
            aria-label="Main Navigation"
          >
            <a
              href="#"
              className={`transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 ${
                activeSection === ""
                  ? "text-fuchsia-600 dark:text-fuchsia-400 font-extrabold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400"
              }`}
            >
              HOME
            </a>

            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 ${
                    isActive
                      ? "text-fuchsia-600 dark:text-fuchsia-400 font-extrabold border-b-2 border-fuchsia-600 dark:border-fuchsia-400 pb-0.5"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle & Resume */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wider rounded-xl bg-gradient-to-r from-fuchsia-600 to-rose-600 hover:from-fuchsia-500 hover:to-rose-500 text-white shadow-md shadow-fuchsia-500/25 transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 hover:text-fuchsia-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-white/98 dark:bg-[#07090e]/98 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 px-6 py-6 overflow-y-auto animate-fade-in z-40">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            <a
              href="#"
              onClick={closeMenu}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold tracking-wider ${
                activeSection === ""
                  ? "bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400"
                  : "text-zinc-800 dark:text-zinc-200"
              }`}
            >
              HOME
            </a>
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold tracking-wider transition-colors ${
                    isActive
                      ? "bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400"
                      : "text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-rose-600 text-white font-bold text-xs tracking-wider"
              >
                <span>DOWNLOAD RESUME</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
