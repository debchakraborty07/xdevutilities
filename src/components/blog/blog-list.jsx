// src/components/blog/blog-list.jsx

import Link from "next/link";
import { Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";

// 10 top blog posts with metadata for the blog list page
const blogPosts = [
  {
    title: "The Science of ATS: How to Outsmart Robot Recruiters",
    slug: "ats-resume-scanner-guide",
    category: "Career Engineering",
    readTime: "9 min read",
    date: "Oct 2026",
    desc: "A comprehensive breakdown of how modern applicant tracking systems parse CVs, evaluate semantic vector density, and how to format for guaranteed interviews.",
  },
  {
    title: "The Art of Code Sharing: Engineering Beautiful Snapshots",
    slug: "code-to-image-guide",
    category: "Developer Experience",
    readTime: "8 min read",
    date: "Oct 2026",
    desc: "Why raw text code blocks fail on technical social feeds and how high-resolution syntax rendering dramatically increases technical engagement.",
  },
  {
    title: "The Hidden Risks of PDF Metadata: Enterprise Privacy Guide",
    slug: "pdf-metadata-privacy",
    category: "Security & Privacy",
    readTime: "8 min read",
    date: "Oct 2026",
    desc: "Explore how embedded timestamps, GPS vectors, and creator software signatures silently leak confidential identity data in shared documents.",
  },
  {
    title: "Zero-Knowledge Cryptography: Modern Symmetric Encryption",
    slug: "message-encryption-guide",
    category: "Cryptography",
    readTime: "10 min read",
    date: "Oct 2026",
    desc: "Understanding AES-256 bit algorithms, stateless memory execution, and why client-side encryption is the ultimate shield against database leaks.",
  },
  {
    title: "Reverse-Engineering Visual Redaction: Beyond Pseudo-Blur",
    slug: "privacy-blur-guide",
    category: "Data Protection",
    readTime: "7 min read",
    date: "Oct 2026",
    desc: "Why standard smartphone markup tools leak confidential data and how HTML5 Canvas auto-background sampling irreversibly wipes sensitive pixels.",
  },
  {
    title: "The Mathematics of Schema Visualization with Mermaid.js",
    slug: "sql-mermaid-visualization",
    category: "Data Architecture",
    readTime: "8 min read",
    date: "Oct 2026",
    desc: "Automating Entity-Relationship (ER) diagrams directly from raw SQL DDL statements using declarative markdown and lossless SVG vectors.",
  },
  {
    title: "The Physics of Digital Biometrics & Passport Standards",
    slug: "passport-photo-guide",
    category: "Computer Vision",
    readTime: "8 min read",
    date: "Oct 2026",
    desc: "A deep dive into ICAO biometric guidelines, facial geometry alignment, and shadow control rules for online visa and digital passport portals.",
  },
  {
    title: "Color Quantization Algorithms: The Science of Harmonic Palettes",
    slug: "color-palette-theory",
    category: "Design Systems",
    readTime: "7 min read",
    date: "Oct 2026",
    desc: "How pixel clustering algorithms isolate dominant tones from real-world photography and applying the mathematical 60-30-10 rule in UI layouts.",
  },
  {
    title: "Responsive Canvas Shearing: Mastering Social Media Safe Zones",
    slug: "safe-zone-checker-guide",
    category: "UI/UX Engineering",
    readTime: "7 min read",
    date: "Oct 2026",
    desc: "Why dynamic viewports crop up to 30% of banner boundaries and how to anchor critical brand logos away from floating mobile profile overlays.",
  },
  {
    title: "The Economics of Unit Pricing & Defeating Shrinkflation",
    slug: "price-comparison-guide",
    category: "Smart Commerce",
    readTime: "7 min read",
    date: "Oct 2026",
    desc: "How retailers exploit fractional pricing to disrupt mental math and how dimensional unit calculations save 20% on recurring acquisitions.",
  },
];

export default function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {blogPosts.map((post) => (
        <article
          key={post.slug}
          className="group relative p-6 sm:p-8 bg-card text-card-foreground border border-border rounded-3xl hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5"
        >
          <div className="space-y-3">
            {/* Meta Tags Bar */}
            <div className="flex items-center justify-between text-xs text-muted-foreground gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 font-bold text-[11px] uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-md bg-primary/10 border border-primary/20">
                <Sparkles size={11} />
                <span>{post.category}</span>
              </span>

              <div className="flex items-center gap-3 text-[11px]">
                <div className="flex items-center gap-1">
                  <Calendar size={12} className="opacity-70" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} className="opacity-70" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold  text-foreground group-hover:text-primary transition-colors leading-snug">
              <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                <span className="absolute inset-0 rounded-3xl" aria-hidden="true" />
                {post.title}
              </Link>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal line-clamp-3">
              {post.desc}
            </p>
          </div>

          {/* Action Link */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-primary pt-2 border-t border-border/50">
            <span>Read Complete Technical Guide</span>
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
          </div>
        </article>
      ))}
    </div>
  );
}