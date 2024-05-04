import { ReactionSummaryResponse } from '@/generated/graphql';
import { useContext } from 'react';
import { v4 as uuid4 } from 'uuid';
import { cancelReaction, createReaction } from '@/lib/api/reaction';
import EmojiReaction from './emoji-reaction';
import { AuthContext } from '../auth/auth.provider';
import ReactionButton from './reaction-button';

export default function ReactionBar({
  postId,
  commentId,
  reactionSummaries,
}: {
  postId?: string | null;
  commentId?: string | null;
  reactionSummaries: ReactionSummaryResponse[];
}) {
  const { jwtPayload } = useContext(AuthContext);

  const handleEmojiClick = (selectedEmojiId: string, cancellable: boolean) => {
    if (!jwtPayload) return;

    const selectedReactionSummary = reactionSummaries.find(
      (reactionSummary) => reactionSummary.emoji.id === selectedEmojiId,
    );
    if (!selectedReactionSummary?.me) {
      createReaction({
        id: uuid4(),
        emojiId: selectedEmojiId,
        postId,
        commentId,
      });
    } else if (cancellable) {
      cancelReaction({
        emojiId: selectedEmojiId,
        postId,
        commentId,
      });
    }
  };

  return (
    <div className="flex flex-row gap-1 items-center">
      {reactionSummaries.map((reactionSummary) => (
        <EmojiReaction
          key={reactionSummary.emoji.id}
          emoji={reactionSummary.emoji}
          count={reactionSummary.count}
          onEmojiClick={(selectedEmojiId) =>
            handleEmojiClick(selectedEmojiId, true)
          }
        />
      ))}
      <ReactionButton
        onEmojiClick={(selectedEmojiId) =>
          handleEmojiClick(selectedEmojiId, false)
        }
      />
    </div>
  );
}
