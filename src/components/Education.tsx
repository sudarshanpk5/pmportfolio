"use client";

import { ProfileData } from "@/data/profile";
import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";

interface EducationProps {
  items: ProfileData["education"];
}

const EDU_THEMES = [
  {
    iconStyle: "bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/30",
    hoverBorder: "hover:border-fuchsia-500/50 hover:shadow-fuchsia-500/15",
    accentText: "text-fuchsia-600 dark:text-fuchsia-400",
    spotlight: "rgba(217, 70, 239, 0.16)",
  },
  {
    iconStyle: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30",
    hoverBorder: "hover:border-purple-500/50 hover:shadow-purple-500/15",
    accentText: "text-purple-600 dark:text-purple-400",
    spotlight: "rgba(168, 85, 247, 0.16)",
  },
];

export function Education({ items }: EducationProps) {
  return (
    <section
      id="education"
      className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Education"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-8 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
        <span className="text-xs uppercase tracking-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-rose-500 to-purple-600 dark:from-fuchsia-400 dark:via-rose-300 dark:to-purple-400">
          Background
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 font-display">
        Education
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mb-8">
        Engineering foundation in communication systems and electronics.
      </p>

      {/* Two compact cards with SpotlightCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {items.map((edu, idx) => {
          const theme = EDU_THEMES[idx % EDU_THEMES.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.1, type: "spring" }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor={theme.spotlight}
                className={`h-full p-6 sm:p-7 rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-900/60 ${theme.hoverBorder} transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform ${theme.iconStyle}`}
                  >
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug">
                      {edu.degree}
                    </h3>
                    <div className={`text-sm font-bold mt-1 ${theme.accentText}`}>
                      {edu.institution}
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{edu.period}</span>
                    </div>
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
