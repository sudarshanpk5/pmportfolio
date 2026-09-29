"use client";

import { useState } from "react";
import { ProfileData } from "@/data/profile";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Tag } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

interface ProjectsProps {
  data: ProfileData["projects"];
}

const CATEGORY_STYLES: Record<
  string,
  { badge: string; hoverBorder: string; hoverTitle: string; spotlight: string }
> = {
  "Conversational AI": {
    badge:
      "bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-500/35",
    hoverBorder: "hover:border-fuchsia-500/50 hover:shadow-fuchsia-500/15",
    hoverTitle: "group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400",
    spotlight: "rgba(217, 70, 239, 0.16)",
  },
  "Support & CRM": {
    badge:
      "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/35",
    hoverBorder: "hover:border-purple-500/50 hover:shadow-purple-500/15",
    hoverTitle: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
    spotlight: "rgba(168, 85, 247, 0.16)",
  },
  "Platforms at Scale": {
    badge:
      "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/35",
    hoverBorder: "hover:border-rose-500/50 hover:shadow-rose-500/15",
    hoverTitle: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
    spotlight: "rgba(244, 63, 94, 0.16)",
  },
};

export function Projects({ data }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? data.items
      : data.items.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Selected Projects"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-8 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
        <span className="text-xs uppercase tracking-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-rose-500 to-purple-600 dark:from-fuchsia-400 dark:via-rose-300 dark:to-purple-400">
          Portfolio
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2 font-display">
            Selected Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Platforms shipped across conversational automation, customer support, and high-scale systems.
          </p>
        </div>

        {/* Fluid sliding animated filter pill bar */}
        <div
          className="relative flex flex-wrap gap-1 p-1 rounded-2xl bg-zinc-100/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800/90 self-start md:self-auto shadow-inner backdrop-blur-md"
          role="tablist"
          aria-label="Project categories"
        >
          {data.categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-600 via-rose-500 to-purple-600 shadow-md shadow-fuchsia-500/30 -z-10"
                  />
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid with layout transitions and SpotlightCard */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const style = CATEGORY_STYLES[project.category] || {
              badge: "bg-zinc-100 text-zinc-700 border-zinc-200",
              hoverBorder: "hover:border-zinc-300",
              hoverTitle: "group-hover:text-zinc-900",
              spotlight: "rgba(217, 70, 239, 0.15)",
            };

            return (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, type: "spring", stiffness: 120 }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor={style.spotlight}
                  className={`group h-full p-6 sm:p-7 rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-900/60 hover:bg-zinc-50/90 dark:hover:bg-zinc-900/90 transition-all duration-300 hover:-translate-y-1.5 ${style.hoverBorder} hover:shadow-2xl flex flex-col justify-between`}
                >
                  <div>
                    {/* Category Pill with Distinct Category Colors */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide border shadow-2xs ${style.badge}`}
                      >
                        <Tag className="w-3 h-3" />
                        <span>{project.category}</span>
                      </span>
                      <FolderGit2 className="w-4 h-4 text-zinc-400 group-hover:text-fuchsia-500 group-hover:rotate-6 transition-all" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-2.5 transition-colors ${style.hoverTitle}`}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Chips with micro-bounce on hover */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-1.5">
                    {project.chips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60 hover:border-fuchsia-500/50 hover:text-fuchsia-600 dark:hover:text-fuchsia-300 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
