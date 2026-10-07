// src/app/tools/code-to-image/components/usage-guide.jsx

import { Zap, Share2, Sparkles, ShieldCheck, Terminal, Eye, Award, Heart } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-16">
      {/* AdSense ফ্রেন্ডলি তথ্যবহুল ব্লগ সেকশন */}
      <article className="space-y-8">
        <header className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground dark:text-slate-100 sm:text-4xl">
            The Ultimate Guide to Visual Code Sharing
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            In the modern developer ecosystem, writing clean code is only half the battle. Presenting your ideas, tutorials, and snippets in an elegant, engaging, and readable format is essential for growing an audience, educating peers, and building a professional personal brand.
          </p>
        </header>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Why Visual Snippets Dominate Social Media & Technical Blogs</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Copy-pasting plain text into platform-specific editors like Twitter/X or LinkedIn often strips away critical syntax highlighting. Without proper colors to differentiate variables, loops, keywords, and strings, code becomes incredibly hard to scan and digest. This creates cognitive load for the reader.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our <strong>Code to Image Converter</strong> solves this by rendering your exact source code with professional-grade themes inside a high-resolution, pixel-perfect container. Technical articles and posts containing structured visual code snippets receive significantly higher engagement, retweets, and bookmarks compared to standard raw text blocks.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Aesthetic Anatomy of a Perfect Code Snippet</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            To create a code image that stops users from scrolling past, you must balance several visual parameters:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <Terminal size={16} className="text-blue-500" /> Layout and Spacing
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ensure proper indentation. Avoid long horizontal lines that require vertical cropping or small font scaling.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <Eye size={16} className="text-emerald-500" /> High Contrast
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Use dark themes combined with bright, energetic gradients to make the snippet pop on white mobile feeds.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <Award size={16} className="text-amber-500" /> macOS Window Style
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The classic window controls add a familiar desktop shell look that cues the viewer that they are reading premium technical material.
              </p>
            </div>
          </div>
        </section>
      </article>

      <div className="border-t border-slate-100 dark:border-slate-800 my-12" />

      {/* ফিচারের গ্রিড সেকশন */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <GuideItem
          icon={<Zap className="text-amber-500" />}
          title="Instant High-Res Export"
          desc="Export your snippets in 3x resolution (Retina-ready) to ensure crystal clear text on ultra-high-definition displays and social feeds."
        />
        <GuideItem
          icon={<Sparkles className="text-blue-500" />}
          title="Custom Gradients"
          desc="Select from five distinct designer gradients—including sunset tones and dark slate—or a pure minimal backdrop to match your personal aesthetic."
        />
        <GuideItem
          icon={<Share2 className="text-emerald-500" />}
          title="Social Network Optimized"
          desc="Engineered aspect ratios fit beautifully into LinkedIn updates, blog cover images, and X threads without awkward automatic cropping."
        />
        <GuideItem
          icon={<ShieldCheck className="text-indigo-500" />}
          title="100% Client-Side Privacy"
          desc="Your raw source code stays strictly in your browser. We never upload or store any of your sensitive snippets or keys on external servers."
        />
      </div>

      {/* প্রো টিপস ও সেরা প্র্যাকটিস সেকশন */}
      <div className="bg-background text-foreground p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-100 dark:border-slate-800 space-y-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Heart size={18} className="text-rose-500 fill-rose-500" /> Pro Tips for Designing Perfect Code Images
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Follow these time-tested guidelines to maximize the educational value and visual appeal of your shared technical diagrams:
        </p>
        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold shrink-0">01.</span> Keep snippets short (under 15–20 lines) for better readability and layout scrolling on mobile devices.
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold shrink-0">02.</span> Write clean, self-explanatory code comments to highlight the core execution logic in the image itself.
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold shrink-0">03.</span> Select a high-contrast gradient frame to make your snippet pop on both light and dark social feeds.
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold shrink-0">04.</span> Verify the programming language selection so the syntax highlighting maps correctly for readers.
          </li>
        </ul>
      </div>
    </div>
  );
}

function GuideItem({ icon, title, desc }) {
  return (
    <div className="space-y-3">
      <div className="w-12 h-12 bg-background text-foreground rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-800">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-foreground">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}