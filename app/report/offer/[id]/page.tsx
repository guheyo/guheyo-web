'use client';

import DealReportForm from '@/components/deals/deal-report-form';
import { useFindOfferQuery } from '@/generated/graphql';

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
  const offer = data.findOffer;

  return (
    <DealReportForm dealType="offer" dealId={offer.id} dealName={offer.name} />
  );
}
