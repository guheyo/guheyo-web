'use client';

import { useContext, useRef, useState } from 'react';
import {
  FindCommentsOrderByArgs,
  FindCommentsWhereArgs,
} from '@/interfaces/comment.interfaces';
import { useInfiniteComments } from '@/hooks/use-infinite-comments';
import { CommentValues } from '@/lib/comment/comment.types';
import { createComment, deleteComment, updateComment } from '@/lib/api/comment';
import { useFindAuthorQuery } from '@/generated/graphql';
import CommentCard from './comment-card';
import { AuthContext } from '../auth/auth.provider';
import DeleteConfirmationDialog from '../base/delete-confirmation-dialog';

export default function CommentFeed({
  where,
  orderBy,
}: {
  where: FindCommentsWhereArgs;
  orderBy: FindCommentsOrderByArgs;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState<CommentValues | null>(
    null,
  );

  const { loading: commentsLoading, data: commentsData } = useInfiniteComments({
    ref: sentinelRef,
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

  const handleDeleteConfirmation = (comment: CommentValues) => {
    setCommentToDelete(comment);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setCommentToDelete(null);
    setDeleteDialogOpen(false);
  };

  const handleDelete = async (values: CommentValues) => {
    if (!values.id) return;

    await deleteComment({
      id: values.id,
    });
    handleCloseDeleteDialog();
  };

  return (
    <div className="flex flex-col relative pb-0 lg:pb-32">
      <div className="flex-1 flex flex-col gap-6 overflow-x-hidden overflow-y-auto max-h-[60vh] lg:max-h-[75vh]">
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
            handleDelete={handleDeleteConfirmation}
          />
        ))}
        <div ref={sentinelRef} />
      </div>
      <div className="fixed bottom-0 w-full max-w-2xl mx-auto bg-dark-500 py-6 md:py-10">
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
      </div>
      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        dialogTitle="댓글을 삭제할까요?"
        onClose={handleCloseDeleteDialog}
        onConfirm={() => commentToDelete && handleDelete(commentToDelete)}
      />
    </div>
  );
}
