'use client'

import {useSession, signIn, signOut} from 'next-auth/react'
import React, {memo} from 'react'
import {Menu, MenuHandler, MenuItem, MenuList} from '@material-tailwind/react'
import {PowerIcon} from '@heroicons/react/24/outline'
import Avatar from './avatar'
import {Session} from 'next-auth'

const LoginButton = () => {
  const {data: session}: Session = useSession()

  if (session && session.user) {
    return (
      <Menu>
        <MenuHandler>
          <div className='inline-flex items-center'>
            <Avatar name={session.user.username} avatarURL={session.user.avatarURL} />
          </div>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <button onClick={() => signOut()}>
              <div className='flex flex-row gap-1 items-center'>
                <PowerIcon width={18} height={18} />
                <div>로그아웃</div>
              </div>
            </button>
          </MenuItem>
        </MenuList>
      </Menu>
    )
  }
  return (
    <div className='inline-flex items-center'>
      <div>
        <button
          className='bg-black hover:bg-gray-700 text-sm font-bold p-2 rounded text-white'
          onClick={() => signIn('discord')}
        >
          로그인
        </button>
      </div>
    </div>
  )
}

export default memo(LoginButton)
