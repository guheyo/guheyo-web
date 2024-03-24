'use client';

import { useContext } from 'react';
import { CommentValues } from '@/lib/comment/comment.types';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { parseDefaultReportCommentMode } from '@/lib/report/parse-default-report-comment-mode';
import { updateComment } from '@/lib/api/comment';
import { CommentResponse } from '@/generated/graphql';
import { commentReport } from '@/lib/api/report';
import { AuthContext } from '../auth/auth.provider';
import ReportCommentTitle from './report-comment-title';
import CommentCard from '../comments/comment-card';

export default function ReportCommentCard({
  reportId,
  comment,
  reportedUserId,
}: {
  reportId: string;
  comment?: CommentResponse | null;
  reportedUserId: string;
}) {
  const { user } = useContext(AuthContext);
  const isReportedUser = !!user && user.id === reportedUserId;
  const defaultMode = parseDefaultReportCommentMode({
    isReportedUser,
    content: comment?.content,
  });
  const device = useDeviceDetect();

  const handleWrite = async (values: CommentValues) => {
    if (!isReportedUser || !values.content) return;

    await commentReport({
      id: values.id,
      content: values.content,
      reportId,
      authorId: user.id,
      source: device,
    });
  };

  const handleEdit = async (values: CommentValues) => {
    if (!isReportedUser || !values.content) return;

    await updateComment({
      id: values.id,
      authorId: user.id,
      content: values.content,
      source: device,
    });
  };

  const handleDelete = (values: CommentValues) => {
    // TODO
  };

  return (
    <div className="flex flex-col gap-2 rounded bg-dark-400 p-4">
      <ReportCommentTitle hasContent={!!comment?.content} />
      <CommentCard
        displayMenu={isReportedUser}
        defaultMode={defaultMode}
        comment={comment}
        textFieldProps={{
          multiline: true,
          placeholder: '메시지 보내기',
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
