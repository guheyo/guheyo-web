import { ReactNode } from 'react';
import CategoriesNavbar from '@/components/categories/categories-navbar';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="pb-4 md:pb-6">
      <CategoriesNavbar hideSelector={false} />
      {children}
    </div>
  );
}

export default Layout;
