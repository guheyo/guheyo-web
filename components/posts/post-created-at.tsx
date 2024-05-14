import dayjs from 'dayjs';

export default function PostCreatedAt({ createdAt }: { createdAt: Date }) {
  return (
    <div className="text-xs md:text-sm text-gray-500">
      {dayjs(createdAt).fromNow()}
    </div>
  );
}
