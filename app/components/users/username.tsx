import _ from "lodash";
import { User } from "prisma";
import { useCallback } from "react";

const Username = ({ user }: { user: User }) => {
  const isBlacklist = useCallback(() => {
    return user.roles?.find(({hexColor}) => hexColor === '#000001');
  }, [])

  if (isBlacklist()) {
    return (
      <div
        style={{
          color: '#bbbbbb',
          backgroundColor: 'black'
        }}
      >
        {user.username}
      </div>
    )
  } else {
    return (
      <div
        style={{
          color: _.get(user.roles, '[0].hexColor', '#000000')
        }}
      >
        {user.username}
      </div>
    )
  }
}

export default Username;