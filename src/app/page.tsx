// src/app/page.tsx

import Hero from "@/components/home/hero";
import ToolSection from "@/components/home/tool-section";
import { tools } from "@/lib/tools-data";

export default function Home() {
  return (
    <div className="pb-32">
      {/* Hero Section */}
      <Hero />
      
      {/* Pills and filtering logic */}
      <ToolSection tools={tools} />
    </div>
  );
}