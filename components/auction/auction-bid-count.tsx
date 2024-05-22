import NumbersIcon from '@mui/icons-material/Numbers';

export default function AuctionBidCount({ bidCount }: { bidCount: number }) {
  return (
    <div className="flex flex-row gap-1 items-center">
      <NumbersIcon className="text-gray-500" />
      입찰 {bidCount}건
    </div>
  );
}
