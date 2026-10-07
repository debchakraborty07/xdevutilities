// src/app/tools/privacy-blur/components/blur-interactive.jsx

"use client";

import { useState } from "react";
import BlurCanvas from "./blur-canvas";

export default function BlurInteractive() {
  const [image, setImage] = useState(null);

  return <BlurCanvas image={image} setImage={setImage} />;
}