export const AUCTION = 'auction';

export const AUCTION_STATUS_OPTIONS = [
  { value: 'all', label: '모든 상태' },
  { value: 'live', label: '진행중' },
  { value: 'closed', label: '종료' },
];

export const AUCTION_SORT_ORDER_OPTIONS = [
  { value: 'ending', label: '종료 임박' },
  { value: 'newest', label: '최신순' },
];

export const AUCTION_INTERACTION_ITEM_SORT_OPTIONS = [
  { value: 'newest', label: '최신순' },
  { value: 'bid', label: '입찰' },
  { value: 'sellerComment', label: '판매자 댓글' },
  { value: 'comment', label: '모든 댓글' },
];

export const AUCTION_LIVE = 'live';
export const AUCTION_CLOSED = 'closed';

export const AUCTION_DURATION_LABEL_NAME = '경매 기간';
