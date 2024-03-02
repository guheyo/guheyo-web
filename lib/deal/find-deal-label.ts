import { DEAL_OPTIONS } from './deal.constants';
import { Deal } from './deal.types';

export const findDealLabel = (dealType: Deal) =>
  DEAL_OPTIONS.find((option) => option.value === dealType)!.label;