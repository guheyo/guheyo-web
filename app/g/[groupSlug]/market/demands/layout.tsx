import { ReactNode } from 'react';
import FeedHomeLayout from '@/components/deals/feed-home.layout';
import TextFeedLayout from '@/components/deals/text-feed.layout';
import { DemandsPageProps } from './page';

interface Props extends DemandsPageProps {
  children: ReactNode;
}

function DemandsLayout({ children }: Props) {
  return (
    <FeedHomeLayout>
      <TextFeedLayout>{children}</TextFeedLayout>
    </FeedHomeLayout>
  );
}

export default DemandsLayout;
