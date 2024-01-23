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
        <h1 className="pb-2">안녕하세요!</h1>
        <span>이곳의 페이지 주소는 잘못 입력되었거나</span>
        <span>변경 또는 삭제되어 더는 사용할 수 없어요</span>
        <span className="flex items-rows gap-1 mt-2">
          저와 함께
          <HomeLink>
            <div className="text-star-500 font-bold">홈(Home)</div>
          </HomeLink>
          으로 돌아가요
        </span>
      </div>
    </div>
  );
}
