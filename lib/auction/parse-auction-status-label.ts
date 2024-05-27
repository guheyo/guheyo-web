import { AUCTION_STATUS_OPTIONS } from './auction.constants';
import { AuctionStatus } from './auction.types';

export const parseAuctionStatusLabel = (status: AuctionStatus) =>
  AUCTION_STATUS_OPTIONS.find((option) => option.value === status)?.label;
