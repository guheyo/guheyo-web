'use client';

import { SocialAccountResponse } from '@/generated/graphql';
import IconText from '../icon-text/icon-text';
import SocialLogo from './social-logo';

export default function NaverAccount({
  socialAccounts,
}: {
  socialAccounts: SocialAccountResponse[];
}) {
  const naverAccount = socialAccounts.find(
    (account) => account.provider === 'naver',
  );

  if (!naverAccount)
    return (
      <IconText>
        <SocialLogo provider="naver" width={24} height={24} />
        <div className="text-red-400">네이버 미연동</div>
      </IconText>
    );

  return (
    <IconText>
      <SocialLogo provider="naver" width={24} height={24} />
      <div>{naverAccount.socialId}</div>
    </IconText>
  );
}
