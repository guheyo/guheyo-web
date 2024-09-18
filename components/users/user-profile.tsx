'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import PrivateUserProfile from '@/components/users/private-user-profile';
import PublicUserProfile from '@/components/users/public-user-profile';
import { ProfileType } from '@/lib/user/user.interfaces';
import { useContext } from 'react';

function UserProfile({
  username,
  type,
}: {
  username: string;
  type: ProfileType;
}) {
  const { jwtPayload } = useContext(AuthContext);
  if (jwtPayload?.username !== username)
    return (
      <PublicUserProfile username={username} displayReviewButton type={type} />
    );
  return <PrivateUserProfile />;
}

export default UserProfile;
