// src/app/tools/message-encryptor/components/encryptor-wrapper.tsx

"use client";

import dynamic from "next/dynamic";

const DynamicActionZone = dynamic(
  () => import("./action-zone"),
  { 
    ssr: false,
    loading: () => <div className="h-[300px] w-full bg-background animate-pulse rounded-2xl" />
  }
);

export default function EncryptorWrapper() {
  return <DynamicActionZone />;
}