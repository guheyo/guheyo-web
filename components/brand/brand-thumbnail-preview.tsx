'use client';

import Link from 'next/link';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { BrandPreviewResponse } from '@/generated/graphql';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import { parseBrandHomeLink } from '@/lib/brand/parse-brand-home-link';
import Thumbnail from '../base/thumbnail';
import GroupNameLink from '../groups/group-name-link';
import BrandPreviewHeader from './brand-preview-header';
import FollowDialog from '../follow/follow-dialog';

interface Props {
  brand: BrandPreviewResponse;
  isInGroup: boolean;
}

export default function BrandThumbnailPreview({ brand, isInGroup }: Props) {
  return (
    <div className="relative overflow-hidden bg-dark-400 py-3 pl-3 md:p-3 rounded-lg">
      <Link
        href={parseBrandHomeLink({
          slug: brand.slug!,
        })}
        className="flex flex-row w-full md:flex-col text-start"
      >
        {brand.logo && (
          <div className="flex relative w-[32%] md:w-fit">
            <Thumbnail
              url={brand.logo}
              name={brand.name}
              thumbnailSize="large"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ChatBubbleOvalLeftIcon
                color="white"
                fill="white"
                className="opacity-0 group-hover:opacity-100 w-8 h-8 md:w-9 md:h-9"
              />
            </div>
          </div>
        )}
        <div className="w-[68%] md:w-full px-4 md:px-2 pt-2 pb-1">
          <div className="flex flex-col gap-1">
            {!isInGroup && (
              <div className="flex flex-row gap-2">
                {brand.groups.map((group) => (
                  <div key={group.name} className="w-fit">
                    <GroupNameLink
                      name={group.name}
                      href={parseChannelLink({
                        channelName: 'brand',
                        groupSlug: group.slug!,
                      })}
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-row items-center justify-between">
              <BrandPreviewHeader brand={brand} />
              <FollowDialog
                target="brand"
                targetId={brand.id}
                followed={brand.followed === true}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
