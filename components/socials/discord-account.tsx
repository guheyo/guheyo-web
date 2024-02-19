'use client';

import { SocialAccountResponse } from '@/generated/graphql';
import { useSignIn } from '@/hooks/use-sign-in';
import IconText from '../icon-text/icon-text';
import SocialLogo from './social-logo';

export default function DiscordAccount({
  socialAccounts,
}: {
  socialAccounts: SocialAccountResponse[];
}) {
  const signIn = useSignIn();
  const discordAccount = socialAccounts.find(
    (account) => account.provider === 'discord',
  );

  if (!discordAccount)
    return (
      <IconText>
        <SocialLogo provider="discord" width={24} height={24} />
        <div className="text-red-400">디스코드 미연동</div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-400 text-sm font-bold p-2 rounded text-light-200"
          onClick={() => signIn('discord')}
        >
          디스코드 연동하기
        </button>
      </IconText>
    );

  return (
    <IconText>
      <SocialLogo provider="discord" width={24} height={24} />
      <div>디스코드 연동 완료</div>
    </IconText>
  );
}
