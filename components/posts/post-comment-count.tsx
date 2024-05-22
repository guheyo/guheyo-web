import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';

export default function PostCommentCount({
  comentCount,
}: {
  comentCount: number;
}) {
  return (
    <div className="flex flex-row gap-0.5 text-gray-400 items-center">
      <div>
        <ChatBubbleOvalLeftIcon color="gray" fill="gray" className="w-4" />
      </div>
      <div>{comentCount}</div>
    </div>
  );
}
