import { AUCTION_LIVE } from '@/lib/auction/auction.constants';
import { AuctionStatus } from '@/lib/auction/auction.types';
import { parsePrice } from '@/lib/offer/parse-price';

export default function AuctionPreviewPrice({
  auctionStatus,
  currentBidPrice,
}: {
  auctionStatus: AuctionStatus;
  currentBidPrice: number;
}) {
  return (
    <div className="flex flex-row gap-2 items-center">
      {auctionStatus !== AUCTION_LIVE && (
        <div className="text-sm md:text-base font-semibold">
          낙찰가 {parsePrice(currentBidPrice)}
        </div>
      )}
      {auctionStatus === AUCTION_LIVE && (
        <div className="text-sm md:text-base font-semibold">
          입찰가 {parsePrice(currentBidPrice)}
        </div>
      )}
    </div>
  );
}
