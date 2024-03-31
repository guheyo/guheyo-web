'use client';

import Link from 'next/link';
import { Deal, DealStatus } from '@/lib/deal/deal.types';
import { parseDealDetailLink } from '@/lib/user/parse-user-page.link';
import DealMenu from './deal-menu';
import DealAddons from './deal-addons';
import DealPreviewPrice from './deal-preview-price';
import DealPreviewName from './deal-preview-name';

interface Props {
  dealId: string;
  deal: Deal;
  dealStatus: DealStatus;
  authorId: string;
  name: string;
  totalPrice: number;
  bumpedAt: Date;
  username: string;
  slug: string;
  reportCount: number;
  reportCommentCount: number;
  isHidden: boolean;
}

export default function DealTextPreview({
  dealId,
  deal,
  dealStatus,
  authorId,
  name,
  totalPrice,
  bumpedAt,
  username,
  slug,
  reportCount,
  reportCommentCount,
  isHidden,
}: Props) {
  return (
    <div className="relative overflow-hidden line-break bg-dark-400 px-4 md:px-5 rounded-lg">
      <Link
        href={parseDealDetailLink({ username, deal, slug })}
        className="w-full text-start"
      >
        <div className="grid grid-cols-1 gap-0">
          <div className="flex flex-row justify-between items-center pt-4">
            <div className="w-fit">
              <DealPreviewName name={name} />
            </div>
            <div className="h-8">
              <DealMenu
                dealId={dealId}
                dealType={deal}
                dealStatus={dealStatus}
                authorId={authorId}
                privateOnly
                reportCount={reportCount}
                reportCommentCount={reportCommentCount}
                isHidden={isHidden}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center pb-4">
            <DealPreviewPrice dealStatus={dealStatus} totalPrice={totalPrice} />
            <div className="absolute bottom-4 right-4 md:right-5">
              <DealAddons
                bumpedAt={bumpedAt}
                reportCount={reportCount}
                reportCommentCount={reportCommentCount}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
