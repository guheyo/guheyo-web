import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';

export default function AuctionCommentCount({
  commentCount,
}: {
  commentCount: number;
}) {
  return (
    <div className="flex flex-row gap-1 items-center">
      <ChatBubbleOvalLeftIcon color="gray" fill="gray" className="w-6" />
      {`댓글 ${commentCount}개`}
    </div>
  );
}
