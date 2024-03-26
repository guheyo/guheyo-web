import { ReactNode } from 'react';
import UserHomeNavbar from '@/components/users/user-home-navbar';

interface Props {
  children: ReactNode;
  params: {
    username: string;
  };
}

function Layout({ children, params }: Props) {
  return (
    <div className="pb-4 md:pb-6">
      <div className="pt-6">
        <UserHomeNavbar username={params.username} />
      </div>
      {children}
    </div>
  );
}

export default Layout;
