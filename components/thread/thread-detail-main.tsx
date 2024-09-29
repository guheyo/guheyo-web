'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import {
  ThreadResponse,
  ReactionCanceledDocument,
  ReactionCreatedDocument,
  ReactionResponse,
  useFindReactionsQuery,
} from '@/generated/graphql';
import { useEffect, useState } from 'react';
import { useSubscription } from '@apollo/client';
import ReportsLink from '../reports/reports-link';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import PostDetailDate from '../posts/post-detail-date';
import PostDetailTitle from '../posts/post-detail-name';
import ReactionBar from '../reaction/reaction-bar';
import PostTags from '../posts/post-tags';
import ThreadMenu from './thread-menu';

export default function ThreadDetailMain({
  thread,
}: {
  thread: ThreadResponse;
}) {
  const device = useDeviceDetect();
  const [postReactions, setPostReactions] = useState<ReactionResponse[]>([]);

  const { loading, data: postReactionsData } = useFindReactionsQuery({
    variables: {
      postId: thread.post.id,
    },
    fetchPolicy: 'cache-and-network',
  });

  useSubscription(ReactionCreatedDocument, {
    variables: {
      type: 'post',
      postId: thread.post.id,
    },
    onData: ({ data }) => {
      const newReaction = data.data.reactionCreated;
      setPostReactions((prevReactions) => [...prevReactions, newReaction]);
    },
    shouldResubscribe: true,
  });

  useSubscription(ReactionCanceledDocument, {
    variables: {
      type: 'post',
      postId: thread.post.id,
    },
    onData: ({ data }) => {
      const canceledReaction = data.data.reactionCanceled;
      setPostReactions((prevReactions) =>
        prevReactions.filter((reaction) => reaction.id !== canceledReaction.id),
      );
    },
    shouldResubscribe: true,
  });

  useEffect(() => {
    if (!loading && postReactionsData) {
      setPostReactions(postReactionsData.findReactions);
    }
  }, [loading, postReactionsData]);

  return (
    <div className="px-4 md:px-0">
      <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-start justify-between">
        <div className="flex flex-row items-center gap-2">
          <UserProfileRedirectButton
            user={thread.post.user}
            displayAvatar
            displayUsername
            fontSize={device === 'mobile' ? 'text-base' : 'text-lg'}
          />
          <PostDetailDate date={thread.createdAt} />
        </div>
        <div className="h-8">
          <ThreadMenu
            threadId={thread.id}
            postId={thread.post.id}
            groupId={thread.post.group.id}
            userId={thread.post.user.id}
            privateOnly
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
        {thread.post.reportCount > 0 && (
          <ReportsLink reportCount={thread.post.reportCount} />
        )}
        <PostDetailTitle title={thread.post.title} />
        <div className="flex flex-row gap-2">
          <PostTags tags={thread.post.tags} />
        </div>
      </div>
      <div className="pt-8 text-sm md:text-base md:h-fit overflow-y-auto text-dark-100">
        {thread.content && (
          <Markdown remarkPlugins={[remarkGfm]}>{thread.content}</Markdown>
        )}
      </div>
      <div className="pt-4">
        <ReactionBar postId={thread.post.id} reactions={postReactions} />
      </div>
    </div>
  );
}
