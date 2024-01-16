import dayjs from 'dayjs';
import SocialLogo from './social-logo';
import { SocialAccountResponse, SocialAccountWithoutAuthResponse } from '@/generated/graphql';

export default function SocialJoinDate({
  socialAccount,
  logoSize,
}: {
  socialAccount?: SocialAccountResponse | SocialAccountWithoutAuthResponse;
  logoSize: number;
}) {
  if (!socialAccount) return null;

  const getJoinedDate = (socialAccount: SocialAccountResponse | SocialAccountWithoutAuthResponse) =>
    `${dayjs(socialAccount.createdAt).format('MMMM Do YYYY')}`;

  return (
    <div key={socialAccount.id} className="flex flex-row gap-1 items-center">
      <SocialLogo provider={socialAccount.provider} width={logoSize} height={logoSize} />
      <div>{getJoinedDate(socialAccount)}</div>
    </div>
  );
}
