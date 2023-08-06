'use client';

import { ListBulletIcon, Bars3Icon } from '@heroicons/react/24/outline';
import React from 'react';
import { useColSize } from '@/store/use-col-size';
import { shallow } from 'zustand/shallow';

export default function ColsSelectButton() {
  const [colSize, handleClick] = useColSize(
    (state) => [state.colSize, state.toggleColSize],
    shallow,
  );

  return (
    <button type="submit" className="flex items-center" onClick={handleClick}>
      {colSize === 1 ? (
        <ListBulletIcon width={28} height={28} />
      ) : (
        <Bars3Icon width={28} height={28} />
      )}
    </button>
  );
}
