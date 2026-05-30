// src/components/blog/blog-list.tsx

import Link from "next/link";

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
    desc: "A 2026 guide to creating official identity photos effortlessly.",
  },
  {
    title: "Building Professional Color Palettes",
    slug: "color-palette-theory",
    desc: "Understanding color theory and extracting themes from images.",
  },
  {
    title: "Visualizing SQL with Mermaid.js",
    slug: "sql-mermaid-visualization",
    desc: "How to document your database schemas visually and efficiently.",
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