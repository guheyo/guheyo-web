'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import UserProfile from '@/components/users/user-profile';
import { useContext } from 'react';

export default function Page() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div />;
  if (!user) return <div />;

  return (
    <div>
      <UserProfile username={user.username} />
      <div>setting</div>
    </div>
  );
}
