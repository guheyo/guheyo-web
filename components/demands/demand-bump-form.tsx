'use client';

import { BumpDemandInput, useFindDemandQuery } from '@/generated/graphql';
import { SubmitHandler } from 'react-hook-form';
import { v4 as uuid4 } from 'uuid';
import { DealBumpValues } from '@/lib/deal/deal.interfaces';
import { bumpDemand } from '@/lib/api/demand';
import DealBumpForm from '../deals/deal-bump-form';

export default function DemandBumpForm({ slug }: { slug: string }) {
  const { loading, data } = useFindDemandQuery({
    variables: {
      slug: decodeURI(slug),
    },
  });
  const demand = data?.findDemand;

  if (loading) return <div />;
  if (!demand) return <div />;

  const submitValidCallback: SubmitHandler<DealBumpValues> = async (values) => {
    const input: BumpDemandInput = {
      id: uuid4(),
      demandId: values.dealId,
      buyerId: values.userId,
      newPrice: values.price,
    };

    await bumpDemand(input);
  };

  return (
    <DealBumpForm
      dealType="demand"
      dealId={demand.id}
      dealName={demand.name}
      groupSlug={demand.group.slug!}
      price={demand.price}
      thumbnail={demand.images[0]}
      bumpedAt={demand.bumpedAt}
      submitValidCallback={submitValidCallback}
    />
  );
}
