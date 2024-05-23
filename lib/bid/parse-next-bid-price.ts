export const parseNextBidPrice = (currentBidPrice?: number) =>
  (currentBidPrice || 0) + 5000;
