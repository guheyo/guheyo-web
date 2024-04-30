'use client';

import {
  AuthorResponse,
  OfferPreviewResponse,
  PostPreviewWithoutUserResponse,
  UserImageResponse,
} from '@/generated/graphql';
import ImageSlider from '../base/image-slider';
import PostDetail from '../posts/post-detail';
import OfferVersionDetailMain from './offer-version-detail-main';
import PostDetailMainLayout from '../posts/post-detail-main.layout';

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
  if (images.length > 0)
    return (
      <PostDetail>
        <ImageSlider images={images} sizes="h-[360px] md:h-[500px]" />
        <PostDetailMainLayout>
          <OfferVersionDetailMain
            versionCreatedAt={versionCreatedAt}
            user={user}
            post={post}
            offer={offer}
          />
        </PostDetailMainLayout>
      </PostDetail>
    );

  return (
    <PostDetail>
      <PostDetailMainLayout>
        <OfferVersionDetailMain
          versionCreatedAt={versionCreatedAt}
          user={user}
          post={post}
          offer={offer}
        />
      </PostDetailMainLayout>
    </PostDetail>
  );
}
