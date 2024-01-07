import { ReactNode } from 'react';
import CategoriesNavbar from '@/components/categories/categories-navbar';
import { SwapsPageProps } from './page';

interface Props extends SwapsPageProps {
  children: ReactNode;
}

function SwapsLayout({ params, children }: Props) {
  return (
    <div className="pb-4 md:pb-6">
      <CategoriesNavbar guildName={params.guildName} type="swaps" />
      {children}
    </div>
  );
}

export default SwapsLayout;
