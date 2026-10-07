//src/components/shared/footer/faq.jsx

import Link from "next/link";

export default function FooterFAQ() {
  const links = [
    { name: "About Us", href: "/legal/aboutus" },
    { name: "Documentation", href: "/resources/documentation" },
    { name: "Usage Guide", href: "/resources/usage-guide" },
    { name: "Help Center", href: "/resources/help-center" },
    { name: "FAQ", href: "/resources/faq" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[13px] font-semibold text-foreground dark:text-slate-100">
        Resources
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
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