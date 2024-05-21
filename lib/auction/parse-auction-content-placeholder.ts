import { CategoryResponse } from '@/generated/graphql';
import { findCategory } from '../group/find-category';

export const parseAuctionContentPlaceholder = ({
  categories,
  categoryId,
}: {
  categories: CategoryResponse[];
  categoryId: string;
}) =>
  `경매로 판매할 ${findCategory(categories, {
    id: categoryId,
  })
    ?.name} 제품을 자세히 소개해 주세요.\n\n특이 사항이 있을 경우 근접 사진을 첨부해 주세요.`;
