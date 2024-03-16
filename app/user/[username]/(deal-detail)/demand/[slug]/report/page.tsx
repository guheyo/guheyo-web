'use client';

import DemandReport from '@/components/demands/demand-report';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  return <DemandReport slug={slug} />;
}

export default Page;
