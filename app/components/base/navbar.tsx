'use client';

import Link from 'next/link';
import LoginButton from './login-button';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full px-2 py-1 bg-white shadow-sm flex items-center justify-between">
      <Link href="/">WTB.KR</Link>
      <LoginButton />
    </header>
  );
}
