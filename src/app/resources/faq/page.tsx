// src/app/resources/faq/page.tsx

import { HelpCircle, ShieldCheck, Zap, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center & FAQ | Privacy-First Utilities ",
  description: "Find honest answers about how we handle your data, our stateless architecture, and how to get the best results from our professional tools.",
  alternates: {
    canonical: 'https://www.xdevutilities.com/resources/faq',
  },
};

export default function GlobalFAQPage() {
  const faqCategories = [
    {
      title: "Philosophy & Usage",
      icon: <HelpCircle size={20} className="text-blue-500" />,
      items: [
        { 
          q: "Why is xdevutilities completely free to use?", 
          a: "I built this platform because I was frustrated with 'free' tools that are either slow or filled with pop-ups. To keep this accessible for everyone while covering high-speed server costs, I use non-intrusive Google AdSense. This allows me to provide professional-grade utilities without charging subscription fees or selling user data." 
        },
        { 
          q: "Do I really need an account to use the tools?", 
          a: "No, registration is entirely optional. I want you to get your work done as fast as possible. However, creating an account is helpful if you want to bookmark your most-used tools like the SQL to Mermaid visualizer or save your custom Color Palettes for future projects." 
        }
      ]
    },
    {
      title: "Data Privacy & Security",
      icon: <ShieldCheck size={20} className="text-emerald-500" />,
      items: [
        { 
          q: "How exactly do you handle my sensitive files?", 
          a: "Most online tools upload your files to their servers. We don't. Our 'Stateless Architecture' means that tools like the PDF Metadata Cleaner or the ATS Resume Scanner process your data in your browser's temporary memory (RAM). The moment you close the tab, that data is flushed and gone forever. We simply cannot store what we never 'saved' to a disk." 
        },
        { 
          q: "Can I trust the Message Encryptor for private text?", 
          a: "Yes. The Message Encryptor uses AES-256 bit encryption, and the logic happens entirely on your device (client-side). Even I, as the developer, cannot see what you are encrypting because the 'key' and the 'text' never reach my server. For more details, you can review our Privacy Policy." 
        }
      ]
    },
    {
      title: "Tool Logic & Quality",
      icon: <Zap size={20} className="text-orange-500" />,
      items: [
        { 
          q: "How accurate is the Passport Photo Maker?", 
          a: "I've programmed the Passport Photo tool to follow standard international dimensions (like the 300x300px digital visa spec). While the tool automates the padding and resizing, I always recommend standing against a plain wall with natural lighting to get a result that Embassies will accept." 
        },
        { 
          q: "Is the SQL to Mermaid tool compatible with all databases?", 
          a: "It currently supports standard SQL 'CREATE TABLE' statements from PostgreSQL, MySQL, and SQL Server. I am constantly updating the parser to handle more complex relationships, making it easier for you to generate visual documentation for your GitHub READMEs." 
        },
        { 
          q: "How can I improve my ATS Resume score?", 
          a: "The scanner looks for semantic matches between your CV and the job description. If your score is low, try using the 'Missing Keywords' feature. Our engine analyzes keyword density and structural headers to ensure your resume isn't just readable by humans, but also by the robot recruiters." 
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen text-foreground bg-background">
      {/* Header Section */}
      <section className=" border-b border-border/50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-[12px] font-semibold">
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold">
            How can we <span className="text-blue-500">help you?</span>
          </h1>
          <p className="text-muted-foreground dark:text-slate-400 font-medium text-lg max-w-xl mx-auto">
            I believe in transparency. Here are honest answers about our technology, our privacy protocols, and how to use our tools effectively.
          </p>
        </div>
      </section>

      {/* FAQ Categories Grid */}
      <div className="max-w-5xl mx-auto py-20 px-6 lg:px-8 text-foreground bg-background">
        <div className="space-y-20">
          {faqCategories.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-xl border border-border">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold">
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-foreground bg-background">
                {category.items.map((item, i) => (
                  <div key={i} className="space-y-3">
                    <h3 className="text-sm font-semibold leading-snug flex items-start gap-2">
                       <span className="text-blue-500 mt-0.5">•</span> {item.q}
                    </h3>
                    <p className="text-[13px] text-muted-foreground dark:text-slate-400 leading-relaxed font-medium pl-4">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-32 p-10 text-foreground bg-background rounded-[3rem] text-center space-y-6 shadow-2xl border border-border/40">
          <h2 className="text-2xl font-semibold">
            Still haven&apos;t found the answer?
          </h2>
          <p className="font-medium max-w-md mx-auto text-sm text-muted-foreground">
            If you have a specific technical issue or a suggestion for a new tool, please reach out to me directly. I usually respond within 24-48 hours.
          </p>
          <div className="pt-4">
            <Link 
              href="/legal/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-semibold transition-all active:scale-[0.98]"
            >
              <MessageSquare size={18} />
              <span>Contact Official Support</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}