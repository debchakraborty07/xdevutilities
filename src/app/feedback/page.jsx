// src/app/feedback/page.jsx

export default function FeedbackPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl text-center">
      <h1 className="text-4xl font-semibold text-foreground dark:text-slate-100 mb-6">We Value Your Feedback</h1>
      <p className="text-[16px] text-muted-foreground dark:text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
        Your suggestions help us build better tools. Have a feature request or found a bug?
        We would love to hear from you.
      </p>
      <div className="bg-background text-foreground p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800">
        <p className="text-slate-800 dark:text-slate-200 font-medium mb-4 italic">
          &quot;Currently, we are accepting feedback via email. It helps us track every request individually.&quot;
        </p>
        <a
          href="mailto:iamdebojyoti.1990@gmail.com"
          className="inline-block px-10 py-4 bg-background text-foreground rounded-2xl font-semibold shadow-xl hover:opacity-90 transition-all"
        >
          Send an Email
        </a>
      </div>
    </div>
  );
}