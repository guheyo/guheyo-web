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
      <div className="grid gap-1 grid-cols-1 mx-2 md:mx-0">{children}</div>
    </div>
  );
}

export default UserHomeLayout;
