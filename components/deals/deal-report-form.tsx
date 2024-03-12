'use client';

import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { MouseEventHandler, useContext, useEffect } from 'react';
import { DealReportValues } from '@/lib/deal/deal.interfaces';
import { useRouter } from 'next/navigation';
import { Deal } from '@/lib/deal/deal.types';
import { AuthContext } from '../auth/auth.provider';
import DiscordLoginDialog from '../auth/discord-login-dialog';
import { parseDealReportFormTitle } from '@/lib/deal/parse-deal-report-form-title';
import AccordionInput from '../inputs/accordion-input';
import { REPORT_REASONS } from '@/lib/report/report.constants';
import { STICKY_SUBMIT_BUTTON_STYLE } from '@/lib/input/input.styles';

export default function DealReportForm({
  dealType,
  dealId,
  dealName,
}: {
  dealType: Deal;
  dealId: string;
  dealName: string;
}) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const { handleSubmit, control, setValue, getValues, watch } =
    useForm<DealReportValues>({
      defaultValues: {
        dealId,
        reporterId: '',
        position: 0,
        title: '',
        content: '',
      },
    });
const values = watch();
console.log('values: ', values);


  useEffect(() => {
    if (!user) return;

    setValue('reporterId', user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onClickTitle = (position: number) => {
    setValue('position', position);
    setValue('title', REPORT_REASONS[position].title);
    setValue('content', REPORT_REASONS[position].content);
  };

  const handleSubmitValid: SubmitHandler<DealReportValues> = async (data) => {
    if (!user) return;
    // TODO
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
          onClick: onClickTitle
        }}
        detailProps={{
          controlProps: {
            name: 'content',
            control,
          },
        }}
      />

      <div className={STICKY_SUBMIT_BUTTON_STYLE}>
        <DiscordLoginDialog
          name="신고하기"
          onAuthorization={handleAuthorization}
          onUnAuthorization={handleOnAuthorization}
        />
      </div>
    </form>
  );
}
