'use client';

import DemandDetail from '@/components/demands/demand-detail';

function DemandPage({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  return <DemandDetail slug={slug} />;
}

export default DemandPage;
