import { RatingOption } from './user-review.types';

export const USER_REVIEW = 'userReview';

export const RATING_OPTIONS: RatingOption[] = [
  {
    ratingValue: 1,
    emojiPath: 'emoji/20240515/wumpus/wumpus-angry.gif',
    label: '불쾌해요',
    alt: 'Emoji created by Doraemon10x. Licensed under CC BY 4.0 License. Source: https://emoji.gg/user/842563221440430111',
  },
  {
    ratingValue: 2,
    emojiPath: 'emoji/20240515/wumpus/wumpus-ok.gif',
    label: '좋아요',
    alt: 'Emoji created by Doraemon10x. Licensed under CC BY 4.0 License. Source: https://emoji.gg/user/842563221440430111',
  },
  {
    ratingValue: 3,
    emojiPath: 'emoji/20240515/wumpus/wumpus-love.gif',
    label: '최고예요',
    alt: 'Emoji created by Doraemon10x. Licensed under CC BY 4.0 License. Source: https://emoji.gg/user/842563221440430111',
  },
];

export const MANNER_TAG_TYPE_OPTIONS = [
  { value: 'all', label: '모든 매너' },
  { value: 'manner', label: '매너' },
  { value: 'badManner', label: '비매너' },
];

export const PRIVATE_USER_REVIEW_OPTIONS = [
  { value: 'received', label: '받은 거래 후기' },
  { value: 'submitted', label: '보낸 거래 후기' },
];

export const PUBLIC_USER_REVIEW_OPTIONS = [
  { value: 'received', label: '받은 거래 후기' },
  { value: 'submitted', label: '보낸 거래 후기' },
];

export type UserReviewTargetType = 'offer' | 'auction';

export const USER_REVIEW_TARGET_TYPE_OPTIONS = [
  {
    label: '매매',
    value: 'offer',
  },
  {
    label: '경매',
    value: 'auction',
  },
];
