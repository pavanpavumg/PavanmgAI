"use client";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import ProjectShowcase from "@/components/ProjectShowcase";
import PhysicsSkills from "@/components/PhysicsSkills";
import ChatAssistant from "@/components/ChatAssistant";
import LinkedInBadge from "@/components/LinkedInBadge";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-zinc-100 selection:bg-emerald-500/30 overflow-x-hidden">

      {/* 1. Hero (The Hook) */}
      <section className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 text-white">
          PAVAN M G
        </h1>
        <p className="text-emerald-500 font-mono text-xs tracking-widest uppercase">
          Software Developer | AI(LLM Orchestration) | MCA Candidate @ Atria
        </p>
      </section>

      {/* 2. Recruiter Funnel Flow */}
      <AboutMe />
      <Experience />
      <Certifications />
      <ProjectShowcase />
      <PhysicsSkills />

      {/* 3. The Ultimate Closing (Conversion Zone) */}
      <LinkedInBadge />

      {/* Persistent AI layer */}
      <ChatAssistant />

      <footer className="py-20 text-center border-t border-white/5 opacity-30">
        <p className="text-[10px] font-mono text-zinc-700 tracking-[0.5em] uppercase">
          Synthesized in Bengaluru • 2026
        </p>
      </footer>
    </main>
  );
}
