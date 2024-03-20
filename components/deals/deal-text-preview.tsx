'use client';

import Link from 'next/link';
import { Deal } from '@/lib/deal/deal.types';
import { ReportResponse } from '@/generated/graphql';
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
  reports: ReportResponse[];
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
  reports,
}: Props) {
  return (
    <div className="relative overflow-hidden line-break bg-dark-400 px-4 md:px-5 py-4 rounded-lg">
      <Link
        href={`/user/${username}/${deal}/${slug}`}
        className="w-full text-start"
      >
        <div className="grid gap-2">
          <div className="flex justify-between items-center">
            <DealPreviewName name={name} />
            <div className="mr-[-24px]">
              <DealMenu
                dealType={deal}
                dealId={dealId}
                authorId={authorId}
                privateOnly
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <DealPreviewPrice totalPrice={totalPrice} />
            <div className="absolute bottom-4 right-4 md:right-5">
              <DealAddons bumpedAt={bumpedAt} reports={reports} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
