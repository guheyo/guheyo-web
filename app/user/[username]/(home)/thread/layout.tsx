'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import ThreadNavbar from '@/components/thread/thread-navbar';
import { ReactNode, use, useContext } from 'react';

interface Props {
  children: ReactNode;
  params: Promise<{
    username: string;
  }>;
}

function Layout({ children, params }: Props) {
  const { username } = use(params);
  const { jwtPayload } = useContext(AuthContext);
  const isPublic = jwtPayload?.username !== username;

  return (
    <div>
      <div className="pb-4">
        <ThreadNavbar isPublic={isPublic} />
      </div>
      <div className="grid gap-2 grid-cols-1">{children}</div>
    </div>
  );
}

export default Layout;
