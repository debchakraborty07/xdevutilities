// src/app/blog/page.tsx

import { Metadata } from "next";
import BlogList from "@/components/blog/blog-list";

export const metadata: Metadata = {
  title: "Official Blog | Digital Security & Tool Guides",
  description: "Read our latest articles on data privacy, ATS optimization, and professional digital utilities.",
  alternates: { canonical: 'https://www.xdevutilities.com/blog' },
};

export default function BlogIndexPage() {
  return (
    <main className="container mx-auto px-6 py-20 max-w-4xl min-h-screen">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-foreground dark:text-slate-100">Official Blog</h1>
        <p className="text-muted-foreground text-lg">Insights, tutorials, and guides to help you master our digital utilities.</p>
      </div>

      <BlogList />
    </main>
  );
}