import dayjs from 'dayjs';

export default function OfferDetailBumpedAt({ bumpedAt }: { bumpedAt: Date }) {
  return (
    <div className="text-xs md:text-sm text-gray-500">
      {dayjs(bumpedAt).fromNow()}
    </div>
  );
}
