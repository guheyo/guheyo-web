import _ from 'lodash';
import { User } from 'prisma';
import { memo, useMemo } from 'react';

interface Props {
  user: User;
}

const UserName = ({ user }: Props) => {
  const isBlacklist = useMemo(
    () => user.roles?.find((r) => r.hexColor === '#000001'),
    [user.roles],
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
        color: _.get(user.roles, '[0].hexColor', '#000000'),
      }}
    >
      {user.username}
    </div>
  );
};

export default memo(UserName);
