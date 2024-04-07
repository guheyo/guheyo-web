import { DealType } from './deal.types';

export const parseDealDetailLink = ({
  dealType,
  slug,
}: {
  dealType: DealType;
  slug: string;
}) => `/${dealType}/${slug}`;
