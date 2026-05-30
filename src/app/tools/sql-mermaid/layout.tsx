// src/app/tools/sql-mermaid/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQL to Mermaid Diagram | Visual ER Diagram Generator",
  description: "Convert your SQL CREATE TABLE statements into professional ER diagrams instantly. Visualize database schemas and export as high-quality SVG for documentation.",
  keywords: [
    "sql to mermaid", 
    "visualize sql schema", 
    "er diagram generator", 
    "database visualization tool", 
    "sql to er diagram", 
    "mermaid.js converter",
    "database documentation utility"
  ],
  openGraph: {
    title: "SQL to Mermaid Diagram | Database Visualizer",
    description: "The fastest way to convert SQL scripts into Visual ER Diagrams for your projects.",
    type: "website",
  },

  alternates: {
    canonical: 'https://www.xdevutilities.com/tools/sql-mermaid',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen text-foreground bg-background transition-colors duration-300">
      {children}
    </section>
  );
}