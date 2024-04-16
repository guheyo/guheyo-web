import { ReactNode } from 'react';
import FeedHomeLayout from '@/components/offers/feed-home.layout';
import { OffersPageProps } from './page';

interface Props extends OffersPageProps {
  children: ReactNode;
}

function OffersLayout({ params, children }: Props) {
  return <FeedHomeLayout>{children}</FeedHomeLayout>;
}

export default OffersLayout;
