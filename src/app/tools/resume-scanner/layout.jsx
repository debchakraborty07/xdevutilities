// src/app/tools/resume-scanner/layout.jsx

export const metadata = {
  title: "ATS Resume Scanner | Improve Your Match Score | xdevutilities",
  description: "Scan your resume against job descriptions using our advanced ATS algorithm. Identify missing keywords and optimize your CV for better hireability.",
  keywords: [
    "ats resume scanner",
    "resume keyword matcher",
    "free cv checker",
    "ats score checker",
    "resume optimization"
  ],
  alternates: {
    canonical: "https://www.xdevutilities.com/tools/resume-scanner",
  },
  openGraph: {
    title: "ATS Resume Scanner | xdevutilities",
    description: "Scan your resume against job descriptions. Discover missing keywords and optimize ATS compliance.",
    url: "https://www.xdevutilities.com/tools/resume-scanner",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATS Resume Scanner | xdevutilities",
    description: "Scan your resume against job descriptions. Discover missing keywords and optimize ATS compliance.",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}