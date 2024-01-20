'use client';

import { redirect } from 'next/navigation';
import { useFindGuildsQuery } from '@/generated/graphql';
import { guildVar } from '@/lib/apollo/cache';

function Page() {
  const { loading, error, data } = useFindGuildsQuery({
    variables: {
      take: 1,
      skip: 0,
    },
  });
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const guild = data?.findGuilds.edges[0].node;
  guildVar(guild);
  const defaultCategorySlug = guild?.productCategories[0].slug;

  return redirect(`g/${guild?.slug}/market/offers/${defaultCategorySlug}`);
}

export default Page;
