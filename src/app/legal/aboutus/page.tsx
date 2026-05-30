// src/app/legal/aboutus/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us ",
  description: "The story behind xdevutilities—why we build private, high-performance tools for the modern web.",
  alternates: {
    canonical: 'https://www.xdevutilities.com/legal/aboutus',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-bold text-foreground dark:text-slate-100 mb-8 leading-tight">
        Building tools that respect <br /> <span className="text-blue-500">your privacy and your time.</span>
      </h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-12 text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">
        
        {/* The Problem Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Why xdevutilities exists</h2>
          <p>
            We&apos;ve all been there—searching for a simple tool to resize a photo or scan a resume, only to find websites cluttered with intrusive pop-ups, mandatory login screens, and heavy tracking scripts. Most of these &quot;free&quot; tools are actually harvesting your data behind the scenes. 
          </p>
          <p>
            xdevutilities was born out of a simple frustration. We wanted to build a place where you can get your small daily tasks done without the fear of your documents being stored or your privacy being compromised.
          </p>
        </section>

        {/* Technical Philosophy Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Our &quot;Stateless&quot; Philosophy</h2>
          <p>
            I am a developer who believes that minimalism is the ultimate sophistication. xdevutilities is built on a <strong>stateless architecture</strong>. This is a fancy way of saying that we do not have a persistent database for your files. 
          </p>
          <p>
            When you use our tools, the processing happens in temporary memory. As soon as you close your browser tab, your data is gone forever from our system. We don&apos;t want your files; we just want to help you process them efficiently.
          </p>
        </section>

        {/* Focus Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">The &quot;No-Bloat&quot; Experience</h2>
          <p>
            Our mission is simple: <strong>Input, Process, Result.</strong> 
          </p>
          <p>
            Whether you are a developer visualizing an SQL schema or a student preparing a passport photo, our platform is designed to get you in and out as quickly as possible. We focus on high-performance logic so that you get the highest quality output in milliseconds.
          </p>
        </section>

        {/* Sustainability Section (AdSense Friendly) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">How we keep the lights on</h2>
          <p>
            Building and maintaining server infrastructure for high-speed processing isn&apos;t free. To keep these tools accessible to everyone for free, we rely on non-intrusive advertisements via Google AdSense. 
          </p>
          <p>
            This allow us to cover our costs without ever resorting to selling your data or charging subscription fees. It&apos;s a transparent way to maintain a sustainable, free platform for the community.
          </p>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground dark:text-slate-100">Help us improve</h3>
          <p className="text-sm">
            This platform is continuously growing based on your feedback. If you have a tool idea or a way to make our current ones better, please reach out. Thank you for trusting xdevutilities with your professional needs.
          </p>
        </section>
      </div>
    </div>
  );
}