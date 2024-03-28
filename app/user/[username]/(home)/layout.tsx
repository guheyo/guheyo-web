import { ReactNode } from 'react';
import UserHomeNavbar from '@/components/users/user-home-navbar';
import UserProfile from '@/components/users/user-profile';

interface Props {
  children: ReactNode;
  params: {
    username: string;
  };
}

function Layout({ children, params }: Props) {
  return (
    <div className="pb-4 md:pb-6 px-2 md:px-0">
      <div className="pt-6">
        <div className="px-2 pb-6">
          <UserProfile username={params.username} />
        </div>
        <UserHomeNavbar username={params.username} />
      </div>
      {children}
    </div>
  );
}

export default Layout;
