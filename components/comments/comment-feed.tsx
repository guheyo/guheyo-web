'use client';

import { useContext, useRef } from 'react';
import {
  FindCommentsOrderByArgs,
  FindCommentsWhereArgs,
} from '@/interfaces/comment.interfaces';
import { useInfiniteComments } from '@/hooks/use-infinite-comments';
import { CommentValues } from '@/lib/comment/comment.types';
import { createComment, updateComment } from '@/lib/api/comment';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import CommentCard from './comment-card';
import { AuthContext } from '../auth/auth.provider';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';

export default function CommentFeed({
  where,
  orderBy,
}: {
  where: FindCommentsWhereArgs;
  orderBy: FindCommentsOrderByArgs;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const ref = useRef<HTMLDivElement>(null);
  const device = useDeviceDetect();

  const { loading, data } = useInfiniteComments({
    ref,
    where,
    orderBy,
    take: 10,
  });

  if (loading) return <div />;
  if (!data?.findComments) return <div />;

  const comments = data.findComments.edges;

  const handleWrite = async (values: CommentValues) => {
    if (!jwtPayload || !where.postId || !values.content) return;

    await createComment({
      id: values.id,
      content: values.content,
      postId: where.postId,
    });
  };

  const handleEdit = async (values: CommentValues) => {
    if (!values.content) return;

    await updateComment({
      id: values.id,
      content: values.content,
    });
  };

  const handleDelete = (values: CommentValues) => {
    // TODO
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <CommentCard
        displayMenu
        defaultMode="create"
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
      {comments.map((comment) => (
        <div key={comment.node.id} className="flex flex-col gap-2 rounded p-2">
          <UserProfileRedirectButton
            user={comment.node.user}
            displayAvatar
            displayUsername
            fontSize={device === 'mobile' ? 'text-base' : 'text-lg'}
          />
          <CommentCard
            displayMenu
            defaultMode="read"
            commentId={comment.node.id}
            content={comment.node.content}
            createdAt={comment.node.createdAt}
            updatedAt={comment.node.updatedAt}
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
      ))}
      <div ref={ref} />
    </div>
  );
}
