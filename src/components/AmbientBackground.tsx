"use client";

export function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle clean tech dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e11d4812_1px,transparent_1px)] [background-size:32px_32px] dark:bg-[radial-gradient(#f472b618_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] opacity-70" />

      {/* Floating Magenta/Fuchsia Top-Right Orb */}
      <div className="absolute top-[8%] right-[8%] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-fuchsia-500/20 via-rose-500/15 to-purple-600/15 blur-[120px] animate-float opacity-75 dark:opacity-60" />

      {/* Electric Violet Left Orb */}
      <div className="absolute top-[35%] left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-purple-600/15 via-indigo-500/15 to-pink-500/10 blur-[130px] animate-float-delayed opacity-70 dark:opacity-50" />

      {/* Rose/Pink Bottom Orb */}
      <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-rose-500/15 via-fuchsia-500/15 to-amber-500/10 blur-[120px] animate-float opacity-65 dark:opacity-45" />
    </div>
  );
}
