import { ReactNode } from 'react';
import FeedHomeLayout from '@/components/deals/feed-home.layout';
import ThumbnailFeedLayout from '@/components/deals/thumbnail-feed.layout';
import { SwapsPageProps } from './page';

interface Props extends SwapsPageProps {
  children: ReactNode;
}

function SwapsLayout({ params, children }: Props) {
  return (
    <FeedHomeLayout>
      <ThumbnailFeedLayout>{children}</ThumbnailFeedLayout>
    </FeedHomeLayout>
  );
}

export default SwapsLayout;
