'use client';

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { MouseEventHandler, useContext, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
import { UserReviewFormValues } from '@/lib/offer/offer.interfaces';
import { useRouter } from 'next/navigation';
import { ABSOLUTE_SUBMIT_BUTTON_STYLE } from '@/lib/input/input.styles';
import { parseUserReviewFormTitle } from '@/lib/user-review/parse-user-review-form-title';
import { OFFER_WRITE_SUBMIT_BUTTON_NAME } from '@/lib/offer/offer.constants';
import { TagResponse } from '@/generated/graphql';
import { RATING_OPTIONS } from '@/lib/user-review/user-review.constants';
import { parseRatingResultTitle } from '@/lib/user-review/parse-rating-result-title';
import { AuthContext } from '../auth/auth.provider';
import DiscordLoginDialog from '../auth/discord-login-dialog';
import TagButtonInputs from '../posts/tag-button-inputs';
import RatingInputs from './rating-inputs';

export default function UserReviewForm({
  offerId,
  title,
  reviewedUserId,
  tags,
}: {
  offerId: string;
  title: string;
  reviewedUserId: string;
  tags: TagResponse[];
}) {
  const { jwtPayload } = useContext(AuthContext);
  const router = useRouter();

  const { handleSubmit, setValue, watch, control } =
    useForm<UserReviewFormValues>({
      defaultValues: {
        id: '',
        title: '',
        content: '',
        rating: undefined,
        mannerTagOptions: tags
          .filter((tag) => tag.type === 'manner')
          .map((tag) => ({
            ...tag,
            isSelected: false,
          })),
        badMannerTagOptions: tags
          .filter((tag) => tag.type === 'badManner')
          .map((tag) => ({
            ...tag,
            isSelected: true,
          })),
      },
    });

  const rating = watch('rating');

  // Init OfferReportFormValues
  useEffect(() => {
    if (!jwtPayload) return;

    setValue('id', uuid4());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jwtPayload]);

  const handleSubmitValid: SubmitHandler<UserReviewFormValues> = async (
    values,
  ) => {
    if (!jwtPayload) return;

    // TODO
    router.back();
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
      className="flex flex-col gap-12 w-full md:w-full"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <div className="text-xl text-light-200 font-bold">
        {parseUserReviewFormTitle(title)}
      </div>

      <div className="flex justify-between items-center text-dark-200 text-5xl px-4 py-0 h-fit">
        <RatingInputs control={control} ratingOptions={RATING_OPTIONS} />
      </div>

      {rating === 1 && (
        <div className="flex flex-col gap-4">
          <div className="text-base text-lg text-light-200">
            {parseRatingResultTitle({ rating })}
          </div>
          <TagButtonInputs control={control} name="badMannerTagOptions" />
        </div>
      )}

      {rating > 1 && (
        <div className="flex flex-col gap-4">
          <div className="text-base text-lg text-light-200">
            {parseRatingResultTitle({ rating })}
          </div>
          <TagButtonInputs control={control} name="mannerTagOptions" />
        </div>
      )}

      {rating > 0 && (
        <div className={ABSOLUTE_SUBMIT_BUTTON_STYLE}>
          <DiscordLoginDialog
            name={OFFER_WRITE_SUBMIT_BUTTON_NAME}
            onAuthorization={handleAuthorization}
            onUnAuthorization={handleUnAuthorization}
          />
        </div>
      )}
    </form>
  );
}
