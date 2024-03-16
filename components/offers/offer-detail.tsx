'use client';

import { useFindOfferQuery } from '@/generated/graphql';
import DealDetail from '../deals/deal-detail';

export default function OfferDetail({ slug }: { slug: string }) {
  const { loading, data } = useFindOfferQuery({
    variables: {
      slug: decodeURI(slug),
    },
  });

  if (loading) return <div />;
  if (!data?.findOffer) return <div />;
  const offer = data.findOffer;

  return (
    <DealDetail
      dealType="offer"
      id={offer.id}
      name0={offer.name}
      slug={offer.slug!}
      price={offer.price}
      description={offer.description}
      bumpedAt={offer.bumpedAt}
      author={offer.seller}
      images={offer.images}
      reports={offer.reports}
    />
  );
}
