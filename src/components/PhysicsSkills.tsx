"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Cpu, Brain, Database, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Core Engineering",
    icon: <Cpu className="w-4 h-4" />,
    skills: [
      { name: "Python", color: "from-blue-500/20 to-blue-400/10" },
      { name: "Flask", color: "from-white/20 to-white/5" },
      { name: "SQL", color: "from-cyan-500/20 to-cyan-400/10" },
      { name: "JavaScript", color: "from-yellow-500/20 to-yellow-400/10" },
    ],
  },
  {
    title: "Vision & ML",
    icon: <Brain className="w-4 h-4" />,
    skills: [
      { name: "OpenCV", color: "from-red-500/20 to-red-400/10" },
      { name: "MediaPipe", color: "from-emerald-500/20 to-emerald-400/10" },
      { name: "Deep Learning", color: "from-purple-500/20 to-purple-400/10" },
    ],
  },
  {
    title: "AI & Data Architecture",
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: "LLM Orchestration", color: "from-orange-500/20 to-orange-400/10" },
      { name: "RAG/Vector DB", color: "from-orange-600/20 to-orange-400/10" },
    ],
  },
  {
    title: "Modern Web (MCA Focus)",
    icon: <Globe className="w-4 h-4" />,
    skills: [
      { name: "Next.js 15", color: "from-zinc-100/20 to-zinc-100/5" },
      { name: "ReactJs", color: "from-blue-600/20 to-blue-300/10" },
      { name: "Git/GitHub", color: "from-zinc-500/20 to-zinc-400/10" },
    ],
  },
];

export default function PhysicsSkills() {
  return (
    <section className="py-24 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <p className="text-emerald-500 font-mono text-xs tracking-[0.3em] mb-2 uppercase">Capabilities Matrix</p>
            <h2 className="text-4xl font-black tracking-tighter text-white">CAPABILITIES MATRIX</h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-zinc-600 text-[10px] font-mono leading-tight uppercase">
              // System Load: Optimized <br />
              // Logic Processing: Active
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/30 transition-all group lg:min-h-[220px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-6 text-zinc-500 group-hover:text-emerald-500 transition-colors">
                  {category.icon}
                  <span className="text-[10px] font-bold uppercase tracking-widest leading-none">{category.title}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.05 }}
                      className={cn(
                        "px-3 py-1.5 rounded-lg border border-white/5 text-xs font-medium text-zinc-300 bg-gradient-to-br cursor-default hover:text-white transition-all shadow-sm",
                        skill.color
                      )}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle Background Detail */}
        <div className="mt-12 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>
    </section>
  );
}
