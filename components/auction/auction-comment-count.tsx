import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';

export default function AuctionCommentCount({
  commentCount,
}: {
  commentCount: number;
}) {
  return (
    <div className="flex flex-row gap-1 items-center">
      <ChatBubbleOvalLeftIcon className="w-4 opacity-50" />
      <div className="opacity-50">댓글</div>
      <div className="font-semibold">{`${commentCount}개`}</div>
    </div>
  );
}
