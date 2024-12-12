'use client';

import ThreadFeed from '@/components/thread/thread-feed';
import TextFeedLayout from '@/components/posts/text-feed.layout';
import {
  FindThreadPreviewsWhereInput,
  useFindUserQuery,
} from '@/generated/graphql';
import { use } from 'react';

function Page({
  params,
}: {
  params: Promise<{
    username: string;
  }>;
}) {
  const { username } = use(params);
  const { loading, data } = useFindUserQuery({
    variables: {
      username,
    },
    fetchPolicy: 'cache-first',
  });
  const user = data?.findUser;

  if (loading) return <div />;
  if (!user) return <div />;

  const where: FindThreadPreviewsWhereInput = {
    userId: user.id,
  };
  const orderBy = undefined;

  return (
    <TextFeedLayout>
      <ThreadFeed
        type="listview"
        defaultWhere={where}
        defaultOrderBy={orderBy}
        showInput={false}
      />
    </TextFeedLayout>
  );
}

export default Page;
