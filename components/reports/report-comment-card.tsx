'use client';

import { useContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { CommentValues } from '@/lib/comment/comment.types';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { AuthContext } from '../auth/auth.provider';
import ReportCommentTitle from './report-comment-title';
import ReportCommentContent from './report-comment-content';

export default function ReportCommentCard({
  reportId,
  type,
  refId,
  content,
  createdAt,
  reportedUserId,
}: {
  reportId: string;
  type: string;
  refId: string;
  content?: string;
  createdAt?: Date;
  reportedUserId: string;
}) {
  const { user } = useContext(AuthContext);
  const isReportedUser = !!user && user.id === reportedUserId;
  const device = useDeviceDetect();

  const handleSubmitValid: SubmitHandler<CommentValues> = async (values) => {
    if (!isReportedUser) return;
    if (!values.content) return;

    // TODO
  };

  return (
    <div className="flex flex-col gap-2 rounded bg-dark-400 p-4">
      <ReportCommentTitle hasContent={!!content} />
      <ReportCommentContent
        content={content}
        createdAt={createdAt}
        isReportedUser={isReportedUser}
        handleSubmitValid={handleSubmitValid}
      />
    </div>
  );
}
