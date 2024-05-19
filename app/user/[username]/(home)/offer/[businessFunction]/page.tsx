'use client';

import OfferFeed from '@/components/offers/offer-feed';
import TextFeedLayout from '@/components/posts/text-feed.layout';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { useFindUserQuery } from '@/generated/graphql';
import { FindOffersWhereArgs } from '@/interfaces/offer.interfaces';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { parseOfferStatus } from '@/lib/offer/parse-offer-status';
import { useSearchParams } from 'next/navigation';

function Page({
  params: { username, businessFunction },
}: {
  params: {
    username: string;
    businessFunction: BusinessFunction;
  };
}) {
  const searchParams = useSearchParams();
  const { loading, data } = useFindUserQuery({
    variables: {
      username,
    },
    fetchPolicy: 'cache-first',
  });
  const user = data?.findUser;

  if (loading) return <div />;
  if (!user) return <div />;

  const status = parseOfferStatus({
    status: searchParams.get('status'),
  });
  const where: FindOffersWhereArgs = {
    businessFunction,
    userId: user.id,
    status,
  };

  if (businessFunction === 'buy') {
    return (
      <TextFeedLayout>
        <OfferFeed where={where} type="text" distinct={false} />
      </TextFeedLayout>
    );
  }
  return (
    <ThumbnailFeedLayout>
      <OfferFeed where={where} type="thumbnail" distinct={false} />
    </ThumbnailFeedLayout>
  );
}

export default Page;
