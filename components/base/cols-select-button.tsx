'use client';

import { ListBulletIcon, Bars3Icon } from '@heroicons/react/24/outline';
import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { selectedColsVar } from '@/lib/apollo/cache';

export default function ColsSelectButton() {
  const selectedCols = useReactiveVar(selectedColsVar);

  const handleClick = () => {
    selectedColsVar((selectedCols + 1) % 2);
  };

  return (
    <button type="submit" className="flex items-center" onClick={handleClick}>
      {selectedCols === 1 ? (
        <ListBulletIcon width={28} height={28} />
      ) : (
        <Bars3Icon width={28} height={28} />
      )}
    </button>
  );
}
