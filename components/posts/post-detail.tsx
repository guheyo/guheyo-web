'use client';

import { ReactNode } from 'react';

export default function PostDetail({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-14 justify-center py-0 md:py-6 h-fit md:h-max overflow-auto md:overflow-hidden bg-dark-400 text-light-200 rounded-none md:rounded-lg">
      {children}
    </div>
  );
}
