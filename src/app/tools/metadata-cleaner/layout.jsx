// src/app/tools/metadata-cleaner/layout.jsx

export const metadata = {
  title: "PDF Metadata Cleaner | Protect Your Privacy | xdevutilities",
  description: "Remove hidden sensitive information, author names, creation timestamps, and software signatures from your PDF files with zero data retention.",
  keywords: [
    "remove pdf metadata",
    "clean pdf properties",
    "pdf privacy tool",
    "anonymous pdf",
    "strip pdf author"
  ],
  alternates: {
    canonical: "https://www.xdevutilities.com/tools/metadata-cleaner",
  },
  openGraph: {
    title: "PDF Metadata Cleaner | xdevutilities",
    description: "Remove hidden sensitive information, author names, and software signatures from your PDF files safely.",
    url: "https://www.xdevutilities.com/tools/metadata-cleaner",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Metadata Cleaner | xdevutilities",
    description: "Remove hidden sensitive information, author names, and software signatures from your PDF files safely.",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}