"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquarePlus, Sparkles } from "lucide-react";

export default function LinkedInBadge() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]');
      if (existingScript) document.body.removeChild(existingScript);
    };
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent to-emerald-500/5">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Side: The CTA Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3 h-3" /> Let's Build the Future
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
            Ready to bridge <br />
            <span className="text-emerald-500">Physics & AI</span> together?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto lg:mx-0 font-light">
            I'm currently open to **Software Developer** and ** Python Developer **AI Internships** in Bengaluru or remote. Let's connect and discuss how I can bring analytical rigor to your team.
          </p>

          <a
            href="https://in.linkedin.com/in/pavan-m-g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-2xl transition-all hover:scale-105 active:scale-95"
          >
            <MessageSquarePlus className="w-5 h-5" />
            Send a Connection Request
          </a>
        </div>

        {/* Right Side: The Official Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative group"
        >
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div
            className="badge-base LI-profile-badge relative z-10 scale-110 md:scale-125"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="pavan-m-g"
            data-version="v1"
          />
        </motion.div>

      </div>
    </section>
  );
}
