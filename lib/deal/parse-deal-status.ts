import { DEAL_OPEN } from './deal.constants';

export const parseDealStatus = ({
  status,
  filterByAuthor,
}: {
  status: string | null;
  filterByAuthor: boolean;
}) => {
  if (status === 'all') return undefined;
  if (!status) {
    return filterByAuthor ? DEAL_OPEN : undefined;
  }
  return status;
};
