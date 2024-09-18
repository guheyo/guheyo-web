'use client';

import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import signIn from '@/lib/auth/sign-in';
import { LoadingButton } from '@mui/lab';
import { AuthContext } from './auth.provider';
import LoggedInUserButton from './logged-in-user-button';

export default function LoginButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { jwtPayload } = useContext(AuthContext);

  const handleSignIn = async () => {
    setLoading(true);
    await signIn(router, 'discord');
    setLoading(false);
  };

  if (!jwtPayload) {
    return (
      <LoadingButton
        type="submit"
        loading={loading}
        className="inline-flex items-center bg-blurple-500 hover:bg-blurple-600 text-xs md:text-sm font-bold p-2 rounded-lg text-gray-300 flex flex-row gap-2"
        onClick={handleSignIn}
      >
        <Image
          alt="로그인"
          src="/socials/discord/discord-mark-white.svg"
          width={20}
          height={20}
        />
        로그인
      </LoadingButton>
    );
  }

  return <LoggedInUserButton userId={jwtPayload.id} />;
}
