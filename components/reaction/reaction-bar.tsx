import { ReactionResponse } from '@/generated/graphql';
import { useContext } from 'react';
import { v4 as uuid4 } from 'uuid';
import { cancelReaction, createReaction } from '@/lib/api/reaction';
import { ReactionSummary } from '@/lib/reaction/reaction.interfaces';
import EmojiReaction from './emoji-reaction';
import { AuthContext } from '../auth/auth.provider';
import ReactionButton from './reaction-button';

export default function ReactionBar({
  postId,
  commentId,
  reactions,
}: {
  postId: string;
  commentId?: string | null;
  reactions: ReactionResponse[];
}) {
  const { jwtPayload } = useContext(AuthContext);

  const reactionCountsByEmoji = reactions.reduce(
    (acc, reaction) => {
      const { emoji } = reaction;
      if (!acc[emoji.id]) {
        acc[emoji.id] = {
          emoji,
          count: 0,
          me: false,
          postId: reaction.postId,
          commentId: reaction.commentId,
        };
      }
      acc[emoji.id].count += 1;
      if (reaction.userId === jwtPayload?.id) {
        acc[emoji.id].me = true;
      }
      return acc;
    },
    {} as Record<string, ReactionSummary>,
  );

  const handleEmojiClick = (selectedEmojiId: string, cancellable: boolean) => {
    if (!jwtPayload) return;

    const selectedReactionSummary = reactionCountsByEmoji[selectedEmojiId]?.me;
    if (!selectedReactionSummary) {
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
      {Object.entries(reactionCountsByEmoji).map(
        ([emojiid, reactionSummary]) => (
          <EmojiReaction
            key={reactionSummary.emoji.id}
            emoji={reactionSummary.emoji}
            count={reactionSummary.count}
            onEmojiClick={(selectedEmojiId) =>
              handleEmojiClick(selectedEmojiId, true)
            }
          />
        ),
      )}
      <ReactionButton
        onEmojiClick={(selectedEmojiId) =>
          handleEmojiClick(selectedEmojiId, false)
        }
      />
    </div>
  );
}
