import _ from 'lodash';
import { User } from 'prisma';

export default function Username({ user }: { user: User }) {
  const isBlacklist = () => user.roles?.find((r) => r.hexColor === '#000001');

  if (isBlacklist()) {
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
        color: _.get(user.roles, '[0].hexColor', '#000000'),
      }}
    >
      {user.username}
    </div>
  );
}
