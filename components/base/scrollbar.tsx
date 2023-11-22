'use client';

import React from 'react';
import { useScrollDirection } from '@/hooks/use-scroll-direction';

export default function Scrollbar({ children }: { children: React.ReactNode }) {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`sticky bg-inherit z-40 ${
        scrollDirection === 'up' ? `top-14` : `top-unset`
      }`}
    >
      {children}
    </div>
  );
}
