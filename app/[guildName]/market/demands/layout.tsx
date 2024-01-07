import { ReactNode } from 'react';
import CategoriesNavbar from '@/components/categories/categories-navbar';
import { DemandsPageProps } from './page';

interface Props extends DemandsPageProps {
  children: ReactNode;
}

function DemandsLayout({ params, children }: Props) {
  return (
    <div className="pb-4 md:pb-6">
      <CategoriesNavbar type="demands" />
      {children}
    </div>
  );
}

export default DemandsLayout;
