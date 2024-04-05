import { DAILY_DEAL_POSTING_LIMIT } from './deal.constants';
import { DealType } from './deal.types';
import { findDealLabel } from './find-deal-label';

export const parseDealTermAlertMessage = ({
  dealType,
  productCategoryName,
}: {
  dealType: DealType;
  productCategoryName: string;
}) => {
  const dealLabel = findDealLabel(dealType);
  return `[한도 초과 알림] 지난 24시간 동안 ${productCategoryName} 카테고리의 ${dealLabel}글을 최대 한도(${DAILY_DEAL_POSTING_LIMIT}번)까지 작성, 끌올 했어요!`;
};
