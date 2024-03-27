'use client';

import { AuthorResponse, useFindMyUserQuery } from '@/generated/graphql';
import UserAvatar from './user-avatar';
import Roles from './roles';
import Username from './user-name';

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
    <div className="grid grid-cols-12 gap-0 px-2 pb-6 text-sm md:text-base rounded-lg items-center">
      <div className="col-span-3 md:col-span-1">
        <UserAvatar
          username={user.username}
          avatarURL={user.avatarURL || undefined}
          size="lg"
        />
      </div>
      <div className="col-span-9 md:col-span-5">
        <Username user={user as AuthorResponse} />
      </div>
      <div className="col-span-12 flex flex-col justify-self-start items-center">
        <div className="pl-20 text-xs md:text-sm">
          {user.members.map((member) => (
            <Roles key={member.id} roles={member.roles} />
          ))}
        </div>
      </div>
    </div>
  );
}
