import { ReactNode } from 'react';
import UserHomeNavbar from '@/components/users/user-home-navbar';

interface Props {
  children: ReactNode;
}

function UserHomeLayout({ children }: Props) {
  return (
    <div className="pb-4 md:pb-6">
      <div className="pt-6">
        <UserHomeNavbar />
      </div>
      {children}
    </div>
  );
}

export default UserHomeLayout;
