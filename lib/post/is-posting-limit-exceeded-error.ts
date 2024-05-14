import { POSTING_LIMIT_EXCEEDED_MESSAGE } from '../offer/offer.constants';

export const isPostingLimitExceededError = (errorMessage: string) =>
  errorMessage.includes(POSTING_LIMIT_EXCEEDED_MESSAGE);
