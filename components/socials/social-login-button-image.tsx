import Image from 'next/image';

export default function SocialLoginButtonImage({
  provider,
  width,
  height,
}: {
  provider: string;
  width: number;
  height: number;
}) {
  if (provider === 'kakao') {
    return (
      <Image
        src="/socials/kakao/kakao_login_large.png"
        alt={`${provider} login button`}
        width={width}
        height={height}
        priority
      />
    );
  }
  return null;
}
