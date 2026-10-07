// src/app/legal/contact/page.jsx

"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Clock, Globe, Loader2, CheckCircle2 } from "lucide-react";
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
    if (!isFormValid || loading) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "contact_messages"), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
      });

      toast.success("Message sent successfully!");
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Header Section */}
      <section className="bg-background text-foreground border-b border-border/50 py-16 sm:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-semibold border border-primary/10">
            <MessageSquare size={14} />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Let&apos;s connect.
          </h1>
          <p className="text-muted-foreground font-medium text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have an architecture question, bug report, or a suggestion for a new utility? I am always listening.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">

          {/* Left Side: Contact Info & E-E-A-T Transparency */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-3">
              {[
                {
                  icon: Mail,
                  label: "Direct Email",
                  val: "iamdebojyoti.1990@gmail.com",
                  href: "mailto:iamdebojyoti.1990@gmail.com"
                },
                {
                  icon: Clock,
                  label: "Response Window",
                  val: "Usually within 24–48 Hours",
                  href: null
                },
                {
                  icon: Globe,
                  label: "Availability",
                  val: "Global Technical Support",
                  href: null
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-card text-card-foreground rounded-2xl border border-border shadow-sm">
                  <div className="p-2.5 bg-muted rounded-xl border border-border shrink-0">
                    <item.icon size={18} className="text-blue-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-muted-foreground tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold text-foreground hover:text-blue-500 hover:underline truncate block transition-colors">
                        {item.val}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground">{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Privacy & Anti-Spam Guarantee */}
            <div className="p-5 bg-card text-card-foreground rounded-2xl border border-border shadow-sm">
              <p className="text-xs text-muted-foreground leading-relaxed font-normal italic">
                &quot;Your contact details are exclusively used to respond to your specific inquiry. We strictly prohibit selling or sharing contact data with third-party marketing networks.&quot;
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-card border border-border rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-500 shadow-sm">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Message Received!</h2>
                <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. I personally review every inquiry and will respond to your email as soon as possible.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm text-blue-500 font-semibold hover:underline transition-all"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-muted-foreground ml-1  tracking-wider">Full Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-5 py-3.5 bg-secondary/40 text-foreground border border-border rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/40 transition-all text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-muted-foreground ml-1  tracking-wider">Email Address</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-5 py-3.5 bg-secondary/40 text-foreground border border-border rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/40 transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-muted-foreground ml-1  tracking-wider">Subject</label>
                    <input
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Feature request or architecture inquiry"
                      className="w-full px-5 py-3.5 bg-secondary/40 text-foreground border border-border rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/40 transition-all text-sm font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-muted-foreground ml-1  tracking-wider">Message Details</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide enough detail so I can help you better..."
                      className="w-full p-5 bg-secondary/40 text-foreground border border-border rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/40 transition-all text-sm font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid || loading}
                    className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-2xl transition-all shadow-md hover:opacity-95 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      "Send Secure Message"
                    )}
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