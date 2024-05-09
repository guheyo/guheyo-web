'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import {
  FindCommentsOrderByArgs,
  FindCommentsWhereArgs,
} from '@/interfaces/comment.interfaces';
import { useInfiniteComments } from '@/hooks/use-infinite-comments';
import { CommentValues } from '@/lib/comment/comment.types';
import { createComment, deleteComment, updateComment } from '@/lib/api/comment';
import {
  CommentCreatedDocument,
  CommentDeletedDocument,
  CommentUpdatedDocument,
  CommentWithAuthorResponse,
  useFindAuthorQuery,
} from '@/generated/graphql';
import { useSubscription } from '@apollo/client';
import { scrollToBottom } from '@/lib/scroll/scroll-to-bottom';
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
  const [comments, setComments] = useState<CommentWithAuthorResponse[]>([]); // State to store comments
  const [isAtBottom, setIsAtBottom] = useState(false);
  const buffer = 50;

  // Event handler for scrolling
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const { scrollHeight } = document.documentElement;
    const { clientHeight } = document.documentElement;
    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - buffer);
  };

  const handleWrite = async (values: CommentValues) => {
    if (!jwtPayload || !where.postId || !values.content) return;

    await createComment({
      id: values.id,
      content: values.content,
      postId: where.postId,
    });
    scrollToBottom();
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAtBottom) {
      scrollToBottom();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

  useSubscription(CommentCreatedDocument, {
    variables: {
      postId: where.postId,
    },
    onData: ({ data }) => {
      const newComment = data.data.commentCreated;
      setComments([...comments, newComment]);
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(CommentUpdatedDocument, {
    variables: {
      postId: where.postId,
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
            };
          return comment;
        }),
      );
    },
    shouldResubscribe: true, // Always resubscribe
  });

  useSubscription(CommentDeletedDocument, {
    variables: {
      postId: where.postId,
    },
    onData: ({ data }) => {
      const deletedComment = data.data.commentDeleted;
      setComments(
        comments.filter((comment) => comment.id !== deletedComment.id),
      );
    },
    shouldResubscribe: true, // Always resubscribe
  });

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

  // Load comments if not loading and comments data is available
  useEffect(() => {
    if (!commentsLoading && commentsData?.findComments) {
      setComments(commentsData.findComments.edges.map((edge) => edge.node));
    }
  }, [commentsLoading, commentsData]);

  if (commentsLoading || userLoading) return <div />;
  if (!comments.length) return <div />;

  const user = UserData?.findAuthor;

  return (
    <div className="flex flex-col relative pb-16 lg:pb-32">
      <div className="flex-1 flex flex-col gap-6">
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            user={comment.user}
            isCurrentUser={jwtPayload?.id === comment.user.id}
            postId={comment.postId}
            displayMenu
            defaultMode="read"
            commentId={comment.id}
            content={comment.content}
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
