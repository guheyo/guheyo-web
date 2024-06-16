import dayjs from 'dayjs';
import { AuctionStatus } from './auction.types';

export const getAuctionStatusFromExtendedEndDate = (
  extendedEndDate: Date,
): AuctionStatus =>
  dayjs().isAfter(dayjs(extendedEndDate)) ? 'closed' : 'live';
