'use client';

import { useContext } from 'react';
import { CommentValues } from '@/lib/comment/comment.types';
import { parseDefaultReportCommentMode } from '@/lib/report/parse-default-report-comment-mode';
import { AuthorResponse, ReportCommentResponse } from '@/generated/graphql';
import { commentReport, updateReportComment } from '@/lib/api/report';
import { AuthContext } from '../auth/auth.provider';
import CommentCard from '../comments/comment-card';

export default function ReportCommentCard({
  reportId,
  reportedUser,
  comment,
}: {
  reportId: string;
  reportedUser: AuthorResponse;
  comment?: ReportCommentResponse | null;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const isReportedUser = !!jwtPayload && jwtPayload.id === reportedUser.id;
  const defaultMode = parseDefaultReportCommentMode({
    isReportedUser,
    content: comment?.content,
  });

  const handleWrite = async (values: CommentValues) => {
    if (!isReportedUser || !values.content) return;

    await commentReport({
      id: values.id,
      content: values.content,
      reportId,
    });
  };

  const handleEdit = async (values: CommentValues) => {
    if (!isReportedUser || !values.content) return;

    await updateReportComment({
      id: values.id,
      reportId,
      content: values.content,
    });
  };

  const handleDelete = (values: CommentValues) => {
    // TODO
  };

  return (
    <CommentCard
      user={reportedUser}
      isCurrentUser={jwtPayload?.id === reportedUser.id}
      displayMenu={isReportedUser}
      displayImagesInput={isReportedUser}
      defaultMode={defaultMode}
      commentId={comment?.id}
      content={comment?.content}
      images={[]}
      createdAt={comment?.createdAt}
      updatedAt={comment?.updatedAt}
      commentReactions={[]}
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
  );
}
