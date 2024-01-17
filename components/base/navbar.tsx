'use client';

import Link from 'next/link';
import Image from 'next/image';
import LoginButton from './login-button';
import Scrollbar from './scrollbar';

export default function Navbar() {
  return (
    <Scrollbar upPosition="top-0">
      <header className="w-full">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-2 md:px-0 py-8 h-14">
          <Link href="/">
            <div className="flex flex-row items-center">
              <Image
                alt="guheyo logo"
                src="/star-bg-purple-rounded.ico"
                width={32}
                height={32}
                className="rounded"
              />
            </div>
          </Link>
          <LoginButton />
        </div>
      </header>
    </Scrollbar>
  );
}
