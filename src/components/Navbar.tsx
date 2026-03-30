"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const socialLinks = [
  { 
    name: "GitHub", 
    href: "https://github.com/pavanpavumg/",
    icon: <Github className="w-4 h-4" /> 
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/pavan-m-g/",
    icon: <Linkedin className="w-4 h-4" /> 
  },
  { 
    name: "Email", 
    href: "mailto:[pavanmg9964@gmail.com]", 
    icon: <Mail className="w-4 h-4" /> 
  },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-2xl"
    >
      <div className="flex items-center justify-between px-6 py-3 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl">
        {/* Brand/Name Logo */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-black tracking-tighter text-white uppercase">
            Pavan.Dev
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-emerald-500 transition-colors duration-300"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
          
          <div className="h-4 w-px bg-white/10" />

          {/* Resume Quick-Access */}
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all group">
            <FileText className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[10px] font-bold text-emerald-500 uppercase">CV</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
