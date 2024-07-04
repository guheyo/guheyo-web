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
    <>
      {auctionStatus !== AUCTION_LIVE && (
        <div className="flex flex-row gap-1 text-sm md:text-base font-semibold">
          낙찰가
          <div className="text-gray-200">{parsePrice(currentBidPrice)}</div>
        </div>
      )}
      {auctionStatus === AUCTION_LIVE && (
        <div className="flex flex-row gap-1 text-sm md:text-base font-semibold">
          입찰가
          <div className="text-gray-200">{parsePrice(currentBidPrice)}</div>
        </div>
      )}
    </>
  );
}
