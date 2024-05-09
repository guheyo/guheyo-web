import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export default function PostCommentCount({
  comentCount,
}: {
  comentCount: number;
}) {
  return (
    <div className="flex flex-row gap-0.5 text-gray-400 items-center">
      <div>
        <ChatBubbleIcon fontSize="inherit" />
      </div>
      <div>{comentCount}</div>
    </div>
  );
}
