// src\app\page.jsx

import Hero from "@/components/home/hero";
import ToolSection from "@/components/home/tool-section";
import { tools } from "@/lib/tools-data";

export default function Home() {
  return (
    <div className="pb-32">
      <Hero />
      <ToolSection tools={tools} />
    </div>
  );
}