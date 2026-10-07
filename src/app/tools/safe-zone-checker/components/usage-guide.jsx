// src/app/tools/safe-zone-checker/components/usage-guide.jsx

import { Smartphone, Monitor, Layout, Target, AlertTriangle, Layers, Maximize, Eye } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20 py-10 border-t border-border/60 text-foreground bg-background">

      {/* Search Engine and AdSense Friendly Technical Design Article */}
      <article className="space-y-8">
        <header className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground dark:text-slate-100 sm:text-4xl">
            Understanding Social Media Display Rules
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Designing a social media banner is tricky. While your desktop monitor shows a wide, cinematic image, a mobile device often crops the sides or covers parts of the image with a profile picture. Our Safe Zone Checker helps you visualize these hidden &quot;Danger Zones&quot; instantly, ensuring your brand message is never lost.
          </p>
        </header>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Layers size={22} className="text-blue-500" /> The Responsive Canvas: Why Viewports Shear Static Layouts
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Modern social application platforms use fluid grid frameworks and dynamic viewport adapters to keep their user interfaces clean on different screens. When you upload a cover art or channel background, the hosting server applies CSS styling properties like <code>object-fit: cover</code> to scale the asset dynamically across mobile, desktop, and tablet displays.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            This responsive scaling shears the horizontal boundaries of your graphic on narrow viewports, while vertically squeezing the margins on wide cinematic monitors. For example, a background image designed statically at a fixed aspect ratio may look perfect in your design software, but it will lose up to <strong>30% of its left and right boundaries</strong> once rendered inside a native smartphone app container.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Maximize size={22} className="text-emerald-500" /> The Profile Overlap Trap: Static Graphics vs. Floating UI Nodes
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Beyond cropping boundaries, designers must plan for dynamic overlay obstacles—specifically, floating user profile pictures and interface buttons. On professional platforms like LinkedIn or social feeds like Twitter (X), your circular avatar is modeled as a floating HTML element with viewport-dependent styling parameters:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Mobile Floating
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Avatars shift to the absolute horizontal center or top-left edge depending on layout properties, covering text clusters.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Desktop Offset
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Avatars dock to the side on high-DPI monitors, creating asymmetrical obstruction points in your graphic quadrants.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                System Overlays
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Platforms add system badges, action icons, and share toggles directly over header graphics inside tablet viewports.
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Failing to map these floating interface structures frequently results in core visual elements—such as enterprise logos, event taglines, or brand values—sitting directly underneath the user avatar. Utilizing mathematical boundary grids ensures your message remains unobstructed across all display configurations.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Eye size={22} className="text-rose-500" /> Strategic Alignment and the Anchor Center Rule
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            The most reliable strategy to guarantee multidevice visibility is to use <strong>Anchor Center Alignment</strong>. By packing all text layers, conversion links, call-to-action details, and facial features inside the central cross-platform safe quadrant, you establish a firm layout anchor.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our Social Media Safe Zone Checker models these parameters dynamically. By overlaying platform-specific bounding boxes over your custom image file, the checker lets you verify margins instantly without having to test, upload, and delete draft graphics on live profiles.
          </p>
        </section>
      </article>

      <div className="border-t border-slate-100 dark:border-slate-800 my-12" />

      {/* Standard Grid Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <GuideItem
          icon={<Smartphone className="text-blue-500" />}
          title="Mobile-First Accuracy"
          desc="We calculate the central 'Safe Area' for platforms like LinkedIn and YouTube, where cropping is most aggressive on smaller screens."
        />
        <GuideItem
          icon={<Layout className="text-emerald-500" />}
          title="Profile Overlap Alerts"
          desc="Specifically for X (Twitter) and LinkedIn, we highlight the area where your profile picture covers your banner background."
        />
        <GuideItem
          icon={<Target className="text-amber-500" />}
          title="Circular Crop Visuals"
          desc="Check if your important content fits within the circular frame used by Instagram and Facebook profile pictures."
        />
        <GuideItem
          icon={<Monitor className="text-indigo-500" />}
          title="Desktop Optimization"
          desc="Ensure your high-resolution banner still looks professional on large displays without losing focal points."
        />
      </div>

      {/* Platform Tips Container */}
      <div className="bg-card text-card-foreground p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-border space-y-10 shadow-sm">
        <h3 className="text-xl font-bold text-foreground dark:text-slate-100 flex items-center gap-3">
          <AlertTriangle className="text-rose-500" /> Platform-Specific Tips (2026 Update)
        </h3>

        <div className="space-y-8">
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">LinkedIn Banner Logic</h4>
            <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">
              LinkedIn uses a wide 1584x396 pixel format. However, on mobile, the left-hand side is covered by your circular profile photo.
              Always keep your logo and contact information on the <b>Right Side</b> of the banner for maximum visibility.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">YouTube Banner Complexity</h4>
            <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">
              YouTube banners are huge (2560x1440), but most devices only show the middle 1546x423 pixels. This is the &quot;Safe Area&quot;.
              Anything outside this box will only be visible on TV screens.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Instagram Profile Cropping</h4>
            <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">
              Instagram profile photos are uploaded as squares but displayed as circles. Our tool helps you ensure that your
              entire face or brand logo fits inside the 160px central radius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuideItem({ icon, title, desc }) {
  return (
    <div className="space-y-3">
      <div className="w-12 h-12 bg-card text-card-foreground border border-border rounded-2xl flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground dark:text-slate-100">{title}</h3>
      <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}