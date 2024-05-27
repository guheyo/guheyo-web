import dayjs from 'dayjs';
import {
  SocialAccountResponse,
  SocialAccountWithoutAuthResponse,
} from '@/generated/graphql';
import SocialLogo from './social-logo';

export default function SocialJoinDate({
  socialAccount,
  logoSize,
}: {
  socialAccount?: SocialAccountResponse | SocialAccountWithoutAuthResponse;
  logoSize: number;
}) {
  if (!socialAccount) return null;

  const getJoinedDate = (
    account: SocialAccountResponse | SocialAccountWithoutAuthResponse,
  ) => `${dayjs(account.createdAt).format('YYYY.MM.DD')}`;

  return (
    <div key={socialAccount.id} className="flex flex-row gap-1 items-center">
      <SocialLogo
        provider={socialAccount.provider}
        width={logoSize}
        height={logoSize}
      />
      <div>{getJoinedDate(socialAccount)}</div>
    </div>
  );
}
