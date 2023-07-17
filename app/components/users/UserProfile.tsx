'use client'

import {memo, useState} from 'react'
import {Popover, PopoverHandler, PopoverContent, Typography} from '@material-tailwind/react'
import {User} from 'prisma'
import UserAvatar from './UserAvatar'
import _ from 'lodash'
import Roles from './Roles'
import SocialJoinDates from './SocialJoinDates'
import DmDialog from '../base/DmDialog'
import UserName from './UserName'
import {useDeviceDetect} from '@/app/hooks/useDeviceDetect'

const UserProfile = ({
  user,
  displayAvatar,
  displayUsername,
  displayDM,
}: {
  user: User
  displayAvatar: boolean
  displayUsername: boolean
  displayDM: boolean
}) => {
  const [openPopover, setOpenPopover] = useState<boolean>(false)
  const device = useDeviceDetect()
  const getDiscordSocialID = () => {
    const account = _.find(user.socialAccounts, account => account.provider === 'discord')
    return account?.socialId
  }

  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler>
        <button>
          {device === 'mobile' && (
            <div className={`flex gap-2 items-center font-medium text-xs`}>
              {displayAvatar ? <UserAvatar user={user} size='xs' /> : <></>}
              {displayUsername ? <UserName user={user} /> : <></>}
            </div>
          )}
          {device === 'browser' && (
            <div className={`flex gap-2 items-center font-medium text-base`}>
              {displayAvatar ? <UserAvatar user={user} size='sm' /> : <></>}
              {displayUsername ? <UserName user={user} /> : <></>}
            </div>
          )}
        </button>
      </PopoverHandler>
      <PopoverContent className='max-w-xs z-50'>
        <div className='mb-2 flex items-center justify-between gap-4'>
          <UserAvatar user={user} size='md' />
          {displayDM ? <DmDialog url={`https://discord.com/users/${getDiscordSocialID()}`} /> : <></>}
        </div>
        <Typography color='blue-gray' className='mb-2 flex items-center text-base'>
          <span className='font-semibold'>{user.username}</span>
        </Typography>
        <Typography variant='small' color='gray' className='font-normal'>
          <div>
            <div className='font-semibold'>가입시기</div>
            <SocialJoinDates socialAccounts={user.socialAccounts} />
          </div>
          <div className='mt-1'>
            <div className='font-semibold'>역할</div>
            <Roles roles={user.roles} />
          </div>
        </Typography>
      </PopoverContent>
    </Popover>
  )
}

export default memo(UserProfile)
