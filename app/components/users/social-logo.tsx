import Image from 'next/image';
import { memo } from 'react';

interface Props {
  provider: 'discord';
  color: 'white' | 'black' | 'blue';
  width: number;
  height: number;
}
const SocialLogo = ({ provider, color, width, height }: Props) => {
  if (provider === 'discord') {
    return (
      <Image
        src={`/discord-mark-${color}.svg`}
        alt={`${provider} logo`}
        className="dark:invert rounded-full"
        width={width}
        height={height}
        priority
      />
    );
  }
  return null;
};

export default memo(SocialLogo);
