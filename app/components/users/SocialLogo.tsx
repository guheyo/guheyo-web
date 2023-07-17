import Image from 'next/image'
import {memo} from 'react'

const SocialLogo = ({
  provider,
  color,
  width,
  height,
}: {
  provider: 'discord'
  color: 'white' | 'black' | 'blue'
  width: number
  height: number
}) => {
  if (provider === 'discord') {
    return (
      <Image
        src={`/discord-mark-${color}.svg`}
        alt={`${provider} logo`}
        className='dark:invert rounded-full'
        width={width}
        height={height}
        priority
      />
    )
  } else {
    return <></>
  }
}

export default memo(SocialLogo)
