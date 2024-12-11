import { FindProductsOrderByInput } from '@/generated/graphql';

export const getFindProductsOrderByArgs = ({
  sortOrder = 'name',
}: {
  sortOrder?: string;
}) => {
  const orderBy: FindProductsOrderByInput = {
    createdAt: 'desc',
  };

  if (sortOrder === 'name') {
    orderBy.name = 'asc';
  }

  return orderBy;
};
