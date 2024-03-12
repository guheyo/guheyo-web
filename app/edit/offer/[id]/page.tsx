'use client';

import EditDealForm from '@/components/write/edit-deal-form';
import { useFindOfferQuery } from '@/generated/graphql';
import { parsePrevOfferFormValues } from '@/lib/deal/parse-prev-form-values';

export default function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { data, loading } = useFindOfferQuery({
    variables: {
      id,
    },
  });

  if (loading) return <div />;
  if (!data?.findOffer) return <div />;

  const prevFormValues = parsePrevOfferFormValues(data.findOffer);

  return <EditDealForm prevFormValues={prevFormValues} />;
}
