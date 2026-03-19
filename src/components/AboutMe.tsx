"use client";
import { motion } from "framer-motion";
import { Terminal, Code2, GraduationCap } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="py-24 px-4 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Terminal className="text-emerald-500 w-6 h-6" />
          <h2 className="text-2xl font-mono font-bold tracking-widest uppercase text-zinc-400">
            ./exec_biography
          </h2>
        </div>

        <div className="space-y-12">
          {/* The Updated Narrative with Correct Scores */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/20 transition-all duration-500 group"
          >
            <div className="absolute -top-4 -left-4 p-3 bg-zinc-900 border border-white/10 rounded-xl group-hover:border-emerald-500/50 transition-colors">
              <GraduationCap className="text-emerald-500 w-6 h-6" />
            </div>

            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white tracking-tight">Academic Excellence</h3>
              <div className="flex flex-col items-end gap-2">
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <p className="text-[10px] font-mono text-emerald-500 font-bold uppercase">
                    MCA: 8.78 CGPA
                  </p>
                </div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  <p className="text-[10px] font-mono text-zinc-500 font-bold uppercase">
                    B.Sc: 7.79 CGPA
                  </p>
                </div>
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed font-light">
              My journey started with a <span className="text-zinc-100 font-medium text-emerald-400">B.Sc. in Physics & Computer Science</span>.
              While others see pixels, I see coordinate systems and vectors. This mathematical
              foundation allowed me to master <span className="text-zinc-100">Computer Vision</span> and
              <span className="text-zinc-100">AI Logic</span> with a precision that defines my coding style today.
            </p>
          </motion.div>

          {/* Current Focus: MCA @ Atria */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 hover:border-emerald-500/40 transition-colors group"
          >
            <div className="absolute -top-4 -right-4 p-3 bg-emerald-500 border border-emerald-500/20 rounded-xl group-hover:bg-emerald-400 transition-colors">
              <Code2 className="text-black w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">MCA @ Atria Institute of Technology</h3>
            <p className="text-zinc-400 leading-relaxed font-light">
              Currently pursuing my <span className="text-emerald-500 font-bold tracking-wider underline underline-offset-4 decoration-emerald-500/30">Master of Computer Applications</span>.
              I am focused on architecting full-stack ecosystems that aren't just functional, but
              <span className="text-zinc-100"> scalable, secure, and AI-native</span>. My internship at
              <span className="text-zinc-100 font-medium"> Pat Technologies</span> has further refined my ability to deploy production-grade LLM workflows
              under tight deadlines.
            </p>
          </motion.div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Location", val: "Bengaluru, IN" },
              { label: "Status", val: "Final Year MCA" },
              { label: "Specialty", val: "AI / Full-Stack" },
              { label: "Interests", val: "AI Agent withKannada Poetry" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-4 border border-white/5 rounded-xl bg-black/40 text-center hover:bg-zinc-800/50 transition-colors"
              >
                <p className="text-[10px] text-zinc-600 uppercase mb-1 font-mono tracking-tighter">{stat.label}</p>
                <p className="text-xs font-bold text-zinc-300">{stat.val}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
