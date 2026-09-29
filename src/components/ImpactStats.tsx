"use client";

import { useEffect, useRef, useState } from "react";
import { ProfileData } from "@/data/profile";
import { useInView } from "framer-motion";

interface ImpactStatsProps {
  stats: ProfileData["impactStats"];
}

const STAT_GRADIENTS = [
  "from-fuchsia-600 via-rose-500 to-purple-600 dark:from-fuchsia-400 dark:via-rose-300 dark:to-purple-300",
  "from-purple-600 via-indigo-500 to-fuchsia-500 dark:from-purple-300 dark:via-indigo-300 dark:to-fuchsia-300",
  "from-rose-600 via-pink-500 to-purple-600 dark:from-rose-400 dark:via-pink-300 dark:to-purple-300",
  "from-fuchsia-600 via-purple-600 to-pink-500 dark:from-fuchsia-300 dark:via-purple-300 dark:to-pink-300",
  "from-rose-500 via-orange-500 to-amber-500 dark:from-rose-300 dark:via-orange-300 dark:to-amber-300",
];

function StatCounter({
  target,
  displayValue,
  suffix,
  gradientClass,
}: {
  target: number;
  displayValue?: string;
  suffix: string;
  gradientClass: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let startTime: number | null = null;
    const duration = 1400;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, target]);

  return (
    <span
      ref={ref}
      className={`font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r font-display ${gradientClass}`}
    >
      {displayValue && count === target ? displayValue : count}
      {suffix}
    </span>
  );
}

export function ImpactStats({ stats }: ImpactStatsProps) {
  return (
    <section
      className="py-12 sm:py-16 border-y border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/30 relative overflow-hidden"
      aria-label="Impact and metrics summary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 divide-y-2 md:divide-y-0 md:divide-x divide-zinc-200/80 dark:divide-zinc-800/80">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center md:items-start text-center md:text-left ${
                idx > 0 ? "pt-4 md:pt-0 md:pl-6" : ""
              } ${idx === 4 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1.5 drop-shadow-xs">
                <StatCounter
                  target={stat.value}
                  displayValue={stat.displayValue}
                  suffix={stat.suffix}
                  gradientClass={STAT_GRADIENTS[idx % STAT_GRADIENTS.length]}
                />
              </div>
              <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-semibold leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
