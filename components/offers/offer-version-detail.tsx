'use client';

import {
  AuthorResponse,
  OfferPreviewResponse,
  PostPreviewResponse,
  UserImageResponse,
} from '@/generated/graphql';
import ImageSlider from '../base/image-slider';
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
  post: Omit<PostPreviewResponse, 'user'>;
  offer: OfferPreviewResponse;
}) {
  if (images.length > 0)
    return (
      <PostDetail>
        <div className="w-full md:w-[45%]">
          <ImageSlider images={images} sizes="h-[360px] md:h-[524px]" />
        </div>

        <div className="flex-none line-break w-full md:w-[45%] px-4 md:px-0 py-4 md:py-0">
          <OfferVersionDetailMain
            versionCreatedAt={versionCreatedAt}
            user={user}
            post={post}
            offer={offer}
          />
        </div>
      </PostDetail>
    );

  return (
    <PostDetail>
      <div className="flex-none line-break w-full md:w-[90%] px-4 md:px-0 py-4 md:py-0">
        <OfferVersionDetailMain
          versionCreatedAt={versionCreatedAt}
          user={user}
          post={post}
          offer={offer}
        />
      </div>
    </PostDetail>
  );
}
