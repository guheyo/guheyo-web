'use client';

import EditOfferForm from '@/components/write/edit-offer-form';
import { useFindOfferQuery } from '@/generated/graphql';
import { parsePrevOfferFormValues } from '@/lib/offer/parse-prev-form-values';

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
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findOffer) return <div />;

  const prevFormValues = parsePrevOfferFormValues(data.findOffer);

  return <EditOfferForm prevFormValues={prevFormValues} />;
}
