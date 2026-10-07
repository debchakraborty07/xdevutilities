// src/components/home/mission-section.jsx

import { ShieldCheck, Zap, MonitorSmartphone, Heart } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="container mx-auto px-6 py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Side: Human-centric Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold  text-foreground">
              Utilities engineered with <br />
              <span className="text-blue-500">privacy and performance</span> in mind.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium leading-relaxed">
              In an era of bloated software, finding a fast, dependable workspace for everyday technical tasks shouldn’t feel like a chore. Xdevutilities bridges the gap between heavy software and simple, distraction-free web tools.
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
            <p>
              Our philosophy is simple: <strong>Zero Persistent Footprint</strong>. We prioritize local in-browser processing wherever technically possible, and strictly maintain stateless, RAM-only execution for our cloud converters. We never sell, log, or build behavioral profiles with your files or text.
            </p>
            <p>
              We are dedicated to building a minimalist ecosystem that respects your workflow, eliminates unnecessary steps, and keeps your sensitive data uncompromised.
            </p>
          </div>
        </div>

        {/* Right Side: Visual Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              icon: ShieldCheck,
              title: "Privacy First Architecture",
              desc: "Designed with client-side execution and ephemeral zero-storage cloud processing pipelines."
            },
            {
              icon: Zap,
              title: "Instant Performance",
              desc: "Lightweight, optimized tool engines engineered to deliver instant results without bloated ads."
            },
            {
              icon: MonitorSmartphone,
              title: "Responsive Canvas",
              desc: "From widescreen 4K displays to mobile viewports, enjoy a cohesive and predictable UI."
            },
            {
              icon: Heart,
              title: "Built for Developers",
              desc: "Crafted to simplify repetitive tasks—from schema mapping and color analysis to image redaction."
            }
          ].map((pillar, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 bg-card text-card-foreground rounded-3xl border border-border shadow-sm hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center border border-border shadow-sm mb-4">
                <pillar.icon size={18} className="text-blue-500" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}