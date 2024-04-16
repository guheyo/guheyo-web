import { CategoryResponse } from '@/generated/graphql';
import { BusinessFunction } from './offer.types';
import { findOfferLabel } from './find-offer-label';
import { findCategory } from '../group/find-category';

export const parseOfferContentPlaceholder = ({
  businessFunction,
  categories,
  categoryId,
}: {
  businessFunction: BusinessFunction;
  categories: CategoryResponse[];
  categoryId: string;
}) =>
  `${findOfferLabel(businessFunction)}할 ${findCategory(categories, {
    id: categoryId,
  })
    ?.name} 제품을 자세히 소개해 주세요.\n\n특이 사항이 있을 경우 근접 사진을 첨부해 주세요.`;
