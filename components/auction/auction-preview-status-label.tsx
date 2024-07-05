import { AuctionStatus } from '@/lib/auction/auction.types';
import { parseAuctionStatusLabel } from '@/lib/auction/parse-auction-status-label';

export default function AuctionPreviewStatusLabel({
  auctionStatus,
}: {
  auctionStatus: AuctionStatus;
}) {
  return (
    <div className="text-gray-200 bg-dark-200 px-1 py-0.5 rounded text-xs md:text-sm">
      {parseAuctionStatusLabel(auctionStatus)}
    </div>
  );
}
