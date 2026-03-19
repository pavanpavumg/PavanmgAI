"use client";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  Trophy, 
  BrainCircuit, 
  Database, 
  Code2, 
  MonitorSmartphone, 
  BarChart3, 
  Palette 
} from "lucide-react";

const certificates = [
  {
    title: "Artificial Intelligence in Real World",
    org: "upGrad",
    date: "Dec 2025",
    type: "AI",
    icon: <BrainCircuit className="w-4 h-4 text-emerald-400" />
  },
  {
    title: "Deep Learning for Developers",
    org: "Infosys Springboard",
    date: "Dec 2025",
    type: "AI",
    icon: <Zap className="w-4 h-4 text-orange-400" />
  },
  {
    title: "Python for Data Science",
    org: "Infosys Springboard",
    date: "Jul 2025",
    type: "Data",
    icon: <Database className="w-4 h-4 text-blue-400" />
  },
  {
    title: "Full Stack Development Master Course",
    org: "Great Learning",
    date: "2025",
    type: "Web",
    icon: <Code2 className="w-4 h-4 text-purple-400" />
  },
  {
    title: "Hands-On Web Development (JS)",
    org: "Infosys Springboard",
    date: "Jul 2025",
    type: "Web",
    icon: <MonitorSmartphone className="w-4 h-4 text-yellow-400" />
  },
  {
    title: "Power BI for Beginners",
    org: "Simplilearn",
    date: "Dec 2025",
    type: "Data",
    icon: <BarChart3 className="w-4 h-4 text-cyan-400" />
  },
  {
    title: "CICADA Hackathon (24 Hours)",
    org: "Atria Institute (AIT)",
    date: "2025",
    type: "Honor",
    icon: <Trophy className="w-4 h-4 text-yellow-500" />
  },
  {
    title: "Adobe Graphic Designer",
    org: "AMD, Tamil Nadu",
    date: "Design",
    type: "Design",
    icon: <Palette className="w-4 h-4 text-pink-400" />
  }
];

export default function Certifications() {
  return (
    <section className="py-24 px-4 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-zinc-800" />
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.4em] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Verified_Credentials
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-5 rounded-2xl bg-[#111] border border-white/5 hover:border-emerald-500/20 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-emerald-500/10 transition-colors">
                  {cert.icon}
                </div>
                <span className="text-[10px] font-mono text-zinc-600 group-hover:text-emerald-500/50 transition-colors">
                  {cert.date}
                </span>
              </div>
              <h3 className="text-sm font-bold text-zinc-200 leading-tight mb-1 group-hover:text-white transition-colors">
                {cert.title}
              </h3>
              <p className="text-[11px] text-zinc-500 font-medium uppercase tracking-tighter">
                {cert.org}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
