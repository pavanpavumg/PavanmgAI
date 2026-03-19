"use client";
import PhysicsSkills from "@/components/PhysicsSkills";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import { ProjectCard } from "@/components/ProjectCard";

const projectData = [
  {
    title: "Autonomous Receipt & Fiscal Analyzer",
    metrics: "98% OCR Accuracy",
    description: "Architected an end-to-end data pipeline to transform unstructured financial documents into relational SQLite schemas. Engineered for high-speed spend categorization and fiscal trend analysis.",
    tags: ["Python", "Streamlit", "Tesseract OCR", "SQLite"],
    impact: "Reduced manual data entry time by 85% for personal expense tracking."
  },
  {
    title: "Reactive Web Data Synchronizer",
    metrics: "< 50ms Latency",
    description: "Developed a live data-fetch engine using asynchronous AJAX and custom API middleware. Eliminated page reloads by implementing state-driven UI updates for real-time monitoring.",
    tags: ["JavaScript (ES6+)", "AJAX", "REST APIs", "Node.js"],
    impact: "Optimized bandwidth by 40% through selective data polling logic."
  },
  {
    title: "Context-Aware NLP Conversationalist",
    metrics: "Rule-Based + ML Hybrid",
    description: "Designed a multi-turn chatbot utilizing Natural Language Processing (NLP) techniques. Implemented pattern matching and intent recognition for automated user support workflows.",
    tags: ["Python", "NLTK", "Flask", "Regex"],
    impact: "Handled 200+ unique intent variations with zero-latency response."
  },
  {
    title: "Enterprise Image Scanner (OCR+)",
    metrics: "Edge-Processed AI",
    description: "Built a high-fidelity document scanner powered by Computer Vision. Optimized image preprocessing (thresholding, noise reduction) to maximize OCR extraction from low-light captures.",
    tags: ["OpenCV", "Python", "OCR", "Image Processing"],
    impact: "Enabled digitization of physical archives with structured metadata tagging."
  },
  {
    title: "AI Business Strategy Orchestrator",
    metrics: "Process Automation",
    description: "Engineered AI-driven workflows for business transformation. Leveraged predictive analytics to identify operational bottlenecks and automate repetitive decision-making cycles.",
    tags: ["AI Strategy", "Predictive Analytics", "Process Mining"],
    impact: "Increased operational efficiency by 30% through intelligent task routing."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-zinc-100 selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-10 px-4 text-center">
         <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-medium mb-6 animate-pulse">
            Seeking Python / AI Engineer Roles • 2026
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-700 bg-clip-text text-transparent">
            PAVAN M G
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto font-light leading-relaxed">
            MCA Candidate @ Atria • B.Sc Physics <br />
            <span className="text-zinc-200">Turning abstract physics into intelligent code.</span>
          </p>
      </section>

      {/* 2. Biography Section */}
      <AboutMe />

      {/* 3. Experience Section */}
      <Experience />

      {/* 4. Capabilities Matrix (Skills) */}
      <PhysicsSkills />

      {/* 5. Certifications Section (Modal Trigger) */}
      <Certifications />

      {/* 6. Flagship Project Focus (The Impressor) */}
      <ProjectCaseStudy />

      {/* 7. Extended Portfolio Grid */}
      <section className="py-24 bg-black/50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-sm font-mono text-zinc-600 uppercase tracking-[0.3em] mb-4">Extended Portfolio</h3>
            <h2 className="text-4xl font-black text-white tracking-tight">ENGINEERING LAB</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5 opacity-40">
        <p className="text-xs font-mono tracking-tighter uppercase">
          Synthesized by Pavan M G • 2026 • Bengaluru, India
        </p>
      </footer>
    </main>
  );
}
