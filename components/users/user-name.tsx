import _ from 'lodash';
import { AuthorResponse } from '@/generated/graphql';

export default function Username({ user }: { user: AuthorResponse }) {
  const isBlacklist = user.members.some((member) =>
    member.roles.find((r) => r.hexColor === '#000001'),
  );

  if (isBlacklist) {
    return (
      <div
        style={{
          color: '#bbbbbb',
          backgroundColor: 'black',
        }}
      >
        {user.username}
      </div>
    );
  }
  return (
    <div
      style={{
        color: _.get(user.members, '[0].roles[0].hexColor', '#f2f3ed'),
      }}
    >
      {user.username}
    </div>
  );
}
