import {ReactNode} from 'react'

const GuildLayout = ({children}: ReactNode) => {
  return (
    <div className='flex'>
      <div className='flex-1' />
      <div className='max-w-7xl'>{children}</div>
      <div className='flex-1' />
    </div>
  )
}

export default GuildLayout
