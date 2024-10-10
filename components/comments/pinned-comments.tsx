'use client';

import { useContext, useEffect, useState } from 'react';
import { CommentValues } from '@/lib/comment/comment.types';
import { createComment, deleteComment, updateComment } from '@/lib/api/comment';
import {
  CommentCreatedDocument,
  CommentDeletedDocument,
  CommentUpdatedDocument,
  CommentWithAuthorResponse,
  FindCommentsOrderByInput,
  FindCommentsWhereInput,
  ReactionCanceledDocument,
  ReactionCreatedDocument,
  useFindCommentsQuery,
} from '@/generated/graphql';
import { useSubscription } from '@apollo/client';
import CommentCard from './comment-card';
import { AuthContext } from '../auth/auth.provider';
import DeleteConfirmationDialog from '../base/delete-confirmation-dialog';

export default function PinnedComments({
  postId,
  authorId,
  take,
  editable,
  includeAuthorComments,
}: {
  postId: string;
  authorId: string;
  take: number;
  editable: boolean;
  includeAuthorComments: boolean;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState<CommentValues | null>(
    null,
  );
  const [comments, setComments] = useState<CommentWithAuthorResponse[]>([]); // State to store comments

  const pinnedCommentsWhere: FindCommentsWhereInput = {
    postId,
    pinned: true,
  };
  const pinnedCommentsOrderBy: FindCommentsOrderByInput = {
    createdAt: 'desc',
  };

  const authorCommentsWhere: FindCommentsWhereInput = {
    postId,
    pinned: false,
    userId: authorId,
  };
  const authorCommentsOrderBy: FindCommentsOrderByInput = {
    createdAt: 'desc',
  };

  const handleWrite = async (values: CommentValues) => {
    if (!jwtPayload || !postId || !values.content) return;

    await createComment({
      id: values.id,
      content: values.content,
      pinned: values.pinned,
      postId,
    });
  };

  const handleEdit = async (values: CommentValues) => {
    if (!values.content) return;

    await updateComment({
      id: values.id,
      content: values.content,
      pinned: values.pinned,
    });
  };

  const handlePin = async (values: CommentValues) => {
    if (!values.content) return;

    await updateComment({
      id: values.id,
      content: values.content,
      pinned: values.pinned,
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

  const {
    loading: pinnedCommentsLoading,
    data: pinnedCommentsData,
    refetch: pinnedCommentsRefetch,
  } = useFindCommentsQuery({
    variables: {
      where: pinnedCommentsWhere,
      orderBy: pinnedCommentsOrderBy,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
  });

  const {
    loading: authorCommentsLoading,
    data: authorCommentsData,
    refetch: authorCommentsRefetch,
  } = useFindCommentsQuery({
    variables: {
      where: authorCommentsWhere,
      orderBy: authorCommentsOrderBy,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
    skip: !includeAuthorComments,
  });

  useSubscription(CommentCreatedDocument, {
    variables: {
      postId,
    },
    onData: ({ data }) => {
      const newComment = data.data.commentCreated;
      if (newComment.pinned) {
        setComments([newComment, ...comments].slice(0, take));
      } else if (includeAuthorComments && newComment.user.id === authorId) {
        const newComments = [
          ...comments.filter((c) => c.pinned),
          newComment,
          ...comments.filter((c) => !c.pinned),
        ];
        setComments(newComments.slice(0, take));
      }
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(CommentUpdatedDocument, {
    variables: {
      postId,
    },
    onData: ({ data }) => {
      pinnedCommentsRefetch({
        where: pinnedCommentsWhere,
        orderBy: pinnedCommentsOrderBy,
        take,
        skip: 0,
      });
      authorCommentsRefetch({
        where: authorCommentsWhere,
        orderBy: authorCommentsOrderBy,
        take,
        skip: 0,
      });
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(CommentDeletedDocument, {
    variables: {
      postId,
    },
    onData: ({ data }) => {
      const deletedComment = data.data.commentDeleted;
      setComments(
        comments.filter((comment) => comment.id !== deletedComment.id),
      );
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(ReactionCreatedDocument, {
    variables: {
      type: 'comment',
      postId,
    },
    onData: ({ data }) => {
      const newReaction = data.data.reactionCreated;
      setComments(
        comments.map((comment) => {
          if (comment.id === newReaction.commentId) {
            return {
              ...comment,
              reactions: [...comment.reactions, newReaction],
            };
          }
          return comment;
        }),
      );
    },
    shouldResubscribe: true,
  });

  useSubscription(ReactionCanceledDocument, {
    variables: {
      type: 'comment',
      postId,
    },
    onData: ({ data }) => {
      const canceledReaction = data.data.reactionCanceled;
      setComments(
        comments.map((comment) => {
          if (comment.id === canceledReaction.commentId) {
            return {
              ...comment,
              reactions: comment.reactions.filter(
                (reaction) => reaction.id !== canceledReaction.id,
              ),
            };
          }
          return comment;
        }),
      );
    },
    shouldResubscribe: true,
  });

  // Load comments if not loading and comments data is available
  useEffect(() => {
    if (
      !pinnedCommentsLoading &&
      !authorCommentsLoading &&
      (pinnedCommentsData?.findComments || authorCommentsData?.findComments)
    ) {
      const newComments = [
        ...(pinnedCommentsData
          ? pinnedCommentsData.findComments.edges.map((edge) => edge.node)
          : []),
        ...(authorCommentsData
          ? authorCommentsData.findComments.edges.map((edge) => edge.node)
          : []),
      ];
      setComments(newComments.slice(0, take));
    }
  }, [
    pinnedCommentsLoading,
    pinnedCommentsData,
    authorCommentsLoading,
    authorCommentsData,
    take,
  ]);

  if (pinnedCommentsLoading) return <div />;
  if (comments.length === 0) return <div />;

  return (
    <div className="flex flex-col relative bg-dark-400 border-l-4 border-gray-500 p-3 pb-4 mb-4 rounded-lg">
      <div className="flex-1 flex flex-col gap-6">
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            user={comment.user}
            isCurrentUser={jwtPayload?.id === comment.user.id}
            isAuthor={authorId === comment.user.id}
            postId={comment.postId}
            displayMenu
            displayImagesInput={false}
            defaultMode="read"
            commentId={comment.id}
            content={comment.content || undefined}
            pinned={comment.pinned}
            images={comment.images}
            createdAt={comment.createdAt}
            updatedAt={comment.updatedAt}
            commentReactions={comment.reactions}
            textFieldProps={{
              multiline: true,
              placeholder: '메시지 보내기',
              minRows: 1,
              size: 'small',
            }}
            handleWrite={handleWrite}
            handleEdit={editable ? handleEdit : undefined}
            handleDelete={handleDeleteConfirmation}
            handlePin={handlePin}
          />
        ))}
      </div>
      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        title="댓글 삭제"
        content="댓글을 완전히 삭제할까요?"
        onClose={handleCloseDeleteDialog}
        onConfirm={() => commentToDelete && handleDelete(commentToDelete)}
      />
    </div>
  );
}
