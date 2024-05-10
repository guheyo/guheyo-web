'use client';

import {
  AuthorResponse,
  OfferPreviewResponse,
  PostPreviewWithoutUserResponse,
  UserImageResponse,
} from '@/generated/graphql';
import PostDetail from '../posts/post-detail';
import OfferVersionDetailMain from './offer-version-detail-main';

export default function OfferVersionDetail({
  images,
  versionCreatedAt,
  user,
  post,
  offer,
}: {
  images: UserImageResponse[];
  versionCreatedAt: Date;
  user: AuthorResponse;
  post: PostPreviewWithoutUserResponse;
  offer: OfferPreviewResponse;
}) {
  return (
    <PostDetail
      images={images}
      postDetailMain={
        <OfferVersionDetailMain
          versionCreatedAt={versionCreatedAt}
          user={user}
          post={post}
          offer={offer}
        />
      }
    />
  );
}
