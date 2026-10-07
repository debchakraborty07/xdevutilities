// src/app/tools/passport-photo/components/usage-guide.jsx

import { Zap, CheckCircle2, Info, Camera, EyeOff, UserSquare, Sun, Scale, HelpCircle } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20">

      {/* AdSense এবং SEO-বান্ধব তথ্যবহুল পাসপোর্ট ফটো ও বায়োমেট্রিক স্ট্যান্ডার্ড ব্লগ */}
      <article className="space-y-8">
        <header className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground dark:text-slate-100 sm:text-4xl">
            Standard Passport Photo Requirements
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our Passport Photo Maker is designed to meet international standards for online visa, passport, and ID applications. To ensure your photo is accepted by official authorities, follow these essential guidelines.
          </p>
        </header>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Scale size={22} className="text-blue-500" /> Biometric Compliance & International ICAO Standards
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Global border security and government immigration systems rely heavily on automated biometric verification systems. Most official visa and passport applications are scanned by software that aligns with the International Civil Aviation Organization (ICAO) guidelines. This automated scanner checks the structural geometry of your face—such as the exact distance between your pupils, the vertical alignment of your nose, and the width of your mouth.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Any misalignment, shadows, or obstruction of your primary biometric landmarks can trigger an automatic application rejection. Our AI-driven processing engine automatically calibrates your photo to ensure standard face-to-image ratios, proper eye alignment, and correct framing so that your application passes automated portal gates without manual processing delays.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Sun size={22} className="text-emerald-500" /> The Physics of Portrait Lighting and Shadow Control
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            One of the most frequent reasons visa photos are rejected by government portals is inadequate lighting or uneven background shading. Standard biometric scans require high-contrast separation between your face and the backdrop, with specific lighting parameters:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Even Contrast
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ensure the light source is directly in front of you. Sidelights cause harsh shadows on one half of the face, hiding facial contours.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Neutral Background
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A plain white or off-white background is universally required. Textured wallpapers or cluttered backgrounds fail biometric isolation.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                No Flash Reflection
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Direct camera flash can cause specular reflection, shiny skin spots, or red-eye artifacts that corrupt digital scan metrics.
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            To achieve ideal results, sit opposite a natural window light source during daytime or set up uniform ambient lighting that covers both left and right facial profiles equally.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <HelpCircle size={22} className="text-rose-500" /> Standard Digital Crop Ratios
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you are uploading a photo to the US state department online system, the Schengen visa portal, or an Indian OCI passport gateway, the image needs to be cropped to strict proportions. For example, standard digital visa submissions require an aspect ratio where your head (from the chin to the top of the hair) occupies exactly <strong>50% to 69% of the overall image height</strong>.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our online maker processes the image file, crops out unnecessary body spacing, and scales the image canvas smoothly so that your biometric features remain perfectly proportional and crisp under varying DPI scales.
          </p>
        </section>
      </article>

      <div className="border-t border-slate-100 dark:border-slate-800 my-12" />

      {/* মূল গাইডলাইন আইটেম গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <GuidelineItem
          icon={<Camera className="text-blue-500" />}
          title="Lighting & Background"
          desc="Use a plain white or off-white background. Ensure even lighting on your face without any harsh shadows or red-eye effects."
        />
        <GuidelineItem
          icon={<UserSquare className="text-emerald-500" />}
          title="Face Position"
          desc="Look directly at the camera with a neutral expression. Your head should be centered and occupy 70-80% of the photo."
        />
        <GuidelineItem
          icon={<EyeOff className="text-rose-500" />}
          title="Glasses & Headwear"
          desc="Avoid wearing tinted glasses or large frames. Headwear is only allowed for religious reasons, provided it doesn't obscure the face."
        />
        <GuidelineItem
          icon={<Zap className="text-amber-500" />}
          title="Image Resolution"
          desc="Our engine automatically optimizes your photo to 300x300 pixels at high DPI, perfect for digital submission portals."
        />
      </div>

      {/* চেকলিস্ট কার্ড */}
      <div className="bg-card text-card-foreground p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-border space-y-8 shadow-sm">
        <h3 className="text-xl font-bold flex items-center gap-2 text-foreground dark:text-slate-100">
          <Info className="text-blue-500" size={20} /> Professional Checklist
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <p className="text-sm text-slate-600 dark:text-slate-400">Keep eyes open and clearly visible</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <p className="text-sm text-slate-600 dark:text-slate-400">No hair covering the forehead or eyebrows</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <p className="text-sm text-slate-600 dark:text-slate-400">High contrast between face and background</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <p className="text-sm text-slate-600 dark:text-slate-400">Recent photo (taken within the last 6 months)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuidelineItem({ icon, title, desc }) {
  return (
    <div className="space-y-3 p-2">
      <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center border border-border shadow-sm">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-foreground dark:text-slate-100">
        {title}
      </h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}