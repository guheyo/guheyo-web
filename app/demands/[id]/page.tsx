'use client';

import DemandDetail from '@/components/demands/demand-detail';
import { useFindDemandByIdQuery } from '@/generated/graphql';

function DemandPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { loading, error, data } = useFindDemandByIdQuery({
    variables: {
      id,
    },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return <DemandDetail demand={data?.findDemandById!} />;
}

export default DemandPage;
