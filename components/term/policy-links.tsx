'use client';

import Link from 'next/link';

export default function PolicyLinks() {
  return (
    <div className="flex flex-rolws gap-4 text-xs md:text-sm">
      <Link href="/policy/service">이용약관</Link>
      <Link href="/policy/privacy">개인정보처리방침</Link>
      <Link href="/policy/rule">커뮤니티 규칙</Link>
    </div>
  );
}
