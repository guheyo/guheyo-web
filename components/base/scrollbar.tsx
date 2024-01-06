'use client';

import React from 'react';
import { useScrollDirection } from '@/hooks/use-scroll-direction';

export default function Scrollbar({
  children,
  upPosition,
}: {
  children: React.ReactNode;
  upPosition: string;
}) {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`sticky bg-inherit z-40 ${
        scrollDirection === 'up' ? `${upPosition}` : `top-unset`
      }`}
    >
      {children}
    </div>
  );
}
