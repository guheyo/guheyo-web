'use client';

import {
  ListBulletIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";
import React from 'react'
import { setCols } from '@/redux/features/postsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function ColsSelectButton() {
  const cols = useAppSelector((state) => state.postsSlice.cols);
  const dispatch = useAppDispatch();

  if (cols === 1) {
    return (
      <button
        type="submit"
        className="flex items-center"
        onClick={() => dispatch(setCols(2))}
      >
        <ListBulletIcon width={28} height={28}/>
      </button>
    )
  }
  return (
    <button
      type="submit"
      className="flex items-center"
      onClick={() => dispatch(setCols(1))}
    >
      <Bars3Icon width={28} height={28}/>
    </button>
  )
};