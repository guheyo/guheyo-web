import { ReactNode } from 'react';
import CategoriesNavbar from '@/components/categories/categories-navbar';
import { DemandsPageProps } from './page';

interface Props extends DemandsPageProps {
  children: ReactNode;
}

function DemandsLayout({ params, children }: Props) {
  return (
    <div className="pb-4 md:pb-6">
      <CategoriesNavbar categorySlug={params.categorySlug} />
      <div className="grid gap-1 grid-cols-1 mx-2 md:mx-0">{children}</div>
    </div>
  );
}

export default DemandsLayout;