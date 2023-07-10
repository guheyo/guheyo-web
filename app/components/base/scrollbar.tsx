'use client';

import React from 'react';
import { useScrollDirection } from '@/app/hooks/useScrollDirection';

export default function Scrollbar({
  children,
  z,
  negativeTop,
  top
}: {
  children: React.ReactNode,
  z: string,
  negativeTop: string,
  top: string
}) {
  const scrollDirection = useScrollDirection();
  return (
    <div className={`sticky ${z} ${scrollDirection === "down" ? `${negativeTop}` : `${top}`}`}>
      {children}
    </div>
  );
}