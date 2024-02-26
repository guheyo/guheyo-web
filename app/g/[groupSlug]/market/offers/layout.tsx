import { ReactNode } from 'react';
import FeedHomeLayout from '@/components/deals/feed-home.layout';
import ThumbnailFeedLayout from '@/components/deals/thumbnail-feed.layout';
import { OffersPageProps } from './page';

interface Props extends OffersPageProps {
  children: ReactNode;
}

function OffersLayout({ params, children }: Props) {
  return (
    <FeedHomeLayout>
      <ThumbnailFeedLayout>{children}</ThumbnailFeedLayout>
    </FeedHomeLayout>
  );
}

export default OffersLayout;
