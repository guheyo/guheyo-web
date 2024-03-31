import { DEAL_STATUS_OPTIONS } from './deal.constants';
import { DealStatus } from './deal.types';

export const parseDealStatusLabel = (dealStatus: DealStatus) =>
  DEAL_STATUS_OPTIONS.find((option) => option.value === dealStatus)?.label;
