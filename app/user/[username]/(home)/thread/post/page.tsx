'use client';

import ThreadFeed from '@/components/thread/thread-feed';
import TextFeedLayout from '@/components/posts/text-feed.layout';
import {
  FindThreadPreviewsWhereInput,
  useFindUserQuery,
} from '@/generated/graphql';

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
      />
    </TextFeedLayout>
  );
}

export default Page;
