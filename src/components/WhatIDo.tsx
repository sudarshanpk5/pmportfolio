"use client";

import { ProfileData } from "@/data/profile";
import {
  MessageSquare,
  Headphones,
  Cpu,
  Compass,
  BarChart3,
  Users,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";

interface WhatIDoProps {
  competencies: ProfileData["coreCompetencies"];
}

const ICON_MAP: Record<string, LucideIcon> = {
  MessageSquare,
  Headphones,
  Cpu,
  Compass,
  BarChart3,
  Users,
};

const CARD_THEMES = [
  {
    iconBg: "bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/30 group-hover:bg-fuchsia-500/25",
    hoverBorder: "hover:border-fuchsia-500/50 hover:shadow-fuchsia-500/15",
    titleHover: "group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400",
    gradientTag: "from-fuchsia-600 to-rose-500",
    spotlight: "rgba(217, 70, 239, 0.16)",
  },
  {
    iconBg: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30 group-hover:bg-purple-500/25",
    hoverBorder: "hover:border-purple-500/50 hover:shadow-purple-500/15",
    titleHover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
    gradientTag: "from-purple-600 to-indigo-500",
    spotlight: "rgba(168, 85, 247, 0.16)",
  },
  {
    iconBg: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30 group-hover:bg-rose-500/25",
    hoverBorder: "hover:border-rose-500/50 hover:shadow-rose-500/15",
    titleHover: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
    gradientTag: "from-rose-500 to-orange-400",
    spotlight: "rgba(244, 63, 94, 0.16)",
  },
  {
    iconBg: "bg-pink-500/15 text-pink-600 dark:text-pink-400 border-pink-500/30 group-hover:bg-pink-500/25",
    hoverBorder: "hover:border-pink-500/50 hover:shadow-pink-500/15",
    titleHover: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
    gradientTag: "from-pink-500 to-rose-400",
    spotlight: "rgba(236, 72, 153, 0.16)",
  },
  {
    iconBg: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30 group-hover:bg-indigo-500/25",
    hoverBorder: "hover:border-indigo-500/50 hover:shadow-indigo-500/15",
    titleHover: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
    gradientTag: "from-indigo-600 to-purple-500",
    spotlight: "rgba(99, 102, 241, 0.16)",
  },
  {
    iconBg: "bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/30 group-hover:bg-violet-500/25",
    hoverBorder: "hover:border-violet-500/50 hover:shadow-violet-500/15",
    titleHover: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
    gradientTag: "from-violet-600 to-fuchsia-500",
    spotlight: "rgba(139, 92, 246, 0.16)",
  },
];

export function WhatIDo({ competencies }: WhatIDoProps) {
  return (
    <section
      id="competencies"
      className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Core Competencies"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-8 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
          <span className="text-xs uppercase tracking-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-rose-500 to-purple-600 dark:from-fuchsia-400 dark:via-rose-300 dark:to-purple-400">
            What I Do
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 font-display">
          Core Competencies
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mb-10">
          A blend of product craft, conversational journey architecture, and technical execution.
        </p>

        {/* 6 Colorful Cards with Spotlight Mouse Follow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {competencies.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || Compass;
            const theme = CARD_THEMES[idx % CARD_THEMES.length];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, type: "spring", stiffness: 100 }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor={theme.spotlight}
                  className={`group h-full p-6 sm:p-7 rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-900/60 hover:bg-zinc-50/90 dark:hover:bg-zinc-900/90 transition-all duration-300 hover:-translate-y-1.5 ${theme.hoverBorder} hover:shadow-2xl flex flex-col justify-between`}
                >
                  <div>
                    {/* Top color indicator line */}
                    <div
                      className={`h-[2.5px] -mt-1 -mx-2 mb-4 rounded-full bg-gradient-to-r ${theme.gradientTag} opacity-70 group-hover:opacity-100 transition-all duration-300`}
                    />

                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${theme.iconBg}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3
                      className={`text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2.5 tracking-tight transition-colors ${theme.titleHover}`}
                    >
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
