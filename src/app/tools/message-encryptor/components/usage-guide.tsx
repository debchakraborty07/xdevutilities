// src/app/tools/message-encryptor/components/usage-guide.tsx

/* eslint-disable react/no-unescaped-entities */
import { CheckCircle2, Lightbulb, Shield, Key, Lock, Network, RefreshCw } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20 py-10 text-foreground bg-background border-t border-border/60">
      
      {/* AdSense এবং SEO-বান্ধব তথ্যবহুল সিকিউরিটি ও ক্রিপ্টোগ্রাফি ব্লগ সেকশন */}
      <article className="space-y-8">
        <header className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">
            Why did we build this?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Have you ever felt a bit nervous while sending a password, API key, or a private note over a chat app? We&apos;ve all been there. Most &quot;secure&quot; communication channels still store your raw data in plain text or decryptable forms on central servers. We wanted to design a completely client-side utility that puts the cryptographic keys entirely in your hands. With **xdevutilities**, your message is locked on your own device—it&apos;s like placing a secret letter inside an unbreakable digital vault before it even leaves your screen.
          </p>
        </header>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Lock size={22} className="text-blue-500" /> Understanding Zero-Knowledge Cryptography
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Standard chat applications and email providers advertise end-to-end encryption, yet their servers often retain administrative access or metadata trails. This exposes your sensitive notes to potential database leaks, employee negligence, or unauthorized third-party scraping. 
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our Private Message Encryptor operates on a strict <strong>Zero-Knowledge Protocol</strong>. Because the mathematical conversion happens locally in your browser&apos;s temporary execution thread, the plain-text message and your private passphrase never cross the network. Even if someone intercepts the transmission, all they will observe is a highly disorganized, chaotic block of alphanumeric ciphertext that is mathematically impossible to read without your specific key.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Key size={22} className="text-emerald-500" /> Why AES-256 is the Military and Banking Standard
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            The Advanced Encryption Standard (AES) with a 256-bit key length is approved by government agencies, financial institutions, and defense organizations worldwide. It is a symmetric-key block cipher that processes input data through 14 complex rounds of substitution, transposition, and mixing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <Network size={16} className="text-blue-500" /> Brute-Force Immunity
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                There are 2^256 possible key combinations. Trying to crack a single AES-256 encrypted note using modern supercomputers would take billions of years.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <RefreshCw size={16} className="text-emerald-500" /> Symmetric Security
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Both encryption and decryption rely on the exact same secret passphrase, which minimizes vulnerability overhead and metadata footprint.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <Shield size={16} className="text-rose-500" /> Offline Reliability
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No active internet or authentication servers are queried during lock operations. It is a fully independent visual and algebraic process.
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            By combining AES-256 with robust local processing, xdevutilities ensures that your shared API keys, server credentials, financial codes, and personal diaries remain completely uncompromised.
          </p>
        </section>
      </article>

      <div className="border-t border-slate-100 dark:border-slate-800 my-12" />

      {/* অরিজিনাল গ্রিড লেআউট ও কার্ড (সিএসএস হুবহু অক্ষুণ্ন রেখে) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground bg-background">
        <div className="bg-background text-foreground p-8 rounded-[2rem] border border-border/50 space-y-4">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <CheckCircle2 size={20} />
            <h3 className="text-lg font-semibold">Pro Features</h3>
          </div>
          <ul className="space-y-3 text-sm font-medium">
            <li>• Uses AES-256, the gold standard for encryption.</li>
            <li>• No data is ever sent to our servers.</li>
            <li>• Works perfectly for sharing API keys or passwords.</li>
            <li>• One-click decryption for the recipient.</li>
          </ul>
        </div>

        <div className="bg-background text-foreground p-8 rounded-[2rem] border border-border/50 space-y-4">
          <div className="flex items-center gap-2 text-orange-500">
            <Lightbulb size={20} />
            <h3 className="text-lg font-semibold">How to use it</h3>
          </div>
          <ol className="space-y-3 text-sm text-muted-foreground dark:text-slate-400 font-medium">
            <li>1. Type your private note in the box above.</li>
            <li>2. Create a unique passphrase (keep it secret!).</li>
            <li>3. Hit &apos;Encrypt&apos; and copy the resulting code.</li>
            <li>4. Send the code to your friend and share the password separately.</li>
          </ol>
        </div>
      </div>

      <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl flex items-start gap-4">
        <Shield className="text-blue-500 shrink-0 mt-1" size={20} />
        <p className="text-xs text-muted-foreground dark:text-slate-400 leading-relaxed font-medium italic">
          <strong>Friendly Reminder:</strong> Since xdevutilities doesn&apos;t store your data, we cannot recover your password. If you forget the secret key, the message is locked forever. Choose something memorable but strong!
        </p>
      </div>
    </div>
  );
}