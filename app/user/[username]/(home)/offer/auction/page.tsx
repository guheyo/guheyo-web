'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import {
  FindAuctionPreviewsWhereInput,
  useFindUserQuery,
} from '@/generated/graphql';
import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';

function Page({ params }: { params: Promise<{ username: string }> }) {
  const router = useRouter();
  const { username } = use(params);
  const { loading, data } = useFindUserQuery({
    variables: {
      username,
    },
    fetchPolicy: 'cache-first',
  });
  const user = data?.findUser;

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/');
    }
  }, [loading, user, router]);

  if (loading) return <div />;
  if (!user) return <div />;

  const where: FindAuctionPreviewsWhereInput = {
    userId: user.id,
    status: undefined,
  };
  const orderBy = undefined;
  const distinct = false;

  return (
    <ThumbnailFeedLayout>
      <AuctionFeed
        type="thumbnail"
        defaultWhere={where}
        defaultSortOrder={orderBy}
        defaultDistinct={distinct}
      />
    </ThumbnailFeedLayout>
  );
}

export default Page;
