'use client';

import { useReactiveVar } from '@apollo/client';
import { isBidModeVar } from './is-bid-mode-var';

export const useBidInput = () => {
  const isBidMode = useReactiveVar(isBidModeVar);

  const toggleBidMode = () => isBidModeVar(!isBidModeVar());

  return {
    isBidMode,
    toggleBidMode,
  };
};
