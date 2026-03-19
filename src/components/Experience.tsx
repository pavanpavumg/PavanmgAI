"use client";
import { motion } from "framer-motion";
import { Briefcase, Zap, Bot } from "lucide-react";

const edutainerWork = [
  {
    title: "AI & Generative Systems Intern",
    company: "Pat Technologies",
    period: "Feb 2026 — Present",
    focus: "Prompt Engineering & LLM Orchestration",
    points: [
      "Mastered Advanced Prompt Structuring (Role-based & Chain-of-Thought) to control LLM output precision.",
      "Automated data pipelines converting raw unstructured notes into high-standard business reports.",
      "Developed AI-powered data cleaning and categorization modules for predictive reasoning tasks.",
      "Implemented risk assessment and business communication standards using Generative AI models."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Briefcase className="text-emerald-500 w-6 h-6" />
          <h2 className="text-2xl font-mono font-bold tracking-widest uppercase text-zinc-400">
            ./professional_log_experience
          </h2>
        </div>

        {edutainerWork.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l border-emerald-500/20"
          >
            {/* The "Pulse" Marker */}
            <div className="absolute -left-[9px] top-0 h-4 w-4 bg-emerald-500 rounded-full blur-[2px] animate-pulse" />

            <div className="mb-2 flex flex-wrap justify-between items-baseline gap-2">
              <h3 className="text-2xl font-black text-white tracking-tight">
                {job.title} <span className="text-emerald-500 text-lg">@ {job.company}</span>
              </h3>
              <span className="text-xs font-mono text-zinc-500 px-3 py-1 rounded-full border border-white/5 bg-white/5">
                {job.period}
              </span>
            </div>

            <p className="text-emerald-500/70 text-sm font-mono mb-6 italic">
              Focus: {job.focus}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {job.points.map((point, i) => (
                <div key={i} className="group p-4 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/20 transition-all">
                  <div className="flex gap-3">
                    <Zap className="w-4 h-4 text-emerald-500 shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                    <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-200">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Capability Badge */}
            <div className="mt-8 flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg w-fit">
              <Bot className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">
                LLM Efficiency Optimized
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
