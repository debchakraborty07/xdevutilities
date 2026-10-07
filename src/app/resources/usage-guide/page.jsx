// src/app/resources/usage-guide/page.jsx

import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Usage Guide | How to use xdevutilities Tools",
  description: "Learn how to master xdevutilities with our detailed, step-by-step guidelines for resume scanning, secure encryption, photo resizing, and more.",
  alternates: {
    canonical: 'https://www.xdevutilities.com/resources/usage-guide',
  },
};

export default function UsageGuidePage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <h1 className="text-4xl font-semibold text-foreground dark:text-slate-100 mb-8">Mastering xdevutilities: A Step-by-Step Guide</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-16">

        {/* Section 1: ATS Scanner */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Optimizing Your Resume with the <Link href="/tools/resume-scanner" className="text-blue-500 underline">ATS Scanner</Link>
          </h2>
          <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
            The secret to getting past a robot recruiter lies in how you present your skills. To use our ATS Scanner effectively:
          </p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-3">
            <li><strong>The Resume File:</strong> Ensure your CV is in a text-based PDF format. Scanned images or flattened PDFs cannot be read by our engine.</li>
            <li><strong>The Job Description:</strong> Paste the full requirements from the job post. The more context you provide, the more accurate the match score will be.</li>
            <li><strong>Iterate and Improve:</strong> Once you see your &quot;Missing Keywords,&quot; update your resume and scan again. Aim for a score of 80% or higher.</li>
          </ul>
        </section>

        {/* Section 2: Passport Photo */}
        <section className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Generating Perfect <Link href="/tools/passport-photo" className="text-blue-500 underline">Passport Photos</Link>
          </h2>
          <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
            Getting a professional passport photo doesn&apos;t require a studio. Follow these tips for a perfect result:
          </p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-3">
            <li><strong>Lighting:</strong> Stand in front of a natural light source (like a window). Harsh overhead lighting creates unwanted shadows.</li>
            <li><strong>Background:</strong> Use a plain white wall. A clean background is essential for accurate facial detection and border alignment.</li>
            <li><strong>Final Format:</strong> The generated 300x300 JPEG is optimized for digital portals. Avoid manual resizing to maintain strict resolution standards.</li>
          </ul>
        </section>

        {/* Section 3: AI Color Palette */}
        <section className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Extracting Visual Identity with <Link href="/tools/color-palette" className="text-blue-500 underline">AI Color Palette</Link>
          </h2>
          <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
            Our AI engine analyzes the pixel distribution of your images to extract harmonious color schemes.
          </p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-3">
            <li><strong>Image Quality:</strong> Use high-resolution images. Clearer pixels allow our AI to distinguish between primary and accent tones more accurately.</li>
            <li><strong>Color Accuracy:</strong> We use Color Quantization to find the top 6 colors. For a specific aesthetic, try images with natural landscapes or professional photography.</li>
            <li><strong>Implementation:</strong> Copy the Hex codes directly into your CSS or Tailwind config. These colors are perfectly balanced for professional web design.</li>
          </ul>
        </section>

        {/* Section 4: SQL to Mermaid */}
        <section className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Visualizing Database Schema (<Link href="/tools/sql-mermaid" className="text-blue-500 underline">SQL to Mermaid</Link>)
          </h2>
          <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
            Convert complex SQL scripts into clear, visual Entity Relationship (ER) diagrams in seconds.
          </p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-3">
            <li><strong>Syntax Support:</strong> We currently prioritize `CREATE TABLE` statements. Ensure each statement is separated by a semicolon for better parsing.</li>
            <li><strong>Visualization:</strong> We automatically extract column names and data types. Use standard SQL naming conventions for the cleanest diagrams.</li>
            <li><strong>Exporting:</strong> Download the SVG for your project documentation. SVGs are scalable and perfect for GitHub README files.</li>
          </ul>
        </section>

        {/* Section 5: PDF Metadata Cleaner */}
        <section className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Ensuring Document Privacy (<Link href="/tools/metadata-cleaner" className="text-blue-500 underline">Metadata Cleaner</Link>)
          </h2>
          <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
            Every PDF carries a hidden digital footprint. Our tool ensures your sensitive information stays private.
          </p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-3">
            <li><strong>What is Removed:</strong> We strip author names, original software signatures (like Word or Canva), and creation timestamps from the PDF&apos;s internal code.</li>
            <li><strong>Security:</strong> All processing happens in temporary memory. Your files are never written to a disk and are purged immediately after cleaning.</li>
            <li><strong>Verification:</strong> To verify, open your cleaned PDF in a browser and check &apos;Document Properties&apos;. The Author and Producer fields should now be blank.</li>
          </ul>
        </section>

        {/* Section 6: Code to Image */}
        <section className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Aesthetic Coding snapshots with <Link href="/tools/code-to-image" className="text-blue-500 underline">Code to Image</Link>
          </h2>
          <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
            Present your source code beautifully for newsletters, blogs, or social media updates.
          </p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-3">
            <li><strong>Language Highlighting:</strong> Paste your snippet and select the exact compiler language (JavaScript, Python, TypeScript, etc.) to apply proper color highlights.</li>
            <li><strong>Themes & Contrast:</strong> Cycle through modern gradients or standard minimal backdrops. High-contrast colors stand out best on white timelines.</li>
            <li><strong>Pixel Precision:</strong> Export in 3x high-resolution to ensure the text remains extremely crisp when zoomed in on Retina displays.</li>
          </ul>
        </section>

        {/* Section 7: Message Encryptor */}
        <section className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Symmetric Security with <Link href="/tools/message-encryptor" className="text-blue-500 underline">Private Message Encryptor</Link>
          </h2>
          <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
            Safely encrypt sensitive passwords, logs, or API keys directly in your browser memory before sending them online.
          </p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-3">
            <li><strong>Local Handshake:</strong> Enter your secret note and create a unique passphrase. Because we do not store keys, if you lose this passphrase, your note is permanently locked.</li>
            <li><strong>Ciphertext Sharing:</strong> Hit &apos;Encrypt&apos; and copy the alphanumeric code block. Share it over any messaging app or email without security concerns.</li>
            <li><strong>Recipient Decryption:</strong> Your recipient can paste the code block, input the shared passphrase, and unlock the original plaintext instantly.</li>
          </ul>
        </section>

        {/* Section 8: Price Comparison */}
        <section className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Smart Budget Auditing with the <Link href="/tools/price-comparison" className="text-blue-500 underline">Fair Price Estimator</Link>
          </h2>
          <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
            Eliminate mental math and merchant markup by calculating exact fair pricing for irregular quantities of goods.
          </p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-3">
            <li><strong>Standard Reference:</strong> Input the standard price and standard quantity of an item (for example, the price of a full 1kg box).</li>
            <li><strong>Actual Purchase:</strong> Enter the exact fractional weight, volume, or pieces you are buying (for example, a loose portion of 350g).</li>
            <li><strong>Markup Verdict:</strong> Provide the seller&apos;s asking price to instantly calculate if you are being overcharged or saved.</li>
          </ul>
        </section>

        {/* Section 9: Privacy Blur */}
        <section className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Masking Data with the <Link href="/tools/privacy-blur" className="text-blue-500 underline">Privacy Blur Redactor</Link>
          </h2>
          <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
            Securely redact confidential parameters (like account numbers or faces) from screenshots before sharing them online.
          </p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-3">
            <li><strong>Interactive Canvas:</strong> Upload your file and click-and-drag over the regions you want to obscure.</li>
            <li><strong>Dual Redaction:</strong> Use dynamic Gaussian &quot;Blur&quot; for professional aesthetics or solid &quot;Blackout&quot; boxes to remove highly sensitive metrics.</li>
            <li><strong>Mathematical Overwrite:</strong> The original pixels under the mask are overwritten locally on the canvas, meaning the data is mathematically irrecoverable after exporting.</li>
          </ul>
        </section>

        {/* Section 10: Safe Zone Checker */}
        <section className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Responsive Mocking with the <Link href="/tools/safe-zone-checker" className="text-blue-500 underline">Safe Zone Checker</Link>
          </h2>
          <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
            Test custom banner graphics and cover art against dynamic boundaries across social network interfaces.
          </p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-3">
            <li><strong>Platform Loading:</strong> Upload your cover art and select the targeted channel (such as LinkedIn, X, or YouTube).</li>
            <li><strong>Viewport Calibration:</strong> Toggle between mobile and desktop viewport masks to check if the margins cut off your focal graphics.</li>
            <li><strong>Profile Placement:</strong> Avoid placing logos on the bottom-left edges, where dynamic circular avatars overlap and cover the background.</li>
          </ul>
        </section>

        {/* Section 11: Troubleshooting */}
        <section className="space-y-4 bg-background text-foreground p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">Common Troubleshooting</h2>
          <p className="text-[14px] text-muted-foreground dark:text-slate-400 leading-relaxed italic">
            &quot;If you still encounter issues or need a feature request, please visit our <Link href="/legal/contact" className="text-blue-500 font-bold underline">Contact Page</Link> for direct support. We typically respond within 24-48 hours.&quot;
          </p>
        </section>

      </div>
    </div>
  );
}