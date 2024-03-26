'use client';

import { UserImageResponse, useFindAuthorQuery } from '@/generated/graphql';
import { Deal } from '@/lib/deal/deal.types';
import ImageSlider from '../base/image-slider';
import PostDetail from '../posts/post-detail';
import DealVersionDetailMain from './deal-version-detail-main';

export default function DealVersionDetail({
  versionCreatedAt,
  images,
  dealType,
  name0,
  name1,
  slug,
  price,
  shippingCost,
  shippingType,
  description,
  authorId,
}: {
  versionCreatedAt: Date;
  images: UserImageResponse[];
  dealType: Deal;
  name0: string;
  name1?: string;
  slug: string;
  price: number;
  shippingCost: number;
  shippingType: string;
  description?: string | null;
  authorId: string;
}) {
  const { data, loading } = useFindAuthorQuery({
    variables: {
      id: authorId,
    },
  });

  if (loading) return <div />;
  if (!data?.findAuthor) return <div />;
  const author = data.findAuthor;

  if (images.length > 0)
    return (
      <PostDetail>
        <div className="w-full md:w-[45%]">
          <ImageSlider images={images} sizes="h-[360px] md:h-[524px]" />
        </div>

        <div className="flex-none line-break w-full md:w-[45%] px-4 md:px-0 py-4 md:py-0">
          <DealVersionDetailMain
            versionCreatedAt={versionCreatedAt}
            dealType={dealType}
            name0={name0}
            name1={name1}
            slug={slug}
            price={price}
            shippingCost={shippingCost}
            shippingType={shippingType}
            description={description}
            author={author}
          />
        </div>
      </PostDetail>
    );

  return (
    <PostDetail>
      <div className="flex-none line-break w-full md:w-[90%] px-4 md:px-0 py-4 md:py-0">
        <DealVersionDetailMain
          dealType={dealType}
          versionCreatedAt={versionCreatedAt}
          name0={name0}
          name1={name1}
          slug={slug}
          price={price}
          shippingCost={shippingCost}
          shippingType={shippingType}
          description={description}
          author={author}
        />
      </div>
    </PostDetail>
  );
}