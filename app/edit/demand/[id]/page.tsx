'use client';

import EditDealForm from '@/components/write/edit-deal-form';
import { useFindDemandQuery } from '@/generated/graphql';
import { parsePrevDemandFormValues } from '@/lib/deal/parse-prev-form-values';

export default function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { data, loading } = useFindDemandQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findDemand) return <div />;

  const prevFormValues = parsePrevDemandFormValues(data.findDemand);

  return <EditDealForm prevFormValues={prevFormValues} />;
}
