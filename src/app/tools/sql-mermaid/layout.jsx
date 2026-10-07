// src/app/tools/sql-mermaid/layout.jsx

export const metadata = {
  title: "SQL to Mermaid Diagram | Visual ER Diagram Generator | xdevutilities",
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
  alternates: {
    canonical: "https://www.xdevutilities.com/tools/sql-mermaid",
  },
  openGraph: {
    title: "SQL to Mermaid Diagram | Database Visualizer | xdevutilities",
    description: "The fastest way to convert SQL scripts into Visual ER Diagrams for your projects.",
    url: "https://www.xdevutilities.com/tools/sql-mermaid",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SQL to Mermaid Diagram | Database Visualizer | xdevutilities",
    description: "The fastest way to convert SQL scripts into Visual ER Diagrams for your projects.",
  },
};

export default function Layout({ children }) {
  return (
    <section className="min-h-screen text-foreground bg-background transition-colors duration-300">
      {children}
    </section>
  );
}