import { DealType } from './deal.types';

export const parseDealPriceName = (dealType: Deal) =>
  dealType === 'swap' ? '내 추가금' : '가격';
