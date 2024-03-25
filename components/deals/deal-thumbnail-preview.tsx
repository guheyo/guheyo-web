'use client';

import Link from 'next/link';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { UserImageResponse } from '@/generated/graphql';
import { Deal } from '@/lib/deal/deal.types';
import { parseDealDetailLink } from '@/lib/link/parse-user-page.link';
import Thumbnail from '../base/thumbnail';
import DealMenu from './deal-menu';
import DealAddons from './deal-addons';
import DealPreviewPrice from './deal-preview-price';
import DealPreviewName from './deal-preview-name';

interface Props {
  deal: Deal;
  dealId: string;
  authorId: string;
  thumbnail?: UserImageResponse | null;
  name: any;
  totalPrice: number;
  bumpedAt: Date;
  username: string;
  slug: string;
  reportCount: number;
  reportCommentCount: number;
  hasUncommentedReports: boolean;
}

export default function DealThumbnailPreview({
  deal,
  dealId,
  authorId,
  thumbnail,
  name,
  totalPrice,
  bumpedAt,
  username,
  slug,
  reportCount,
  reportCommentCount,
  hasUncommentedReports,
}: Props) {
  return (
    <div className="relative overflow-hidden line-break bg-dark-400 py-3 pl-3 md:p-3 rounded-lg">
      <Link
        href={parseDealDetailLink({ username, deal, slug })}
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
          <div className="flex flex-row justify-between items-center pt-2">
            <div className="w-fit">
              <DealPreviewName name={name} />
            </div>
            <div className="h-8">
              <DealMenu
                dealType={deal}
                dealId={dealId}
                authorId={authorId}
                privateOnly
                reportCount={reportCount}
                reportCommentCount={reportCommentCount}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center pb-1">
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
