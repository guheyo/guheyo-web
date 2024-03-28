'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import SettingProfileNavbar from '@/components/setting/setting-profile-navbar';
import UserProfile from '@/components/users/user-profile';
import { ReactNode, useContext } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  const { jwtPayload, loading } = useContext(AuthContext);

  if (loading) return <div />;
  if (!jwtPayload) return <div />;

  return (
    <div className="flex px-2 pb-2 pt-4 md:pt-6 justify-center">
      <div className="flex flex-col gap-8 max-w-xl w-full">
        <div className="text-base md:text-lg text-light-200 font-bold px-2 md:px-0">
          <UserProfile username={jwtPayload.username} />
          <SettingProfileNavbar />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
