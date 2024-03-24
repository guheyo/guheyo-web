'use client';

import Link from 'next/link';
import { Deal } from '@/lib/deal/deal.types';
import { parseDealDetailLink } from '@/lib/link/parse-user-page.link';
import DealMenu from './deal-menu';
import DealAddons from './deal-addons';
import DealPreviewPrice from './deal-preview-price';
import DealPreviewName from './deal-preview-name';

interface Props {
  deal: Deal;
  dealId: string;
  authorId: string;
  name: string;
  totalPrice: number;
  bumpedAt: Date;
  username: string;
  slug: string;
  reportCount: number;
  reportCommentCount: number;
}

export default function DealTextPreview({
  deal,
  dealId,
  authorId,
  name,
  totalPrice,
  bumpedAt,
  username,
  slug,
  reportCount,
  reportCommentCount,
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
            <div className="mr-[-24px] h-8">
              <DealMenu
                dealType={deal}
                dealId={dealId}
                authorId={authorId}
                privateOnly
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center pb-4">
            <DealPreviewPrice totalPrice={totalPrice} />
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
