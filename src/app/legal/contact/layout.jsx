// src/app/legal/contact/layout.jsx

export const metadata = {
  title: "Contact Us & Developer Support | xdevutilities",
  description: "Get in touch with the creator of xdevutilities. Send technical questions, architecture suggestions, or partnership inquiries.",
  alternates: {
    canonical: "https://www.xdevutilities.com/legal/contact",
  },
  openGraph: {
    title: "Contact Us | xdevutilities",
    description: "Get in touch with the creator of xdevutilities.",
    url: "https://www.xdevutilities.com/legal/contact",
    siteName: "xdevutilities",
    type: "website",
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}