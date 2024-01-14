import { ReactNode } from 'react';
import CategoriesNavbar from '@/components/categories/categories-navbar';
import { OffersPageProps } from './page';

interface Props extends OffersPageProps {
  children: ReactNode;
}

function OffersLayout({ params, children }: Props) {
  return (
    <div className="pb-4 md:pb-6">
      <CategoriesNavbar guildName={params.guildName} />
      <div className="grid gap-x-0 md:gap-x-6 gap-y-1 lg:gap-y-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
}

export default OffersLayout;
