import MemberRolesNavbar from '@/components/member/member-roles-navbar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <MemberRolesNavbar />
      {children}
    </div>
  );
}

export default Layout;
