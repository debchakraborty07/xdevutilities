// src/app/legal/licenses/page.jsx

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Scale,
  Code2,
  Cpu,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Licenses & Attribution | Open Source & Legal | xdevutilities",
  description:
    "Review open-source attributions, third-party software licenses (MIT, Apache 2.0, ISC), and proprietary code standards powering xdevutilities.",
  alternates: {
    canonical: "https://www.xdevutilities.com/legal/licenses",
  },
};

export default function LicensesPage() {
  const openSourceLibraries = [
    {
      name: "Next.js & React",
      license: "MIT License",
      role: "High-performance hybrid server-rendered framework and component lifecycle engine.",
    },
    {
      name: "Tailwind CSS",
      license: "MIT License",
      role: "Utility-first design framework powering our responsive, zero-runtime UI styling.",
    },
    {
      name: "Firebase Web SDK",
      license: "Apache 2.0",
      role: "Secures optional developer authentication sessions and profile tokenization.",
    },
    {
      name: "Mermaid.js",
      license: "MIT License",
      role: "Declarative diagramming parser used to compile raw SQL schemas into visual ER diagrams.",
    },
    {
      name: "Prism.js",
      license: "MIT License",
      role: "Multi-language lexical token parser driving accurate code syntax highlighting.",
    },
    {
      name: "html-to-image",
      license: "MIT License",
      role: "Client-side SVG/Canvas rasterizer enabling high-resolution PNG asset rendering.",
    },
    {
      name: "Lucide Icons",
      license: "ISC License",
      role: "Clean, accessible SVG icon primitives utilized across navigational interfaces.",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 max-w-4xl min-h-screen text-foreground bg-background font-sans">

      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} /> Back to utilities
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-3 mb-12 border-b border-border pb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
          <Scale size={13} />
          <span>Open Source & Software Attribution</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Licenses & <span className="text-blue-500">Legal Attribution</span>
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground font-medium">
          Last Updated: October 2026 • Platform Revision: 2026.4
        </p>
      </header>

      {/* Content Body */}
      <div className="space-y-12 text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed">

        <p className="text-base leading-relaxed">
          Transparency is a foundational principle at <strong className="text-foreground">xdevutilities</strong>. Our platform combines bespoke stateless algorithms maintained by <strong>Debojyoti Chakraborty</strong> with battle-tested open-source libraries maintained by the global developer community. We believe in strict compliance with software licenses and giving credit where it is due.
        </p>

        {/* Section 1: Proprietary Assets */}
        <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
          <div className="flex items-center gap-2.5 text-foreground font-bold text-lg sm:text-xl">
            <Cpu size={20} className="text-blue-500" />
            <h2>1. Proprietary Architecture & Logic</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The unique <strong>Stateless Execution Pipeline</strong>, custom parsing heuristics for our <em>ATS Resume Scanner</em>, local HTML5 Canvas pixel redaction logic, and the custom SQL-to-Mermaid conversion pipelines are the proprietary engineering assets of xdevutilities.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            While these utilities are provided completely free for personal, educational, and commercial workflows without paywalls, the underlying proprietary algorithms, UI patterns, and brand assets may not be cloned, scraped, or republished without written authorization.
          </p>
        </section>

        {/* Section 2: Open Source Attribution */}
        <section className="space-y-5">
          <div className="flex items-center gap-2.5 text-foreground font-bold text-xl">
            <Code2 size={22} className="text-emerald-500" />
            <h2>2. Open Source Software Dependencies</h2>
          </div>
          <p className="text-sm">
            We are deeply grateful to the open-source authors and maintainers whose libraries help make xdevutilities resilient, lightweight, and fast. The primary dependencies utilized across our frontend and client workflows include:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 not-prose">
            {openSourceLibraries.map((lib) => (
              <div
                key={lib.name}
                className="p-5 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between space-y-2"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-foreground text-sm">{lib.name}</h3>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border">
                      {lib.license}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {lib.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Third-Party Cloud Infrastructure */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            3. Third-Party Infrastructure & Cloud Services
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our processing workflows utilize containerized serverless microservices for specific resource-intensive tasks (such as PDF metadata extraction and cryptographic cipher generation). All third-party cloud infrastructure is operated in strict compliance with the respective provider terms of service, ensuring complete statelessness and data isolation.
          </p>
          <p className="text-xs text-muted-foreground italic">
            *All brand names, registered trademarks, and logos mentioned herein remain the property of their respective trademark holders.
          </p>
        </section>

        {/* Section 4: Licensing Inquiries */}
        <section className="p-6 sm:p-8 bg-muted/40 rounded-3xl border border-border space-y-3">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg">
            <Mail size={18} className="text-primary" />
            <h2>4. Licensing Inquiries & Collaborations</h2>
          </div>
          <p className="text-sm leading-relaxed">
            If you represent an open-source project and require attribution corrections, or if you are interested in commercial API partnerships, feel free to contact us directly:
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
            <Link
              href="/legal/contact"
              className="text-primary hover:underline underline-offset-4"
            >
              Open Support Desk Ticket →
            </Link>
            <a
              href="mailto:support@xdevutilities.com"
              className="text-primary hover:underline underline-offset-4"
            >
              support@xdevutilities.com
            </a>
            <Link
              href="/legal/terms"
              className="text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href="/legal/privacy"
              className="text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}