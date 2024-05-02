import _ from 'lodash';
import { AuthorResponse } from '@/generated/graphql';

export default function Username({ user }: { user: AuthorResponse }) {
  const isBlocklist = user.roles.some((role) => role.hexColor === '#000001');

  if (isBlocklist) {
    return (
      <div className="text-dark-200 bg-black px-1 rounded">{user.username}</div>
    );
  }
  return (
    <div
      style={{
        color: _.get(user.roles, '[0].hexColor', '#f2f3ed'),
      }}
    >
      {user.username}
    </div>
  );
}
