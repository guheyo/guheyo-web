export const parseDefaultBidPrice = (lastBidPrice?: number) =>
  (lastBidPrice || 0) + 5000;
