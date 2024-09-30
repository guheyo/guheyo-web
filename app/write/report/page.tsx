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
        <h1 className="pb-2 text-gray-300">
          1. 게시글 양식 위반을 발견했나요?
        </h1>
        <span>{`거래글 메뉴 -> 신고 하기`}</span>

        <div className="pt-6" />
        <h1 className="pb-2 text-gray-300">
          2. 거래 분쟁(비매너, 사기)이 발생했나요?
        </h1>
        <span>[비매너] 거래 후기 작성하기</span>
      </div>
    </div>
  );
}
