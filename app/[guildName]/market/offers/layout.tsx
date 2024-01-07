import { ReactNode } from 'react';
import CategoriesNavbar from '@/components/categories/categories-navbar';
import { OffersPageProps } from './page';

interface Props extends OffersPageProps {
  children: ReactNode;
}

function OffersLayout({ params, children }: Props) {
  return (
    <div className="pb-4 md:pb-6">
      <CategoriesNavbar guildName={params.guildName} type="offers" />
      {children}
    </div>
  );
}

export default OffersLayout;
