'use client';

import { OfferResponse } from '@/generated/graphql';
import PostDetail from '../posts/post-detail';
import OfferDetailMain from './offer-detail-main';

export default function OfferDetail({ offer }: { offer: OfferResponse }) {
  return (
    <PostDetail
      images={offer.post.images}
      postDetailMain={<OfferDetailMain offer={offer} />}
    />
  );
}
