'use client';

import GroupInfo from '@/components/groups/group-info';

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
    <div className="max-w-5xl mx-auto pb-12">
      <div className="pt-4 pb-2 px-2 md:px-0 mt-0 md:mt-2">
        <GroupInfo slug={params.groupSlug} />
      </div>
      {children}
    </div>
  );
}
