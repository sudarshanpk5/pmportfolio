"use client";

import { ProfileData } from "@/data/profile";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Brain,
  LineChart,
  Network,
  Code2,
  Smartphone,
  Database,
  Cloud,
  LucideIcon,
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

interface SkillsProps {
  skills: ProfileData["skills"];
}

const SKILL_THEMES: Record<
  string,
  {
    icon: LucideIcon;
    iconColor: string;
    chipHover: string;
    borderHover: string;
    spotlight: string;
  }
> = {
  "Conversational & Messaging": {
    icon: MessageCircle,
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-500/15 border-fuchsia-500/30",
    chipHover:
      "hover:border-fuchsia-500/50 hover:bg-fuchsia-500/15 hover:text-fuchsia-700 dark:hover:text-fuchsia-300",
    borderHover: "hover:border-fuchsia-500/50 hover:shadow-fuchsia-500/15",
    spotlight: "rgba(217, 70, 239, 0.16)",
  },
  "AI & Automation": {
    icon: Brain,
    iconColor:
      "text-purple-600 dark:text-purple-400 bg-purple-500/15 border-purple-500/30",
    chipHover:
      "hover:border-purple-500/50 hover:bg-purple-500/15 hover:text-purple-700 dark:hover:text-purple-300",
    borderHover: "hover:border-purple-500/50 hover:shadow-purple-500/15",
    spotlight: "rgba(168, 85, 247, 0.16)",
  },
  "Product & Analytics": {
    icon: LineChart,
    iconColor: "text-rose-600 dark:text-rose-400 bg-rose-500/15 border-rose-500/30",
    chipHover:
      "hover:border-rose-500/50 hover:bg-rose-500/15 hover:text-rose-700 dark:hover:text-rose-300",
    borderHover: "hover:border-rose-500/50 hover:shadow-rose-500/15",
    spotlight: "rgba(244, 63, 94, 0.16)",
  },
  "Integrations": {
    icon: Network,
    iconColor:
      "text-indigo-600 dark:text-indigo-400 bg-indigo-500/15 border-indigo-500/30",
    chipHover:
      "hover:border-indigo-500/50 hover:bg-indigo-500/15 hover:text-indigo-700 dark:hover:text-indigo-300",
    borderHover: "hover:border-indigo-500/50 hover:shadow-indigo-500/15",
    spotlight: "rgba(99, 102, 241, 0.16)",
  },
  "Engineering": {
    icon: Code2,
    iconColor: "text-pink-600 dark:text-pink-400 bg-pink-500/15 border-pink-500/30",
    chipHover:
      "hover:border-pink-500/50 hover:bg-pink-500/15 hover:text-pink-700 dark:hover:text-pink-300",
    borderHover: "hover:border-pink-500/50 hover:shadow-pink-500/15",
    spotlight: "rgba(236, 72, 153, 0.16)",
  },
  "Mobile": {
    icon: Smartphone,
    iconColor: "text-violet-600 dark:text-violet-400 bg-violet-500/15 border-violet-500/30",
    chipHover:
      "hover:border-violet-500/50 hover:bg-violet-500/15 hover:text-violet-700 dark:hover:text-violet-300",
    borderHover: "hover:border-violet-500/50 hover:shadow-violet-500/15",
    spotlight: "rgba(139, 92, 246, 0.16)",
  },
  "Data": {
    icon: Database,
    iconColor:
      "text-purple-600 dark:text-purple-400 bg-purple-500/15 border-purple-500/30",
    chipHover:
      "hover:border-purple-500/50 hover:bg-purple-500/15 hover:text-purple-700 dark:hover:text-purple-300",
    borderHover: "hover:border-purple-500/50 hover:shadow-purple-500/15",
    spotlight: "rgba(168, 85, 247, 0.16)",
  },
  "Cloud & DevOps": {
    icon: Cloud,
    iconColor:
      "text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-500/15 border-fuchsia-500/30",
    chipHover:
      "hover:border-fuchsia-500/50 hover:bg-fuchsia-500/15 hover:text-fuchsia-700 dark:hover:text-fuchsia-300",
    borderHover: "hover:border-fuchsia-500/50 hover:shadow-fuchsia-500/15",
    spotlight: "rgba(217, 70, 239, 0.16)",
  },
};

export function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Skills & Expertise"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-8 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
        <span className="text-xs uppercase tracking-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-rose-500 to-purple-600 dark:from-fuchsia-400 dark:via-rose-300 dark:to-purple-400">
          Toolkit
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 font-display">
        Skills &amp; Capabilities
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mb-10">
        Hands-on technical competencies combined with product strategy and enterprise delivery.
      </p>

      {/* Grid of skill categories with SpotlightCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {skills.map((categoryGroup, idx) => {
          const theme = SKILL_THEMES[categoryGroup.category] || {
            icon: Code2,
            iconColor: "text-fuchsia-600 bg-fuchsia-500/10 border-fuchsia-500/20",
            chipHover: "hover:border-fuchsia-500/50",
            borderHover: "hover:border-fuchsia-500/40",
            spotlight: "rgba(217, 70, 239, 0.15)",
          };
          const IconComp = theme.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.05, type: "spring" }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor={theme.spotlight}
                className={`h-full p-6 sm:p-7 rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-900/60 ${theme.borderHover} transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center ${theme.iconColor}`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {categoryGroup.category}
                    </h3>
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2">
                    {categoryGroup.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/60 ${theme.chipHover} hover:scale-105 transition-all duration-200 cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
