import { CRUD } from '../crud/crud.types';

export const parseDefaultReportCommentMode = ({
  isReportedUser,
  content,
}: {
  isReportedUser: boolean;
  content?: string;
}): CRUD => {
  if (!isReportedUser) return 'read';
  return content ? 'read' : 'create';
};
