'use client';

import {
  SubmitErrorHandler,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { MouseEventHandler, useContext, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
import { DealReviewValues } from '@/lib/deal/deal.interfaces';
import { useRouter } from 'next/navigation';
import { DealType } from '@/lib/deal/deal.types';
import { ABSOLUTE_SUBMIT_BUTTON_STYLE } from '@/lib/input/input.styles';
import { MannerTagResponse } from '@/generated/graphql';
import { parseDealReviewFormTitle } from '@/lib/deal/parse-deal-review-form-title';
import { DEAL_WRITE_SUBMIT_BUTTON_NAME } from '@/lib/deal/deal.constants';
import { AuthContext } from '../auth/auth.provider';
import DiscordLoginDialog from '../auth/discord-login-dialog';
import MannerTagButtonInputs from './manner-tag-button-inputs';

export default function DealReviewForm({
  dealType,
  dealId,
  refVersionId,
  dealName,
  revieweeId,
  groupId,
  mannerTags,
}: {
  dealType: DealType;
  dealId: string;
  refVersionId: string;
  dealName: string;
  revieweeId: string;
  groupId: string;
  mannerTags: MannerTagResponse[];
}) {
  const { jwtPayload } = useContext(AuthContext);
  const router = useRouter();

  const { handleSubmit, setValue, getValues, control } =
    useForm<DealReviewValues>({
      defaultValues: {
        id: '',
        title: '',
        content: '',
        mannerTagOptions: mannerTags.map((tag) => ({
          id: tag.id,
          name: tag.name,
          isPositive: tag.isPositive,
          isSelected: false,
        })),
      },
    });

  const { update } = useFieldArray({
    control,
    name: 'mannerTagOptions',
  });

  const mannerTagOptions = getValues('mannerTagOptions');
  // Init DealReportValues
  useEffect(() => {
    if (!jwtPayload) return;

    setValue('id', uuid4());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jwtPayload]);

  const handleSubmitValid: SubmitHandler<DealReviewValues> = async (values) => {
    if (!jwtPayload) return;

    // TODO
    router.back();
  };

  const handleSubmitError: SubmitErrorHandler<DealReviewValues> = (
    errors,
    event,
  ) => {
    // TODO
  };

  const handleTagClick = (index: number) => {
    const tag = getValues(`mannerTagOptions.${index}`);
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
        {parseDealReviewFormTitle(dealName)}
      </div>

      <MannerTagButtonInputs
        mannerTagOptions={mannerTagOptions}
        handleClick={handleTagClick}
      />

      <div className={ABSOLUTE_SUBMIT_BUTTON_STYLE}>
        <DiscordLoginDialog
          name={DEAL_WRITE_SUBMIT_BUTTON_NAME}
          onAuthorization={handleAuthorization}
          onUnAuthorization={handleUnAuthorization}
        />
      </div>
    </form>
  );
}
