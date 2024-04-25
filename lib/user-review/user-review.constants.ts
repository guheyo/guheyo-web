import { RatingOption } from './user-review.types';

export const USER_REVIEW = 'userReview';

export const RATING_OPTIONS: RatingOption[] = [
  {
    ratingValue: 1,
    emojiPath: 'emoji/frustrated.gif',
    label: '불쾌해요',
  },
  {
    ratingValue: 2,
    emojiPath: 'emoji/ok.gif',
    label: '좋아요',
  },
  {
    ratingValue: 3,
    emojiPath: 'emoji/love.gif',
    label: '최고예요',
  },
];
