// src\app\legal\aboutus\page.jsx

/* eslint-disable react/no-unescaped-entities */
import React from "react";

export const metadata = {
  title: "About Us | Our Story & Philosophy | xdevutilities",
  description: "Discover the story behind xdevutilities—why we build private, highly secure, and performance-driven web tools for modern creators.",
  alternates: {
    canonical: 'https://www.xdevutilities.com/legal/aboutus',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl min-h-screen text-foreground bg-background">
      <h1 className="text-4xl sm:text-5xl font-bold text-foreground dark:text-slate-100 mb-8 leading-tight">
        Building tools that respect <br /> <span className="text-blue-500">your privacy and your time.</span>
      </h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-12 text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">

        {/* The Problem Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Why xdevutilities Exists</h2>
          <p>
            We&apos;ve all been there—searching for a simple tool to resize a photo or scan a resume, only to find websites cluttered with intrusive pop-ups, mandatory login walls, and heavy background tracking scripts. Unfortunately, many of these &quot;free&quot; utilities are silently harvesting and commercializing your metadata behind the scenes.
          </p>
          <p>
            xdevutilities was established to break this compromise. We wanted to build a secure, unified workspace where developers, writers, and digital creators can complete their small daily transactions quickly, without the ongoing anxiety of document logging or privacy violations.
          </p>
        </section>

        {/* Technical Philosophy Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Our &quot;Stateless&quot; Security Model</h2>
          <p>
            We are an independent group of software engineers who believe that minimalism is the ultimate technical sophistication. xdevutilities is engineered strictly on a <strong>stateless processing model</strong>.
          </p>
          <p>
            When you run tasks through our clients, all file parsing occurs inside temporary, volatile browser or server RAM. The moment you complete your download or terminate your browser session, all operational logs are immediately purged. We do not maintain historical storage systems for your uploaded materials.
          </p>
        </section>

        {/* Focus Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">The &quot;No-Bloat&quot; Operational Standard</h2>
          <p>
            Our baseline objective is straightforward: <strong>Input, Process, Result.</strong>
          </p>
          <p>
            Whether you are a developer compiling SQL creation schema into Mermaid layouts, or a traveler preparing passport-compliant crop dimensions, our interfaces are designed to minimize friction. We focus entirely on optimized backend logic to serve high-definition asset exports in milliseconds.
          </p>
        </section>

        {/* Sustainability Section (AdSense Friendly) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">How We Keep the Lights On</h2>
          <p>
            Securing and hosting scalable cloud networks to support fast client processes requires consistent infrastructure maintenance. To keep these premium utilities accessible for everyone at zero subscription cost, we display non-intrusive, curated ads via Google AdSense.
          </p>
          <p>
            This operational model allows us to easily offset running server expenses without ever resorting to paywalls, subscription models, or user data trade-offs. It is a highly ethical, transparent way to maintain a reliable platform for global digital communities.
          </p>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground dark:text-slate-100">Help Us Grow and Evolve</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            This platform is consistently optimized based on direct community suggestions. If you have a specific tool idea, visual feedback, or optimization strategies, please communicate with us. Thank you for choosing xdevutilities as your preferred technical helper.
          </p>
        </section>
      </div>
    </div>
  );
}