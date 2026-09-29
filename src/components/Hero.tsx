"use client";

import { ProfileData } from "@/data/profile";
import { ProfilePhoto } from "./ProfilePhoto";
import { ArrowDown, Download, Mail, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  data: ProfileData["hero"];
}

export function Hero({ data }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden"
      aria-label="Introduction"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content - styled like reference design */}
          <div className="flex-1 text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border border-fuchsia-500/25 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-500" />
              <span>{data.title}</span>
            </motion.div>

            {/* Editorial Heading inspired by the reference design */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, type: "spring", stiffness: 120 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.12] mb-6 font-display"
            >
              I&rsquo;m <span className="text-zinc-950 dark:text-white underline decoration-fuchsia-500 decoration-wavy decoration-2 underline-offset-8">{data.name}</span>, a Product Manager in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-rose-500 to-purple-600 dark:from-fuchsia-400 dark:via-rose-300 dark:to-purple-400">
                Conversational AI
              </span>{" "}
              &amp; CX.
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, type: "spring", stiffness: 120 }}
              className="text-xl sm:text-2xl font-normal text-zinc-700 dark:text-zinc-200 leading-relaxed mb-4 max-w-2xl"
            >
              &ldquo;{data.tagline}&rdquo;
            </motion.p>

            {/* Subline matching reference: "Co-founder & CPO at Exelon Circuits..." */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, type: "spring", stiffness: 120 }}
              className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium mb-10"
            >
              Co-founder &amp; CPO at{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-rose-600 dark:from-fuchsia-400 dark:to-rose-400">
                Exelon Circuits
              </span>{" "}
              &middot; 6 years &middot; Udupi, Karnataka, India
            </motion.p>

            {/* Action Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, type: "spring", stiffness: 120 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* View My Work */}
              <a
                href={data.buttons.viewWork.href}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-rose-500 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-fuchsia-500/25 hover:shadow-2xl hover:shadow-fuchsia-500/40 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
              >
                <span>{data.buttons.viewWork.label}</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>

              {/* Download Resume */}
              <a
                href={data.buttons.downloadResume.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 hover:border-fuchsia-500/60 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 font-bold text-sm sm:text-base transition-all duration-300 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 shadow-sm"
              >
                <Download className="w-4 h-4 text-fuchsia-500 transition-transform group-hover:-translate-y-0.5" />
                <span>{data.buttons.downloadResume.label}</span>
              </a>

              {/* Get in Touch */}
              <a
                href={data.buttons.getInTouch.href}
                className="group inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl text-zinc-700 dark:text-zinc-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 font-bold text-sm sm:text-base transition-all hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
              >
                <span>{data.buttons.getInTouch.label}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Icon links */}
              <div className="flex items-center gap-2 border-l border-zinc-200 dark:border-zinc-800 pl-3 ml-1">
                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 text-zinc-600 dark:text-zinc-400 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:shadow-md hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                  aria-label="LinkedIn profile"
                  title="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={data.socials.email}
                  className="p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 text-zinc-600 dark:text-zinc-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:border-fuchsia-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Portrait Photo with Signature Offset Gradient Backing Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="flex-shrink-0"
          >
            <ProfilePhoto
              src={data.profilePhoto}
              alt={data.name}
              initials={data.initials}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
