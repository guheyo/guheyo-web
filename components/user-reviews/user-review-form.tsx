'use client';

import {
  SubmitErrorHandler,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { MouseEventHandler, useContext, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
import { UserReviewFormValues } from '@/lib/offer/offer.interfaces';
import { useRouter } from 'next/navigation';
import { ABSOLUTE_SUBMIT_BUTTON_STYLE } from '@/lib/input/input.styles';
import { TagResponse } from '@/generated/graphql';
import { parseUserReviewFormTitle } from '@/lib/user-review/parse-user-review-form-title';
import { OFFER_WRITE_SUBMIT_BUTTON_NAME } from '@/lib/offer/offer.constants';
import { AuthContext } from '../auth/auth.provider';
import DiscordLoginDialog from '../auth/discord-login-dialog';
import TagButtonInputs from '../posts/tag-button-inputs';

export default function UserReviewForm({
  offerId,
  dealName,
  reviewedUserId,
  groupId,
  tags,
}: {
  offerId: string;
  dealName: string;
  reviewedUserId: string;
  groupId: string;
  tags: TagResponse[];
}) {
  const { jwtPayload } = useContext(AuthContext);
  const router = useRouter();

  const { handleSubmit, setValue, getValues, control } =
    useForm<UserReviewFormValues>({
      defaultValues: {
        id: '',
        title: '',
        content: '',
        tagOptions: tags.map((tag) => ({
          id: tag.id,
          type: tag.type,
          name: tag.name,
          isSelected: false,
        })),
      },
    });

  const { update } = useFieldArray({
    control,
    name: 'tagOptions',
  });

  const tagOptions = getValues('tagOptions');
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

  const handleTagClick = (index: number) => {
    const tag = getValues(`tagOptions.${index}`);
    update(index, {
      ...tag,
      isSelected: !tag.isSelected,
    });
  };

  const handleAuthorization: MouseEventHandler = (e) => {
    // Do nothing
  };

  const handleUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col gap-12 w-full md:w-fit"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <div className="text-xl text-light-200 font-bold">
        {parseUserReviewFormTitle(dealName)}
      </div>

      <TagButtonInputs tagOptions={tagOptions} handleClick={handleTagClick} />

      <div className={ABSOLUTE_SUBMIT_BUTTON_STYLE}>
        <DiscordLoginDialog
          name={OFFER_WRITE_SUBMIT_BUTTON_NAME}
          onAuthorization={handleAuthorization}
          onUnAuthorization={handleUnAuthorization}
        />
      </div>
    </form>
  );
}
