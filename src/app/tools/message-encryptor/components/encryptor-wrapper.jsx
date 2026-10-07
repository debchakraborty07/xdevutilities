// src/app/tools/message-encryptor/components/encryptor-wrapper.jsx

"use client";

import dynamic from "next/dynamic";

const DynamicActionZone = dynamic(
  () => import("./action-zone"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[420px] w-full bg-slate-100 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800 animate-pulse rounded-2xl" />
    )
  }
);

export default function EncryptorWrapper() {
  return <DynamicActionZone />;
}