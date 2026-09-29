"use client";

import { ProfileData } from "@/data/profile";
import { ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";

interface AboutProps {
  data: ProfileData["about"];
}

const BADGE_STYLES = [
  {
    bg: "bg-fuchsia-500/10 dark:bg-fuchsia-500/15",
    text: "text-fuchsia-700 dark:text-fuchsia-300",
    border: "border-fuchsia-500/30 hover:border-fuchsia-500/70 hover:shadow-fuchsia-500/20",
    icon: "text-fuchsia-500",
  },
  {
    bg: "bg-purple-500/10 dark:bg-purple-500/15",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-500/30 hover:border-purple-500/70 hover:shadow-purple-500/20",
    icon: "text-purple-500",
  },
  {
    bg: "bg-rose-500/10 dark:bg-rose-500/15",
    text: "text-rose-700 dark:text-rose-300",
    border: "border-rose-500/30 hover:border-rose-500/70 hover:shadow-rose-500/20",
    icon: "text-rose-500",
  },
];

export function About({ data }: AboutProps) {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      aria-label="About Sudarshan P K"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-8 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
          <span className="text-xs uppercase tracking-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-rose-500 to-purple-600 dark:from-fuchsia-400 dark:via-rose-300 dark:to-purple-400">
            About
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8 font-display">
          Bridging{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-rose-500 to-purple-600 dark:from-fuchsia-400 dark:via-rose-300 dark:to-purple-400">
            automation
          </span>{" "}
          with live human handoffs.
        </h2>

        {/* Spotlight Card with mouse glow */}
        <SpotlightCard
          spotlightColor="rgba(217, 70, 239, 0.16)"
          className="p-6 sm:p-10 rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-900/60 shadow-xl backdrop-blur-md"
        >
          <div className="space-y-5 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
            {data.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Badges strip with distinct colors */}
          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 dark:text-zinc-400 mr-2">
              <ShieldCheck className="w-4 h-4 text-fuchsia-500" />
              <span>Certified Standards:</span>
            </div>
            {data.badges.map((badge, idx) => {
              const style = BADGE_STYLES[idx % BADGE_STYLES.length];
              return (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border ${style.bg} ${style.text} ${style.border} transition-all duration-300 hover:scale-105 shadow-xs cursor-default`}
                >
                  <Award className={`w-3.5 h-3.5 ${style.icon}`} />
                  <span>{badge}</span>
                </span>
              );
            })}
          </div>
        </SpotlightCard>
      </motion.div>
    </section>
  );
}
