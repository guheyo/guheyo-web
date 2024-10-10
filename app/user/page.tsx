'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import LoginButton from '@/components/auth/login-button';
import { parseUserHomeLink } from '@/lib/user/parse-user-page.link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useContext } from 'react';

export default function Page() {
  const { jwtPayload } = useContext(AuthContext);

  if (jwtPayload?.username) {
    return redirect(parseUserHomeLink({ username: jwtPayload.username }));
  }

  return (
    <div className="grid grid-cols-1 gap-2 justify-items-center w-full mt-8">
      <Image
        src="/not-found/not-found.png"
        alt="error page"
        width={96}
        height={96}
        className="rounded-lg"
      />
      <div className="grid grid-cols-1 justify-around justify-items-center">
        <h1 className="pb-2">어이쿠,</h1>
        <span>로그인을 아직 안하셨나요?</span>
        <span className="mt-2">구하고 있는 물건을 장터에서 찾아보세요</span>
        <span className="mt-4">
          <LoginButton />
        </span>
      </div>
    </div>
  );
}
