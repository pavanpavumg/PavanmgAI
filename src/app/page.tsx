"use client";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import PhysicsSkills from "@/components/PhysicsSkills";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import { BrainCircuit, Atom, MonitorSmartphone, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-zinc-100 selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-10 px-4 text-center">
         <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-medium mb-6 animate-pulse">
            Seeking Python / AI Engineer Roles • 2026
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-700 bg-clip-text text-transparent">
            PAVAN M G
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto font-light leading-relaxed">
            MCA Candidate @ Atria • B.Sc Physics <br />
            <span className="text-zinc-200">Turning abstract physics into intelligent code.</span>
          </p>
      </section>

      {/* 2. Biography Section */}
      <AboutMe />

      {/* 3. Experience Section */}
      <Experience />

      {/* 4. Flagship Project Focus (The Impressor) */}
      <ProjectCaseStudy />

      {/* 5. Skills Physics Lab */}
      <PhysicsSkills />

      {/* 6. Other Projects Grid */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h3 className="text-sm font-mono text-zinc-600 uppercase tracking-[0.3em]">Extended Portfolio</h3>
        </div>
        <BentoGrid>
          <BentoCard
            name="Receipt & Bill Analyzer"
            description="End-to-end OCR pipeline extracting structured financial data from raw images with SQLite storage."
            Icon={Terminal}
            className="md:col-span-2"
          />
          <BentoCard
            name="FIT-CARRIER"
            description="Job-matching platform for students. Built with Flask and focus on UX."
            Icon={MonitorSmartphone}
          />
          <BentoCard
            name="AI Internship"
            description="Developing daily AI diaries and automating enterprise LLM workflows at Pat Technologies."
            Icon={BrainCircuit}
            className="md:col-span-3"
          />
        </BentoGrid>
      </section>

      <footer className="py-20 text-center border-t border-white/5 opacity-40">
        <p className="text-xs font-mono tracking-tighter uppercase">
          Synthesized by Pavan M G • 2026 • Bengaluru, India
        </p>
      </footer>
    </main>
  );
}
