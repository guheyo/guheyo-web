import { AuctionStatus } from './auction.types';

export const parseAuctionPriceLabel = (status: AuctionStatus) =>
  status === 'live' ? '입찰가' : '낙찰가';
