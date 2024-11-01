'use client';

import { AuctionPreviewResponse } from '@/generated/graphql';
import PostCategory from '../posts/post-category';
import PostBrands from '../posts/post-brands';

interface Props {
  auction: AuctionPreviewResponse;
}

export default function AuctionPreviewCenter({ auction }: Props) {
  return (
    <div className="flex flex-row gap-1">
      {auction.post.brands.length > 0 && (
        <PostBrands brands={auction.post.brands} />
      )}
      <PostCategory category={auction.post.category!} />
    </div>
  );
}
