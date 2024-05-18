import GroupBottomNavbar from '@/components/groups/group-bottom-navbar';
import GroupHeader from '@/components/groups/group-header';

export async function generateMetadata({ params }: { params: any }) {
  const { groupSlug } = params;

  return {
    title: `${groupSlug} | 구해요`,
    Description: `${groupSlug} 전문 거래 장터`,
  };
}

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
      <div className="pt-4 pb-2 px-4 md:px-0">
        <GroupHeader slug={params.groupSlug} />
      </div>
      {children}
      <div className="lg:hidden">
        <GroupBottomNavbar groupSlug={params.groupSlug} />
      </div>
    </div>
  );
}
