import { DAILY_DEAL_POSTING_LIMIT } from './deal.constants';

export const validateDealTerm = (count: number) =>
  count <= DAILY_DEAL_POSTING_LIMIT;
