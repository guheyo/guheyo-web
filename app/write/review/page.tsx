'use client';

import Image from 'next/image';

export default function Page() {
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
        <h1 className="pb-2 text-gray-300">1. 내 게시글을 통해 거래했어요</h1>
        <span>{`내 프로필 -> [거래 완료] 상태 변경 -> 후기 보내기`}</span>

        <div className="pt-6" />
        <h1 className="pb-2 text-gray-300">
          2. 상대방의 게시글을 통해 거래했어요
        </h1>
        <span>{`멤버 검색 -> 매너 평가`}</span>
      </div>
    </div>
  );
}
