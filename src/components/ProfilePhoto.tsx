"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfilePhotoProps {
  src: string;
  alt: string;
  initials: string;
}

export function ProfilePhoto({
  src,
  alt,
  initials,
}: ProfilePhotoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative group inline-block select-none my-4 sm:my-0">
      {/* Signature Offset Vibrant Gradient Backing Card (from reference design) */}
      <div
        className="absolute -top-3.5 -left-3.5 sm:-top-5 sm:-left-5 w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-fuchsia-600 via-rose-500 to-purple-600 opacity-90 transition-transform duration-500 ease-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 shadow-2xl shadow-fuchsia-500/25 -z-10"
        aria-hidden="true"
      />

      {/* Ambient soft glow */}
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-rose-500/15 to-purple-600/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-20"
        aria-hidden="true"
      />

      {/* Main Portrait Card */}
      <div className="relative w-64 h-80 sm:w-72 sm:h-92 md:w-80 md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 border-2 border-white dark:border-zinc-800 shadow-xl transition-transform duration-500 ease-out group-hover:scale-[1.015]">
        {!hasError ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
            className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => setHasError(true)}
            priority
          />
        ) : null}

        {/* Fallback Initials */}
        {hasError && (
          <div
            className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 text-fuchsia-400 font-bold tracking-tight"
            aria-label={alt}
          >
            <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 via-fuchsia-300 to-purple-400">
              {initials}
            </span>
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mt-2">
              Product Leader
            </span>
          </div>
        )}

        {/* Bottom subtle gradient vignette */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        {/* Live Status Tag */}
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-zinc-950/85 backdrop-blur-md border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for PM roles</span>
        </div>
      </div>
    </div>
  );
}
