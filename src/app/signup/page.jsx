// src/app/signup/page.jsx

import SignupForm from "@/components/auth/signup-form";

export const metadata = {
  title: "Create Account | xdevutilities",
  description: "Join xdevutilities to experience a distraction-free environment for all your technical and creative needs.",
  alternates: {
    canonical: "https://www.xdevutilities.com/signup",
  },
  openGraph: {
    title: "Create Account | xdevutilities",
    description: "Join xdevutilities to access professional developer and designer utilities.",
    url: "https://www.xdevutilities.com/signup",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Account | xdevutilities",
    description: "Join xdevutilities to access professional developer and designer utilities.",
  },
};

export default function SignupPage() {
  return <SignupForm />;
}