// src/app/tools/message-encryptor/components/usage-guide.tsx

/* eslint-disable react/no-unescaped-entities */
import { CheckCircle2, Lightbulb, Shield } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-10 py-10 text-foreground bg-background border-t border-border/60">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">
          Why did we build this?
        </h2>
        <p className="leading-relaxed font-medium">
          Have you ever felt a bit nervous while sending a password or a private note over a chat app? We've all been there. Most "secure" apps still store data on their servers. We wanted to give you a tool that puts the key entirely in your hands. With **xdevutilities**, your message is locked on your own device—it's like sending a secret letter in a digital vault.
        </p>
      </div>

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
            <li>3. Hit 'Encrypt' and copy the resulting code.</li>
            <li>4. Send the code to your friend and share the password separately.</li>
          </ol>
        </div>
      </div>

      <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl flex items-start gap-4">
        <Shield className="text-blue-500 shrink-0 mt-1" size={20} />
        <p className="text-xs text-muted-foreground dark:text-slate-400 leading-relaxed font-medium italic">
          <strong>Friendly Reminder:</strong> Since xdevutilities doesn't store your data, we cannot recover your password. If you forget the secret key, the message is locked forever. Choose something memorable but strong!
        </p>
      </div>
    </div>
  );
}