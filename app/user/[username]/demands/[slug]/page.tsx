'use client';

import DemandDetail from '@/components/demands/demand-detail';
import { useFindDemandQuery } from '@/generated/graphql';

function DemandPage({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const { loading, error, data } = useFindDemandQuery({
    variables: {
      slug,
    },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (!data?.findDemand) return <div>null</div>;

  return <DemandDetail demand={data.findDemand} />;
}

export default DemandPage;
