"use client";

import { useState } from "react";
import { ProfileData } from "@/data/profile";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, MapPin, Calendar, Building2 } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

interface ExperienceProps {
  items: ProfileData["experience"];
}

const TIMELINE_COLORS = [
  {
    ring: "ring-fuchsia-500/30 bg-gradient-to-tr from-fuchsia-500 to-rose-400 shadow-fuchsia-500/50",
    company: "text-fuchsia-600 dark:text-fuchsia-400",
    borderHover: "hover:border-fuchsia-500/50",
    bulletColor: "bg-fuchsia-500",
    spotlight: "rgba(217, 70, 239, 0.16)",
  },
  {
    ring: "ring-purple-500/30 bg-gradient-to-tr from-purple-500 to-indigo-400 shadow-purple-500/50",
    company: "text-purple-600 dark:text-purple-400",
    borderHover: "hover:border-purple-500/50",
    bulletColor: "bg-purple-500",
    spotlight: "rgba(168, 85, 247, 0.16)",
  },
  {
    ring: "ring-rose-500/30 bg-gradient-to-tr from-rose-500 to-pink-400 shadow-rose-500/50",
    company: "text-rose-600 dark:text-rose-400",
    borderHover: "hover:border-rose-500/50",
    bulletColor: "bg-rose-500",
    spotlight: "rgba(244, 63, 94, 0.16)",
  },
];

export function Experience({ items }: ExperienceProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Work Experience"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-8 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
        <span className="text-xs uppercase tracking-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-rose-500 to-purple-600 dark:from-fuchsia-400 dark:via-rose-300 dark:to-purple-400">
          Career
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 font-display">
        Work Experience
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mb-12">
        A track record of shipping enterprise and consumer conversational products from zero to scale.
      </p>

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-12">
        {items.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;
          const hasMore = Boolean(exp.moreBullets && exp.moreBullets.length > 0);
          const colorTheme = TIMELINE_COLORS[idx % TIMELINE_COLORS.length];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, type: "spring" }}
              className="relative group"
            >
              {/* Timeline marker node with vibrant glowing gradient */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full border-2 border-white dark:border-zinc-950 ring-4 shadow-md transition-all duration-300 group-hover:scale-130 ${colorTheme.ring}`}
              />

              {/* SpotlightCard Container */}
              <SpotlightCard
                spotlightColor={colorTheme.spotlight}
                className={`p-6 sm:p-8 rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-900/60 ${colorTheme.borderHover} transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1`}
              >
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {exp.role}
                    </h3>
                    <div
                      className={`text-sm sm:text-base font-bold mt-1 flex items-center gap-1.5 ${colorTheme.company}`}
                    >
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                    <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800/60 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800/60 px-2.5 py-1 rounded-md">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                  {exp.defaultBullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${colorTheme.bulletColor} flex-shrink-0 mt-2.5 shadow-xs`}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Expanded Bullets */}
                {hasMore && (
                  <>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="mt-2.5 space-y-2.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 overflow-hidden"
                        >
                          {exp.moreBullets?.map((bullet, mIdx) => (
                            <li
                              key={`more-${mIdx}`}
                              className="flex items-start gap-2.5 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0 mt-2.5 shadow-xs" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    {/* Show more toggle button */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(idx)}
                      className="mt-5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded-lg py-1 px-2.5 bg-fuchsia-500/10 hover:bg-fuchsia-500/20"
                    >
                      <span>
                        {isExpanded
                          ? "Show fewer details"
                          : `Show more (${exp.moreBullets?.length} more points)`}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </>
                )}
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
