'use client';

import { useRouter } from 'next/navigation';
import { SocialAccountResponse } from '@/generated/graphql';
import signIn from '@/lib/auth/sign-in';
import IconText from '../icon-text/icon-text';
import SocialLogo from './social-logo';

export default function DiscordAccount({
  socialAccounts,
}: {
  socialAccounts: SocialAccountResponse[];
}) {
  const router = useRouter();
  const discordAccount = socialAccounts.find(
    (account) => account.provider === 'discord',
  );

  if (!discordAccount)
    return (
      <IconText>
        <SocialLogo provider="discord" width={20} height={20} />
        <div className="text-red-400 text-sm md:text-base">디스코드 미연동</div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-400 text-sm font-bold p-2 rounded text-gray-300"
          onClick={() => signIn(router, 'discord')}
        >
          디스코드 연동하기
        </button>
      </IconText>
    );

  return (
    <IconText>
      <SocialLogo provider="discord" width={20} height={20} />
      <div className="text-sm md:text-base">디스코드 연동 완료</div>
    </IconText>
  );
}
