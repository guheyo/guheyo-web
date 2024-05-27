import dayjs from 'dayjs';

export default function PostDetailDate({ date }: { date: Date }) {
  return (
    <div className="text-xs md:text-sm text-gray-500">
      {dayjs(date).fromNow()}
    </div>
  );
}
