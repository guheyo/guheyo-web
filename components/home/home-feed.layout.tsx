'use client';

import { ReactNode, Suspense } from 'react';
import { useGroup } from '@/hooks/use-group';
import { PostPreviewType } from '@/lib/post/post.types';
import GroupProfileSidebarItems from '../groups/group-profile-sidebar-items';
import GroupBottomNavbar from '../groups/group-bottom-navbar';
import ThumbnailFeedLayout from '../posts/thumbnail-feed.layout';
import TextFeedLayout from '../posts/text-feed.layout';

interface Props {
  children: ReactNode;
  postPreviewType: PostPreviewType;
  homeLink: ReactNode;
  path?: string;
  channels?: ReactNode;
  categories?: ReactNode;
  tags?: ReactNode;
  selectors?: ReactNode;
  moreLink?: ReactNode;
}

function HomeFeedLayout({
  children,
  postPreviewType,
  homeLink,
  path,
  channels,
  categories,
  tags,
  selectors,
  moreLink,
}: Props) {
  const { group } = useGroup();

  return (
    <div className="mx-2 md:mx-0">
      <div className="pt-0 px-3 md:px-1 w-fit">{homeLink}</div>
      {path && (
        <div className="flex flex-row gap-2 md:gap-6 py-2 mb-2 md:mb-4 mx-3 md:mx-1">
          <Suspense>
            <GroupProfileSidebarItems
              currentGroupId={group?.id}
              paddingX={0}
              paddingY={0}
              pathFormatter={(slug) => `/g/${slug}/${path}`}
            />
          </Suspense>
        </div>
      )}
      {(channels || categories || tags) && <div className="pt-2" />}
      {channels && <div className="mx-2.5 md:mx-1">{channels}</div>}
      {categories && <div className="mx-2.5 md:mx-1">{categories}</div>}
      {tags && <div className="mx-2.5 md:mx-1">{tags}</div>}
      {(categories || tags) && !selectors && <div className="mb-4" />}
      {selectors && (
        <div className="flex justify-between pt-4 pb-2">{selectors}</div>
      )}
      {postPreviewType === 'thumbnail' ? (
        <ThumbnailFeedLayout>{children}</ThumbnailFeedLayout>
      ) : (
        <TextFeedLayout>{children}</TextFeedLayout>
      )}
      {moreLink && (
        <div className="flex justify-end text-sm md:text-base text-dark-200 font-medium pt-2">
          {moreLink}
        </div>
      )}
      <div className="lg:hidden">
        <GroupBottomNavbar groupSlug={group?.slug} />
      </div>
    </div>
  );
}

export default HomeFeedLayout;
