"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export const BentoGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-4">
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  description,
  Icon,
  href,
}: {
  name: string;
  className?: string;
  description: string;
  Icon: any;
  href?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#161616] border border-white/5 p-6 hover:border-emerald-500/50 transition-all duration-500",
      className
    )}
  >
    <div className="z-10">
      <Icon className="h-8 w-8 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-xl font-bold text-zinc-100 mt-4 tracking-tight">{name}</h3>
      <p className="text-zinc-500 mt-2 text-sm leading-relaxed">{description}</p>
    </div>
    
    {href && (
      <div className="mt-4 flex items-center text-emerald-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        View Project <ExternalLink className="ml-2 h-3 w-3" />
      </div>
    )}

    {/* Subtle Radial Gradient for depth */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);
