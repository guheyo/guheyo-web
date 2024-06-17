'use client';

import { useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { isBidModeVar } from './is-bid-mode-var';

export const useBidInput = (defaultIsBidMode: boolean) => {
  // Ensure initialization happens within a hook lifecycle
  useEffect(() => {
    if (isBidModeVar() === undefined) {
      isBidModeVar(defaultIsBidMode);
    }
  }, [defaultIsBidMode]);

  const isBidMode = useReactiveVar(isBidModeVar);

  const toggleBidMode = () => isBidModeVar(!isBidModeVar());

  return {
    isBidMode,
    toggleBidMode,
  };
};
