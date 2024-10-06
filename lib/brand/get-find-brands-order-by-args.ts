import { FindBrandsOrderByInput } from '@/generated/graphql';

export const getFindBrandsOrderByArgs = ({
  sortOrder = 'follower',
}: {
  sortOrder?: string;
}) => {
  const orderBy: FindBrandsOrderByInput = {
    createdAt: 'desc',
  };

  if (sortOrder === 'follower') {
    orderBy.follower = 'desc';
  } else {
    orderBy.follower = undefined;
  }

  return orderBy;
};
