'use client';

import { ReactNode } from 'react';

export default function DealBumpLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center px-2 md:px-0 py-4 md:py-6">
      {children}
    </div>
  );
}
