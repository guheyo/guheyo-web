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
      <div className="flex flex-col gap-4">
        <IconText>
          <SocialLogo provider="naver" width={20} height={20} />
          <div className="text-red-400 text-sm md:text-base">네이버 미인증</div>
        </IconText>
        <div className="text-gray-400 text-xs md:text-base">
          <div className="pt-4">
            인증이 완료되면 구해요 전용 식별값이 생성돼요
          </div>
          <div>ex. 12345</div>
          <div className="pt-4">
            중복 가입 확인을 위한 식별값 이외의 정보는 수집하지 않아요
          </div>
          <div className="pt-8 text-gray-300 font-semibold">
            시작하기 버튼을 눌러 인증을 완료해 주세요
          </div>
          <button
            type="submit"
            className="mt-4 bg-green-500 hover:bg-green-400 text-xs md:text-sm font-bold p-2 rounded text-light-200"
            onClick={() => signIn(router, 'naver')}
          >
            네이버 로그인
          </button>
        </div>
      </div>
    );

  return (
    <IconText>
      <SocialLogo provider="naver" width={20} height={20} />
      <div className="text-gray-300 text-sm md:text-base">네이버 인증 완료</div>
    </IconText>
  );
}
