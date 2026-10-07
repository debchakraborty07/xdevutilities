// src/app/tools/safe-zone-checker/layout.jsx

export const metadata = {
  title: "Social Media Safe Zone Checker | Profile & Banner Preview | xdevutilities",
  description: "Ensure your profile and banner images are perfectly framed. Check safe areas for LinkedIn, X (Twitter), YouTube, and Facebook instantly with zero data upload.",
  keywords: [
    "social media safe zone",
    "linkedin banner safe area",
    "twitter header crop checker",
    "profile picture circular crop",
    "youtube banner safe zone"
  ],
  alternates: {
    canonical: "https://www.xdevutilities.com/tools/safe-zone-checker",
  },
  openGraph: {
    title: "Social Media Safe Zone Checker | xdevutilities",
    description: "Ensure your profile and banner images are perfectly framed across all devices instantly.",
    url: "https://www.xdevutilities.com/tools/safe-zone-checker",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Safe Zone Checker | xdevutilities",
    description: "Ensure your profile and banner images are perfectly framed across all devices instantly.",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}