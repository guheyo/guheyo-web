import dayjs from 'dayjs';

export default function DealDetailBumpedAt({ bumpedAt }: { bumpedAt: Date }) {
  return (
    <div className="text-[10px] md:text-xs text-gray-400">
      {dayjs(bumpedAt).fromNow()}
    </div>
  );
}
