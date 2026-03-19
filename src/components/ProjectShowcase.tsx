"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Terminal, Search, Zap, Activity } from "lucide-react";

const projects = [
  {
    title: "Autonomous Receipt & Fiscal Analyzer",
    metrics: "98% OCR Accuracy",
    description: "Architected a data pipeline to transform unstructured financial documents into relational SQLite schemas. Focused on high-speed spend categorization.",
    tags: ["Python", "Tesseract OCR", "SQLite"],
    icon: <Search className="w-5 h-5 text-emerald-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Reactive Web Data Sync",
    metrics: "< 50ms Latency",
    description: "Live data-fetch engine using async AJAX and API middleware. Optimized UI states for real-time monitoring.",
    tags: ["JS (ES6+)", "AJAX", "REST APIs"],
    icon: <Activity className="w-5 h-5 text-blue-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Context-Aware NLP Chatbot",
    metrics: "Pattern Hybrid",
    description: "Designed multi-turn NLP workflows for pattern matching and intent recognition in user support cycles.",
    tags: ["Python", "NLTK", "Flask"],
    icon: <Terminal className="w-5 h-5 text-purple-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Enterprise Image Scanner",
    metrics: "Edge-Processed",
    description: "High-fidelity scanner using OpenCV for noise reduction and thresholding to maximize OCR extraction.",
    tags: ["OpenCV", "Image Processing"],
    icon: <Cpu className="w-5 h-5 text-red-500" />,
    className: "md:col-span-1",
  },
  {
    title: "AI Business Strategy Orchestrator",
    metrics: "Process Automation",
    description: "Engineered AI workflows for business transformation. Predictive analytics to identify operational bottlenecks.",
    tags: ["AI Strategy", "Analytics"],
    icon: <Zap className="w-5 h-5 text-orange-500" />,
    className: "md:col-span-1",
  }
];

export default function ProjectShowcase() {
  return (
    <section className="py-24 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.4em] mb-4">// DEPLOYED_SOLUTIONS</h2>
          <h3 className="text-4xl font-black text-white tracking-tighter">ENGINEERING IMPACT</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative p-8 rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden ${project.className}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-emerald-500/10 transition-colors">
                  {project.icon}
                </div>
                <div className="text-[10px] font-mono text-emerald-500/50 bg-emerald-500/5 px-2 py-1 rounded-md border border-emerald-500/10">
                  {project.metrics}
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-zinc-400 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative Corner Arrow */}
              <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-zinc-800 group-hover:text-emerald-500 transition-all" />
              
              {/* Subtle Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
