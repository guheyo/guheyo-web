'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { AuthorResponse } from '@/generated/graphql';
import { DealType, DealStatus } from '@/lib/deal/deal.types';
import { ShippingType } from '@/lib/shipping/shipping.types';
import DealMenu from './deal-menu';
import ReportsLink from '../reports/reports-link';
import DealDetailPrice from './deal-detail-price';
import DealDetailName from './deal-detail-name';
import DealDetailBumpedAt from './deal-detail-bumped-at';
import DealShippingCost from './deal-shipping-cost';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';

export default function DealDetailMain({
  id,
  dealType,
  dealStatus,
  name0,
  name1,
  slug,
  price,
  shippingCost,
  shippingType,
  description,
  bumpedAt,
  author,
  reportCount,
  reportCommentCount,
  isHidden,
}: {
  id: string;
  dealType: DealType;
  dealStatus: DealStatus;
  name0: string;
  name1?: string;
  slug: string;
  price: number;
  shippingCost: number;
  shippingType: string;
  description?: string | null;
  bumpedAt: Date;
  author: AuthorResponse;
  reportCount: number;
  reportCommentCount: number;
  isHidden: boolean;
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
          <DealDetailBumpedAt bumpedAt={bumpedAt} />
        </div>
        <div className="h-8">
          <DealMenu
            dealId={id}
            dealType={dealType}
            dealStatus={dealStatus}
            authorId={author.id}
            reportCount={reportCount}
            reportCommentCount={reportCommentCount}
            isHidden={isHidden}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
        <ReportsLink
          reportCount={reportCount}
          reportCommentCount={reportCommentCount}
          type={dealType}
          slug={slug}
        />
        <DealDetailName dealStatus={dealStatus} name0={name0} name1={name1} />
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
