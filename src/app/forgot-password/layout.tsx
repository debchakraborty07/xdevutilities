// src/app/forgot-password/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password ",
  description: "Recover your xdevutilities account access securely.",
  alternates: {
    canonical: 'https://www.xdevutilities.com/forgot-password',
  },
};

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}