'use client';

export default function SocialAccountConflictFeedHeader() {
  return (
    <div className="grid grid-cols-12 justify-between items-center w-full p-4 text-gray-200 bg-blurple-500 rounded-lg text-xs md:text-sm">
      <div className="col-span-5">신규 유저</div>
      <div className="col-span-5">기존 유저</div>
      <div className="col-span-1">앱</div>
      <div className="col-span-1">시간</div>
    </div>
  );
}
