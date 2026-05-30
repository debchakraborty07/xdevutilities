// src/app/login/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login ",
  description: "Access your xdevutilities account to manage bookmarks and personalized tools.",
  alternates: {
    canonical: 'https://www.xdevutilities.com/login',
  },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}