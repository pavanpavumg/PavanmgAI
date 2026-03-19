"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X, ExternalLink, Award, BrainCircuit, Database, Code2, MonitorSmartphone, BarChart3, Palette, Trophy, Zap } from "lucide-react";

const certificates = [
  { title: "Artificial Intelligence in Real World", org: "upGrad", date: "Dec 2025", icon: <BrainCircuit className="w-5 h-5" /> },
  { title: "Deep Learning for Developers", org: "Infosys Springboard", date: "Dec 2025", icon: <Zap className="w-5 h-5" /> },
  { title: "Python for Data Science", org: "Infosys Springboard", date: "Jul 2025", icon: <Database className="w-5 h-5" /> },
  { title: "Master Course in Full Stack", org: "Great Learning", date: "2025", icon: <Code2 className="w-5 h-5" /> },
  { title: "Hands-On Web Dev (JS)", org: "Infosys Springboard", date: "Jul 2025", icon: <MonitorSmartphone className="w-5 h-5" /> },
  { title: "Power BI for Beginners", org: "Simplilearn", date: "Dec 2025", icon: <BarChart3 className="w-5 h-5" /> },
  { title: "CICADA Hackathon (24 Hours)", org: "Atria Institute", date: "2025", icon: <Trophy className="w-5 h-5 text-yellow-500" /> },
  { title: "Adobe Graphic Designer", org: "AMD, Tamil Nadu", date: "Design", icon: <Palette className="w-5 h-5" /> },
];

export default function Certifications() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 px-4 flex justify-center">
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        className="group relative flex items-center gap-4 px-8 py-4 rounded-2xl bg-zinc-900/50 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500 shadow-2xl shadow-emerald-500/5"
      >
        <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
          <ShieldCheck className="w-6 h-6 text-emerald-500" />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Verification Required</p>
          <h3 className="text-sm font-bold text-white uppercase tracking-tight">View Professional Certifications ({certificates.length})</h3>
        </div>
        <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors ml-4" />
      </motion.button>

      {/* The Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[85vh] overflow-hidden rounded-3xl bg-[#111] border border-white/10 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-zinc-900/50">
                <div className="flex items-center gap-3">
                  <Award className="text-emerald-500 w-6 h-6" />
                  <h2 className="text-xl font-bold text-white tracking-tighter uppercase">Academic & Professional Credentials</h2>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-zinc-500" />
                </button>
              </div>

              {/* Scrollable Grid */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-emerald-500/30 transition-all group relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-emerald-500/50 group-hover:text-emerald-500 transition-colors">
                          {cert.icon}
                        </div>
                        <span className="text-[10px] font-mono text-zinc-600">{cert.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-zinc-100 group-hover:text-white mb-1 leading-tight">{cert.title}</h4>
                      <p className="text-xs text-zinc-500 font-medium uppercase tracking-tight">{cert.org}</p>
                      
                      {/* Decorative background element */}
                      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         {cert.icon}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="p-4 border-t border-white/5 bg-black/50 text-center">
                <p className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
                  Authenticated via Pavan M G Digital Portfolio Hub
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
