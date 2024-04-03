'use client';

import EditDealForm from '@/components/write/edit-deal-form';
import { useFindSwapQuery } from '@/generated/graphql';
import { parsePrevSwapFormValues } from '@/lib/deal/parse-prev-form-values';

export default function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { data, loading } = useFindSwapQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findSwap) return <div />;

  const prevFormValues = parsePrevSwapFormValues(data.findSwap);

  return <EditDealForm prevFormValues={prevFormValues} />;
}
