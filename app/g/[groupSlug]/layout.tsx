'use client';

import GroupHeader from '@/components/groups/group-header';

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
      <div className="pt-4 pb-2 px-2 md:px-0 mt-0 md:mt-2">
        <GroupHeader slug={params.groupSlug} />
      </div>
      {children}
    </div>
  );
}
