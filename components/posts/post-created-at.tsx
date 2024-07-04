import dayjs from 'dayjs';

export default function PostCreatedAt({ createdAt }: { createdAt: Date }) {
  return (
    <div className="text-[10px] md:text-xs text-gray-500">
      {dayjs(createdAt).fromNow()}
    </div>
  );
}
