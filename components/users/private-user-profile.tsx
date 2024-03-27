'use client';

import { useFindMyUserQuery } from '@/generated/graphql';
import UserAvatar from './user-avatar';

export default function PrivateUserProfile({ userId }: { userId: string }) {
  const { data, loading } = useFindMyUserQuery({
    variables: {
      id: userId,
    },
  });

  if (loading) return <div />;
  if (!data?.findMyUser) return <div />;
  const user = data.findMyUser;

  return (
    <div className="grid grid-cols-12 px-2 pb-6 text-sm md:text-base rounded-lg items-center">
      <div className="col-span-3 md:col-span-1">
        <UserAvatar
          username={user.username}
          avatarURL={user.avatarURL || undefined}
          size="lg"
        />
      </div>
      <div className="col-span-6 md:col-span-2">
        <span className="text-dark-200 text-lg font-bold">{user.username}</span>
      </div>
    </div>
  );
}
