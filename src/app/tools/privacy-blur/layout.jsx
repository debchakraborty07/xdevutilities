// src/app/tools/privacy-blur/layout.jsx

export const metadata = {
  title: "Privacy Blur Redactor | Redact Sensitive Info from Photos | xdevutilities",
  description: "Fast and private browser-based tool to blur or mask sensitive information in images. 100% client-side, zero data upload, and completely secure.",
  keywords: [
    "privacy blur",
    "redact sensitive information",
    "hide email in screenshot",
    "online privacy tool",
    "image redactor"
  ],
  alternates: {
    canonical: "https://www.xdevutilities.com/tools/privacy-blur",
  },
  openGraph: {
    title: "Privacy Blur Redactor | xdevutilities",
    description: "Fast and private browser-based tool to blur or mask sensitive information in images.",
    url: "https://www.xdevutilities.com/tools/privacy-blur",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Blur Redactor | xdevutilities",
    description: "Fast and private browser-based tool to blur or mask sensitive information in images.",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}