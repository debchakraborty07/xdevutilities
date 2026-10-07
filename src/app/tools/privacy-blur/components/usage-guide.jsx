// src/app/tools/privacy-blur/components/usage-guide.jsx

import { MousePointer2, ShieldCheck, Eraser, Download, EyeOff, ShieldAlert, Sparkles, Binary } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20 py-10 border-t border-border/60 text-foreground bg-background">

      {/* AdSense এবং SEO-বান্ধব গভীরভাবে লেখা ইমেজ সিকিউরিটি ও রিডাকশন ব্লগ সেকশন */}
      <article className="space-y-8">
        <header className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground dark:text-slate-100 sm:text-4xl">
            The Fastest Way to Redact Sensitive Data
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether it is a private email in a screenshot or a face in a public photo, our Privacy Blur tool allows you to mask sensitive information instantly. Built for professionals and privacy-conscious users, it ensures your images never leave your browser session.
          </p>
        </header>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <ShieldAlert size={22} className="text-rose-500" /> The Danger of Pseudo-Redaction: Why Standard Edits Fail
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Many users rely on standard markup utilities built into smartphone photo apps, Microsoft Word, or PDF editors to obscure sensitive credentials before sharing. They simply draw a black rectangle or increase the transparency slider over their credit card numbers, passwords, or addresses. This is known as <strong>Pseudo-Redaction</strong>.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Pseudo-redaction only obscures the visual layer; the underlying image vector coordinates and raw binary matrices often remain untouched. Technologically savvy recipients can easily reverse these transparent overlays, de-pixelate poorly applied mosaic filters, or scrape the plaintext metadata to expose your private details. Our redactor bypasses this flaw by performing irreversible bitmap operations directly onto the local canvas.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Binary size={22} className="text-blue-500" /> Gaussian Blur vs. Solid Blackout: When to Use Which?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            To provide comprehensive privacy enforcement while maintaining standard communication aesthetics, our utility supports two unique redaction methods:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <Sparkles size={16} className="text-blue-500" /> Gaussian Blur Mode
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Applies an algebraic kernel sweep over the target coordinates, blending neighboring pixel properties together. This is ideal for screenshots of software layouts, profile pictures, and design boards where you want to signal that a layout exists without revealing specific textual content.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <EyeOff size={16} className="text-rose-500" /> Solid Blackout Mode
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Replaces all pixel color channels within the bounding box with pure hex #000000 black values. This mode is strongly recommended for ultra-sensitive credentials, signatures, social security codes, bank routing details, and passport serial fields.
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            By completely overwriting the bitmap array of the targeted selection area before exporting, we ensure that the blurred or blacked-out content is mathematically impossible to reconstruct, even using state-of-the-art AI-deblurring models.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <ShieldCheck size={22} className="text-emerald-500" /> Corporate Compliance and Cloud-Free Redaction
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            In modern corporate ecosystems, sending raw administrative screenshots or server diagrams to online servers for processing represents a severe risk of information leak and violates standard compliance guidelines such as HIPAA and GDPR.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Because xdevutilities runs its masking matrices entirely within your browser&apos;s sandboxed execution memory, your photos, diagrams, and logs never cross the network stack. This provides corporate compliance teams and digital security auditors with complete operational peace of mind.
          </p>
        </section>
      </article>

      <div className="border-t border-slate-100 dark:border-slate-800 my-12" />

      {/* মূল গাইডলাইন আইটেম গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 shadow-sm">
            <MousePointer2 size={24} />
          </div>
          <h3 className="text-lg font-bold text-foreground">Intuitive Drawing</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Simply click and drag your mouse or touch screen over any area to apply the mask. No complex software or setup required.
          </p>
        </div>
        <div className="space-y-3">
          <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-lg font-bold text-foreground">100% Client-Side</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Your photos are processed inside your browser canvas. We never upload your files to external servers, guaranteed.
          </p>
        </div>
        <div className="space-y-3">
          <div className="w-12 h-12 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center justify-center text-rose-500 shadow-sm">
            <Eraser size={24} />
          </div>
          <h3 className="text-lg font-bold text-foreground">Dual Masking Modes</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Choose between a professional Gaussian Blur for visual aesthetics or a Solid Blackout mask for total confidential secrecy.
          </p>
        </div>
        <div className="space-y-3">
          <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center text-amber-500 shadow-sm">
            <Download size={24} />
          </div>
          <h3 className="text-lg font-bold text-foreground">High-Res Export</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Download your redacted images in high-quality PNG format, ready to be safely shared on social media, tickets, or docs.
          </p>
        </div>
      </div>
    </div>
  );
}