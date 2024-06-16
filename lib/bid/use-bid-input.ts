import { useReactiveVar } from '@apollo/client';
import { isBidModeVar } from './is-bid-mode-var';

export const useBidInput = (defaultIsBidMode: boolean) => {
  // initialize isBidModeVar only once
  if (isBidModeVar() === undefined) {
    isBidModeVar(defaultIsBidMode);
  }

  const isBidMode = useReactiveVar(isBidModeVar);

  const toggleBidMode = () => isBidModeVar(!isBidModeVar());

  return {
    isBidMode,
    toggleBidMode,
  };
};
