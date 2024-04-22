'use client';

import GroupBottomNavbar from '@/components/groups/group-bottom-navbar';
import GroupHeader from '@/components/groups/group-header';
import GroupSidebar from '@/components/groups/group-sidebar';

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    groupSlug: string;
  };
}) {
  return (
    <div>
      <div className="hidden lg:block">
        <GroupSidebar groupSlug={params.groupSlug} />
      </div>
      <div className="pt-4 pb-2 px-2 md:px-0 mt-0 md:mt-2">
        <GroupHeader slug={params.groupSlug} />
      </div>
      {children}
      <div className="lg:hidden">
        <GroupBottomNavbar groupSlug={params.groupSlug} />
      </div>
    </div>
  );
}
