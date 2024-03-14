'use client';

import Link from 'next/link';
import dayjs from 'dayjs';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { getPrice } from '@/lib/formatter';
import { ReportResponse, UserImageResponse } from '@/generated/graphql';
import { Deal } from '@/lib/deal/deal.types';
import Thumbnail from '../base/thumbnail';
import DealMenu from './deal-menu';
import DealAddons from './deal-addons';

interface Props {
  deal: Deal;
  dealId: string;
  authorId: string;
  thumbnail?: UserImageResponse | null;
  name: any;
  price: number;
  bumpedAt: Date;
  username: string;
  slug: string;
  reports: ReportResponse[];
}

export default function DealThumbnailPreview({
  deal,
  dealId,
  authorId,
  thumbnail,
  name,
  price,
  bumpedAt,
  username,
  slug,
  reports,
}: Props) {
  return (
    <div className="relative overflow-hidden line-break bg-dark-400 py-3 pl-3 md:p-3 rounded-lg">
      <Link
        href={`/user/${username}/${deal}/${slug}`}
        className="flex flex-row w-full md:flex-col text-start"
      >
        {thumbnail && (
          <div className="flex relative w-[38.5%] md:w-fit">
            <Thumbnail url={thumbnail.url} name={thumbnail.name} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ChatBubbleOvalLeftIcon
                color="white"
                fill="white"
                className="opacity-0 group-hover:opacity-100 w-8 h-8 md:w-9 md:h-9"
              />
            </div>
          </div>
        )}
        <div className="w-[61.5%] md:w-full px-4 md:px-2">
          <div className="flex justify-between items-center">
            <div className="text-xs md:text-sm font-medium py-3 text-light-200 h-fit md:h-fit">
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
          <div className="flex flex-row justify-between items-center">
            <div className="flex-none text-sm md:text-base font-semibold">
              {getPrice(price)}
            </div>
            <div className="absolute bottom-6 md:bottom-3 right-4 md:right-5">
              <DealAddons bumpedAt={bumpedAt} reports={reports} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
