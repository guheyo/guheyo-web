'use client';

import { OfferPreviewResponse } from '@/generated/graphql';
import PostTags from '../posts/post-tags';
import PostPreviewAddons from '../posts/post-preview-addons';
import PostCategory from '../posts/post-category';
import PostBrands from '../posts/post-brands';

interface Props {
  offer: OfferPreviewResponse;
}

export default function OfferPreviewFooter({ offer }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-1 md:gap-2 items-center">
        {offer.post.brands.length > 0 && (
          <PostBrands brands={offer.post.brands} />
        )}
        {offer.post.category && <PostCategory category={offer.post.category} />}
        <PostTags tags={offer.post.tags} />
      </div>
      <PostPreviewAddons postCommentCount={offer.post.commentCount} />
    </div>
  );
}
