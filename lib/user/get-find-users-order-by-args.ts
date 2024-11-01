import { FindUsersOrderByInput } from '@/generated/graphql';

export const getFindUsersOrderByArgs = ({
  sortOrder = 'username',
}: {
  sortOrder?: string;
}) => {
  const orderBy: FindUsersOrderByInput = {};

  if (sortOrder === 'username') {
    orderBy.username = 'asc';
  } else if (sortOrder === 'createdAt') {
    orderBy.createdAt = 'asc';
  }
  return orderBy;
};
