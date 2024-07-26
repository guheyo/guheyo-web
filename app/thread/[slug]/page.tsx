'use client';

import { useFindThreadQuery } from '@/generated/graphql';
import ThreadDetailContainer from '@/components/thread/thread-detail-container';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const { loading, data } = useFindThreadQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findThread) return <div />;

  const thread = data.findThread;
  return <ThreadDetailContainer thread={thread} />;
}

export default Page;
