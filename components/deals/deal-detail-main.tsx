'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { AuthorResponse, ReportResponse } from '@/generated/graphql';
import { Deal } from '@/lib/deal/deal.types';
import UserProfilePopper from '../users/user-profile-popper';
import DealMenu from './deal-menu';
import ReportsLink from '../reports/reports-link';
import DealDetailPrice from './deal-detail-price';
import DealDetailName from './deal-detail-name';
import DealDetailBumpedAt from './deal-detail-bumped-at';

export default function DealDetailMain({
  dealType,
  id,
  name0,
  name1,
  slug,
  price,
  description,
  bumpedAt,
  author,
  reports,
}: {
  dealType: Deal;
  id: string;
  name0: string;
  name1?: string;
  slug: string;
  price: number;
  description?: string | null;
  bumpedAt: Date;
  author: AuthorResponse;
  reports: ReportResponse[];
}) {
  return (
    <>
      <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <UserProfilePopper
            user={author}
            displayAvatar
            displayUsername
            displayDM
            mode="standard"
          />
          <DealDetailBumpedAt bumpedAt={bumpedAt} />
        </div>
        <div className="mr-[-24px]">
          <DealMenu dealType={dealType} dealId={id} authorId={author.id} />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
        <DealDetailName name0={name0} name1={name1} />
        <DealDetailPrice price={price} />
      </div>
      <div className="pt-4">
        <ReportsLink
          reports={reports}
          username={author.username}
          type={dealType}
          slug={slug}
        />
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