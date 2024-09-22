'use client';

import TextFeedLayout from '@/components/posts/text-feed.layout';
import ThreadFeed from '@/components/thread/thread-feed';
import {
  FindThreadPreviewsWhereInput,
  useFindBrandQuery,
} from '@/generated/graphql';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const { loading, data } = useFindBrandQuery({
    variables: {
      slug,
    },
    fetchPolicy: 'cache-first',
  });
  const brand = data?.findBrand;

  if (loading) return <div />;
  if (!brand) return <div />;

  const where: FindThreadPreviewsWhereInput = {
    brandIds: [brand.id],
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
