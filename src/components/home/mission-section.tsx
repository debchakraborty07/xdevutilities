// src/components/home/mission-section.tsx

/* eslint-disable react/no-unescaped-entities */
import { ShieldCheck, Zap, MonitorSmartphone, Heart } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="container mx-auto px-6 py-24 max-w-auto bg-background text-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Human-centric Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground dark:text-slate-100">
              Utilities designed with <br />
              <span className="text-blue-500">privacy and speed</span> in mind.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">
              In an era of digital noise, finding a reliable workspace for small daily tasks shouldn’t feel like a chore. Xdevutilities was founded to bridge the gap between complex software and simple, effective web tools.
            </p>
          </div>

          <div className="prose dark:prose-invert text-muted-foreground dark:text-slate-400 font-medium">
            <p>
              Our philosophy is simple: <strong>Privacy by Default</strong>. Most online utilities process your sensitive data on their servers, often leaving a digital footprint behind. We changed the game by ensuring that 99% of our processing happens directly in your browser. Whether you are generating a secure password, analyzing code, or converting images, your data never leaves your device.
            </p>
            {/* <p>
              We are committed to building an ecosystem that is completely free of intrusive ads and bloated tracking scripts. Our mission is to empower developers, writers, and digital creators with high-performance tools that just work—no strings attached.
            </p> */}
            <p>
              We are committed to building an ecosystem that is easy to use, avoid complexity and easy to understand use case. We believe each and evry users will feel safe and comfortable using our tools.
            </p>
          </div>
        </div>

        {/* Right Side: Visual Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Client-Side Secure",
              desc: "Every calculation stays in your browser memory. We value your data as much as you do."
            },
            {
              icon: Zap,
              title: "Instant Performance",
              desc: "Engineered with optimized architecture to deliver results in milliseconds, even on slow networks."
            },
            {
              icon: MonitorSmartphone,
              title: "Universal Design",
              desc: "From 4K monitors to small smartphone screens, enjoy a seamless edge-to-edge experience."
            },
            {
              icon: Heart,
              title: "Community Driven",
              desc: "Our roadmap is shaped by user feedback. We build what the community needs to stay efficient."
            }
          ].map((pillar, i) => (
            <div key={i} className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-border/60 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
              <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center border border-border shadow-sm mb-4">
                <pillar.icon size={18} className="text-blue-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-foreground dark:text-slate-100 mb-2">{pillar.title}</h3>
              <p className="text-xs text-muted-foreground dark:text-slate-400 leading-relaxed font-medium">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Subtle Signature
      <div className="mt-20 pt-8 border-t border-border/40 text-center">
         <p className="text-[11px] text-slate-400 font-medium opacity-50">
           xdevutilities ecosystem • establishing trust since 2025
         </p>
      </div> */}
    </section>
  );
}