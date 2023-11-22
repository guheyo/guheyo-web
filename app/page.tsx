'use client';

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { redirect } from 'next/navigation';
import _ from 'lodash';
import { FIND_GUILDS } from '@/lib/graphql/guild';

export interface CategoryPageProps {
  params: {
    guildName: string;
    categoryName: string;
  };
}

function Page() {
  const { loading, error, data } = useQuery(FIND_GUILDS, {
    variables: {
      take: 10,
      skip: 0,
    },
  });

  if (loading) return <div>loading</div>;
  if (error) return <div>Error</div>;

  const guild = _.get(data, 'findGuilds.edges[0].node');
  const defaultCategoryId = _.get(guild, 'productCategories[0].id');

  return redirect(
    `${guild.name}/market/offers?categoryId=${defaultCategoryId}`,
  );
}

export default Page;
