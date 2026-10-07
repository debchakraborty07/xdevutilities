// src/app/tools/price-comparison/layout.jsx

import React from "react";

export default function PriceComparisonLayout({ children }) {
  return (
    <section className="min-h-screen bg-background transition-colors duration-300">
      {/* 
         এখানে আমরা কোনো কন্টেইনার বা প্যাডিং দিচ্ছি না কারণ 
         সেটি অলরেডি page.jsx ফাইলে ম্যানেজ করা হয়েছে।
      */}
      {children}
    </section>
  );
}