// src/app/tools/message-encryptor/components/usage-guide.jsx

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
            Have you ever felt a bit nervous while sending a password, API key, or a private note over an unencrypted chat app? We have all been there. Most standard communication channels store your raw data in plain text or decryptable forms on central servers. We engineered this high-performance utility so you can transform sensitive notes into an unbreakable digital cipher before sharing them across public channels.
          </p>
        </header>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Lock size={22} className="text-blue-500" /> Understanding Modern Symmetric Cryptography
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Standard messaging platforms often retain administrative access or metadata trails. This exposes sensitive notes to potential database leaks, accidental exposure, or unauthorized third-party scraping.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our Private Message Encryptor provides an isolated, stateless transformation pipeline. Your payload is securely handled using industry-grade cryptographic standards. Once encrypted, the resulting output is a chaotic block of alphanumeric ciphertext that is mathematically impossible to read without your specific secret key.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Key size={22} className="text-emerald-500" /> Why AES-256 is the Global Banking Standard
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            The Advanced Encryption Standard (AES) with a 256-bit key length is approved by defense institutions and financial organizations worldwide. It processes input data through repeated mathematical rounds of substitution, transposition, and byte mixing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h3 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <Network size={16} className="text-blue-500" /> Brute-Force Immunity
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With 2^256 potential key combinations, attempting to crack a 256-bit cipher using modern supercomputing would take billions of years.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h3 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <RefreshCw size={16} className="text-emerald-500" /> Symmetric Security
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Both encryption and decryption rely on the exact same secret passphrase, eliminating the need to store public/private key pairs.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h3 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <Shield size={16} className="text-rose-500" /> Zero Persistent Storage
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your keys and plaintext are never saved to any database. Processing occurs strictly in transient memory.
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            By applying robust AES algorithms, xdevutilities ensures that your shared API keys, server credentials, recovery codes, and private memos remain secure during transit.
          </p>
        </section>
      </article>

      <div className="border-t border-slate-100 dark:border-slate-800 my-12" />

      {/* ফিচার গ্রিড লেআউট */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground bg-background">
        <div className="bg-card text-card-foreground p-8 rounded-[2rem] border border-border space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <CheckCircle2 size={20} />
            <h3 className="text-lg font-semibold">Pro Features</h3>
          </div>
          <ul className="space-y-3 text-sm font-medium text-slate-600 dark:text-slate-400">
            <li>• Uses AES-256 standard encryption for robust protection.</li>
            <li>• Strict zero-storage architecture: zero database retention.</li>
            <li>• Perfect for safely sharing API credentials or temporary passwords.</li>
            <li>• Instant single-click decryption for authorized recipients.</li>
          </ul>
        </div>

        <div className="bg-card text-card-foreground p-8 rounded-[2rem] border border-border space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-orange-500">
            <Lightbulb size={20} />
            <h3 className="text-lg font-semibold">How to use it</h3>
          </div>
          <ol className="space-y-3 text-sm text-muted-foreground dark:text-slate-400 font-medium">
            <li>1. Type your private note or credentials into the input field above.</li>
            <li>2. Create a strong secret passphrase (keep it safe).</li>
            <li>3. Hit &apos;Lock Message&apos; and copy the generated ciphertext.</li>
            <li>4. Share the encrypted text publicly, and send the passphrase through a separate channel.</li>
          </ol>
        </div>
      </div>

      <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl flex items-start gap-4">
        <Shield className="text-blue-500 shrink-0 mt-1" size={20} />
        <p className="text-xs text-muted-foreground dark:text-slate-400 leading-relaxed font-medium italic">
          <strong>Friendly Reminder:</strong> Because xdevutilities does not store your passphrase or logs, we have no backdoor or recovery mechanism. If you forget your secret key, the message cannot be decrypted.
        </p>
      </div>
    </div>
  );
}