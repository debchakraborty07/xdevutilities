// src/app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h2 className="text-6xl font-bold text-blue-500 mb-4">404</h2>
      <h1 className="text-2xl font-semibold mb-2 text-foreground dark:text-slate-100">Page Not Found</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        Sorry, the utility you are looking for might have been moved or is no longer available.
      </p>
      <Link href="/tools" className="px-6 py-3 bg-blue-500 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all">
        Back to Tools
      </Link>
    </div>
  );
}