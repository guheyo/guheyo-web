'use client';

import { ReactNode, Suspense } from 'react';
import { useGroup } from '@/hooks/use-group';
import GroupProfileSidebarItems from '../groups/group-profile-sidebar-items';
import GroupBottomNavbar from '../groups/group-bottom-navbar';

interface Props {
  children: ReactNode;
  homeLink: ReactNode;
  path: string;
  categories?: ReactNode;
  tags?: ReactNode;
  selectors?: ReactNode;
}

function HomeFeedLayout({
  children,
  homeLink,
  path,
  categories,
  tags,
  selectors,
}: Props) {
  const { group } = useGroup();

  return (
    <div>
      <div className="pt-0 px-3 md:px-1 w-fit">{homeLink}</div>
      <div className="flex flex-row gap-2 md:gap-6 py-2 mb-6 mx-3 md:mx-1">
        <Suspense>
          <GroupProfileSidebarItems
            currentGroupId={group?.id}
            paddingX={0}
            paddingY={0}
            pathFormatter={(slug) => `/g/${slug}/${path}`}
          />
        </Suspense>
      </div>
      {categories && <div className="mx-2.5 md:mx-1">{categories}</div>}
      {tags && <div className="mx-2.5 md:mx-1">{tags}</div>}
      {(categories || tags) && <div className="mb-4" />}
      {selectors && (
        <div className="flex justify-between pb-2">{selectors}</div>
      )}
      <div className="pb-4 md:pb-6 mx-2 md:mx-0">{children}</div>
      <div className="lg:hidden">
        <GroupBottomNavbar groupSlug={group?.slug} />
      </div>
    </div>
  );
}

export default HomeFeedLayout;
