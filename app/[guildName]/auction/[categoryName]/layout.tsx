'use client';

import { ReactNode } from 'react';
import CategoriesNavbar from '@/app/components/categories/categories-navbar';
import { CategoryPageProps } from '../../market/[categoryName]/page';

interface Props extends CategoryPageProps {
  children: ReactNode;
}

function CategoryLayout({ params, children }: Props) {
  return (
    <div className="pb-4 md:pb-6 px-2 bg-white">
      <CategoriesNavbar {...params} />
      {children}
    </div>
  );
}

export default CategoryLayout;
