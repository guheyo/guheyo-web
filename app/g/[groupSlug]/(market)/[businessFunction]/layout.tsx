import { ReactNode } from 'react';
import { OffersPageProps } from './page';

interface Props extends OffersPageProps {
  children: ReactNode;
}

function Layout({ params, children }: Props) {
  return children;
}

export default Layout;
