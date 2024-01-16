'use client';

import { SocialAccountResponse } from '@/generated/graphql';
import IconText from '../icon-text/icon-text';
import SocialLogo from './social-logo';

export default function DiscordAccount({
  socialAccounts,
}: {
  socialAccounts: SocialAccountResponse[];
}) {
  const discordAccount = socialAccounts.find(
    (account) => account.provider === 'discord',
  );

  if (!discordAccount)
    return (
      <IconText>
        <SocialLogo provider="discord" width={24} height={24} />
        <div className="text-red-400">디스코드 미연동</div>
      </IconText>
    );

  return (
    <IconText>
      <SocialLogo provider="discord" width={24} height={24} />
      <div>{discordAccount.socialId}</div>
    </IconText>
  );
}
