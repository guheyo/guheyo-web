'use client';

import dayjs from 'dayjs';
import { getPrice } from '@/lib/formatter';
import Link from 'next/link';
import { Deal } from '@/lib/deal/deal.types';
import { ReportResponse } from '@/generated/graphql';
import DealMenu from './deal-menu';
import DealAddons from './deal-addons';

interface Props {
  deal: Deal;
  dealId: string;
  authorId: string;
  name: string;
  price: number;
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
  price,
  bumpedAt,
  username,
  slug,
  reports,
}: Props) {
  return (
    <div className="relative overflow-hidden line-break bg-dark-400 px-3 py-3 rounded-lg">
      <Link
        href={`/user/${username}/${deal}/${slug}`}
        className="w-full text-start"
      >
        <div className="grid px-0 md:px-2">
          <div className="flex justify-between items-center">
            <div className="text-xs md:text-sm py-3 font-medium text-light-200">
              {name}
            </div>
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
            <div className="flex-none text-xs md:text-sm font-semibold">
              {getPrice(price)}
            </div>
            <div className="text-[10px] md:text-sm text-gray-500 md:text-gray-500">
              {dayjs(bumpedAt).fromNow()}
            </div>
          </div>
          <div className="flex justify-end pt-6">
            <div className="absolute bottom-3">
              <DealAddons reports={reports} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
