import { FindAuctionPreviewsOrderByInput } from '@/generated/graphql';

export const getFindAuctionsOrderByArgs = ({
  sortOrder = 'ending',
}: {
  sortOrder?: string;
}) => {
  const orderBy: FindAuctionPreviewsOrderByInput = {};

  if (sortOrder === 'ending') {
    orderBy.extendedEndDate = 'desc';
  } else if (sortOrder === 'newest') {
    orderBy.createdAt = 'desc';
  }
  return orderBy;
};
