// src/app/legal/contact/page.jsx

"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Clock, Globe, ShieldCheck, Loader2, CheckCircle2 } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.includes("@") &&
    formData.subject.trim() !== "" &&
    formData.message.trim().length > 10;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "contact_messages"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      toast.success("Message sent successfully!");
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Header Section - Text updated to be more humanistic */}
      <section className="bg-background text-foreground border-b border-border/50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/5 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium border border-blue-500/10">
            <MessageSquare size={14} />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground dark:text-slate-100">
            Let&apos;s connect.
          </h1>
          <p className="text-muted-foreground dark:text-slate-400 font-medium text-lg max-w-xl mx-auto">
            Have a question about our stateless architecture or a suggestion for a new tool? I&apos;m always listening.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Side: Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Direct Email", val: "iamdebojyoti.1990@gmail.com" },
                { icon: Clock, label: "Response Window", val: "Usually within 24-48 Hours" },
                { icon: Globe, label: "Availability", val: "Global Support" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-background text-foreground rounded-2xl border border-border/50 shadow-sm">
                  <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-xl border border-border">
                    <item.icon size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400">{item.label}</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Added a small privacy note to increase trust for AdSense */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-border/40">
              <p className="text-[12px] text-muted-foreground leading-relaxed italic">
                &quot;Your email address is only used to respond to your inquiry. We never share your contact details with third-party advertisers or marketing lists.&quot;
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-card border border-border rounded-[2.5rem] p-12 text-center space-y-4 animate-in fade-in zoom-in duration-500 shadow-sm">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-2xl font-semibold">Message Received!</h2>
                <p className="text-muted-foreground">Thanks for reaching out. I personally review every message and will get back to you soon.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-500 font-medium hover:underline transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-[2.5rem] p-8 sm:p-12 shadow-sm transition-all hover:shadow-md duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-400 ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-5 py-4 bg-background text-foreground border border-border rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500/30 transition-all text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-400 ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-5 py-4 bg-background text-foreground border border-border rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500/30 transition-all text-sm font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 ml-1">Subject</label>
                    <input
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can I help you?"
                      className="w-full px-5 py-4 bg-background text-foreground border border-border rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500/30 transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-400 ml-1">Message Details</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide enough detail so I can help you better..."
                      className="w-full px-5 py-4 bg-background text-foreground border border-border rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500/30 transition-all text-sm font-medium resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!isFormValid || loading}
                    className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/10 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? <Loader2 className="animate-spin mx-auto" /> : "Send Secure Message"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}