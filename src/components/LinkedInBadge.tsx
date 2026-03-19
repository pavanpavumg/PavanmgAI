"use client";
import { useEffect } from "react";

export default function LinkedInBadge() {
  useEffect(() => {
    // Manually trigger the LinkedIn script once the component mounts
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script if the component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex justify-center py-12 px-4 bg-black/20">
      <div 
        className="badge-base LI-profile-badge p-4 rounded-3xl bg-[#111] border border-white/5 shadow-2xl transition-transform hover:scale-[1.02] overflow-hidden" 
        data-locale="en_US" 
        data-size="medium" 
        data-theme="dark" 
        data-type="HORIZONTAL" 
        data-vanity="pavan-m-g" 
        data-version="v1"
      >
        {/* Fallback link for SEO and slow connections */}
        <a 
          className="badge-base__link LI-simple-link text-emerald-500 font-mono text-[10px] uppercase tracking-widest" 
          href="https://in.linkedin.com/in/pavan-m-g?trk=profile-badge"
        >
          // Resolving_LinkedIn_Identity...
        </a>
      </div>
    </div>
  );
}
