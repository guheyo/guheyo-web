'use client';

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
import { ReportFormValues } from '@/lib/offer/offer.interfaces';
import { useRouter } from 'next/navigation';
import { parseReportFormTitle } from '@/lib/post/parse-report-form-title';
import { REPORT_REASONS } from '@/lib/report/report.constants';
import { ABSOLUTE_SUBMIT_BUTTON_STYLE } from '@/lib/input/input.styles';
import { CreateReportInput } from '@/generated/graphql';
import { createReport } from '@/lib/api/report';
import { AuthContext } from '../auth/auth.provider';
import AccordionInput from '../inputs/accordion-input';
import ReportSubmitButton from '../reports/report-submit-button';

export default function PostReportForm({
  reportedPostId,
  title,
  reportedUserId,
  groupId,
}: {
  reportedPostId: string;
  title: string;
  reportedUserId: string;
  groupId: string;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const router = useRouter();

  const { handleSubmit, control, setValue, watch } = useForm<ReportFormValues>({
    defaultValues: {
      id: uuid4(),
      position: undefined,
      reason: '',
      description: '',
    },
  });

  const onClickTitle = (position: number) => {
    setValue('position', position);
    setValue('reason', REPORT_REASONS[position].reason);
    setValue('description', REPORT_REASONS[position].description);
  };

  const handleSubmitValid: SubmitHandler<ReportFormValues> = async (values) => {
    if (!jwtPayload) return;
    if (!values.reason) return;

    const input: CreateReportInput = {
      id: values.id,
      type: 'post',
      reportedPostId,
      reportedUserId,
      reason: values.reason,
      description: values.description,
      groupId,
    };
    await createReport(input);
    router.back();
  };

  const handleSubmitError: SubmitErrorHandler<ReportFormValues> = (
    errors,
    event,
  ) => {
    // TODO
  };

  return (
    <form
      className="flex flex-col gap-12"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <div className="text-xl text-gray-300 font-bold">
        {parseReportFormTitle(title)}
      </div>

      <AccordionInput
        position={watch('position')}
        reportReasons={REPORT_REASONS}
        summaryProps={{
          onClick: onClickTitle,
        }}
        detailProps={{
          controlProps: {
            name: 'description',
            control,
          },
        }}
      />

      <div className={ABSOLUTE_SUBMIT_BUTTON_STYLE}>
        <ReportSubmitButton />
      </div>
    </form>
  );
}
