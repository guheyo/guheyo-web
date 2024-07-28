'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { useInfiniteComments } from '@/hooks/use-infinite-comments';
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
  useFindAuthorQuery,
} from '@/generated/graphql';
import { useSubscription } from '@apollo/client';
import CommentCard from './comment-card';
import { AuthContext } from '../auth/auth.provider';
import DeleteConfirmationDialog from '../base/delete-confirmation-dialog';

export default function CommentFeed({
  authorId,
  defaultWhere,
  defaultOrderBy,
}: {
  authorId: string;
  defaultWhere: FindCommentsWhereInput;
  defaultOrderBy: FindCommentsOrderByInput;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState<CommentValues | null>(
    null,
  );
  const [comments, setComments] = useState<CommentWithAuthorResponse[]>([]); // State to store comments

  const handleWrite = async (values: CommentValues) => {
    if (!jwtPayload || !defaultWhere.postId || !values.content) return;

    await createComment({
      id: values.id,
      content: values.content,
      pinned: values.pinned,
      postId: defaultWhere.postId,
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

  useSubscription(CommentCreatedDocument, {
    variables: {
      postId: defaultWhere.postId,
    },
    onData: ({ data }) => {
      const newComment = data.data.commentCreated;
      setComments([newComment, ...comments]);
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(CommentUpdatedDocument, {
    variables: {
      postId: defaultWhere.postId,
    },
    onData: ({ data }) => {
      const updatedComment = data.data.commentUpdated;
      setComments(
        comments.map((comment) => {
          if (comment.id === updatedComment.id)
            return {
              ...comment,
              updatedAt: updatedComment.updatedAt,
              content: updatedComment.content,
              pinned: updatedComment.pinned,
            };
          return comment;
        }),
      );
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(CommentDeletedDocument, {
    variables: {
      postId: defaultWhere.postId,
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
      postId: defaultWhere.postId,
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
      postId: defaultWhere.postId,
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

  const { loading: commentsLoading, data: commentsData } = useInfiniteComments({
    ref: sentinelRef,
    where: defaultWhere,
    orderBy: defaultOrderBy,
    take: 10,
  });

  const { loading: userLoading, data: UserData } = useFindAuthorQuery({
    variables: {
      id: jwtPayload?.id,
    },
  });

  // Load comments if not loading and comments data is available
  useEffect(() => {
    if (!commentsLoading && commentsData?.findComments) {
      setComments(commentsData.findComments.edges.map((edge) => edge.node));
    }
  }, [commentsLoading, commentsData]);

  if (commentsLoading || userLoading) return <div />;

  const user = UserData?.findAuthor;

  return (
    <div className="flex flex-col relative pb-16 lg:pb-32">
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
            handleEdit={handleEdit}
            handleDelete={handleDeleteConfirmation}
            handlePin={handlePin}
          />
        ))}
        <div ref={sentinelRef} />
      </div>
      <div className="fixed bottom-0 w-full max-w-2xl mx-auto bg-dark-500 py-6 md:py-10 pr-8 md:pr-0">
        <CommentCard
          user={user || undefined}
          isCurrentUser
          isAuthor={authorId === user?.id}
          displayMenu
          displayImagesInput
          defaultMode="create"
          images={[]}
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
