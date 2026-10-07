// src/app/resources/faq/page.jsx

import FAQContent from "@/components/resources/faq-content";

export const metadata = {
  title: "Frequently Asked Questions & Help Center | xdevutilities",
  description: "Find honest, transparent answers about our stateless architecture, privacy-first data handling, and all 10 developer and creative utilities.",
  alternates: {
    canonical: "https://www.xdevutilities.com/resources/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions & Help Center | xdevutilities",
    description: "Honest answers about our stateless architecture, privacy protocols, and tool operations.",
    url: "https://www.xdevutilities.com/resources/faq",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions & Help Center | xdevutilities",
    description: "Honest answers about our stateless architecture, privacy protocols, and tool operations.",
  },
};

export default function GlobalFAQPage() {
  return (
    <main className="min-h-screen text-foreground bg-background py-16 sm:py-24">
      <div className="container mx-auto px-6 max-w-6xl space-y-16">

        {/* Header Section */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-semibold border border-primary/10">
            <span>Knowledge Base & Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            Complete transparency on our stateless engineering architecture, privacy protocols, and how to get maximum performance from our tools.
          </p>
        </section>

        {/* Modular FAQ Engine */}
        <FAQContent />

      </div>
    </main>
  );
}