// src/app/page.jsx

import Hero from "@/components/home/hero";
import ToolSection from "@/components/home/tool-section";
import MissionSection from "@/components/home/mission-section";
import { tools } from "@/lib/tools-data";

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <ToolSection tools={tools} />

      {/* Mission & Vision Section */}
      <MissionSection />
    </div>
  );
}