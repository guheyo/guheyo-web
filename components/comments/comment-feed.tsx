'use client';

import { useContext, useRef } from 'react';
import {
  FindCommentsOrderByArgs,
  FindCommentsWhereArgs,
} from '@/interfaces/comment.interfaces';
import { useInfiniteComments } from '@/hooks/use-infinite-comments';
import { CommentValues } from '@/lib/comment/comment.types';
import { createComment, updateComment } from '@/lib/api/comment';
import { useFindAuthorQuery } from '@/generated/graphql';
import CommentCard from './comment-card';
import { AuthContext } from '../auth/auth.provider';

export default function CommentFeed({
  where,
  orderBy,
}: {
  where: FindCommentsWhereArgs;
  orderBy: FindCommentsOrderByArgs;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const ref = useRef<HTMLDivElement>(null);

  const { loading: commentsLoading, data: commentsData } = useInfiniteComments({
    ref,
    where,
    orderBy,
    take: 10,
  });

  const { loading: userLoading, data: UserData } = useFindAuthorQuery({
    variables: {
      id: jwtPayload?.id,
    },
  });

  if (commentsLoading || userLoading) return <div />;
  if (!commentsData?.findComments) return <div />;

  const comments = commentsData.findComments.edges;
  const user = UserData?.findAuthor;

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
    <div className="flex flex-col gap-4 w-full">
      <CommentCard
        user={user || undefined}
        isCurrentUser
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
        <CommentCard
          key={comment.node.id}
          user={comment.node.user}
          isCurrentUser={jwtPayload?.id === comment.node.user.id}
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
      ))}
      <div ref={ref} />
    </div>
  );
}
