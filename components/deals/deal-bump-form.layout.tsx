'use client';

import { ReactNode } from 'react';

export default function DealBumpFormLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex justify-center py-4 md:py-6">
      {children}
    </div>
  );
}
