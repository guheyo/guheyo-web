'use client';

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { MouseEventHandler, useContext } from 'react';
import { v4 as uuid4 } from 'uuid';
import { UserReviewFormValues } from '@/lib/offer/offer.interfaces';
import { useRouter } from 'next/navigation';
import { STICKY_SUBMIT_BUTTON_STYLE } from '@/lib/input/input.styles';
import { parseUserReviewFormTitle } from '@/lib/user-review/parse-user-review-form-title';
import { OFFER_WRITE_SUBMIT_BUTTON_NAME } from '@/lib/offer/offer.constants';
import {
  CreateUserReviewInput,
  TagResponse,
  useFindGroupQuery,
} from '@/generated/graphql';
import {
  RATING_OPTIONS,
  USER_REVIEW,
  UserReviewTargetType,
} from '@/lib/user-review/user-review.constants';
import { parseRatingResultTitle } from '@/lib/user-review/parse-rating-result-title';
import { createUserReview } from '@/lib/api/user-review';
import { getSelectedTagIds } from '@/lib/post/get-selected-tag-ids';
import { createTagOptionsFromTags } from '@/lib/post/create-tag-options-from-tags';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import { AuthContext } from '../auth/auth.provider';
import DiscordLoginDialogButton from '../auth/discord-login-dialog-button';
import TagButtonInputs from '../posts/tag-button-inputs';
import RatingInputs from './rating-inputs';
import UserReviewImagesAndContentInput from './user-review-images-and-content-input';

export default function UserReviewForm({
  targetType,
  targetId,
  groupId,
  title,
  reviewedUserId,
  tags,
}: {
  targetType: UserReviewTargetType;
  targetId: string;
  groupId: string;
  title: string;
  reviewedUserId: string;
  tags: TagResponse[];
}) {
  const { jwtPayload } = useContext(AuthContext);
  const router = useRouter();
  const { data: groupData } = useFindGroupQuery({
    variables: {
      id: groupId,
    },
    fetchPolicy: 'cache-and-network',
  });

  const { handleSubmit, watch, control } = useForm<UserReviewFormValues>({
    defaultValues: {
      id: uuid4(),
      title,
      content: undefined,
      rating: undefined,
      mannerTagOptions: createTagOptionsFromTags({
        tags,
        tagType: 'manner',
        selectFirst: false,
      }),
      badMannerTagOptions: createTagOptionsFromTags({
        tags,
        tagType: 'badManner',
        selectFirst: true,
      }),
    },
  });

  const rating = watch('rating');

  const handleSubmitValid: SubmitHandler<UserReviewFormValues> = async (
    values,
  ) => {
    if (!jwtPayload) return;

    const input: CreateUserReviewInput = {
      post: {
        groupId,
        tagIds:
          rating === 1
            ? getSelectedTagIds(values.badMannerTagOptions)
            : getSelectedTagIds(values.mannerTagOptions),
        title: values.title,
        type: USER_REVIEW,
      },
      id: values.id,
      type: targetType,
      offerId: targetType === 'offer' ? targetId : undefined,
      auctionId: targetType === 'auction' ? targetId : undefined,
      reviewedUserId,
      content: values.content,
      rating: values.rating,
    };
    if (!input.post.tagIds?.length) return;

    await createUserReview(input);
    const groupSlug = groupData?.findGroup?.slug;
    const url = groupSlug
      ? parseChannelLink({
          channelName: 'community',
          groupSlug,
          category: 'review',
        })
      : '/';
    router.push(url);
  };

  const handleSubmitError: SubmitErrorHandler<UserReviewFormValues> = (
    errors,
    event,
  ) => {
    // TODO
  };

  const handleAuthorization: MouseEventHandler = (e) => {
    // Do nothing
  };

  const handleUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col gap-12 w-full"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <div className="text-base md:text-lg text-gray-300 font-bold">
        {parseUserReviewFormTitle(title)}
      </div>

      <div className="flex justify-between items-center text-dark-200 text-5xl px-4 py-0 h-fit">
        <RatingInputs control={control} ratingOptions={RATING_OPTIONS} />
      </div>

      {rating > 0 && (
        <>
          <div className="flex flex-col gap-4">
            <div className="text-base text-gray-300 font-bold">
              {parseRatingResultTitle({ rating })}
            </div>
            {rating === 1 && (
              <TagButtonInputs control={control} name="badMannerTagOptions" />
            )}
            {rating > 1 && (
              <TagButtonInputs control={control} name="mannerTagOptions" />
            )}
          </div>
          <UserReviewImagesAndContentInput
            control={control}
            userId={jwtPayload?.id}
          />
          <div className={STICKY_SUBMIT_BUTTON_STYLE}>
            <DiscordLoginDialogButton
              name={OFFER_WRITE_SUBMIT_BUTTON_NAME}
              onAuthorization={handleAuthorization}
              onUnAuthorization={handleUnAuthorization}
            />
          </div>
        </>
      )}
    </form>
  );
}
