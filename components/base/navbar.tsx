'use client';

import Link from 'next/link';
import Image from 'next/image';
import LoginButton from './login-button';
import Scrollbar from './scrollbar';

export default function Navbar() {
  return (
    <Scrollbar upPosition="top-0" zIndex={50}>
      <header className="w-full border-b-2 border-dark-600">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-2 md:px-0 py-4 md:py-8 h-12 md:h-14">
          <Link href="/">
            <div className="flex flex-row gap-2 items-center">
              <Image
                alt="guheyo logo"
                src="/star/star-bg-purple-rounded.ico"
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
