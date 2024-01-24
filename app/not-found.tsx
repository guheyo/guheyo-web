'use client';

import HomeLink from '@/components/link/home-link';
import Image from 'next/image';

export default function NotFound() {
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
        <span>당신이 입력한 페이지가 존재하지 않아요</span>
        <span className="flex items-rows gap-1 mt-2">
          <HomeLink>
            <div className="text-star-500 font-bold">홈(Home)</div>
          </HomeLink>
          으로 이동해 주세요
        </span>
      </div>
    </div>
  );
}
