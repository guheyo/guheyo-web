import NorthIcon from '@mui/icons-material/North';
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
    <div className="flex flex-row gap-1 items-center">
      <NorthIcon className="opacity-50" />
      <div className="opacity-50">{parseAuctionPriceLabel(auctionStatus)}</div>
      <div className="font-semibold">{parsePrice(currentBidPrice)}</div>
    </div>
  );
}
