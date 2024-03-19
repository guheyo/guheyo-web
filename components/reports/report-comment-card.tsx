'use client';

import { useContext } from 'react';
import { CommentValues } from '@/lib/comment/comment.types';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { parseDefaultReportCommentMode } from '@/lib/report/parse-default-report-comment-mode';
import commentDealReport from '@/lib/deal/comment-deal-report';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../auth/auth.provider';
import ReportCommentTitle from './report-comment-title';
import CommentCard from '../comments/comment-card';

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
  const defaultMode = parseDefaultReportCommentMode({
    isReportedUser,
    content,
  });
  const device = useDeviceDetect();
  const router = useRouter();

  const handleWrite = async (values: CommentValues) => {
    if (!isReportedUser) return;
    if (!values.content) return;

    await commentDealReport({
      type,
      id: values.id,
      refId,
      content: values.content,
      reportId,
      authorId: user.id,
      source: device,
    });
    router.refresh();
  };

  const handleEdit = async (values: CommentValues) => {
    // TODO
  };

  const handleDelete = (values: CommentValues) => {
    // TODO
  };

  return (
    <div className="flex flex-col gap-2 rounded bg-dark-400 p-4">
      <ReportCommentTitle hasContent={!!content} />
      <CommentCard
        displayMenu={isReportedUser}
        defaultMode={defaultMode}
        content={content}
        createdAt={createdAt}
        textFieldProps={{
          multiline: true,
          placeholder: content || '메시지 보내기',
          minRows: 1,
          size: 'small',
        }}
        handleWrite={handleWrite}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
