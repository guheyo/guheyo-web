'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import {
  ReactionCanceledDocument,
  ReactionCreatedDocument,
  ReactionResponse,
  UserReviewResponse,
  useFindReactionsQuery,
} from '@/generated/graphql';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useSubscription } from '@apollo/client';
import { useEffect, useState } from 'react';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import PostDetailTitle from '../posts/post-detail-name';
import UserReviewTags from './user-review-tags';
import PostCreatedAt from '../posts/post-created-at';
import ReactionBar from '../reaction/reaction-bar';

export default function UserReviewDetailMain({
  userReview,
}: {
  userReview: UserReviewResponse;
}) {
  const device = useDeviceDetect();
  const [postReactions, setPostReactions] = useState<ReactionResponse[]>([]);

  const { loading, data: postReactionsData } = useFindReactionsQuery({
    variables: {
      postId: userReview.post.id,
    },
    fetchPolicy: 'cache-and-network',
  });

  useSubscription(ReactionCreatedDocument, {
    variables: {
      type: 'post',
      postId: userReview.post.id,
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
      postId: userReview.post.id,
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
    <>
      <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <UserProfileRedirectButton
            user={userReview.post.user}
            displayAvatar
            displayUsername
            fontSize={device === 'mobile' ? 'text-base' : 'text-lg'}
          />
          <ArrowRightAltIcon className="text-dark-200" />
          <UserProfileRedirectButton
            user={userReview.reviewedUser}
            displayAvatar
            displayUsername
            fontSize={device === 'mobile' ? 'text-base' : 'text-lg'}
          />
          <PostCreatedAt createdAt={userReview.createdAt} />
        </div>
        {/* <div className="h-8">
          UserReviewMenu
        </div> */}
      </div>
      <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
        <PostDetailTitle title={`${userReview.post.title} 거래 후기`} />
        <div className="flex flex-row gap-2">
          <UserReviewTags
            tags={userReview.post.tags}
            rating={userReview.rating}
          />
        </div>
      </div>
      <div className="pt-8 text-base md:text-base md:h-fit overflow-y-auto text-dark-100">
        {userReview.content && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {userReview.content}
          </ReactMarkdown>
        )}
      </div>
      <div className="pt-4">
        <ReactionBar postId={userReview.post.id} reactions={postReactions} />
      </div>
    </>
  );
}
