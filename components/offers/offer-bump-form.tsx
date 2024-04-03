'use client';

import { BumpOfferInput, useFindOfferQuery } from '@/generated/graphql';
import { SubmitHandler } from 'react-hook-form';
import { bumpOffer } from '@/lib/api/offer';
import { DealBumpValues } from '@/lib/deal/deal.interfaces';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { validateBump } from '@/lib/deal/validate-bump';
import { AuthContext } from '../auth/auth.provider';
import DealBumpForm from '../deals/deal-bump-form';

export default function OfferBumpForm({ id }: { id: string }) {
  const router = useRouter();
  const { jwtPayload } = useContext(AuthContext);
  const { loading, data } = useFindOfferQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  });
  const offer = data?.findOffer;

  if (loading) return <div />;
  if (!offer) return <div />;

  const handleSubmitValid: SubmitHandler<DealBumpValues> = async (values) => {
    if (!jwtPayload) return;
    if (!validateBump(offer.bumpedAt)) return;

    const input: BumpOfferInput = {
      id: values.id,
      offerId: values.dealId,
      sellerId: jwtPayload.id,
      newPrice: values.price,
    };
    await bumpOffer(input);
    router.back();
  };

  return (
    <DealBumpForm
      dealType="offer"
      dealId={offer.id}
      dealName={offer.name}
      price={offer.price}
      thumbnail={offer.images[0]}
      bumpedAt={offer.bumpedAt}
      handleSubmitValid={handleSubmitValid}
    />
  );
}
