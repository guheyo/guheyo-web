'use client';

import { ListBulletIcon, Bars3Icon } from '@heroicons/react/24/outline';
import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { colsVar } from '@/lib/apollo/cache';

export default function ColsSelectButton() {
  const cols = useReactiveVar(colsVar);

  const handleClick = () => {
    colsVar((cols + 1) % 2);
  };

  return (
    <button type="submit" className="flex items-center" onClick={handleClick}>
      {cols === 1 ? (
        <ListBulletIcon width={28} height={28} />
      ) : (
        <Bars3Icon width={28} height={28} />
      )}
    </button>
  );
}
