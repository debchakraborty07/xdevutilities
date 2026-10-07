// src/app/login/page.jsx

import LoginForm from "@/components/auth/login-form";

export const metadata = {
  title: "Login",
  description: "Access your xdevutilities account to manage bookmarks and personalized tools.",
  alternates: {
    canonical: 'https://www.xdevutilities.com/login',
  },
};

export default function LoginPage() {
  return <LoginForm />;
}