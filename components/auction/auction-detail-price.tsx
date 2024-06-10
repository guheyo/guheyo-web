'use client';

import NorthIcon from '@mui/icons-material/North';
import { AuctionStatus } from '@/lib/auction/auction.types';
import { parseAuctionPriceLabel } from '@/lib/auction/parse-auction-price-label';
import { parsePrice } from '@/lib/offer/parse-price';
import { BidResponse } from '@/generated/graphql';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';

export default function AuctionDetailPrice({
  auctionStatus,
  highestBid,
}: {
  auctionStatus: AuctionStatus;
  highestBid?: BidResponse;
}) {
  const device = useDeviceDetect();

  return (
    <div className="flex flex-row gap-1 items-center">
      <NorthIcon className="opacity-50" fontSize="inherit" />
      {highestBid && (
        <UserProfileRedirectButton
          user={highestBid.user}
          displayAvatar
          displayUsername={false}
          fontSize={device === 'mobile' ? 'text-sm' : 'text-base'}
        />
      )}
      <div className="opacity-50">{parseAuctionPriceLabel(auctionStatus)}</div>
      <div className="font-semibold">{parsePrice(highestBid?.price || 0)}</div>
    </div>
  );
}
