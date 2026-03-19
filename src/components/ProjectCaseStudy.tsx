"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Activity, Zap } from "lucide-react";

export default function ProjectCaseStudy() {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The Problem & Logic */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase">
              AI-DRIVEN <span className="text-emerald-500 font-mono">FITNESS COACH</span>
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Bridging my <span className="text-white italic">Physics background</span> with Computer Vision. 
              This isn't just a timer; it's a real-time biomechanical analyzer that calculates 
              joint angles to ensure 100% form accuracy.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl h-fit">
                  <Activity className="text-emerald-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-tight">Pose Estimation Pipeline</h4>
                  <p className="text-sm text-zinc-500">Utilizing MediaPipe to map 33 key body landmarks at 30 FPS.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl h-fit">
                  <Cpu className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-tight">Adaptive Feedback Logic</h4>
                  <p className="text-sm text-zinc-500">Python-based heuristics that adjust difficulty based on user fatigue detected via form deviation.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The "Physics" Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 p-8 shadow-2xl"
          >
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            
            <div className="mt-8 font-mono text-xs text-emerald-400/70 space-y-2">
              <p>// Calculating Knee Angle (Physics Logic)</p>
              <p className="text-white">const angle = calculateAngle(hip, knee, ankle);</p>
              <p>if (angle &lt; 90) &#123; pushNotification("Deepen Squat"); &#125;</p>
              <div className="h-40 w-full bg-black/40 rounded-lg mt-4 flex items-center justify-center border border-emerald-500/20">
                 <span className="text-zinc-600 animate-pulse text-[10px] tracking-widest font-mono">LIVE_STREAM_ACTIVE_MOCKUP</span>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-center bg-black/50 p-4 rounded-xl border border-white/5">
                <div className="text-center">
                  <p className="text-[10px] text-zinc-500 font-mono tracking-tighter">ACCURACY</p>
                  <p className="text-lg font-bold text-emerald-500">98.2%</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-zinc-500 font-mono tracking-tighter">LATENCY</p>
                  <p className="text-lg font-bold text-blue-500">12ms</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-zinc-500 font-mono tracking-tighter">REPS</p>
                  <p className="text-lg font-bold text-white">Auto-Count</p>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
