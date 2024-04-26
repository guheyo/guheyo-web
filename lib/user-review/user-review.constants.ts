import { RatingOption } from './user-review.types';

export const USER_REVIEW = 'userReview';

export const RATING_OPTIONS: RatingOption[] = [
  {
    ratingValue: 1,
    emojiPath: 'emoji/frustrated.gif',
    label: '불쾌해요',
    alt: 'Emoji created by Doraemon10x. Licensed under CC BY 4.0 License. Source: https://emoji.gg/user/842563221440430111',
  },
  {
    ratingValue: 2,
    emojiPath: 'emoji/ok.gif',
    label: '좋아요',
    alt: 'Emoji created by Doraemon10x. Licensed under CC BY 4.0 License. Source: https://emoji.gg/user/842563221440430111',
  },
  {
    ratingValue: 3,
    emojiPath: 'emoji/love.gif',
    label: '최고예요',
    alt: 'Emoji created by Doraemon10x. Licensed under CC BY 4.0 License. Source: https://emoji.gg/user/842563221440430111',
  },
];
