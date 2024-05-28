'use client';

import IconText from '../icon-text/icon-text';
import SocialLogo from './social-logo';
import LoginButton from '../auth/login-button';

export default function DummyKakaoAccount() {
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
          로그인 후에 카카오 인증을 시작할 수 있어요
        </div>
        <div className="mt-4">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
