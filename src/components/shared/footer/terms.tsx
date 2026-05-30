// src/components/shared/footer/terms.tsx

import Link from "next/link";

export default function FooterTerms() {
  const legalLinks = [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Cookie Policy", href: "/legal/cookies" },
    { name: "Licenses", href: "/legal/licenses" },

  ];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[13px] font-semibold text-foreground dark:text-slate-100">
        Legal
      </h3>
      <ul className="flex flex-col gap-2.5">
        {legalLinks.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href} 
              className="text-[13px] text-muted-foreground dark:text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}