'use client';

import Link from 'next/link';
import Image from 'next/image';
import LoginButton from './login-button';

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-[41] bg-dark-600">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-2 py-1 h-14">
        <Link href="/">
          <div className="flex flex-row items-center">
            <Image alt="guheyo logo" src="/star.ico" width={30} height={30} />
          </div>
        </Link>
        <LoginButton />
      </div>
    </header>
  );
}
