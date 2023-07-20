'use client';

import React, { memo, ReactNode } from 'react';
import { useScrollDirection } from '@/app/hooks/use-scroll-direction';

interface Props {
  children: ReactNode;
  z: string;
  negativeTop: string;
  top: string;
}

const Scrollbar = ({ children, z, negativeTop, top }: Props) => {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`sticky ${z} ${
        scrollDirection === 'down' ? `${negativeTop}` : `${top}`
      }`}
    >
      {children}
    </div>
  );
};
export default memo(Scrollbar);
