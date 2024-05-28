'use client';

import { useRouter } from 'next/navigation';
import { SocialAccountResponse } from '@/generated/graphql';
import signIn from '@/lib/auth/sign-in';
import IconText from '../icon-text/icon-text';
import SocialLogo from './social-logo';
import SocialLoginButtonImage from './social-login-button-image';

export default function KakaoAccount({
  socialAccounts,
}: {
  socialAccounts: SocialAccountResponse[];
}) {
  const router = useRouter();
  const kakaoAccount = socialAccounts.find(
    (account) => account.provider === 'kakao',
  );

  if (!kakaoAccount)
    return (
      <div className="flex flex-col gap-4">
        <IconText>
          <SocialLogo provider="kakao" width={20} height={20} />
          <div className="text-red-400 text-sm md:text-base">카카오 미인증</div>
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
            aria-label="카카오 로그인"
            className="mt-4 w-fit"
            onClick={() => signIn(router, 'kakao')}
          >
            <SocialLoginButtonImage provider="kakao" width={80} height={80} />
          </button>
        </div>
      </div>
    );

  return (
    <IconText>
      <SocialLogo provider="kakao" width={20} height={20} />
      <div className="text-gray-300 text-sm md:text-base">카카오 인증 완료</div>
    </IconText>
  );
}
