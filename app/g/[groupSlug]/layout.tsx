import GroupBottomNavbar from '@/components/groups/group-bottom-navbar';

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
      {children}
      <div className="lg:hidden">
        <GroupBottomNavbar groupSlug={params.groupSlug} />
      </div>
    </div>
  );
}
