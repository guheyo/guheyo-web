'use client';

import DemandFeed from '@/components/demands/demand-feed';
import { useFindUserQuery } from '@/generated/graphql';
import { FindDemandsWhereArgs } from '@/interfaces/deal.interfaces';

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

  const where: FindDemandsWhereArgs = {
    buyerId: user.id,
  };
  return <DemandFeed where={where} type="text" distinct={false} />;
}

export default Page;
