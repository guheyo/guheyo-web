import { EmojiResponse } from '@/generated/graphql';
import Avatar from '../avatar/avatar';

export default function EmojiReaction({
  emoji,
  count,
  onEmojiClick,
}: {
  emoji: EmojiResponse;
  count: number;
  onEmojiClick: (selectedEmojiId: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onEmojiClick(emoji.id)}
      className="flex flex-row gap-2 text-gray-300 bg-gray-700 rounded-lg p-1 text-xs md:text-xs font-semibold"
    >
      <Avatar src={emoji.url} name={emoji.name} fontSize="text-xxs" />
      {count}
    </button>
  );
}
