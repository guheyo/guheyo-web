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
        src="/socials/discord/discord-mark-blue.svg"
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
        src="/socials/naver/naver-logo.jpg"
        alt={`${provider} logo`}
        className="dark:invert rounded-full"
        width={width}
        height={height}
        priority
      />
    );
  }
  if (provider === 'kakao') {
    return (
      <Image
        src="/socials/kakao/kakaotalk_sharing_btn_medium.png"
        alt={`${provider} logo`}
        className="dark:invert"
        width={width}
        height={height}
        priority
      />
    );
  }
  return null;
}
