import { ProductCategoryResponse } from '@/generated/graphql';
import { Deal } from './deal.types';
import { findDealLabel } from './find-deal-label';
import { findProductCategory } from '../group/find-product-category';

export const parseDealDescriptionPlaceholder = ({
  dealType,
  productCategories,
  productCategoryId,
}: {
  dealType: Deal;
  productCategories: ProductCategoryResponse[];
  productCategoryId: string;
}) =>
  `${findDealLabel(dealType)}할 ${findProductCategory(productCategories, {
    id: productCategoryId,
  })
    ?.name} 제품을 자세히 소개해 주세요.\n\n특이 사항이 있을 경우 근접 사진을 첨부해 주세요.`;
