'use client'

import Link from 'next/link'
import LoginButton from './login-button'
import {memo} from 'react'

const Navbar = () => {
  return (
    <div className='grid grid-cols-2 items-center h-10'>
      <div className='cols-span-1 justify-self-start'>
        <Link href='/'>WTB.KR</Link>
      </div>
      <div className='cols-span-1 justify-self-end'>
        <LoginButton />
      </div>
    </div>
  )
}

export default memo(Navbar)
