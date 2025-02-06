import AdSense from '@/app/adsense/ad-sense';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ groupSlug: string }>;
}) {
  const { groupSlug: slug } = await params;
  const groupSlug = decodeURI(slug);

  return {
    title: `${groupSlug} | 구해요`,
    Description: `${groupSlug} 전문 거래 장터`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdSense />
      {children}
    </>
  );
}
