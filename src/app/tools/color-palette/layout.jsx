// src/app/tools/color-palette/layout.jsx

export const metadata = {
  title: "AI Color Palette Extractor | Professional Design Utilities",
  description: "Extract professional color palettes and hex codes from any image instantly using AI. Perfect for designers and developers.",
  keywords: [
    "color palette extractor",
    "image to hex",
    "ai color scheme",
    "design tool",
    "tailwind colors"
  ],
  alternates: {
    canonical: "https://www.xdevutilities.com/tools/color-palette",
  },
  openGraph: {
    title: "AI Color Palette Extractor | xdevutilities",
    description: "Extract professional color palettes and hex codes from any image instantly using AI.",
    url: "https://www.xdevutilities.com/tools/color-palette",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Color Palette Extractor | xdevutilities",
    description: "Extract professional color palettes and hex codes from any image instantly using AI.",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}