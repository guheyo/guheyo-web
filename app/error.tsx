'use client';

import DiscordGuildLink from '@/components/link/discord-guild-link';
import Image from 'next/image';

export default function GlobalError() {
  return (
    <div className="grid grid-cols-1 gap-2 justify-items-center w-full mt-8">
      <Image
        src="/error/error.png"
        alt="error page"
        width={96}
        height={96}
        className="rounded-lg"
      />
      <div className="grid grid-cols-1 justify-items-center gap-0">
        <h1>앗, 에러가 발생했어요</h1>
        <span className="pt-2">
          일반적으로 페이지를 새로고침하면 오류가 해결돼요
        </span>
        <span className="pt-2">문제가 해결되지 않을 경우</span>
        <span>1. 인터넷 연결을 확인해 주세요</span>
        <span>2. 캐시를 삭제해 주세요</span>
        <span className="mt-2">
          도움이 더 필요하시다면 디코로 문의해 주세요
        </span>
        <span className="mt-2 flex items-rows content-center gap-1">
          <DiscordGuildLink width={32} height={32}>
            <div className="text-star-500 font-bold">동물의 왕국</div>
          </DiscordGuildLink>
        </span>
      </div>
    </div>
  );
}
