import { AuctionStatus } from '@/lib/auction/auction.types';
import { parseAuctionPriceLabel } from '@/lib/auction/parse-auction-price-label';
import { parsePrice } from '@/lib/offer/parse-price';

export default function AuctionDetailPrice({
  auctionStatus,
  currentBidPrice,
}: {
  auctionStatus: AuctionStatus;
  currentBidPrice: number;
}) {
  return (
    <div className="text-base md:text-lg items-center font-semibold">
      {parseAuctionPriceLabel(auctionStatus)} {parsePrice(currentBidPrice)}
    </div>
  );
}
