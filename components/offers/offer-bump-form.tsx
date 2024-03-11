'use client';

import { BumpOfferInput, useFindOfferQuery } from '@/generated/graphql';
import { SubmitHandler } from 'react-hook-form';
import { bumpOffer } from '@/lib/api/offer';
import { v4 as uuid4 } from 'uuid';
import { DealBumpValues } from '@/lib/deal/deal.interfaces';
import DealBumpForm from '../deals/deal-bump-form';

export default function OfferBumpForm({ slug }: { slug: string }) {
  const { loading, data } = useFindOfferQuery({
    variables: {
      slug: decodeURI(slug),
    },
  });
  const offer = data?.findOffer;

  if (loading) return <div />;
  if (!offer) return <div />;

  const submitValidCallback: SubmitHandler<DealBumpValues> = async (values) => {
    const input: BumpOfferInput = {
      id: uuid4(),
      offerId: values.dealId,
      sellerId: values.userId,
      newPrice: values.price,
    };

    await bumpOffer(input);
  };

  return (
    <DealBumpForm
      dealType="offer"
      dealId={offer.id}
      dealName={offer.name}
      groupSlug={offer.group.slug!}
      price={offer.price}
      thumbnail={offer.images[0]}
      submitValidCallback={submitValidCallback}
    />
  );
}
