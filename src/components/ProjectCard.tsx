"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers } from "lucide-react";

export const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-[#111] border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-emerald-500/40 transition-all duration-500 flex flex-col justify-between h-full"
    >
      <div>
        {/* Top Section: Metrics & Title */}
        <div className="flex justify-between items-start mb-6">
          <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-tighter">
              {project.metrics}
            </span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-500 transition-colors" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-zinc-500 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="pt-6 border-t border-white/5 flex items-center gap-3 mt-auto">
        <Layers className="w-4 h-4 text-emerald-500" />
        <p className="text-[11px] font-medium text-zinc-300 uppercase tracking-wide">
          Impact: <span className="text-white">{project.impact}</span>
        </p>
      </div>

      {/* Hover background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};
