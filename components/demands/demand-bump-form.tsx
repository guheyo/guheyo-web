'use client';

import { BumpDemandInput, useFindDemandQuery } from '@/generated/graphql';
import { SubmitHandler } from 'react-hook-form';
import { DealBumpValues } from '@/lib/deal/deal.interfaces';
import { bumpDemand } from '@/lib/api/demand';
import { useContext } from 'react';
import { validateBump } from '@/lib/deal/validate-bump';
import { useRouter } from 'next/navigation';
import DealBumpForm from '../deals/deal-bump-form';
import { AuthContext } from '../auth/auth.provider';

export default function DemandBumpForm({ id }: { id: string }) {
  const router = useRouter();
  const { jwtPayload } = useContext(AuthContext);
  const { loading, data } = useFindDemandQuery({
    variables: {
      id,
    },
  });
  const demand = data?.findDemand;

  if (loading) return <div />;
  if (!demand) return <div />;

  const handleSubmitValid: SubmitHandler<DealBumpValues> = async (values) => {
    if (!jwtPayload) return;
    if (!validateBump(demand.bumpedAt)) return;

    const input: BumpDemandInput = {
      id: values.id,
      demandId: values.dealId,
      buyerId: jwtPayload.id,
      newPrice: values.price,
    };
    await bumpDemand(input);
    router.back();
  };

  return (
    <DealBumpForm
      dealType="demand"
      dealId={demand.id}
      dealName={demand.name}
      price={demand.price}
      thumbnail={demand.images[0]}
      bumpedAt={demand.bumpedAt}
      handleSubmitValid={handleSubmitValid}
    />
  );
}
