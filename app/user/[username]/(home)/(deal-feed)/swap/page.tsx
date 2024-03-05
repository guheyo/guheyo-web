'use client';

import SwapFeed from '@/components/swaps/swap-feed';
import { useFindUserQuery } from '@/generated/graphql';
import { FindSwapsWhereArgs } from '@/interfaces/deal.interfaces';

function Page({
  params: { username },
}: {
  params: {
    username: string;
  };
}) {
  // TODO
  // if jwtUser=user, return MyPage

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
  return <SwapFeed where={where} type="thumbnail" />;
}

export default Page;
