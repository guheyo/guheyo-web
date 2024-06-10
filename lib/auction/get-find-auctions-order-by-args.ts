import { FindAuctionsOrderByArgs } from './auction.interfaces';

export const getFindAuctionsOrderByArgs = ({
  sortOrder = 'ending',
}: {
  sortOrder?: string;
}) => {
  const orderBy: FindAuctionsOrderByArgs = {};

  if (sortOrder === 'ending') {
    orderBy.extendedEndDate = 'desc';
  } else if (sortOrder === 'newest') {
    orderBy.createdAt = 'desc';
  }
  return orderBy;
};
