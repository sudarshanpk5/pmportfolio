"use client";

import { ProfileData } from "@/data/profile";
import { Mail, Linkedin, Download, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";

interface ContactProps {
  data: ProfileData["contact"];
}

export function Contact({ data }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Contact Information"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <SpotlightCard
          spotlightColor="rgba(217, 70, 239, 0.2)"
          className="relative overflow-hidden p-8 sm:p-12 md:p-16 rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-gradient-to-b from-white via-zinc-50/90 to-zinc-100/90 dark:from-zinc-900/95 dark:via-zinc-900/90 dark:to-zinc-950/95 text-center shadow-2xl backdrop-blur-md"
        >
          {/* Animated multi-colour aurora ambient blobs inside card */}
          <div
            className="absolute -top-32 left-1/4 w-96 h-96 bg-gradient-to-tr from-fuchsia-500/25 via-rose-500/20 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-0 animate-float"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 right-1/4 w-96 h-96 bg-gradient-to-bl from-purple-500/25 via-pink-500/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0 animate-float-delayed"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border border-fuchsia-500/25 mb-6 shadow-xs hover:scale-105 transition-transform cursor-default">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-500" />
              <span>Get in Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 font-display">
              {data.heading}
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-xl mx-auto leading-relaxed">
              {data.shortLine}
            </p>

            {/* Large Action Buttons with Colourful Accents and Hover Motion */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
              {/* Email Me */}
              <a
                href={data.email}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-rose-500 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-fuchsia-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/50 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
              >
                <Mail className="w-4 h-4 transition-transform group-hover:scale-115" />
                <span>Email Me</span>
              </a>

              {/* Connect on LinkedIn */}
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 hover:border-[#0a66c2]/60 hover:text-[#0a66c2] hover:shadow-xl hover:shadow-[#0a66c2]/20 font-bold text-sm sm:text-base transition-all duration-300 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2] transition-transform group-hover:scale-115" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Download Resume */}
              <a
                href={data.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 hover:border-fuchsia-500/60 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:shadow-xl hover:shadow-fuchsia-500/20 font-bold text-sm sm:text-base transition-all duration-300 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 shadow-sm"
              >
                <Download className="w-4 h-4 text-fuchsia-500 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Location */}
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              <MapPin className="w-4 h-4 text-fuchsia-500" />
              <span>{data.location}</span>
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </section>
  );
}
