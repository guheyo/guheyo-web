import { ReactNode } from 'react';
import CategoriesNavbar from '@/components/categories/categories-navbar';
import FeedHomeLayout from '@/components/deals/feed-home.layout';
import ThumbnailFeedLayout from '@/components/deals/thumbnail-feed.layout';
import { OffersPageProps } from './page';

interface Props extends OffersPageProps {
  children: ReactNode;
}

function OffersLayout({ params, children }: Props) {
  return (
    <div className="pb-4 md:pb-6">
      <CategoriesNavbar categorySlug={params.categorySlug} />
      <FeedHomeLayout>
        <ThumbnailFeedLayout>{children}</ThumbnailFeedLayout>
      </FeedHomeLayout>
    </div>
  );
}

export default OffersLayout;
