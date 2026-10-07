// src/components/blog/blog-list.jsx

import Link from "next/link";

// 10 blog posts with title, slug, and description
const blogPosts = [
  {
    title: "The Hidden Risks of PDF Metadata",
    slug: "pdf-metadata-privacy",
    desc: "Understand why cleaning document properties is crucial for your digital safety.",
  },
  {
    title: "Outsmart the ATS Robot Recruiters",
    slug: "ats-resume-scanner-guide",
    desc: "Master the science behind automated resume screening systems.",
  },
  {
    title: "Professional Passport Photos at Home",
    slug: "passport-photo-guide",
    desc: "A guide to creating compliant, visa-ready identity photos effortlessly.",
  },
  {
    title: "Building Professional Color Palettes",
    slug: "color-palette-theory",
    desc: "Understanding color theory and extracting balanced themes from images.",
  },
  {
    title: "Visualizing SQL with Mermaid.js",
    slug: "sql-mermaid-visualization",
    desc: "How to document your database schemas visually and efficiently.",
  },
  {
    title: "The Art of Code Sharing",
    slug: "code-to-image-guide",
    desc: "How to present your source code snippets beautifully for higher digital engagement.",
  },
  {
    title: "The Zero-Knowledge Cryptography Vault",
    slug: "message-encryption-guide",
    desc: "How client-side AES-256 secure note locking protects your data offline.",
  },
  {
    title: "The Smart Shopper's Secret to Unit Pricing",
    slug: "price-comparison-guide",
    desc: "How fair price estimations protect your budget against shrinkflation.",
  },
  {
    title: "Beyond the Black Marker: Secure Image Redaction",
    slug: "privacy-blur-guide",
    desc: "Safely blur, pixelate, and permanently redact confidential details from screenshots.",
  },
  {
    title: "Responsive Social Media Branding & Safe Zones",
    slug: "safe-zone-checker-guide",
    desc: "Optimize your cover banners against mobile cropping and circular overlaps.",
  },
];

export default function BlogList() {
  return (
    <div className="grid gap-6">
      {blogPosts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group block p-8 bg-card border border-border rounded-[2.5rem] hover:shadow-2xl hover:border-blue-500/20 transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold group-hover:text-blue-500 transition-colors mb-2">
            {post.title}
          </h2>
          <p className="text-muted-foreground dark:text-slate-400 font-medium">
            {post.desc}
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm font-bold text-blue-500">
            <span>Read Full Article</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}