'use client';

import React from 'react';
import { useScrollDirection } from '@/hooks/use-scroll-direction';

export default function Scrollbar({
  children,
  upPosition,
  zIndex,
}: {
  children: React.ReactNode;
  upPosition: string;
  zIndex: number;
}) {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`sticky bg-inherit ${
        scrollDirection === 'up' ? `${upPosition}` : `top-unset`
      }`}
      style={{
        zIndex,
      }}
    >
      {children}
    </div>
  );
}
