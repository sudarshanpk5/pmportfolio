import { profileData } from "@/data/profile";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { About } from "@/components/About";
import { WhatIDo } from "@/components/WhatIDo";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AmbientBackground } from "@/components/AmbientBackground";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero data={profileData.hero} />

        {/* 2. Impact Stats Strip */}
        <ImpactStats stats={profileData.impactStats} />

        {/* 3. About */}
        <About data={profileData.about} />

        {/* 4. What I Do (Core Competencies) */}
        <WhatIDo competencies={profileData.coreCompetencies} />

        {/* 5. Selected Projects */}
        <Projects data={profileData.projects} />

        {/* 6. Experience */}
        <Experience items={profileData.experience} />

        {/* 7. Skills */}
        <Skills skills={profileData.skills} />

        {/* 8. Education */}
        <Education items={profileData.education} />

        {/* 9. Contact */}
        <Contact data={profileData.contact} />
      </main>

      {/* 10. Footer */}
      <Footer />
    </>
  );
}
