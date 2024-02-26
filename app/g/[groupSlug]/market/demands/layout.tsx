import { ReactNode } from 'react';
import CategoriesNavbar from '@/components/categories/categories-navbar';
import FeedHomeLayout from '@/components/deals/feed-home.layout';
import TextFeedLayout from '@/components/deals/text-feed.layout';
import { DemandsPageProps } from './page';

interface Props extends DemandsPageProps {
  children: ReactNode;
}

function DemandsLayout({ children }: Props) {
  return (
    <div className="pb-4 md:pb-6">
      <CategoriesNavbar hideSelector={false} />
      <FeedHomeLayout>
        <TextFeedLayout>{children}</TextFeedLayout>
      </FeedHomeLayout>
    </div>
  );
}

export default DemandsLayout;
