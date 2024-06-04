import NumbersIcon from '@mui/icons-material/Numbers';

export default function AuctionBidCount({ bidCount }: { bidCount: number }) {
  return (
    <div className="flex flex-row gap-1 items-center">
      <NumbersIcon className="opacity-50" />
      <div className="opacity-50">입찰</div>
      <div className="font-semibold">{bidCount}건</div>
    </div>
  );
}
