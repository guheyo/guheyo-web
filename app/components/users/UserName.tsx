import _ from 'lodash'
import {User} from 'prisma'
import {memo, useCallback} from 'react'

const UserName = ({user}: {user: User}) => {
  const isBlacklist = useCallback(() => {
    return user.roles?.find(({hexColor}) => hexColor === '#000001')
  }, [user])

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
    )
  } else {
    return (
      <div
        style={{
          color: _.get(user.roles, '[0].hexColor', '#000000'),
        }}
      >
        {user.username}
      </div>
    )
  }
}

export default memo(UserName)
