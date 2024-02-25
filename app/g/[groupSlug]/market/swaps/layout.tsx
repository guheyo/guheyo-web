import { ReactNode } from 'react';
import CategoriesNavbar from '@/components/categories/categories-navbar';
import FeedHomeLayout from '@/components/deals/feed-home.layout';
import ThumbnailFeedLayout from '@/components/deals/thumbnail-feed.layout';
import { SwapsPageProps } from './page';

interface Props extends SwapsPageProps {
  children: ReactNode;
}

function SwapsLayout({ params, children }: Props) {
  return (
    <div className="pb-4 md:pb-6">
      <CategoriesNavbar hideSelector={false} />
      <FeedHomeLayout>
        <ThumbnailFeedLayout>{children}</ThumbnailFeedLayout>
      </FeedHomeLayout>
    </div>
  );
}

export default SwapsLayout;
