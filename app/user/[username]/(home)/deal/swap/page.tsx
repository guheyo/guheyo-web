'use client';

import SwapFeed from '@/components/swaps/swap-feed';
import { useFindUserQuery } from '@/generated/graphql';
import { FindSwapsWhereArgs } from '@/interfaces/deal.interfaces';
import { DEAL_OPEN } from '@/lib/deal/deal.constants';
import { parseDealStatus } from '@/lib/deal/parse-deal-status';
import { useSearchParams } from 'next/navigation';

function Page({
  params: { username },
}: {
  params: {
    username: string;
  };
}) {
  const searchParams = useSearchParams();
  const { loading, data } = useFindUserQuery({
    variables: {
      username,
    },
  });
  const user = data?.findUser;

  if (loading) return <div />;
  if (!user) return <div />;

  const where: FindSwapsWhereArgs = {
    proposerId: user.id,
  };
  const status =
    parseDealStatus({
      status: searchParams.get('status'),
    }) || DEAL_OPEN;

  return (
    <SwapFeed where={where} type="thumbnail" status={status} distinct={false} />
  );
}

export default Page;
