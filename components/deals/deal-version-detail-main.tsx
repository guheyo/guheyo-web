'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { AuthorResponse } from '@/generated/graphql';
import { Deal } from '@/lib/deal/deal.types';
import { ShippingType } from '@/lib/shipping/shipping.types';
import DealDetailPrice from './deal-detail-price';
import DealDetailName from './deal-detail-name';
import DealShippingCost from './deal-shipping-cost';
import RecentVersionLink from '../version/recent-version-link';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';

export default function DealVersionDetailMain({
  versionCreatedAt,
  dealType,
  name0,
  name1,
  slug,
  price,
  shippingCost,
  shippingType,
  description,
  author,
}: {
  versionCreatedAt: Date;
  dealType: Deal;
  name0: string;
  name1?: string;
  slug: string;
  price: number;
  shippingCost: number;
  shippingType: string;
  description?: string | null;
  author: AuthorResponse;
}) {
  return (
    <>
      <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <UserProfileRedirectButton
            user={author}
            displayAvatar
            displayUsername
            mode="standard"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
        <RecentVersionLink
          versionCreatedAt={versionCreatedAt}
          username={author.username}
          dealType={dealType}
          slug={slug}
        />
        <DealDetailName name0={name0} name1={name1} />
        <div className="grid grid-cols-1 gap-0 items-center">
          <DealDetailPrice price={price} />
          <DealShippingCost
            shippingCost={shippingCost}
            shippingType={shippingType as ShippingType}
          />
        </div>
      </div>
      <div className="pt-4 text-base md:text-base md:h-fit overflow-y-auto pb-20">
        {description && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {description}
          </ReactMarkdown>
        )}
      </div>
    </>
  );
}
