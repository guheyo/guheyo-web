import { FindBrandsOrderByInput } from '@/generated/graphql';

export const getFindBrandsOrderByArgs = ({
  sortOrder = 'follower',
}: {
  sortOrder?: string;
}) => {
  const orderBy: FindBrandsOrderByInput = {};

  if (sortOrder === 'follower') {
    orderBy.follower = 'desc';
  } else if (sortOrder === 'newest') {
    orderBy.createdAt = 'desc';
  }
  return orderBy;
};
