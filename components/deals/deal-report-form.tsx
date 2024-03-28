'use client';

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { MouseEventHandler, useContext, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
import { DealReportValues } from '@/lib/deal/deal.interfaces';
import { useRouter } from 'next/navigation';
import { Deal } from '@/lib/deal/deal.types';
import { parseDealReportFormTitle } from '@/lib/deal/parse-deal-report-form-title';
import { REPORT_REASONS } from '@/lib/report/report.constants';
import { ABSOLUTE_SUBMIT_BUTTON_STYLE } from '@/lib/input/input.styles';
import { CreateReportInput } from '@/generated/graphql';
import { createReport } from '@/lib/api/report';
import { AuthContext } from '../auth/auth.provider';
import DiscordLoginDialog from '../auth/discord-login-dialog';
import AccordionInput from '../inputs/accordion-input';

export default function DealReportForm({
  dealType,
  dealId,
  refVersionId,
  dealName,
}: {
  dealType: Deal;
  dealId: string;
  refVersionId: string;
  dealName: string;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const router = useRouter();

  const { handleSubmit, control, setValue, watch } = useForm<DealReportValues>({
    defaultValues: {
      id: '',
      position: undefined,
      title: '',
      content: '',
    },
  });

  // Init DealReportValues
  useEffect(() => {
    if (!jwtPayload) return;

    setValue('id', uuid4());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jwtPayload]);

  const onClickTitle = (position: number) => {
    setValue('position', position);
    setValue('title', REPORT_REASONS[position].title);
    setValue('content', REPORT_REASONS[position].content);
  };

  const handleSubmitValid: SubmitHandler<DealReportValues> = async (values) => {
    if (!jwtPayload) return;

    const input: CreateReportInput = {
      id: values.id,
      type: dealType,
      refId: dealId,
      refVersionId,
      authorId: jwtPayload.id,
      title: values.title,
      content: values.content,
    };
    await createReport(input);
    router.back();
  };

  const handleSubmitError: SubmitErrorHandler<DealReportValues> = (errors, event) => {
    // TODO
  };

  const handleAuthorization: MouseEventHandler = () => {
    // Do nothing
  };

  const handleOnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col gap-12"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <div className="text-xl text-light-200 font-bold">
        {parseDealReportFormTitle(dealName)}
      </div>

      <AccordionInput
        position={watch('position')}
        reportReasons={REPORT_REASONS}
        summaryProps={{
          onClick: onClickTitle,
        }}
        detailProps={{
          controlProps: {
            name: 'content',
            control,
          },
        }}
      />

      <div className={ABSOLUTE_SUBMIT_BUTTON_STYLE}>
        <DiscordLoginDialog
          name="신고하기"
          onAuthorization={handleAuthorization}
          onUnAuthorization={handleOnAuthorization}
        />
      </div>
    </form>
  );
}
