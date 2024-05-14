import { EmojiResponse } from '@/generated/graphql';

export interface ReactionSummary {
  emoji: EmojiResponse;

  count: number;

  me: boolean;

  postId?: string | null;

  commentId?: string | null;
}
