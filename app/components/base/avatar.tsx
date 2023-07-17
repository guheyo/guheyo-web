'use client'

import Image from 'next/image'
import {memo} from 'react'

const Avatar = ({name, avatarURL}: {name: string; avatarURL?: string | null}) => {
  return (
    <Image
      src={avatarURL ? avatarURL : '/dongwang-gray.svg'}
      alt={`${name} avatar`}
      className='dark:invert rounded-full'
      width={32}
      height={32}
      priority
    />
  )
}

export default memo(Avatar)
