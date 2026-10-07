// src/app/tools/passport-photo/layout.jsx

export const metadata = {
  title: "AI Passport Photo Maker | Online Visa Photo Utility | xdevutilities",
  description: "Create professional 300x300 digital passport and visa photos with standard framing instantly. Fast, private, and high-quality.",
  keywords: [
    "online passport photo",
    "300x300 image resizer",
    "professional photo maker",
    "digital visa photo generator",
    "biometric passport crop"
  ],
  alternates: {
    canonical: "https://www.xdevutilities.com/tools/passport-photo",
  },
  openGraph: {
    title: "AI Passport Photo Maker | xdevutilities",
    description: "Create professional digital passport and visa photos instantly.",
    url: "https://www.xdevutilities.com/tools/passport-photo",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Passport Photo Maker | xdevutilities",
    description: "Create professional digital passport and visa photos instantly.",
  },
};

export default function ToolLayout({ children }) {
  return <>{children}</>;
}