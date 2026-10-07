// src/app/tools/code-to-image/layout.jsx

export const metadata = {
  title: "Code to Image Converter | Create Beautiful Code Snippets",
  description: "Generate stunning snapshots of your code with macOS-style frames and professional syntax highlighting. Perfect for developers.",
  keywords: ["code to image", "carbon clone", "share code snippets", "developer utility", "syntax highlighting image"],
  alternates: {
    canonical: "https://www.xdevutilities.com/tools/code-to-image",
  },
  openGraph: {
    title: "Code to Image Converter | xdevutilities",
    description: "Generate stunning snapshots of your code with macOS-style frames and professional syntax highlighting.",
    url: "https://www.xdevutilities.com/tools/code-to-image",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code to Image Converter | xdevutilities",
    description: "Generate stunning snapshots of your code with macOS-style frames and professional syntax highlighting.",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}