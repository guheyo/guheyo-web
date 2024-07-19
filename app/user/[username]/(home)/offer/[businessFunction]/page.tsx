'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import OfferFeed from '@/components/offers/offer-feed';
import TextFeedLayout from '@/components/posts/text-feed.layout';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { FindOfferPreviewsWhereInput, useFindUserQuery } from '@/generated/graphql';
import { OFFER_OPEN } from '@/lib/offer/offer.constants';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { parseOfferStatus } from '@/lib/offer/parse-offer-status';
import { useContext } from 'react';

function Page({
  params: { username, businessFunction },
}: {
  params: {
    username: string;
    businessFunction: BusinessFunction;
  };
}) {
  const { jwtPayload } = useContext(AuthContext);
  const { loading, data } = useFindUserQuery({
    variables: {
      username,
    },
    fetchPolicy: 'cache-first',
  });
  const user = data?.findUser;

  if (loading) return <div />;
  if (!user) return <div />;

  const isArchived = false;
  const status = parseOfferStatus({
    status: jwtPayload?.id === user.id && !isArchived ? OFFER_OPEN : 'all',
  });
  const where: FindOfferPreviewsWhereInput = {
    businessFunction,
    userId: user.id,
    status,
    isArchived,
  };

  if (businessFunction === 'buy') {
    return (
      <TextFeedLayout>
        <OfferFeed
          defaultWhere={where}
          type="listview"
          defaultDistinct={false}
        />
      </TextFeedLayout>
    );
  }
  return (
    <ThumbnailFeedLayout>
      <OfferFeed
        defaultWhere={where}
        type="thumbnail"
        defaultDistinct={false}
      />
    </ThumbnailFeedLayout>
  );
}

export default Page;
