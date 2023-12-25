import { ReactNode } from 'react';
import { OffersPageProps } from './page';

interface Props extends OffersPageProps {
  children: ReactNode;
}

function OffersLayout({ params, children }: Props) {
  return <div className="pb-4 md:pb-6 px-2">{children}</div>;
}

export default OffersLayout;
