import { CommentMode } from '../comment/comment.types';

export const parseDefaultReportCommentMode = ({
  isReportedUser,
  content,
}: {
  isReportedUser: boolean;
  content?: string;
}): CommentMode => {
  if (!isReportedUser) return 'read';
  return content ? 'read' : 'create';
};
