import Image from 'next/image';

export default function SocialLogo({
  provider,
  width,
  height,
}: {
  provider: string;
  width: number;
  height: number;
}) {
  if (provider === 'discord') {
    return (
      <Image
        src="/discord-mark-blue.svg"
        alt={`${provider} logo`}
        className="dark:invert rounded-full"
        width={width}
        height={height}
        priority
      />
    );
  }
  if (provider === 'naver') {
    return (
      <Image
        src="/naver.jpg"
        alt={`${provider} logo`}
        className="dark:invert rounded-full"
        width={width}
        height={height}
        priority
      />
    );
  }
  return null;
}
