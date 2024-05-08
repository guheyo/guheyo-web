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
  CommentWithAuthorResponse,
  useFindAuthorQuery,
} from '@/generated/graphql';
import { useSubscription } from '@apollo/client';
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
  const commentsContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom function
  const scrollToBottom = () => {
    const container = commentsContainerRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = commentsContainerRef.current;
      if (container) {
        const newIsAtBottom =
          container.scrollHeight - container.clientHeight <=
          container.scrollTop + 1;
        setIsAtBottom(newIsAtBottom);
      }
    };

    const container = commentsContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
    return () => {};
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
  if (!commentsData?.findComments) return <div />;

  const user = UserData?.findAuthor;

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

  return (
    <div className="flex flex-col relative pb-0 lg:pb-32">
      <div
        className="flex-1 flex flex-col gap-6 overflow-x-hidden"
        ref={commentsContainerRef}
      >
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            user={comment.user}
            isCurrentUser={jwtPayload?.id === comment.user.id}
            displayMenu
            defaultMode="read"
            commentId={comment.id}
            content={comment.content}
            createdAt={comment.createdAt}
            updatedAt={comment.updatedAt}
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
