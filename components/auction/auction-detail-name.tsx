import { AuctionStatus } from '@/lib/auction/auction.types';
import { parseAuctionStatusLabel } from '@/lib/auction/parse-auction-status-label';

export default function AuctionDetailName({
  auctionStatus,
  title,
}: {
  auctionStatus: AuctionStatus;
  title: string;
}) {
  return (
    <div className="flex flex-row gap-2 items-center text-base md:text-lg font-semibold">
      {auctionStatus !== 'live' && (
        <div className="text-gray-300 bg-dark-200 px-1.5 rounded text-sm md:text-base">
          {parseAuctionStatusLabel(auctionStatus)}
        </div>
      )}
      {title}
    </div>
  );
}
