'use client';

import { useRouter } from 'next/navigation';
import { SocialAccountResponse } from '@/generated/graphql';
import signIn from '@/lib/auth/sign-in';
import IconText from '../icon-text/icon-text';
import SocialLogo from './social-logo';

export default function NaverAccount({
  socialAccounts,
}: {
  socialAccounts: SocialAccountResponse[];
}) {
  const router = useRouter();
  const naverAccount = socialAccounts.find(
    (account) => account.provider === 'naver',
  );

  if (!naverAccount)
    return (
      <IconText>
        <SocialLogo provider="naver" width={24} height={24} />
        <div className="text-red-400">네이버 미인증</div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 text-sm font-bold p-2 rounded text-gray-300"
          onClick={() => signIn(router, 'naver')}
        >
          네이버 인증하기
        </button>
      </IconText>
    );

  return (
    <IconText>
      <SocialLogo provider="naver" width={24} height={24} />
      <div>네이버 인증 완료</div>
    </IconText>
  );
}
