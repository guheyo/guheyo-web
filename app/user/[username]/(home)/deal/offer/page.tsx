'use client';

import OfferFeed from '@/components/offers/offer-feed';
import { useFindUserQuery } from '@/generated/graphql';
import { FindOffersWhereArgs } from '@/interfaces/deal.interfaces';

function Page({
  params: { username },
}: {
  params: {
    username: string;
  };
}) {
  const { loading, data } = useFindUserQuery({
    variables: {
      username,
    },
  });
  const user = data?.findUser;

  if (loading) return <div />;
  if (!user) return <div />;

  const where: FindOffersWhereArgs = {
    sellerId: user.id,
  };
  return <OfferFeed where={where} type="thumbnail" />;
}

export default Page;
