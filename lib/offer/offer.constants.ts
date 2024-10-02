export const OFFER = 'offer';

export const OFFER_OPTIONS = [
  { value: 'sell', label: '판매' },
  { value: 'buy', label: '구매' },
  { value: 'swap', label: '교환' },
];

export const BUSINESS_FUNCTION_OPTIONS = [
  { value: 'auction', label: '경매' },
  ...OFFER_OPTIONS,
];

export const OFFER_STATUS_OPTIONS = [
  { value: 'all', label: '모든 상태' },
  { value: 'open', label: '거래 가능' },
  { value: 'closed', label: '거래 완료' },
];

export const PRIVATE_USER_OFFER_STATUS_OPTIONS = [
  { value: 'open', label: '거래 가능' },
  { value: 'closed', label: '거래 완료' },
  { value: 'isArchived', label: '보관' },
];

export const OFFER_OPEN = 'open';
export const OFFER_CLOSED = 'closed';
export const OFFER_IS_ARCHIVED = 'isArchived';

export const OFFER_IMAGE_UPLOAD_LABEL_NAME =
  '이미지 업로드\n(아이디 인증 메모가 보이도록 사진을 찍어주세요)';

export const OFFER_NAME = '제목';
export const OFFER_NAME_PLACEHOLDER = '제목';
export const OFFER_NAME_REQUIRED_MESSAGE = '제목을 입력해 주세요';

export const OFFER_TYPE_LABEL_NAME = '거래 유형';

export const OFFER_CATEGORY_LABEL_NAME = '카테고리';

export const OFFER_PRICE_REQUIRED_MESSAGE = '가격을 숫자로 입력해 주세요';

export const OFFER_DESCRIPTION_LABEL_NAME = '제품 설명';
export const OFFER_DESCRIPTION_REQUIRED_MESSAGE = '제품 설명을 작성해 주세요';

export const OFFER_BUMP_INFO_MESSAGE = '끌올 재사용 대기시간 : 24시간';

export const OFFER_AUTO_SAVE_INTERVAL_MS = 60 * 1000;

export const DAILY_OFFER_POSTING_LIMIT = 5;
