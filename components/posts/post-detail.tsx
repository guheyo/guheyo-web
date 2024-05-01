'use client';

import { ReactNode } from 'react';

export default function PostDetail({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-6 text-gray-300 rounded-none md:rounded-lg">
      {children}
    </div>
  );
}
