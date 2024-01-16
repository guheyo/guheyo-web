import { ReactNode } from 'react';
import CategoriesNavbar from '@/components/categories/categories-navbar';
import { SwapsPageProps } from './page';

interface Props extends SwapsPageProps {
  children: ReactNode;
}

function SwapsLayout({ params, children }: Props) {
  return (
    <div className="pb-4 md:pb-6">
      <CategoriesNavbar guildName={params.guildName} />
      <div className="grid gap-x-0 md:gap-x-6 gap-y-1 lg:gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-2 md:mx-0">
        {children}
      </div>
    </div>
  );
}

export default SwapsLayout;
