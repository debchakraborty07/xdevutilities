// src/app/tools/color-palette/components/usage-guide.jsx

import { Zap, CheckCircle2, Info, Layout, Sparkles, Wand2, Paintbrush, Compass, Award } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20">
      {/* AdSense এবং SEO-বান্ধব গভীরভাবে লেখা কালার থিওরি ব্লগ সেকশন */}
      <article className="space-y-8">
        <header className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground dark:text-slate-100 sm:text-4xl">
            Mastering Color Extraction with AI
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Color is the soul of design. Our AI-driven Palette Extractor analyzes the pixel distribution of your images to find perfectly balanced color schemes that you can use for branding, web development, or digital art.
          </p>
        </header>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Paintbrush size={22} className="text-blue-500" /> The Psychology & Importance of Color Harmony
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Every color has a distinct psychological impact on human perception. Warm tones like reds and oranges evoke energy, passion, and urgency, making them ideal for conversion-focused action buttons. Cool tones like blues and greens represent trust, stability, and growth, which is why financial institutions and wellness brands heavily rely on them. Selecting a unified color palette is critical to establishing brand authority and ensuring a professional visual identity.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our AI-driven color extractor helps you skip manual guesswork by examining the complex color relationships within real-world imagery. By uploading an inspirational photograph, nature landscape, or modern graphic, the tool instantly generates harmonized secondary and accent tones that reflect natural, human-approved palettes.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Compass size={22} className="text-emerald-500" /> Applying the 60-30-10 Rule in UI/UX Design
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Once you have extracted your colors, applying them mathematically is the key to aesthetic UI layouts. Designers widely rely on the timeless <strong>60-30-10 Rule</strong>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <span className="text-blue-500 font-bold">60%</span> Dominant Hue
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your primary color, usually a neutral background shade (white, off-white, or dark slate). It sets the overall tone of the viewport.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <span className="text-emerald-500 font-bold">30%</span> Secondary Hue
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your secondary color, used for structural elements like cards, sidebars, navigation panels, and primary text paragraphs.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <span className="text-amber-500 font-bold">10%</span> Accent Hue
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your pop color. Reserved strictly for calls-to-action (CTAs), badges, focus rings, active states, and critical notification highlights.
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            By extracting exact hex codes directly from balanced real-world sources, you avoid jarring contrasts and ensure that your brand elements automatically sit in perfect, accessible visual hierarchy.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Award size={22} className="text-rose-500" /> How AI Extraction and Color Quantization Work
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            An image contains millions of unique pixel coordinates, each with its own RGB value. To isolate a meaningful palette, our underlying algorithm performs a mathematical technique known as <strong>Color Quantization</strong>.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            By clustering pixel groups based on their statistical closeness in three-dimensional color space, our engine successfully filters out microscopic noise and unifies similar tones. The resulting vector highlights the exact focal clusters of color that define the visual weight of the source file. This guarantees that your extracted hex codes are mathematically and artistically true to the original imagery.
          </p>
        </section>
      </article>

      <div className="border-t border-slate-100 dark:border-slate-800 my-12" />

      {/* মূল গাইডলাইন আইটেম গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <GuidelineItem
          icon={<Zap className="text-blue-500" />}
          title="Instant Extraction"
          desc="Our advanced algorithm identifies dominant shades in milliseconds, providing you with a ready-to-use professional palette."
        />
        <GuidelineItem
          icon={<Sparkles className="text-emerald-500" />}
          title="Balanced Schemes"
          desc="We go beyond basic colors, extracting primary and accent tones to ensure your design remains visually harmonious."
        />
        <GuidelineItem
          icon={<Layout className="text-rose-500" />}
          title="Developer Friendly"
          desc="Get exact Hex codes that can be directly pasted into CSS, Tailwind, or Shadcn UI configurations with a single click."
        />
        <GuidelineItem
          icon={<Wand2 className="text-amber-500" />}
          title="Visual Context"
          desc="See your colors in high contrast to understand how they will look on both dark and light backgrounds."
        />
      </div>

      {/* চেকলিস্ট কার্ড */}
      <div className="bg-background text-foreground p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-100 dark:border-slate-800 space-y-8">
        <h3 className="text-xl font-bold flex items-center gap-2 text-foreground dark:text-slate-100">
          <Info className="text-blue-500 shrink-0" size={20} /> Best Results Checklist
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <p className="text-sm text-slate-600 dark:text-slate-400">Use high-resolution images for greater color depth</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <p className="text-sm text-slate-600 dark:text-slate-400">Works best with natural lighting in balanced photographs</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <p className="text-sm text-slate-600 dark:text-slate-400">Upload multiple versions for varying accent inspirations</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <p className="text-sm text-slate-600 dark:text-slate-400">Secure cloud-powered AI analysis with zero persistent storage</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuidelineItem({ icon, title, desc }) {
  return (
    <div className="space-y-3 p-2">
      <div className="w-12 h-12 bg-background text-foreground rounded-2xl flex items-center justify-center shadow-inner border border-slate-100 dark:border-slate-800">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}