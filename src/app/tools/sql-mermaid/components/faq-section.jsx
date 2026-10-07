// src/app/tools/sql-mermaid/components/faq-section.jsx

export default function FAQSection() {
  const faqs = [
    {
      q: "What is a Mermaid ER Diagram?",
      a: "Mermaid is a Javascript-based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically. Our tool converts SQL DDL code into this format."
    },
    {
      q: "Which SQL dialects are supported?",
      a: "We support standard ANSI SQL syntax. Most CREATE TABLE scripts from MySQL, PostgreSQL, SQLite, and Microsoft SQL Server will work seamlessly."
    },
    {
      q: "Can this tool visualize table relationships?",
      a: "The tool generates visual schema entities, columns, and primary keys. We are actively optimizing foreign-key constraint mapping for complex, multi-table nested relationships."
    },
    {
      q: "Is it safe to paste my production schema here?",
      a: "Absolutely. We follow a strict 'Stateless' policy. Your SQL code is processed in temporary volatile memory and is never logged or stored on our servers. Privacy is guaranteed."
    },
    {
      q: "Why did my diagram fail to render?",
      a: "This usually happens if there is a syntax error in your SQL or if you used unsupported keywords. Ensure your code starts with 'CREATE TABLE' and has proper closing parentheses."
    }
  ];

  return (
    <div className="space-y-12 pb-32">
      <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
        {faqs.map((faq) => (
          <div key={faq.q} className="py-8 border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-semibold text-foreground dark:text-slate-100 mb-3 flex items-start gap-3 text-base">
              <span className="text-indigo-500 font-bold">Q.</span> {faq.q}
            </h3>
            <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed pl-7">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      {/* SEO FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })
        }}
      />
    </div>
  );
}