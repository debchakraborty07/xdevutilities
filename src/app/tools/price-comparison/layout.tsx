// src/app/tools/price-comparison/layout.tsx

import React from "react";

export default function PriceComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-background transition-colors duration-300">
      {/* 
         এখানে আমরা কোনো কন্টেইনার বা প্যাডিং দিচ্ছি না কারণ 
         সেটি অলরেডি page.tsx ফাইলে ম্যানেজ করা হয়েছে।
      */}
      {children}
    </section>
  );
}