import { DAILY_OFFER_POSTING_LIMIT } from './offer.constants';
import { BusinessFunction } from './offer.types';
import { findOfferLabel } from './find-offer-label';

export const parseOfferTermAlertMessage = ({
  businessFunction,
  categoryName,
}: {
  businessFunction: BusinessFunction;
  categoryName: string;
}) => {
  const label = findOfferLabel(businessFunction);
  return `[한도 초과 알림] 지난 24시간 동안 ${categoryName} 카테고리의 ${label}글을 최대 한도(${DAILY_OFFER_POSTING_LIMIT}번)까지 작성, 끌올 했어요!`;
};
