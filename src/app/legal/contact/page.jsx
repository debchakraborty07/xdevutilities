// src/app/legal/contact/page.jsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Clock,
  Globe,
  Loader2,
  CheckCircle2,
  ArrowLeft,
  MapPin,
  HelpCircle,
  ShieldCheck,
  Send,
} from "lucide-react";
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
      toast.error(
        "Failed to send message. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background pb-20 font-sans">

      {/* Top Header Section */}
      <section className="bg-background text-foreground border-b border-border/50 pt-12 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mb-2"
          >
            <ArrowLeft size={14} /> Back to utilities
          </Link>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">
              <MessageSquare size={13} />
              <span>Direct Support & Engineering Desk</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
              Let&apos;s <span className="text-blue-500">Connect.</span>
            </h1>

            <p className="text-muted-foreground font-medium text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Have an architecture inquiry, reproducible bug report, or feature suggestion? Messages are reviewed directly by maintainer <strong>Debojyoti Chakraborty</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

          {/* Left Column: Direct Info & Verification */}
          <div className="lg:col-span-1 space-y-5">
            <div className="space-y-3">
              {/* Official Support Email */}
              <div className="flex items-center gap-4 p-4 bg-card text-card-foreground rounded-2xl border border-border shadow-sm">
                <div className="p-2.5 bg-blue-500/10 text-blue-500 rounded-xl border border-blue-500/20 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-muted-foreground tracking-wider uppercase">
                    Official Support
                  </p>
                  <a
                    href="mailto:support@xdevutilities.com"
                    className="text-xs sm:text-sm font-semibold text-foreground hover:text-blue-500 hover:underline truncate block transition-colors"
                  >
                    support@xdevutilities.com
                  </a>
                </div>
              </div>

              {/* Maintainer Personal Direct Email */}
              <div className="flex items-center gap-4 p-4 bg-card text-card-foreground rounded-2xl border border-border shadow-sm">
                <div className="p-2.5 bg-indigo-500/10 text-indigo-500 rounded-xl border border-indigo-500/20 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-muted-foreground tracking-wider uppercase">
                    Founder / Maintainer
                  </p>
                  <a
                    href="mailto:iamdebojyoti.1990@gmail.com"
                    className="text-xs sm:text-sm font-semibold text-foreground hover:text-blue-500 hover:underline truncate block transition-colors"
                  >
                    iamdebojyoti.1990@gmail.com
                  </a>
                </div>
              </div>

              {/* Response Window */}
              <div className="flex items-center gap-4 p-4 bg-card text-card-foreground rounded-2xl border border-border shadow-sm">
                <div className="p-2.5 bg-muted rounded-xl border border-border shrink-0 text-muted-foreground">
                  <Clock size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-muted-foreground tracking-wider uppercase">
                    Response Window
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">
                    Usually within 24–48 Hours
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-card text-card-foreground rounded-2xl border border-border shadow-sm">
                <div className="p-2.5 bg-muted rounded-xl border border-border shrink-0 text-muted-foreground">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-muted-foreground tracking-wider uppercase">
                    Jurisdiction / Base
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Diagnostic Link */}
            <div className="p-4 rounded-2xl bg-muted/40 border border-border space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                <HelpCircle size={15} className="text-blue-500" />
                <span>Need Instant Diagnostic Help?</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Before sending an email, verify memory buffer limits or troubleshooting steps in our{" "}
                <Link
                  href="/resources/help-center"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Help Center
                </Link>.
              </p>
            </div>

            {/* Privacy Guarantee */}
            <div className="p-4 rounded-2xl bg-card border border-border shadow-sm flex items-start gap-3">
              <ShieldCheck size={18} className="text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your contact details are strictly utilized to respond to your inquiry. We operate zero marketing databases or third-party mailing lists.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Message Dispatched!
                </h2>
                <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your transmission has been queued in volatile RAM and delivered to our desk. I will reply via your provided email shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-primary hover:underline transition-all"
                  >
                    Send another message →
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-muted-foreground tracking-wider uppercase">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Debojyoti"
                        className="w-full px-4 py-3 bg-secondary/30 text-foreground border border-border rounded-xl outline-none focus:border-primary/50 transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-muted-foreground tracking-wider uppercase">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 bg-secondary/30 text-foreground border border-border rounded-xl outline-none focus:border-primary/50 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-muted-foreground tracking-wider uppercase">
                      Inquiry Subject
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Bug report in PDF Metadata Cleaner or Dialect query"
                      className="w-full px-4 py-3 bg-secondary/30 text-foreground border border-border rounded-xl outline-none focus:border-primary/50 transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-muted-foreground tracking-wider uppercase">
                      Message Details
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Provide sufficient context or reproduction steps so we can resolve your inquiry..."
                      className="w-full p-4 bg-secondary/30 text-foreground border border-border rounded-xl outline-none focus:border-primary/50 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid || loading}
                    className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl transition-all shadow-sm hover:opacity-95 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={16} />
                        <span>Dispatching transmission...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Secure Message</span>
                      </>
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