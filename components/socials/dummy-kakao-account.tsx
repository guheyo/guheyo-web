'use client';

import IconText from '../icon-text/icon-text';
import SocialLogo from './social-logo';
import LoginButton from '../auth/login-button';

export default function DummyKakaoAccount() {
  return (
    <div className="flex flex-col gap-4">
      <IconText>
        <SocialLogo provider="kakao" width={24} height={24} />
        <div className="text-red-400">카카오 미인증</div>
      </IconText>
      <div className="text-gray-400">
        <div>다중 계정 악용 방지를 위해 카카오 인증이 필요해요</div>
        <div className="pt-4">
          로그인이 성공하면 구해요 전용 식별값이 생성돼요
        </div>
        <div>ex. 123456789</div>
        <div className="pt-4 text-gray-400">
          *구해요 식별값 이외의 개인정보는 수집되지 않아요
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
