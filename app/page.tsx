'use client';

import { redirect } from 'next/navigation';
import { useFindGuildsQuery } from '@/generated/graphql';
import { selectedGuildVar } from '@/lib/apollo/cache';

function Page() {
  const { loading, error, data } = useFindGuildsQuery({
    variables: {
      take: 1,
      skip: 0,
    },
  });
  if (loading) return <div>loading</div>;
  if (error) return <div>Error</div>;

  const guild = data?.findGuilds.edges[0].node;
  const defaultCategoryId = guild?.productCategories[0].id;
  selectedGuildVar(guild);

  return redirect(
    `${guild?.name}/market/offers?categoryId=${defaultCategoryId}`,
  );
}

export default Page;