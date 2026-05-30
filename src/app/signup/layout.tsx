// src/app/signup/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account ",
  description: "Join xdevutilities to experience a distraction-free environment for all your technical needs.",
  alternates: {
    canonical: 'https://www.xdevutilities.com/signup',
  },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}